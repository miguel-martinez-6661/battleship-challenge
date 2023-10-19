import { useMemo } from "react";
import {
  ShipType,
  shipTypes,
  shipTypesAssets,
} from "../constants/ships-constants";
import { Hit } from "../types/game-types";
import HitSmallIcon from "../assets/Hit-small.png";
import MissSmallIcon from "../assets/Miss-small.png";

interface ShipStatusViewProps {
  currentHits: Hit;
}

export const ShipsStatusView = ({ currentHits }: ShipStatusViewProps) => {
  const shipStatus = useMemo(() => {
    return Object.entries(shipTypes).map((ship) => ({
      name: ship[0],
      icon: shipTypesAssets[ship[0] as ShipType],
      status: currentHits?.[ship?.[0]]
        ? ship[1].size - currentHits[ship[0]]
        : ship[1].size,
      hits: currentHits?.[ship?.[0]] || 0,
    }));
  }, [currentHits]);

  return (
    <div className="grid grid-flow-row grid-cols-2 md:grid-cols-1 my-5 w-full">
      {shipStatus.map(({ name, icon, status, hits }) => (
        <div key={name} className="flex items-center md:gap-5">
          <img src={icon} className="w-16 md:h-16 md:w-36 mb-5" />
          <div className="flex items-center">
            {[...new Array(hits)]?.map((_, index) => (
              <img key={index} src={HitSmallIcon} className="w-5 h-5" />
            ))}
            {[...new Array(status)]?.map((_, index) => (
              <img key={index} src={MissSmallIcon} className="w-5 h-5" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
