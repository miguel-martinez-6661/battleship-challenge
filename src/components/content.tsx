import { useCallback, useState } from "react";
import { checkShotResults } from "../helpers/combat-helpers";
import { tableLayout } from "../constants/ships-constants";
import { PlayerPoints } from "./players-points";
import { CellState, Hit, Target } from "../types/game-types";
import { GameTable } from "./game-table";
import { Header } from "./header";

export const Content = () => {
  const [currentLayout, setCurrentLayout] = useState(tableLayout);
  const [currentHits, setCurrentHits] = useState<Hit>({});
  const [playerPoints, setPlayerPoints] = useState(0);

  const handleFire = useCallback(
    (target: Target) => {
      if (target.x !== null && target.y !== null) {
        const result = checkShotResults(currentHits, target);
        const newLayout = [...currentLayout];
        if (result) {
          const { ship, hits } = result;
          setCurrentHits((prev) => ({ ...prev, [ship]: hits }));
          setPlayerPoints((prev) => prev + 1);
          newLayout[target.x][target.y] = CellState.hit;
        } else {
          newLayout[target.x][target.y] = CellState.missed;
        }
        setCurrentLayout(newLayout);
      }
    },
    [currentHits, currentLayout]
  );

  const onClickPosition = useCallback(
    (x: number, y: number) => {
      handleFire({ x, y });
    },
    [handleFire]
  );

  return (
    <>
      <Header onAttack={handleFire} />
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="lg:w-1/3">
          <PlayerPoints currentHits={currentHits} playerPoint={playerPoints} />
        </div>
        <div className="lg:w-2/3">
          <GameTable
            data={currentLayout}
            handlePositionClick={onClickPosition}
          />
        </div>
      </div>
    </>
  );
};
