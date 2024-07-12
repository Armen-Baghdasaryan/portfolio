import React, { useState } from "react";
import TypingText from "../../components/TypingText/TypingText";
import { t } from "i18next";
import "./home.scss";

const Home = () => {
  const landFolder = `/src/assets/images`;
  const [isTyping, setIsTyping] = useState(true);

  return (
    <div className="home__wrapper">
      <div className="home__content">
        <div className="author__info">
          <TypingText
            speed={15}
            text={t("home.info.text")}
            setIsTyping={setIsTyping}
          />
        </div>
        {!isTyping && <img src={`${landFolder}/my-photo.jpg`} alt="avatar" />}
      </div>

      <img
        src={`${landFolder}/circle1.png`}
        alt="file"
        className="circle1 parallax__one"
      />
      <img
        src={`${landFolder}/circle2.png`}
        alt="file"
        className="circle3 parallax__two"
      />
      <img
        src={`${landFolder}/circle3.png`}
        alt="file"
        className="circle2 parallax__three"
      />
    </div>
  );
};

export default Home;
