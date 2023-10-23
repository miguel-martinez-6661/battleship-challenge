export enum CellState {
  missed = "missed",
  hit = "hit",
}

export interface Target {
  x: number | null;
  y: number | null;
}

export interface ChangeTargetEvent {
  position: "x" | "y";
  value: number;
}

export interface ShotResults {
  ship: string;
  hits: number;
  count: number;
}

export interface Hit {
  [key: string]: number;
}

export interface ShipPositionRange {
  axys: number;
  positions: {
    constant: string;
    dynamic: {
      [key: string]: boolean;
    };
  };
}

export interface OperativeTableLayout {
  [key: string]: {
    ship: string;
    positions: {
      [key: string]: boolean;
    };
  };
}
