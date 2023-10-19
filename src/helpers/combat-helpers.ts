/* eslint-disable @typescript-eslint/ban-ts-comment */
import { layout, shipTypes } from "../constants/ships-constants";
import { Hit, ShotResults, Target } from "../types/game-types";

// This function is O(n~2) just because of time limitation :(
export const checkShotResults = (
  currentHits: Hit,
  currentTarget: Target
): ShotResults | null => {
  for (let i = 0; i < layout.length; i++) {
    const element = layout[i];
    for (let j = 0; j < element.positions.length; j++) {
      const position = element.positions[j];
      if (
        position.at(0) === currentTarget.x &&
        position.at(1) === currentTarget.y
      ) {
        return {
          ship: element.ship,
          hits: (currentHits[element.ship] || 0) + 1,
          // @ts-ignore
          count: shipTypes[element.ship].size,
        };
      }
    }
  }

  return null;
};
