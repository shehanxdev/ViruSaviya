type QuestionElementType = {
  question: string;
  answers: string[];
};
export const initialQuestions: QuestionElementType[] = [
  {
    question:
      'පසුගිය මාසයේ, ඔබ කොපමණ වාරයක් දුකක් හෝ බලාපොරොත්තු සුන්වීමක් අත්විඳ තිබේද?',
    answers: ['කලාතුරකින් හෝ කවදාවත් නෑ', 'ඉඳහිට', 'නිතර', 'නිරන්තරයෙන්']
  },
  {
    question:
      'පසුගිය මාසයේ කාර්යයන් කෙරෙහි අවධානය යොමු කිරීමට සහ අවධානය යොමු කිරීමට ඔබට ඇති හැකියාව ඔබ ඇගයීමට ලක් කරන්නේ කෙසේද?',
    answers: ['විශිෂ්ටයි', 'යහපත්', 'මධ්‍යමයි', 'දුර්වලයි']
  },
  {
    question: 'මොනවාද?',
    answers: ['ඔව්', 'නැත']
  }
];
