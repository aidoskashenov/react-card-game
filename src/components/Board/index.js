import React, { useState, useEffect } from "react";

import { Cards } from "./Cards";
import { Timer } from "./Cards/Timer";

export const Board = () => {
  return (
    <main>
      <Cards />
      <Timer />
    </main>
  );
};
