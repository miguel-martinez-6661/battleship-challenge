export const hugeLayout = [
  ...[...new Array(10000)].map(() => ({
    ship: "carrier",
    positions: [
      [2, 9],
      [3, 9],
      [4, 9],
      [5, 9],
      [6, 9],
    ],
  })),
];
