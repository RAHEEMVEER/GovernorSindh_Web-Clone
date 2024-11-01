import "../style.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="Footer-Container">
      <div className="hyperLinks">
        <div className="core-links">
          <h1>Core Courses</h1>
          <div className="links-div">
            <Link href="/">Programming Fundamentals</Link>
            <Link href="/">Web2 Using NextJS</Link>
            <Link href="/">Earn as You Learn</Link>
          </div>
        </div>
        <div className="advance-links">
          <h1>Advance Courses</h1>
          <div className="links-div">
            <Link href="/">Web 3 and Metaverse</Link>
            <Link href="/">Cloud-Native Computing</Link>
            <Link href="/">Artificial Intelligence (AI) and Deep Learning</Link>
            <Link href="/">Ambient Computing and Iot</Link>
            <Link href="/">Genomics and Bioinformatics</Link>
            <Link href="/">Network Programmability and Automation</Link>
          </div>
        </div>
        <div className="social-links">
          <h1>Social Links</h1>
          <div className="social-platforms">
            <a className="facebook" href="/"><i className="bx bxl-facebook"></i></a>
            <a className="instagram" href="/"><i className="bx bxl-instagram"></i></a>
            <a className="youtube" href="/"><i className="bx bxl-youtube"></i></a>
            <a className="twitter" href="/"><i className="bx bxl-twitter"></i></a>
            <a className="tiktok" href="/"><i className="bx bxl-tiktok"></i></a>
          </div>
          <div className="governor-email">
            <i className='bx bx-envelope'></i>
            <a href="/">education@governorsindh.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}
