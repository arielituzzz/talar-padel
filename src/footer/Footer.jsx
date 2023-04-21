import React from "react";
import logoDev from "../assets/img/logoEmpresa-transparente.png";
import "./_footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <a href="mailto:info.sudevsolutions@gmail.com">
        &#9426; Desarrollado por <img src={logoDev} alt="logo-Dev" /> 2022
      </a>
      <p>Version 1.0.1</p>
    </footer>
  );
};

export default Footer;
