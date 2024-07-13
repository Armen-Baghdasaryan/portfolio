import React, { useState } from "react";
import TypingText from "../../components/TypingText/TypingText";
import { t } from "i18next";
import "./home.scss";

//images
import circle1 from "/src/assets/images/circle1.png";
import circle2 from "/src/assets/images/circle2.png";
import circle3 from "/src/assets/images/circle3.png";
import myPhoto from "/src/assets/images/my-photo.jpg";

const Home = () => {
  const [isTyping, setIsTyping] = useState(true);

  return (
    <div className="home__wrapper">
      <div className="home__content">
        <div className="author__info">
          <TypingText
            speed={5}
            text={t("home.info.text")}
            setIsTyping={setIsTyping}
          />
        </div>
        {!isTyping && <img src={myPhoto} alt="avatar" />}
      </div>

      <img src={circle1} alt="file" className="circle1 parallax__one" />
      <img src={circle2} alt="file" className="circle3 parallax__two" />
      <img src={circle3} alt="file" className="circle2 parallax__three" />
    </div>
  );
};

export default Home;
