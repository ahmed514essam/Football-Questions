import { useState } from "react";
import styles from "./Question.module.css";

const Question1 = () => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [bgColor, setBgColor] = useState<string>("red");

  const correctAnswer = "b";

  const Test = () => {
    if (selectedAnswer !== correctAnswer) {
      alert("Wrong answer! The correct answer is highlighted in green.");










    }
  };



  const changeColor = () => {
    setBgColor(bgColor === 'lightblue' ? 'lightgreen' : 'lightblue');
  };

  return (
    <>
      <div className={styles.theQuestion}>
        <h2>
          How long does a standard football match last, excluding extra time?
        </h2>
        <span className={styles.ques}>
          <div className={styles.optionContainer}>
            <label htmlFor="a" className={selectedAnswer === "a" ? styles.wrong : ""}  style={{background:bgColor}}>80 minutes</label>
            <input id="a" name="answer" type="radio" value="a" onChange={(e) => setSelectedAnswer(e.target.value)} />
          </div>

          <div className={styles.optionContainer}>
            <label htmlFor="b" className={selectedAnswer !== "" && correctAnswer === "b" ? styles.correct : ""}>90 minutes</label>
            <input id="b" name="answer" type="radio" value="b" onChange={(e) => setSelectedAnswer(e.target.value)} />
          </div>

          <div className={styles.optionContainer}>
            <label htmlFor="c" className={selectedAnswer === "c" ? styles.wrong : ""}>100 minutes</label>
            <input id="c" name="answer" type="radio" value="c" onChange={(e) => setSelectedAnswer(e.target.value)} />
          </div>

          <div className={styles.optionContainer}>
            <label htmlFor="d" className={selectedAnswer === "d" ? styles.wrong : ""}>120 minutes</label>
            <input id="d" name="answer" type="radio" value="d" onChange={(e) => setSelectedAnswer(e.target.value)} />
          </div>
        </span>

        <button onClick={Test} className={styles.TestingAnswers}>Send</button>
        <button onClick={changeColor}>Color</button>
      </div>
    </>
  );
};

export default Question1;
