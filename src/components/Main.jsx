import React from "react";

let Main = () => {
  return (
    <main className="main">
      <div className="experience-wrapper">
        <Experience />
        <div className="skills-section-wrapper">
          <ProSkills/>
          <PerSkills/>
        </div>
      </div>
      <Education/>
      <Hobbies/>
    </main>
  );
};


let Experience = () => {
  return (
    <div className="experience-section section">
      <h2 className="section-title">Experience</h2>
      <div className="section-content-holder">
        <div className="experience-element element">
          <div className="position">
            <h3 className="position-name">Senior Web Developer</h3>
            <p className="position-period">Jan 2007 - Dec 2011</p>
          </div>
          <div className="about-position">
            <p className="about-position-title">
              A long time ago in a galaxy far, far away...
            </p>
            <p className="about-position-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit est
              ab facere quo nobis alias fugiat, inventore, sint quidem culpa
              sapiente debitis delectus aspernatur accusantium. Iusto delectus
              porro autem deleniti.
            </p>
          </div>
        </div>
        <div className="experience-element element">
          <div className="position">
            <h3 className="position-name">Senior Web Developer</h3>
            <p className="position-period">Jan 2007 - Dec 2011</p>
          </div>
          <div className="about-position">
            <p className="about-position-title">
              A long time ago in a galaxy far, far away...
            </p>
            <p className="about-position-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit est
              ab facere quo nobis alias fugiat, inventore, sint quidem culpa
              sapiente debitis delectus aspernatur accusantium. Iusto delectus
              porro autem deleniti.
            </p>
          </div>
        </div>
        <div className="experience-element element">
          <div className="position">
            <h3 className="position-name">Senior Web Developer</h3>
            <p className="position-period">Jan 2007 - Dec 2011</p>
          </div>
          <div className="about-position">
            <p className="about-position-title">
              A long time ago in a galaxy far, far away...
            </p>
            <p className="about-position-text">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
                tempore hic, laboriosam ab mollitia asperiores provident, error
                exercitationem odio neque repellat eveniet. Amet ea autem vitae
                omnis, molestias natus ad.
              </span>
              <span>
                Eius, quis, pariatur. Suscipit similique dolores soluta dolore
                autem impedit alias quia, quis reprehenderit expedita corporis
                inventore modi deserunt ducimus sequi provident a quae, vero et.
                Placeat, hic. Sunt, odit!
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

let ProSkills=()=>{
    return(
        <div className="pro-skills skills-section section">
            <h2 className="section-title">Pro-skills</h2>
            <ul className="section-content-holder level-content-holder">
              <li className="skill">
                <p className="skill-name">Photoshop</p>
                <div className="skill-level-wrapper">
                  <div className="skill-level"></div>
                </div>
              </li>
              <li className="skill">
                <p className="skill-name">Illustrator</p>
                <div className="skill-level-wrapper">
                  <div className="skill-level"></div>
                </div>
              </li>
              <li className="skill">
                <p className="skill-name">Javascript</p>
                <div className="skill-level-wrapper">
                  <div className="skill-level"></div>
                </div>
              </li>
              <li className="skill">
                <p className="skill-name">HTML/CSS</p>
                <div className="skill-level-wrapper">
                  <div className="skill-level"></div>
                </div>
              </li>
            </ul>
          </div>
    )
}

let PerSkills=()=>{
    return(
        <div className="per-skills skills-section section">
            <h2 className="section-title">Per-skills</h2>
            <ul className="section-content-holder level-content-holder skills-content-holder">
              <li className="skill">
                <p className="skill-name">Creativity</p>
                <div className="skill-level-wrapper">
                  <div className="skill-level"></div>
                </div>
              </li>
              <li className="skill">
                <p className="skill-name">Team Work</p>
                <div className="skill-level-wrapper">
                  <div className="skill-level"></div>
                </div>
              </li>
              <li className="skill">
                <p className="skill-name">Hard Work</p>
                <div className="skill-level-wrapper">
                  <div className="skill-level"></div>
                </div>
              </li>
              <li className="skill">
                <p className="skill-name">Leade Ship</p>
                <div className="skill-level-wrapper">
                  <div className="skill-level"></div>
                </div>
              </li>
            </ul>
          </div>
    )
}

let Education=()=>{
  return(
    <div className="education-section section">
        <h2 className="section-title">Education</h2>
        <div className="section-content-holder">
          <div className="experience-element element">
            <div className="position">
              <h3 className="position-name">Senior Web Developer</h3>
              <p className="position-period">Jan 2007 - Dec 2011</p>
            </div>
            <div className="about-position">
              <p className="about-position-title">
                A long time ago in a galaxy far, far away...
              </p>
              <p className="about-position-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
                est ab facere quo nobis alias fugiat, inventore, sint quidem
                culpa sapiente debitis delectus aspernatur accusantium. Iusto
                delectus porro autem deleniti.
              </p>
            </div>
          </div>
          <div className="experience-element element">
            <div className="position">
              <h3 className="position-name">Senior Web Developer</h3>
              <p className="position-period">Jan 2007 - Dec 2011</p>
            </div>
            <div className="about-position">
              <p className="about-position-title">
                A long time ago in a galaxy far, far away...
              </p>
              <p className="about-position-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
                est ab facere quo nobis alias fugiat, inventore, sint quidem
                culpa sapiente debitis delectus aspernatur accusantium. Iusto
                delectus porro autem deleniti.
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}
let Hobbies=()=>{
  return(
    <div className="hobbies-wrapper">
        <div className="hobbies-section section">
          <h2 className="section-title">Hobbies</h2>
          <ul className="section-content-holder hobby-list">
            <li className="hobbie-element icon-photo">
              <span>Photography</span>
            </li>
            <li className="hobbie-element icon-music">
              <span>Music</span>
            </li>
            <li className="hobbie-element icon-sport">
              <span>Sport</span>
            </li>
            <li className="hobbie-element icon-code">
              <span>Code</span>
            </li>
            <li className="hobbie-element icon-gaming">
              <span>Video Games</span>
            </li>
          </ul>
        </div>
        {/* <!--Hobbies skills--> */}
        <div className="skills-section-wrapper lang-section-wrapper">
          <div className="lang-skills section">
            <h2 className="section-title">Language</h2>
            <ul className="section-content-holder level-content-holder">
              <li className="skill">
                <p className="skill-name">English</p>
                <div className="skill-level-wrapper">
                  <div className="skill-level"></div>
                </div>
              </li>
              <li className="skill">
                <p className="skill-name">Spanish</p>
                <div className="skill-level-wrapper">
                  <div className="skill-level"></div>
                </div>
              </li>
              <li className="skill">
                <p className="skill-name">French</p>
                <div className="skill-level-wrapper">
                  <div className="skill-level"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
  )
}
export default Main;
