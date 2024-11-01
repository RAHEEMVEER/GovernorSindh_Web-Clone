"use client";

import "../style.css";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Header() {
  const courseNavigate = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuIcon = useRef<HTMLElement | null>(null);
  const CourseNavigate2 = useRef<HTMLDivElement | null>(null);
  let isVisible: boolean = true;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const visibility = () => {
    if (isVisible) {
      courseNavigate.current?.classList.add("activeVisibility");
    } else {
      courseNavigate.current?.classList.remove("activeVisibility");
    }
    isVisible = !isVisible;
  };

  const courseNavigation2 = () => {
    if (isVisible) {
      CourseNavigate2.current?.classList.remove("displayNone");
      CourseNavigate2.current?.classList.add("courseNavigation2");
    } else {
      CourseNavigate2.current?.classList.add("displayNone");
    }
    isVisible = !isVisible;
  };

  return (
    <header>
      <div className="logo">
        <Image src={logo} alt="Logo" width={90} height={90} />
      </div>
      <div className="Heading">
        <h1>Tuition Free Education Program on Latest Technologies</h1>
        <h2 className="displayNone">Tution Free Program</h2>
      </div>

      <div className="menuIcon-div displayNone">
        <i className="bx bx-menu" ref={menuIcon} onClick={toggleMenu}></i>
      </div>

      <div className="navigation">
        <Link href="/"><span>Home</span></Link>
        <Link href="/Apply"><span>Apply</span></Link>
        <Link href="/Jobs"><span>Jobs</span></Link>
        <Link href="/Result"><span>Result</span></Link>
        <div className="dropDown">
          <button onClick={visibility}>
            <span>Courses</span>
            <span id="dropIcon"><i className="bx bx-chevron-down"></i></span>
          </button>
        </div>
        <div ref={courseNavigate} className="courseNavigation">
          <div className="course1-box">
            <h1>Core Courses</h1>
            <div className="course">
              <button><Link href="/">Programming Fundamentals</Link></button>
              <button><Link href="/">Web2 Using NextJS</Link></button>
              <button><Link href="/">Earn As You Learn</Link></button>
            </div>
          </div>

          <div className="course2-box">
            <h1>Advanced Courses</h1>
            <div className="course">
              <button><Link href="/">Web 3 and Metaverse</Link></button>
              <button><Link href="/">Cloud-Native Computing</Link></button>
              <button><Link href="/">Ambient Computing and lot</Link></button>
              <button><Link href="/">Genomics and Bioinformatics</Link></button>
              <button><Link href="/">Network Programmability and Automation</Link></button>
              <button><Link href="/">Artificial Intelligence (AI) and Deep Learning</Link></button>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fullPageNav">
          <div className="closeMenu" onClick={toggleMenu}>
            <i className="bx bx-x"></i>
          </div>
          <div className="fullNavLinks">
            <Link href="/" onClick={toggleMenu}><span>Home</span></Link>
            <Link href="/Apply" onClick={toggleMenu}><span>Apply</span></Link>
            <Link href="/Jobs" onClick={toggleMenu}><span>Jobs</span></Link>
            <Link href="/Result" onClick={toggleMenu}><span>Result</span></Link>
            <div className="dropDown">
              <button onClick={courseNavigation2}>
                <span>Courses</span>
                <span id="dropIcon"><i className="bx bx-chevron-down"></i></span>
              </button>
            </div>
            <div ref={CourseNavigate2} className="displayNone">
              <div className="course1-box">
                <h1>Core Courses</h1>
                <div className="course">
                  <Link href="/"><span>Programming Fundamentals</span></Link>
                  <Link href="/"><span>Web2 Using NextJS</span></Link>
                  <Link href="/"><span>Earn As You Learn</span></Link>
                </div>
              </div>

              <div className="course2-box">
                <h1>Advanced Courses</h1>
                <div className="course">
                  <Link href="/"><span>Web 3 and Metaverse</span></Link>
                  <Link href="/"><span>Cloud-Native Computing</span></Link>
                  <Link href="/"><span>Artifical Intelligence (AI) and Deep Learning</span></Link>
                  <Link href="/"><span>Ambient Computing and lot</span></Link>
                  <Link href="/"><span>Genomics and Bioinformatics</span></Link>
                  <Link href="/"><span>Network Programmability and Automation</span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
