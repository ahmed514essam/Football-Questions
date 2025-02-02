import { useState } from "react";
import styles from "./Question.module.css";

const Question4 = () => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const correctAnswer = "c";

  const Test = () => {
    if (selectedAnswer !== correctAnswer) {
      alert("Wrong answer! The correct answer is highlighted in green.");
    }
  };

  return (
    <>
      <div className={styles.theQuestion}>
        <h2>Which country won the FIFA World Cup in 2018?</h2>
        <span className={styles.ques}>
          <div className={styles.optionContainer}>
            <label htmlFor="a" className={selectedAnswer === "a" ? styles.wrong : ""}>Germany</label>
            <input id="a" name="answer" type="radio" value="a" onChange={(e) => setSelectedAnswer(e.target.value)} />
          </div>

          <div className={styles.optionContainer}>
            <label htmlFor="b" className={selectedAnswer === "b" ? styles.wrong : ""}>Brazil</label>
            <input id="b" name="answer" type="radio" value="b" onChange={(e) => setSelectedAnswer(e.target.value)} />
          </div>

          <div className={styles.optionContainer}>
            <label htmlFor="c" className={selectedAnswer !== "" && correctAnswer === "c" ? styles.correct : ""}>France</label>
            <input id="c" name="answer" type="radio" value="c" onChange={(e) => setSelectedAnswer(e.target.value)} />
          </div>

          <div className={styles.optionContainer}>
            <label htmlFor="d" className={selectedAnswer === "d" ? styles.wrong : ""}>Argentina</label>
            <input id="d" name="answer" type="radio" value="d" onChange={(e) => setSelectedAnswer(e.target.value)} />
          </div>
        </span>

        <button onClick={Test} className={styles.TestingAnswers}>Send</button>
      </div>
    </>
  );
};

export default Question4;
