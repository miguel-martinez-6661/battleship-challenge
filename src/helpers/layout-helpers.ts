import { TableAxys, layout } from "../constants/ships-constants";
import { OperativeTableLayout, ShipPositionRange } from "../types/game-types";

let newPositions: OperativeTableLayout | null = null;

const getConstantAxys = (shipPositions: number[][]) => {
  const firstPos = shipPositions[0];
  const lastPos = shipPositions[shipPositions.length - 1];
  return firstPos[0] === lastPos[0] ? TableAxys.X : TableAxys.Y;
};

const getShipPositionRange = (shipPositions: number[][]): ShipPositionRange => {
  const axys = getConstantAxys(shipPositions);

  const positions = axys
    ? shipPositions.map((p) => p[TableAxys.X])
    : shipPositions.map((p) => p[TableAxys.Y]);

  const dynamicPositions = positions.reduce((acc, item) => {
    return {
      ...acc,
      [`${item}${axys ? "X" : "Y"}`]: true,
    };
  }, {});

  return {
    axys,
    positions: {
      constant: shipPositions[0][axys].toString(),
      dynamic: dynamicPositions,
    },
  };
};

export const getShipsLayout = () => {
  if (!newPositions) {
    const newPositionsObj: OperativeTableLayout = {};
    layout.map((ship) => {
      const newPosition = getShipPositionRange(ship.positions);
      const constantIndex = newPosition.positions.constant;
      const constantAxys = newPosition.axys ? "Y" : "X";
      newPositionsObj[`${constantIndex}${constantAxys}`] = {
        ship: ship.ship,
        positions: newPosition.positions.dynamic,
      };
    });

    newPositions = newPositionsObj;
  }

  return newPositions;
};
