import "./about.css";
import Award from "../../img/award.png";
import cameraman from "../../img/camera-man.jpeg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={cameraman}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        Full Stack Node and PHP Developer, Server Administrator, Bug Fixer
        </p>
        <p className="a-desc">
        I have 5+ experience in web application development.
         I have developed websites of complex and simple scopes. 
         Currently, I am working on school management system. Having a team of 3+
          senior developers. 
        
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Faculty Instructor, Aptech Computers Abuja</h4>
            <p className="a-award-desc">
            Save time and money by outsourcing design and technology implementation
             of your web applications to me.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
