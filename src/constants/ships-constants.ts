import CarrierIcon from "../assets/Carrier-Shape.png";
import CruiserIcon from "../assets/Cruiser-Shape.png";
import BattleShipIcon from "../assets/Battleship-Shape.png";
import DestroyerShipIcon from "../assets/Destroyer-Shape.png";
import SubmarineIcon from "../assets/Submarine-Shape.png";

export enum TableAxys {
  X = 0,
  Y = 1,
}

export enum ShipType {
  carrier = "carrier",
  battleship = "battleship",
  cruiser = "cruiser",
  destroyer = "destroyer",
  submarine = "submarine",
}

export const tableLayout = [
  ...[...new Array(10)].map(() => [...[...new Array(10)]]),
];

export const shipTypes = {
  [ShipType.carrier]: {
    size: 5,
    count: 1,
  },
  [ShipType.battleship]: {
    size: 4,
    count: 1,
  },
  [ShipType.cruiser]: {
    size: 3,
    count: 1,
  },
  [ShipType.destroyer]: {
    size: 2,
    count: 1,
  },
  [ShipType.submarine]: {
    size: 3,
    count: 1,
  },
};

export const layout = [
  {
    ship: "carrier",
    positions: [
      [2, 9],
      [3, 9],
      [4, 9],
      [5, 9],
      [6, 9],
    ],
  },
  {
    ship: "battleship",
    positions: [
      [5, 2],
      [5, 3],
      [5, 4],
      [5, 5],
    ],
  },
  {
    ship: "cruiser",
    positions: [
      [8, 1],
      [8, 2],
      [8, 3],
    ],
  },
  {
    ship: "submarine",
    positions: [
      [3, 0],
      [3, 1],
      [3, 2],
    ],
  },
  {
    ship: "destroyer",
    positions: [
      [0, 0],
      [1, 0],
    ],
  },
];

export const shipTypesAssets = {
  [ShipType.battleship]: BattleShipIcon,
  [ShipType.cruiser]: CruiserIcon,
  [ShipType.carrier]: CarrierIcon,
  [ShipType.destroyer]: DestroyerShipIcon,
  [ShipType.submarine]: SubmarineIcon,
};
