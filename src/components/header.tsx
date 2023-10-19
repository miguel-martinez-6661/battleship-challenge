import { ChangeEvent, useState } from "react";
import { Target } from "../types/game-types";
import { INITIAL_TARGET } from "../constants/initial-values";

interface HeaderProps {
  onAttack: (target: Target) => void;
}
export const Header = ({ onAttack }: HeaderProps) => {
  const [target, setTarget] = useState<Target>(INITIAL_TARGET);
  const [isAbleToFire, setIsAbleToFire] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    const decimalPart = value.toString().split(".")[0];
    if (value < 10 && decimalPart) {
      setTarget({ x: Math.floor(value), y: Number(decimalPart.at(0)) });
      setIsAbleToFire(true);
    }
  };

  const handleOnAttack = () => {
    onAttack(target);
  };

  return (
    <div className="flex items-center bg-purple-500 w-full p-2 gap-5 h-16">
      <div className="flex bg-gray-900 rounded w-2/12 h-full justify-center items-center">
        <h2 className="font-semibold text-white"></h2>
      </div>
      <div className="bg-white w-7/12 h-full">
        <input
          type="number"
          className="w-9/12 h-full px-2"
          onChange={handleChange}
        />
        <button
          className={`${
            isAbleToFire ? "bg-purple-900" : "bg-purple-300"
          } w-3/12 text-white h-full`}
          onClick={handleOnAttack}
          disabled={!isAbleToFire}
        >
          Fire
        </button>
      </div>
    </div>
  );
};
