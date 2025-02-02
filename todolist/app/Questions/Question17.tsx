import { useState, useEffect } from "react";
import styles from "./Question.module.css";

const Question17 = () => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const correctAnswer = "a"; 

  const Test = () => {
    if (selectedAnswer !== correctAnswer) {
      alert("Wrong answer! The correct answer is highlighted in green.");
    }
  };

  useEffect(() => {
    // Reset styling when a new answer is selected
  }, [selectedAnswer]);

  return (
    <>
      <div className={styles.theQuestion}>
        <h2>Who is the only player to have won three FIFA World Cups?</h2>
        <span className={styles.ques}>
          <div className={styles.optionContainer}>
            <label
              htmlFor="a"
              className={selectedAnswer !== "" && correctAnswer === "a" ? styles.correct : ""}
            >
              Pelé
            </label>
            <input
              id="a"
              name="answer"
              type="radio"
              value="a"
              onChange={(e) => setSelectedAnswer(e.target.value)}
            />
          </div>

          <div className={styles.optionContainer}>
            <label
              htmlFor="b"
              className={selectedAnswer === "b" ? styles.wrong : ""}
            >
              Maradona
            </label>
            <input
              id="b"
              name="answer"
              type="radio"
              value="b"
              onChange={(e) => setSelectedAnswer(e.target.value)}
            />
          </div>

          <div className={styles.optionContainer}>
            <label
              htmlFor="c"
              className={selectedAnswer === "c" ? styles.wrong : ""}
            >
              Zinedine Zidane
            </label>
            <input
              id="c"
              name="answer"
              type="radio"
              value="c"
              onChange={(e) => setSelectedAnswer(e.target.value)}
            />
          </div>

          <div className={styles.optionContainer}>
            <label
              htmlFor="d"
              className={selectedAnswer === "d" ? styles.wrong : ""}
            >
              Ronaldo Nazário
            </label>
            <input
              id="d"
              name="answer"
              type="radio"
              value="d"
              onChange={(e) => setSelectedAnswer(e.target.value)}
            />
          </div>
        </span>

        <button onClick={Test} className={styles.TestingAnswers}>Send</button>
      </div>
    </>
  );
}

export default Question17;
