import { useState } from "react";
import styles from "./Question.module.css";

const Question8 = () => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const correctAnswer = "b";

  const Test = () => {
    setSubmitted(true); // Mark the answer as submitted
  };

  return (
    <>
      <div className={styles.theQuestion}>
        <h2>Who won the Golden Boot in the 2014 FIFA World Cup?</h2>
        <span className={styles.ques}>
          <div className={styles.optionContainer}>
            <label
              htmlFor="a"
              className={selectedAnswer === "a" && submitted ? styles.wrong : ""}
            >
              Neymar
            </label>
            <input
              id="a"
              name="a"
              type="radio"
              value="a"
              onChange={(e) => setSelectedAnswer(e.target.value)}
              disabled={submitted}
            />
          </div>

          <div className={styles.optionContainer}>
            <label
              htmlFor="b"
              className={
                selectedAnswer === "b" && submitted
                  ? correctAnswer === "b"
                    ? styles.correct
                    : styles.wrong
                  : ""
              }
            >
              James Rodríguez
            </label>
            <input
              id="b"
              name="b"
              type="radio"
              value="b"
              onChange={(e) => setSelectedAnswer(e.target.value)}
              disabled={submitted}
            />
          </div>

          <div className={styles.optionContainer}>
            <label
              htmlFor="c"
              className={selectedAnswer === "c" && submitted ? styles.wrong : ""}
            >
              Thomas Müller
            </label>
            <input
              id="c"
              name="c"
              type="radio"
              value="c"
              onChange={(e) => setSelectedAnswer(e.target.value)}
              disabled={submitted}
            />
          </div>

          <div className={styles.optionContainer}>
            <label
              htmlFor="d"
              className={selectedAnswer === "d" && submitted ? styles.wrong : ""}
            >
              Lionel Messi
            </label>
            <input
              id="d"
              name="d"
              type="radio"
              value="d"
              onChange={(e) => setSelectedAnswer(e.target.value)}
              disabled={submitted}
            />
          </div>
        </span>

        <button onClick={Test} className={styles.TestingAnswers}>
          Send
        </button>
      </div>
    </>
  );
};
export default Question8;
