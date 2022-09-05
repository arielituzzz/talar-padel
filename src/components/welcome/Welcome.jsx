import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import "./_welcome.scss";

const Welcome = ({ getNumberPlayers }) => {
  const reference = useRef({});
  const handleSubmit = (e) => {
    e.preventDefault();
    getNumberPlayers(reference.current.numberPlayers.value);
  };
  return (
    <div className="welcome animate__animated animate__fadeIn">
      <div className="welcome__containerTitle">
        <h3 className="welcome__containerTitle__text">Bienvenido/a!</h3>
      </div>
      <form className="welcome__form">
        <div className="welcome__form__input">
          <label>Numero de Jugadores</label>
          <select ref={(e) => (reference.current.numberPlayers = e)}>
            <option value="4">4</option>
            <option value="8">8</option>
            <option value="12">12</option>
            <option value="16">16</option>
          </select>
        </div>
        <div className="welcome__form__submit">
          <button onClick={handleSubmit}>
            <NavLink
              to="/setPlayers"
              className="welcome__form__submit__btn btn bg-success"
            >
              Siguiente
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-bar-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"
                />
              </svg>
            </NavLink>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Welcome;
