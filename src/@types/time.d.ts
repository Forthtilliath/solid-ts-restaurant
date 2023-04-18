declare global {
  type ZeroBefore<N extends number> = N extends
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    ? `0${N}`
    : `${N}`;

  type Enumerate<
    N extends number,
    Acc extends number[] = []
  > = Acc["length"] extends N
    ? ZeroBefore<Acc[number]>
    : Enumerate<N, [...Acc, Acc["length"]]>;

  type IntRange<F extends number, T extends number> = Exclude<
    Enumerate<T>,
    Enumerate<F>
  >;

  type Range24 = IntRange<0, 24>;
  type Range60 = IntRange<0, 60>;

  type Time = `${Range24}:${Range60}:${Range60}`;
}

export {};
