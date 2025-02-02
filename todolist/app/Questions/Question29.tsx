import { useState } from "react";
import styles from "./Question.module.css";

const Question29 = () => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const correctAnswer = "a";

  const Test = () => {
    if (selectedAnswer !== correctAnswer) {
      alert("Wrong answer! The correct answer is highlighted in green.");
    }
  };

  return (
    <>
      <div className={styles.theQuestion}>
        <h2>What does VAR stand for in football?</h2>
        <span className={styles.ques}>

          <div className={styles.optionContainer}>
            <label htmlFor="a" className={selectedAnswer !== "" && correctAnswer === "a" ? styles.correct : ""}>
              Video Assistant Referee
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
            <label htmlFor="b" className={selectedAnswer === "b" ? styles.wrong : ""}>
              Virtual Action Replay
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
            <label htmlFor="c" className={selectedAnswer === "c" ? styles.wrong : ""}>
              Video Analyzed Replay
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
            <label htmlFor="d" className={selectedAnswer === "d" ? styles.wrong : ""}>
              Verified Assistant Referee
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
};

export default Question29;
