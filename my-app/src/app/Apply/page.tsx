import { FaFacebook } from "react-icons/fa";
import "../style2.css";

export default function Apply() {
  return (
    <div className="ApplyPage">
      <div className="follow-accounts-div">
        <h1>Before continuing to the application please subscribe on these social media platforms.</h1>

       <div className="apply-box">
       <i><FaFacebook/></i>
        <button>Continue</button>
       <div className="admit-card">
       <p>Already Applied <a href="/">Get Admit Card</a></p>
       </div>
       </div>
      </div>
    </div>
  )
}
