import React from "react";
import "./homepage.css";
import engineering from "./images/engineering.jpg";
import science from "./images/science.jpg";
import technology from "./images/technology.jpg";
import Arts from "./images/Arts.jpg";
import Mathematics from "./images/mathematics.jpg";
import Planning from "./images/Planning.jpg";
import Explore from "./images/Explore.jpg";
import Learning from "./images/Learning.jpg";
import Development from "./images/Development.jpg";
import logo from "./images/logo.png";


function Homepage() {
  return (
    <div class="homepage">
      <div class="menu-btn">
        <i class="fas fa-bars fa-2x"></i>
      </div>
      <div class="container">
        <nav class="main-nav">
          <div className="logo">
            <img src={logo}></img>
          </div>

          <ul class="main-menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="/register">Login/Signup</a>
            </li>
            <li>
              <a href="#">Mission</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>

          <ul class="right-menu">
            <li>
              <a href="#">
                <i class="fas fa-search"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-shopping-cart"></i>
              </a>
            </li>
          </ul>
        </nav>

        <section class="home-cards home-cards-5" style={{paddingTop:"50px"}}>
          <div>
            <img src={science} alt=""></img>
            <h3>Science</h3>
            <p>lorem ipsum</p>
            <a href="#" className="link-home">
              Learn More <i class="fas fa-chevron-right"></i>
            </a>
          </div>
          <div>
            <img src={technology} alt="" />
            <h3>Technology</h3>
            <p>lorem ipsum</p>
            <a href="#" className="link-home">
              Learn More <i class="fas fa-chevron-right"></i>
            </a>
          </div>
          <div>
            <img src={engineering} alt="" />
            <h3>Engineering</h3>
            <p>lorem ipsum</p>
            <a href="#" className="link-home">
              Learn More <i class="fas fa-chevron-right"></i>
            </a>
          </div>
          <div>
            <img src={Arts} alt="" />
            <h3>Arts</h3>
            <p>lorem ipsum</p>
            <a href="#" className="link-home">
              Learn More <i class="fas fa-chevron-right"></i>
            </a>
          </div>
          <div>
            <img src={Mathematics} alt="" />
            <h3>Mathematics</h3>
            <p>lorem ipsum</p>
            <a href="#" className="link-home">
              Learn More <i class="fas fa-chevron-right"></i>
            </a>
          </div>
        </section>

        <section class="xbox">
          <div class="content">
            <h2>TinkerHat Foundation</h2>
            <p>Working for the greater good</p>
            <a href="#" class="btn">
              Join Us Now <i class="fas fa-chevron-right"></i>
            </a>
          </div>
        </section>

        <section class="home-cards home-cards-4">
          <div>
            <img src={Development} alt="" />
            <h3>Development</h3>
            <p>Unleash the power of your inner being</p>
            <a href="#">
              Join now <i class="fas fa-chevron-right"></i>
            </a>
          </div>
          <div>
            <img src={Learning} alt="" />
            <h3>Unlock the power of learning</h3>
            <p>Get future-ready with technology</p>
            <a href="#">
              Join now <i class="fas fa-chevron-right"></i>
            </a>
          </div>
          <div>
            <img src={Planning} alt="" />
            <h3>Learn at your own pace</h3>
            <p>Get customized learning that suits your need</p>
            <a href="#">
              Start Now <i class="fas fa-chevron-right"></i>
            </a>
          </div>
          <div>
            <img src={Explore} alt="" />
            <h3>Explore Our Courses</h3>
            <p>Learn how things works and tinker around</p>
            <a href="#">
              Get Started <i class="fas fa-chevron-right"></i>
            </a>
          </div>
        </section>

        <section class="carbon dark">
          <div class="content">
            <h2>Commiting To Cause of Education</h2>
            <p>
              We wish to empower each and every soul. Everyone has a right to
              learn and get free education
            </p>
            <a href="#" class="btn">
              Learn More <i class="fas fa-chevron-right"></i>
            </a>
          </div>
        </section>

        <section class="follow">
          <p>Follow</p>
          <a href="https://facebook.com">
            <img
              src="https://i.ibb.co/LrVMXNR/social-fb.png"
              alt="Facebook"
            ></img>
          </a>
          <a href="https://twitter.com">
            <img
              src="https://i.ibb.co/vJvbLwm/social-twitter.png"
              alt="Twitter"
            ></img>
          </a>
          <a href="https://linkedin.com">
            <img
              src="https://i.ibb.co/b30HMhR/social-linkedin.png"
              alt="Linkedin"
            ></img>
          </a>
        </section>
      </div>
      <section class="links">
        <div class="links-inner">
          <ul>
            <li>
              <h3>What's New</h3>
            </li>
            <li>
              <a href="#">Surface Pro X</a>
            </li>
            <li>
              <a href="#">Surface Laptop 3</a>
            </li>
            <li>
              <a href="#">Surface Pro 7</a>
            </li>
            <li>
              <a href="#">Windows 10 apps</a>
            </li>
            <li>
              <a href="#">Office apps</a>
            </li>
          </ul>
          <ul>
            <li>
              <h3>Your corner</h3>
            </li>
            <li>
              <a href="#">Account Profile</a>
            </li>
            <li>
              <a href="#">Download Center</a>
            </li>
            <li>
              <a href="#">Microsoft Store support</a>
            </li>
            <li>
              <a href="#">Returns</a>
            </li>
            <li>
              <a href="#">Older tracking</a>
            </li>
          </ul>
          <ul>
            <li>
              <h3>Education</h3>
            </li>
            <li>
              <a href="#">Microsfot in education</a>
            </li>
            <li>
              <a href="#">Office for students</a>
            </li>
            <li>
              <a href="#">Office 365 for schools</a>
            </li>
            <li>
              <a href="#">Deals for studentss</a>
            </li>
            <li>
              <a href="#">Microsfot Azure</a>
            </li>
          </ul>
          <ul>
            <li>
              <h3>Enterprise</h3>
            </li>
            <li>
              <a href="#">Azure</a>
            </li>
            <li>
              <a href="#">AppSource</a>
            </li>
            <li>
              <a href="#">Automotive</a>
            </li>
            <li>
              <a href="#">Government</a>
            </li>
            <li>
              <a href="#">Healthcare</a>
            </li>
          </ul>
          <ul>
            <li>
              <h3>Developer</h3>
            </li>
            <li>
              <a href="#">Visual Studio</a>
            </li>
            <li>
              <a href="#">Dev Center</a>
            </li>
            <li>
              <a href="#">Developer Network</a>
            </li>
            <li>
              <a href="#">TechNet</a>
            </li>
            <li>
              <a href="#">Developer</a>
            </li>
          </ul>
          <ul>
            <li>
              <h3>Company</h3>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">About Ust</a>
            </li>
            <li>
              <a href="#">Company news</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Inverstors</a>
            </li>
          </ul>
        </div>
      </section>

      <footer class="footer">
        <div class="footer-inner">
          <div>
            <i class="fas fa-globe fa-2x"></i> English (United States)
          </div>
          <ul>
            <li>
              <a href="#">Sitemap</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Privacy and cookies</a>
            </li>
            <li>
              <a href="#">Terms of use</a>
            </li>
            <li>
              <a href="#">Trademarks</a>
            </li>
            <li>
              <a href="#">Safety and eco</a>
            </li>
            <li>
              <a href="#">About our ads</a>
            </li>
            <li>
              <a href="#">&copy; TinkerHat 2019</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
