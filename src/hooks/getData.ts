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
export const getQuestionsArr = async (
  theme: string
): Promise<{
  questions: Array<string>;
  cost: Array<number>;
  answers: Array<string>;
}> => {
  const questions: string[] = [];
  const cost: number[] = [];
  const answers: string[] = [];
  const db = firebase.firestore();
  console.log("theme:", theme);
  const questionsRef = db
    .collection("questions")
    .where("theme", "==", theme)
    .orderBy("cost");

  try {
    const querySnapshot = await questionsRef.get();
    querySnapshot.forEach((doc) => {
      questions.push(doc.data().text);
      cost.push(doc.data().cost);
      answers.push(doc.data().answer);
    });
    // console.log("loading", questions);
    return { questions, cost, answers };
  } catch (error) {
    console.log("Error getting documents: ", error);
    throw error;
  }
};
