import React, { useState, useEffect } from "react";

import { Timer } from "./Cards/Timer";
import { Cards } from "./Cards";

export const Board = () => {
  return (
    <main>
      <Cards />
      <Timer />
    </main>
  );
};
