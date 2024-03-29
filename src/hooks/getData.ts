import { firebase } from "../initFirebase";
export const getQuestion = async (
  theme: number,
  questionNumber: number
): Promise<{ question: string; answer: string }> => {
  let question = "";
  let answer = "";
  const themeStrEng = theme === 1 ? "childhood" : theme === 2 ? "life" : "mix";
  const db = firebase.firestore();
  const questionsRef = db
    .collection("questions")
    .where("theme", "==", themeStrEng);

  try {
    const querySnapshot = await questionsRef
      .where("cost", "==", questionNumber)
      .get();
    querySnapshot.forEach((doc) => {
      question = doc.data().text;
      answer = doc.data().answer;
      console.log("here: ", answer, question);
    });
    return { question, answer };
  } catch (error) {
    console.log("Error getting documents: ", error);
    throw error;
  }
};

export const getThemes = async (): Promise<Array<string>> => {
  var themes = [] as string[];
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
