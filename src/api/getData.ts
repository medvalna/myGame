import { firebase } from "~/service/initFirebase";
import { QuestionClass } from "~/types/QuestionClass";

export const getThemes = async (): Promise<Array<string>> => {
  const themes: string[] = [];
  const db = firebase.firestore();
  const questionsRef = db.collection("themes");

  try {
    const querySnapshot = await questionsRef.get();
    querySnapshot.forEach((doc) => {
      themes.push(doc.data().title);
    });
    return themes;
  } catch (error) {
    console.log("Error getting documents: ", error);
    throw error;
  }
};

export const getIdCostArr = async (
  theme: string
): Promise<{
  uuid: Array<string>;
  cost: Array<number>;
  asked: Array<boolean>;
}> => {
  const cost: number[] = [];
  const uuid: string[] = [];
  const asked: boolean[] = [];
  const db = firebase.firestore();

  const questionsRef = db
    .collection("questions")
    .where("theme", "==", theme)
    .orderBy("cost");

  try {
    const querySnapshot = await questionsRef.get();
    querySnapshot.forEach((doc) => {
      cost.push(doc.data().cost);
      uuid.push(doc.data().uid);
      asked.push(doc.data().asked);
    });
    console.log("func cost, uuid:", cost, uuid);
    return { uuid, cost, asked };
  } catch (error) {
    console.log("Error getting documents: ", error);
    throw error;
  }
};

export const updateDB = async ({
  uuid,
  asked,
}: {
  uuid: string;
  asked: boolean;
}) => {
  const db = firebase.firestore();
  const postData = {
    uid: uuid,
    asked: !asked,
  };
  console.log("updating", uuid);
  try {
    await db.collection("questions").doc(uuid).update(postData);
    console.log("loading", postData.asked);
  } catch (error) {
    console.log("Error getting documents: ", error);
    throw error;
  }
};

const postConverter = {
  toFirestore(question: QuestionClass): firebase.firestore.DocumentData {
    return {
      question: question.text,
      cost: question.cost,
      answer: question.answer,
      asked: question.asked,
      theme: question.theme,
      uuid: question.uuid,
    };
  },
  fromFirestore(
    snapshot: firebase.firestore.QueryDocumentSnapshot,
    options: firebase.firestore.SnapshotOptions
  ): QuestionClass {
    const data = snapshot.data(options)!;
    return new QuestionClass(
      data.text,
      data.cost,
      data.answer,
      data.asked,
      data.theme,
      data.uuid
    );
  },
};

export const getQuestion = async (uuid: string) => {
  const db = firebase.firestore();

  const questionsRef = db
    .collection("questions")
    .withConverter(postConverter)
    .doc(uuid);

  try {
    return await questionsRef.get().then((doc) => {
      if (doc.exists && doc != undefined) {
        console.log(doc.data());
        return doc.data();
      }
    });
  } catch (error) {
    console.log("Error getting documents: ", error);
    throw error;
  }
};
