import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "../_setPlayers.scss";

const Form8PlayersWithoutSides = ({ setPlayers, simpleLottery }) => {
  const reference = useRef({});
  const [player1, setPlayer1] = useState([]);
  const [player2, setPlayer2] = useState([]);
  const [player3, setPlayer3] = useState([]);
  const [player4, setPlayer4] = useState([]);
  const [player5, setPlayer5] = useState([]);
  const [player6, setPlayer6] = useState([]);
  const [player7, setPlayer7] = useState([]);
  const [player8, setPlayer8] = useState([]);

  const handleSubmit = () => {
    const players = [];
    players.push({ id: 1, name: reference.current.player1.value });
    players.push({ id: 2, name: reference.current.player2.value });
    players.push({ id: 3, name: reference.current.player3.value });
    players.push({ id: 4, name: reference.current.player4.value });
    players.push({ id: 5, name: reference.current.player5.value });
    players.push({ id: 6, name: reference.current.player6.value });
    players.push({ id: 7, name: reference.current.player7.value });
    players.push({ id: 8, name: reference.current.player8.value });
    setPlayers(players);
    simpleLottery(players);
  };
  const getBtn = () => {
    if (
      player1.length !== 0 &&
      player2.length !== 0 &&
      player3.length !== 0 &&
      player4.length !== 0 &&
      player5.length !== 0 &&
      player6.length !== 0 &&
      player7.length !== 0 &&
      player8.length !== 0
    ) {
      return (
        <button id="btnSubmit" type="submit" onClick={handleSubmit}>
          <NavLink
            to="/teams"
            className="formSetPlayers__submit__btn btn bg-success "
          >
            Sortear
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fillRule="currentColor"
              className="bi bi-play-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
            </svg>
          </NavLink>
        </button>
      );
    }
  };
  return (
    <>
      <form className="formSetPlayers">
        <legend>Ingrese los Nombres</legend>
        <div className="formSetPlayers__containerInputs">
          <div className="formSetPlayers__containerInputs__sides">
            <input
              type="text"
              placeholder="Jugador 1"
              ref={(e) => (reference.current.player1 = e)}
              onChange={(e) => setPlayer1(e.target.value)}
            />
            <input
              type="text"
              placeholder="Jugador 2"
              ref={(e) => (reference.current.player2 = e)}
              onChange={(e) => setPlayer2(e.target.value)}
            />
            <input
              type="text"
              placeholder="Jugador 3"
              ref={(e) => (reference.current.player3 = e)}
              onChange={(e) => setPlayer3(e.target.value)}
            />
            <input
              type="text"
              placeholder="Jugador 4"
              ref={(e) => (reference.current.player4 = e)}
              onChange={(e) => setPlayer4(e.target.value)}
            />
            <input
              type="text"
              placeholder="Jugador 5"
              ref={(e) => (reference.current.player5 = e)}
              onChange={(e) => setPlayer5(e.target.value)}
            />
            <input
              type="text"
              placeholder="Jugador 6"
              ref={(e) => (reference.current.player6 = e)}
              onChange={(e) => setPlayer6(e.target.value)}
            />
            <input
              type="text"
              placeholder="Jugador 7"
              ref={(e) => (reference.current.player7 = e)}
              onChange={(e) => setPlayer7(e.target.value)}
            />
            <input
              type="text"
              placeholder="Jugador 8"
              ref={(e) => (reference.current.player8 = e)}
              onChange={(e) => setPlayer8(e.target.value)}
            />
          </div>
        </div>
        <div className="formSetPlayers__submit">
          <button>
            <NavLink
              to="/"
              className="formSetPlayers__submit__btn btn bg-success"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fillRule="currentColor"
                className="bi bi-arrow-left-circle"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
                />
              </svg>
              Regresar
            </NavLink>
          </button>
          {getBtn()}
        </div>
      </form>
    </>
  );
};

export default Form8PlayersWithoutSides;
