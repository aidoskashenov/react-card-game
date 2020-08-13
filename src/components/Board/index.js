import React, { useState, useEffect, Fragment } from "react";

import { Cards } from "./Cards";
import { Timer } from "./Cards/Timer";

export const Board = () => {

  const [toggleTimer, setToggleTimer] = useState(false);



  const handleCards = (toggle) => {
    setToggleTimer(toggle);
  };

  return (
    <main>
      <Cards handler={handleCards} />
      <Timer toggle={toggleTimer} />
    </main>
  );
};
