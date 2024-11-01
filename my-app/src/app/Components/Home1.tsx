import "../style.css";
import Image from "next/image";
import Link from "next/link";
import governorImg from "../../../public/images/governorImage.png";

export default function Home() {
  return (
    <div className="Home1-container">
      <div className=" hero-box">
        <div className="content">
          <h1>Governor Sindh</h1>
          <h1 id="h1-2">Kamran Khan Tessori</h1>
          <h3>Certified Cloud<br />Applied Generative AI<br />Engineer (GenEng)</h3>
          <p>Earn up to $5,000 / month</p>
          <p>Now admissions are open in<br />Hyderabad</p>

          <div className="apply-div">
            <button><Link href="/Apply">Apply Now</Link></button>
            <div className="accepted-numbers">
              <span>562, 143</span>
              <span id="accepted">Accepted Applications</span>
            </div>
          </div>
        </div>
        <div className="governorImg">
          <Image src={governorImg} alt="GovernorImg"/>
        </div>
      </div>
    </div>
  );
}
