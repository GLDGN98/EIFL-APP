import React from "react"
import facebookIcon from "../assets/img/icons/facebook.png"
import instagramIcon from "../assets/img/icons/instagram.png"
import tiktokIcon from "../assets/img/icons/tiktok.png"
import youtubeIcon from "../assets/img/icons/youtube.png"
import { BsPlayBtnFill } from "react-icons/bs"
import homePageBg from "../assets/img/background-football.jpg"

export const Home = () => {
  return (
    <div dir="rtl" className="home-page full">
      <div className="content">
        <h1>ברוכים הבאים לליגת א.י.פ.ל</h1>
        <p>
          ליגת א.י.פ.ל היא ליגת כדורגל ארצית תחרותית, הוקמה בשנת 2000 וכוללת 36
          קבוצות וכ-480 שחקנים מרחבי הארץ. הליגה מתנהלת על גורם התנדבותי, וכל
          משתתפי הליגה, כולל חברי הנהלה והשחקנים, מתנדבים ללא תמורה כלכלית.
        </p>
        <p>
          מטרת הפרויקט היא לפתח ערכים חברתיים דרך פעילות ספורטיבית, עבודה
          קבוצתית, נחישות והתמדה, כבוד הדדי, התמקדות אישית וקבוצתית וזיכרון
          יהודי אתיופיה שנפלו בדרכם לירושלים.
        </p>
        <p>
          העקרונות החינוכיים כוללים זיהוי והימנעות מאלימות בקרב בני הנוער, נידוף
          בני הנוער מאלכוהול וסמים, שיפור הישגיהם הלימודיים, תמיכה ושילוב
          בתעסוקה ולימודים אקדמאים, חיזוק הדמות העצמית והתרבותית, הכשרה לערכים
          תחרותיים בתחום הספורט וקירוב לבבות ואהבת הארץ.
        </p>
      </div>
      <h2>סרטון תדמית</h2>
      <div className="video">
        <BsPlayBtnFill />
      </div>
      <div className="social-links">
        <span>חפשו אותנו גם ב</span>
        <ul>
          <li>
            <a href="">
              <img src={facebookIcon} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={tiktokIcon} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={youtubeIcon} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={instagramIcon} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
