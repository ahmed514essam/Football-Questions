import { useState } from "react";
import styles from "./Question.module.css";

const Question9 = () => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const correctAnswer = "b";

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
        <h2>Who captained Argentina to win the 1986 FIFA World Cup?</h2>
        <span className={styles.ques}>
          <div className={styles.optionContainer}>
            <label
              htmlFor="a"
              className={selectedAnswer === "a" ? styles.wrong : ""}
            >
              Gabriel Batistuta
            </label>
            <input
              id="a"
              name="a"
              type="radio"
              value="a"
              onChange={(e) => setSelectedAnswer(e.target.value)}
            />
          </div>

          <div className={styles.optionContainer}>
            <label
              htmlFor="b"
              className={
                selectedAnswer !== "" && correctAnswer === "b"
                  ? styles.correct
                  : ""
              }
            >
              Diego Maradona
            </label>
            <input
              id="b"
              name="b"
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
              Daniel Passarella
            </label>
            <input
              id="c"
              name="c"
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
              Juan Román Riquelme
            </label>
            <input
              id="d"
              name="d"
              type="radio"
              value="d"
              onChange={(e) => setSelectedAnswer(e.target.value)}
            />
          </div>
        </span>

        <button onClick={Test} className={styles.TestingAnswers}>
          Send
        </button>
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
export default Question9;
