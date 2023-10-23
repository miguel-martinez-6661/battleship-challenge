/* eslint-disable @typescript-eslint/ban-ts-comment */
import { shipTypes } from "../constants/ships-constants";
import { Hit, ShotResults, Target } from "../types/game-types";
import { getShipsLayout } from "./layout-helpers";

// This function is O(n~2) just because of time limitation :(
// export const checkShotResults = (
//   currentHits: Hit,
//   currentTarget: Target
// ): ShotResults | null => {
//   console.time("Quadratic");
//   console.log(hugeLayout);
//   for (let i = 0; i < hugeLayout.length; i++) {
//     const element = hugeLayout[i];
//     for (let j = 0; j < element.positions.length; j++) {
//       const position = element.positions[j];
//       if (
//         position.at(0) === currentTarget.x &&
//         position.at(1) === currentTarget.y
//       ) {
//         console.timeEnd("Quadratic");
//         return {
//           ship: element.ship,
//           hits: (currentHits[element.ship] || 0) + 1,
//           // @ts-ignore
//           count: shipTypes[element.ship].size,
//         };
//       }
//     }
//   }
//   console.timeEnd("Quadratic");

//   return null;
// };

// Improved to O(1)
export const checkShotResults = (
  currentHits: Hit,
  currentTarget: Target
): ShotResults | null => {
  console.time("O(1)");
  const layout = getShipsLayout();
  const targetX = `${currentTarget.x}X`;
  const targetY = `${currentTarget.y}Y`;

  if (layout[targetX]) {
    const positionX = layout[targetX];
    const positionY = positionX.positions[targetY];
    if (positionY) {
      console.timeEnd("O(1)");
      return {
        ship: positionX.ship,
        hits: (currentHits[positionX.ship] || 0) + 1,
        // @ts-ignore
        count: shipTypes[positionX.ship].size,
      };
    }
  }

  if (layout[targetY]) {
    const positionY = layout[targetY];
    const positionX = positionY.positions[targetX];
    if (positionX) {
      console.timeEnd("O(1)");
      return {
        ship: positionY.ship,
        hits: (currentHits[positionY.ship] || 0) + 1,
        // @ts-ignore
        count: shipTypes[positionY.ship].size,
      };
    }
  }
  console.timeEnd("O(1)");
  return null;
};
