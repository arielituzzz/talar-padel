import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import Welcome from "../components/welcome/Welcome";
import SetPlayers from "../components/setPlayers/SetPlayers";
import Teams from "../components/teams/Teams";
import "./_main.scss";
import logo from "../assets/img/logo_padel.png";
import Form4Players from "../components/setPlayers/formPlayers/Form4Players";
import Form6Players from "../components/setPlayers/formPlayers/Form6Players";
import Form8Players from "../components/setPlayers/formPlayers/Form8Players";
import Form12Players from "../components/setPlayers/formPlayers/Form12Players";
import Form16Players from "../components/setPlayers/formPlayers/Form16Players";
import WaitAnimation from "../components/waitAnimation/WaitAnimation";
import SetResults from "../components/setResults/SetResults";
import Footer from "../footer/Footer";

const Main = () => {
  const [numberPlayers, setNumberPlayers] = useState([]);
  const [sidePlayersDrive, setSidePlayersDrive] = useState([]);
  const [listPlayersDriveRandom, setListPlayersDriveRandom] = useState([]);
  const [sidePlayersReves, setSidePlayersReves] = useState([]);
  const [listPlayersRevesRandom, setListPlayersRevesRandom] = useState([]);
  const [showAnimation, setShowAnimation] = useState([false]);

  const getNumberPlayers = (number) => {
    setNumberPlayers(number);
  };

  const setPlayersDrive = (players) => {
    setSidePlayersDrive(players);
  };
  const setPlayersReves = (players) => {
    setSidePlayersReves(players);
  };

  const getPlayers = () => {
    return numberPlayers;
  };

  const lottery = (list1, list2) => {
    if (numberPlayers !== "0") {
      setShowAnimation(true);
      const listDrive = list1.sort(() => Math.random() - 0.5);
      setListPlayersDriveRandom(listDrive);
      const listReves = list2.sort(() => Math.random() - 0.5);
      setListPlayersRevesRandom(listReves);
      setTimeout(() => {
        setShowAnimation(false);
      }, 3000);
    }
  };

  const getInputs = () => {
    if (numberPlayers === "4") {
      return (
        <Form4Players
          setPlayersDrive={setPlayersDrive}
          setPlayersReves={setPlayersReves}
          lottery={lottery}
        />
      );
    }
    if (numberPlayers === "6") {
      return (
        <Form6Players
          setPlayersDrive={setPlayersDrive}
          setPlayersReves={setPlayersReves}
          lottery={lottery}
        />
      );
    }
    if (numberPlayers === "8") {
      return (
        <Form8Players
          setPlayersDrive={setPlayersDrive}
          setPlayersReves={setPlayersReves}
          lottery={lottery}
        />
      );
    }
    if (numberPlayers === "12") {
      return (
        <Form12Players
          setPlayersDrive={setPlayersDrive}
          setPlayersReves={setPlayersReves}
          lottery={lottery}
        />
      );
    }
    if (numberPlayers === "16") {
      return (
        <Form16Players
          setPlayersDrive={setPlayersDrive}
          setPlayersReves={setPlayersReves}
          lottery={lottery}
        />
      );
    } else {
      return <Redirect to="/" />;
    }
  };

  const getResults = () => {
    getPlayers();
    if (numberPlayers.length !== 0) {
      return (
        <div>
          {showAnimation ? (
            <WaitAnimation />
          ) : (
            <Teams
              listPlayersDriveRandom={listPlayersDriveRandom}
              listPlayersRevesRandom={listPlayersRevesRandom}
              sidePlayersDrive={sidePlayersDrive}
              sidePlayersReves={sidePlayersReves}
              lottery={lottery}
            />
          )}
        </div>
      );
    } else {
      return <Redirect to="/" />;
    }
  };

  return (
    <div className="main">
      <img
        src={logo}
        className="main__img animate__animated animate__backInDown"
        alt="imgLogo"
      ></img>
      <Route exact path="/">
        <Welcome getNumberPlayers={getNumberPlayers} />
      </Route>
      <Route exact path="/setPlayers">
        <SetPlayers getInputs={getInputs} />
      </Route>

      <Route exact path="/teams">
        <SetResults getResults={getResults} />
      </Route>
      <Footer />
    </div>
  );
};

export default Main;
