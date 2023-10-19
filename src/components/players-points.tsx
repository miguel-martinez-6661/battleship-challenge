import { Hit } from "../types/game-types";
import { ShipsStatusView } from "./ships-status-view";

interface PlayerPointsProps {
  currentHits: Hit;
  playerPoint: number;
}

export const PlayerPoints = ({
  currentHits,
  playerPoint,
}: PlayerPointsProps) => {
  return (
    <div>
      <div className="flex w-full md:h-24">
        <div className="flex flex-col justify-center items-center bg-yellow-500 w-full">
          <h2 className="text-3xl font-bold">{playerPoint || "00"}</h2>
          <h2 className="font-semibold">player 1</h2>
        </div>
        <div className="flex flex-col justify-center items-center bg-green-500 w-full">
          <h2 className="text-3xl font-bold">00</h2>
          <h2 className="font-semibold">player 2</h2>
        </div>
      </div>
      <ShipsStatusView currentHits={currentHits} />
    </div>
  );
};
