"use client";
import { useState } from "react";
import style from "./page.module.css" ;
import Question1 from "./Questions/Question1";
import Question2 from "./Questions/Question2";
import Question3 from "./Questions/Question3";
import Question4 from "./Questions/Question4";
import Question5 from "./Questions/Question5";
import Question6 from "./Questions/Question6";
import Question7 from "./Questions/Question7";
import Question30 from "./Questions/Question30";
import Question29 from "./Questions/Question29";
import Question28 from "./Questions/Question28";
import Question27 from "./Questions/Question27";
import Question26 from "./Questions/Question26";
import Question25 from "./Questions/Question25";
import Question24 from "./Questions/Question24";
import Question23 from "./Questions/Question23";
import Question22 from "./Questions/Question22";
import Question21 from "./Questions/Question21";
import Question20 from "./Questions/Question20";
import Question19 from "./Questions/Question19";
import Question18 from "./Questions/Question18";
import Question17 from "./Questions/Question17";
import Question16 from "./Questions/Question16";
import Question15 from "./Questions/Question15";
import Question14 from "./Questions/Question14";
import Question13 from "./Questions/Question13";
import Question12 from "./Questions/Question12";
import Question11 from "./Questions/Question11";
import Question10 from "./Questions/Question10";
import Question9 from "./Questions/Question9";
import Question8 from "./Questions/Question8";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome" ;
import {faArrowRight , faArrowLeft} from "@fortawesome/free-solid-svg-icons" ;
const Home = () => {

  const [currentQuestion, setCurrentQuestion] = useState(1);

 
  const nextQuestion = () => {
    setCurrentQuestion((prev) => (prev < 30 ? prev + 1 : prev));
  };

  const prevQuestion = () => {
    setCurrentQuestion((prev) => (prev > 1 ? prev - 1 : prev));
  };


  return (
<>

<section className={style.sectionContent}>

<nav className={style.mainMyHeader}> <h1>Football Questions</h1> </nav>
  
  <div className={style.contentDiv}>

  {currentQuestion === 1 && <Question1 />}
{currentQuestion === 2 && <Question2 />}
{currentQuestion === 3 && <Question3 />}
{currentQuestion === 4 && <Question4 />}
{currentQuestion === 5 && <Question5 />}
{currentQuestion === 6 && <Question6 />}
{currentQuestion === 7 && <Question7 />}
{currentQuestion === 8 && <Question8 />}
{currentQuestion === 9 && <Question9 />}
{currentQuestion === 10 && <Question10 />}
{currentQuestion === 11 && <Question11 />}
{currentQuestion === 12 && <Question12 />}
{currentQuestion === 13 && <Question13 />}
{currentQuestion === 14 && <Question14 />}
{currentQuestion === 15 && <Question15 />}
{currentQuestion === 16 && <Question16 />}
{currentQuestion === 17 && <Question17 />}
{currentQuestion === 18 && <Question18 />}
{currentQuestion === 19 && <Question19 />}
{currentQuestion === 20 && <Question20 />}
{currentQuestion === 21 && <Question21 />}
{currentQuestion === 22 && <Question22 />}
{currentQuestion === 23 && <Question23 />}
{currentQuestion === 24 && <Question24 />}
{currentQuestion === 25 && <Question25 />}
{currentQuestion === 26 && <Question26 />}
{currentQuestion === 27 && <Question27 />}
{currentQuestion === 28 && <Question28 />}
{currentQuestion === 29 && <Question29 />}
{currentQuestion === 30 && <Question30 />}
      



<div className={style.btns}>
{currentQuestion > 1 && (
              <button onClick={prevQuestion} className={style.prev}>
                <span><FontAwesomeIcon icon={faArrowLeft} /></span> Prev 
              </button>
            )}
            {currentQuestion < 30 && (
              <button onClick={nextQuestion} className={style.next}>
                Next <span><FontAwesomeIcon icon={faArrowRight} /></span>
              </button>
            )}
</div>


  </div>

</section>

</>
  );
}
export default Home ;