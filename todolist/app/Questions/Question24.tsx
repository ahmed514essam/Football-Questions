import { useState } from "react";
import styles from "./Question.module.css";

const Question24 = () => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const correctAnswer = "a";

  const [notalert , setNotAlert] = useState<boolean>(false);
  const [corralert , setCorrAlert] = useState<boolean>(false);


  const Test = () => {
    if (selectedAnswer !== correctAnswer) {
setNotAlert(true);      
    } else {
setCorrAlert(true)    }
  };

  const remAlert = () => {
setCorrAlert(false);
setNotAlert(false);
  }

  return (
    <>
      <div className={styles.theQuestion}>
        <h2>How quickly did Pelé score the fastest hat trick in football history?</h2>
        <span className={styles.ques}>
          <div className={styles.optionContainer}>
            <label htmlFor="a" className={selectedAnswer !== "" && correctAnswer === "a" ? styles.correct : ""}>
              90 Seconds
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
              2 Minutes, 30 Seconds
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
              3 Minutes
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
              5 Minutes
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
      {notalert ? (
  <div onClick={remAlert} className={styles.overAllErAlert}>
  <div className={styles.contentAlertNot}>
<img src="sad.png"  alt="not correct" />
<h2>Not Correct</h2>
  </div>
</div>
) : null}



{corralert ? (
  <div onClick={remAlert} className={styles.overAllErAlert}>
  <div className={styles.contentAlertNot}>
<img src="happy.png"  alt="not correct" />
<h2>Good </h2>
  </div>
</div>
) : null}

    </>
  );
};

export default Question24;
