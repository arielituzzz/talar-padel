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
import Form4PlayersWithoutSides from "../components/setPlayers/formPlayersWithoutSides/Form4PlayersWithoutSides";
import Form6PlayersWithoutSides from "../components/setPlayers/formPlayersWithoutSides/Form6PlayersWithoutSides";
import Form8PlayersWithoutSides from "../components/setPlayers/formPlayersWithoutSides/Form8PlayersWithoutSides";
import Form12PlayersWithoutSides from "../components/setPlayers/formPlayersWithoutSides/Form12PlayersWithoutSides";
import Form16PlayersWithoutSides from "../components/setPlayers/formPlayersWithoutSides/Form16PlayersWithoutSides";
import WaitAnimation from "../components/waitAnimation/WaitAnimation";
import SetResults from "../components/setResults/SetResults";
import Footer from "../footer/Footer";

const Main = () => {
  const [numberPlayers, setNumberPlayers] = useState([]);
  const [typeLottery, setTypeLottery] = useState();
  const [sidePlayersDrive, setSidePlayersDrive] = useState([]);
  const [listPlayersRandom, setListPlayersRandom] = useState([]);
  const [players, setPlayers] = useState([]);
  const [listPlayersDriveRandom, setListPlayersDriveRandom] = useState([]);
  const [sidePlayersReves, setSidePlayersReves] = useState([]);
  const [listPlayersRevesRandom, setListPlayersRevesRandom] = useState([]);
  const [showAnimation, setShowAnimation] = useState([false]);

  const getNumberPlayers = (number) => {
    setNumberPlayers(number);
  };

  const getTypeLottery = (type) => {
    setTypeLottery(type);
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

      let numberLottery = Math.floor(Math.random() * 50);

      // Crea una nueva lista con los elementos aleatorios
      const listDriveRandom = [...list1].sort(() => Math.random() - 0.5);
      for (let i = 0; i <= numberLottery; i++) {
        listDriveRandom.sort(() => Math.random() - 0.5);
      }
      setListPlayersDriveRandom(listDriveRandom);

      numberLottery = Math.floor(Math.random() * 50);

      // Crea una nueva lista con los elementos aleatorios
      const listRevesRandom = [...list2].sort(() => Math.random() - 0.5);
      for (let i = 0; i <= numberLottery; i++) {
        listRevesRandom.sort(() => Math.random() - 0.5);
      }
      setListPlayersRevesRandom(listRevesRandom);

      setTimeout(() => {
        setShowAnimation(false);
      }, 3000);
    }
  };

  const simpleLottery = (list) => {
    if (numberPlayers !== "0") {
      setShowAnimation(true);

      let numberLottery = Math.floor(Math.random() * 50);

      // Crea una nueva lista con los elementos aleatorios
      const listRandom = [...list].sort(() => Math.random() - 0.5);
      for (let i = 0; i <= numberLottery; i++) {
        listRandom.sort(() => Math.random() - 0.5);
      }
      setListPlayersRandom(listRandom);

      const players = [...listRandom];

      randomPairing(players);

      setTimeout(() => {
        setShowAnimation(false);
      }, 3000);
    }
  };

  function randomPairing(players) {
    // Create a copy of the players array to avoid modifying the original
    const playersCopy = [...players];

    // Shuffle the array randomly
    playersCopy.sort(() => Math.random() - 0.5);

    // Create an array of pairs from the shuffled array
    const pairs = [];
    for (let i = 0; i < playersCopy.length; i += 2) {
      pairs.push([playersCopy[i], playersCopy[i + 1]]);
    }

    return pairs;
  }

  // const lottery = (list1, list2) => {
  //   if (numberPlayers !== "0") {
  //     setShowAnimation(true);

  //     let numberLottery = Math.floor(Math.random() * 50);
  //     // console.log(numberLottery);

  //     for (let i = 0; i <= numberLottery; i++) {
  //       const listDrive = list1.sort(() => Math.random() - 0.5);
  //       setListPlayersDriveRandom(listDrive);
  //     }

  //     numberLottery = Math.floor(Math.random() * 50);
  //     // console.log(numberLottery);

  //     for (let i = 0; i <= numberLottery; i++) {
  //       const listReves = list2.sort(() => Math.random() - 0.5);
  //       setListPlayersRevesRandom(listReves);
  //     }

  //     setTimeout(() => {
  //       setShowAnimation(false);
  //     }, 3000);
  //   }
  // };

  const formOptions = {
    4: Form4Players,
    6: Form6Players,
    8: Form8Players,
    12: Form12Players,
    16: Form16Players,
  };

  const formOptionsWithoutSides = {
    4: Form4PlayersWithoutSides,
    6: Form6PlayersWithoutSides,
    8: Form8PlayersWithoutSides,
    12: Form12PlayersWithoutSides,
    16: Form16PlayersWithoutSides,
  };

  const getInputs = () => {
    if (typeLottery === "SIN LADOS") {
      const FormComponent = formOptionsWithoutSides[numberPlayers];
      if (FormComponent) {
        return (
          <FormComponent
            typeLottery={typeLottery}
            simpleLottery={simpleLottery}
            setPlayers={setPlayers}
          />
        );
      } else {
        return <Redirect to="/" />;
      }
    } else {
      const FormComponent = formOptions[numberPlayers];
      if (FormComponent) {
        return (
          <FormComponent
            setPlayersDrive={setPlayersDrive}
            setPlayersReves={setPlayersReves}
            lottery={lottery}
            typeLottery={typeLottery}
          />
        );
      } else {
        return <Redirect to="/" />;
      }
    }
  };

  // const getInputs = () => {
  //   if (numberPlayers === "4") {
  //     return (
  //       <Form4Players
  //         setPlayersDrive={setPlayersDrive}
  //         setPlayersReves={setPlayersReves}
  //         lottery={lottery}
  //       />
  //     );
  //   }
  //   if (numberPlayers === "6") {
  //     return (
  //       <Form6Players
  //         setPlayersDrive={setPlayersDrive}
  //         setPlayersReves={setPlayersReves}
  //         lottery={lottery}
  //       />
  //     );
  //   }
  //   if (numberPlayers === "8") {
  //     return (
  //       <Form8Players
  //         setPlayersDrive={setPlayersDrive}
  //         setPlayersReves={setPlayersReves}
  //         lottery={lottery}
  //       />
  //     );
  //   }
  //   if (numberPlayers === "12") {
  //     return (
  //       <Form12Players
  //         setPlayersDrive={setPlayersDrive}
  //         setPlayersReves={setPlayersReves}
  //         lottery={lottery}
  //       />
  //     );
  //   }
  //   if (numberPlayers === "16") {
  //     return (
  //       <Form16Players
  //         setPlayersDrive={setPlayersDrive}
  //         setPlayersReves={setPlayersReves}
  //         lottery={lottery}
  //       />
  //     );
  //   } else {
  //     return <Redirect to="/" />;
  //   }
  // };

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
              typeLottery={typeLottery}
              simpleLottery={simpleLottery}
              players={players}
              listPlayersRandom={listPlayersRandom}
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
        <Welcome
          getNumberPlayers={getNumberPlayers}
          getTypeLottery={getTypeLottery}
        />
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
