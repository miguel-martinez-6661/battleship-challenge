import MissIcon from "../assets/Miss.png";
import HitIcon from "../assets/Hit.png";
import { CellState } from "../types/game-types";

interface CellProps {
  value: CellState | null;
  onClick: (x: number, y: number) => void;
  x: number;
  y: number;
}

interface GameTableProps {
  data: CellState[][];
  handlePositionClick: (x: number, y: number) => void;
}

export const Cell = ({ value = null, x, y, onClick }: CellProps) => {
  const asset = {
    ["missed"]: MissIcon,
    ["hit"]: HitIcon,
    ["empty"]: null,
  };

  const handleClick = () => {
    if (!value) {
      onClick(x, y);
    }
  };

  return (
    <div
      className="flex items-center justify-center bg-white border border-gray-500 h-10 md:h-14"
      onClick={handleClick}
    >
      <img src={asset[value || "empty"] || ""} className="h-12" />
    </div>
  );
};

export const GameTable = ({ data, handlePositionClick }: GameTableProps) => {
  return (
    <div className="bg-yellow-500 w-full h-full p-1">
      <div className="grid grid-rows-10 grid-cols-10">
        {data.map((row: CellState[], r: number) => {
          return row.map((col: CellState, c: number) => {
            return (
              <Cell value={col} x={r} y={c} onClick={handlePositionClick} />
            );
          });
        })}
      </div>
    </div>
  );
};
