import React from "react";
import { NavLink } from "react-router-dom";
import "./_teams.scss";
import paleta from "../../assets/img/raqueta-de-padel.png";

const Teams = ({
  listPlayersDriveRandom,
  listPlayersRevesRandom,
  lottery,
  typeLottery,
  simpleLottery,
  players,
  listPlayersRandom,
}) => {
  const impares = listPlayersRandom
    .map((players) => players)
    .filter((player, index) => {
      if (index % 2 !== 0) {
        return player;
      }
    });

  const pares = listPlayersRandom
    .map((players) => players)
    .filter((player, index) => {
      if (index % 2 === 0) {
        return player;
      }
    });

  const handleSubmit = () => {
    if (typeLottery === "CON LADOS") {
      lottery(listPlayersDriveRandom, listPlayersRevesRandom);
    } else {
      simpleLottery(players);
    }
  };
  return (
    <div className="teams animate__animated animate__zoomIn">
      <div className="teams__container">
        <div className="teams__container__title">
          {typeLottery === "CON LADOS"
            ? listPlayersDriveRandom.length + " Equipos"
            : pares.length + " Equipos"}
        </div>
        {typeLottery === "CON LADOS" ? (
          <div className="teams__container__results">
            <div className="teams__container__results__lists">
              <h4>Del Drive</h4>
              {listPlayersDriveRandom.map((e) => {
                return (
                  <div
                    className="teams__container__results__lists__playersDrive"
                    key={e.id}
                  >
                    <img src={paleta} alt="paleta"></img>
                    <div>{e.name}</div>
                  </div>
                );
              })}
            </div>
            <div className="teams__container__results__lists">
              <h4>Del Reves</h4>
              {listPlayersRevesRandom.map((e) => {
                return (
                  <div
                    className="teams__container__results__lists__playersReves"
                    key={e.id}
                  >
                    <div>{e.name}</div>
                    <img src={paleta} alt="paleta" />
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="teams__container__results">
            <div className="teams__container__results__lists">
              {impares.map((e) => {
                return (
                  <div
                    className="teams__container__results__lists__playersDrive"
                    key={e.id}
                  >
                    <img src={paleta} alt="paleta"></img>
                    <div>{e.name}</div>
                  </div>
                );
              })}
            </div>
            <div className="teams__container__results__lists">
              {pares.map((e) => {
                return (
                  <div
                    className="teams__container__results__lists__playersReves"
                    key={e.id}
                  >
                    <div>{e.name}</div>
                    <img src={paleta} alt="paleta" />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <div className="teams__btns">
        <button type="submit" onClick={handleSubmit}>
          <NavLink to="/teams" className="btn bg-success p-1 ">
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
            <span className="teams__btns__lotteryAgain">Volver a Sortear</span>
          </NavLink>
        </button>
        <button type="submit" onClick={handleSubmit}>
          <NavLink to="/" className=" btn bg-success p-1">
            <span className="teams__btns__home">Inicio</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fillRule="currentColor"
              className="bi bi-house-door "
              viewBox="0 0 16 16"
            >
              <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
            </svg>
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default Teams;
