import React from "react";
import { t } from "i18next";
import { Link } from "react-router-dom";
import "./contacts.scss";

const Contacts = () => {
  return (
    <div className="contacts__wrapper">
      <p>
        {t("contacts.phone")} - <span>+37477994496</span>
      </p>
      <p>
        {t("contacts.whatsapp")} - <span>+37477994496</span>
      </p>
      <p>
        {t("contacts.telegram")} -{" "}
        <Link to="https://t.me/Armen17717" target="blank">
          <span>https://t.me/Armen17717</span>
        </Link>
      </p>
      <p>
        {t("contacts.email")} - <span>armen.baghdasaryan91@gmail.com</span>
      </p>
      <p>
        {t("contacts.linkedin")} -{" "}
        <Link
          to="https://www.linkedin.com/in/armen-baghdasaryan-305a811ab/"
          target="blank"
        >
          <span>https://www.linkedin.com/in/armen-baghdasaryan-305a811ab</span>
        </Link>
      </p>
    </div>
  );
};

export default Contacts;
