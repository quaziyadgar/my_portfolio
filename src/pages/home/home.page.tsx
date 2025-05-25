import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";

import "./home.page.scss";

export const Home = () => {
  const navigate = useNavigate();

  const handleNavigationToContactMePage = () => {
    navigate("/contact");
  };
  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Quazi Yadgar Husain
          <br />
          Full Stack Developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{ transform: "translateY(550px)" }}
        end={{ transform: "translate(0px)" }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigationToContactMePage}>Hire me</button>
        </div>
      </Animate>
    </section>
  );
};
