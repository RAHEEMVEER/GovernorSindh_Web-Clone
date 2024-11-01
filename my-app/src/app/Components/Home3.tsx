import React from "react";
import "../style.css";
import Image from "next/image";
import corePic1 from "../../../public/images/core-pic1.jpg";
import corePic2 from "../../../public/images/core-pic2.jpg";
import corePic3 from "../../../public/images/core-pic3.jpg";
import advance1 from '../../../public/images/advance-pic1.jpg'
import advance2 from '../../../public/images/advance-pic2.jpg'
import advance3 from '../../../public/images/advance-pic3.jpg'
import advance4 from '../../../public/images/advance-pic4.jpg'
import advance5 from '../../../public/images/advance-pic5.jpg'
import advance6 from '../../../public/images/advance-pic6.jpg'

export default function Home3() {
  return (
    <div className="Home3-container">
      <div className="core-courses-container">
        <h1>Core Courses Sequence</h1>
        <div className="courses-div">
          <div className="course">
            <div className="course-img"><Image src={corePic1} alt="core course" /></div>
            <div className="courseName"><p>Programming Fundamentals</p></div>
          </div>

          <div className="course">
            <div className="course-img"><Image src={corePic2} alt="core course" /></div>
            <div className="courseName"><p>Web2 Using NextJS</p></div>
          </div>

          <div className="course">
            <div className="course-img"><Image src={corePic3} alt="core course" /></div>
            <div className="courseName"><p>Earn as You Learn</p></div>
          </div>
        </div>
      </div>

      <div className="advance-course-container">
        <h1>Advance Courses</h1>
        <div className="courses-div">
          <div className="course">
            <div className="course-img"><Image src={advance1} alt="core course" /></div>
            <div className="courseName"><p>Artificial Intelligence</p></div>
          </div>

          <div className="course">
            <div className="course-img"><Image src={advance2} alt="core course" /></div>
            <div className="courseName"><p>Web 3 and Metaverse</p></div>
          </div>

          <div className="course">
            <div className="course-img"><Image src={advance3} alt="core course" /></div>
            <div className="courseName"><p>Cloud-Native Computing</p></div>
          </div>

          <div className="course">
            <div className="course-img"><Image src={advance4} alt="core course" /></div>
            <div className="courseName"><p>Ambient Computing and Iot</p></div>
          </div>

          <div className="course">
            <div className="course-img"><Image src={advance5} alt="core course" /></div>
            <div className="courseName"><p>Genomics and Bioinformatics</p></div>
          </div>

          <div className="course">
            <div className="course-img"><Image src={advance6} alt="core course" /></div>
            <div className="courseName"><p>Network Programmability and Automation</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}
