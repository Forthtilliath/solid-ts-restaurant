import { createSignal, onCleanup } from "solid-js";

export function createTimeBetween(start: Time, end: Time) {
  const [isBetween, setIsBetween] = createSignal<boolean>();
  const [diffWithStart, setDiffWithStart] = createSignal<number>();

  const check = () => {
    const currentDate = new Date();

    const [sHours, sMinutes, sSeconds] = start.split(":").map(Number);
    const startDate = new Date(currentDate.getTime());
    startDate.setHours(sHours, sMinutes, sSeconds);

    const [eHours, eMinutes, eSeconds] = end.split(":").map(Number);
    const endDate = new Date(currentDate.getTime());
    endDate.setHours(eHours, eMinutes, eSeconds);

    setIsBetween(startDate < currentDate && endDate > currentDate);
    setDiffWithStart((startDate.getTime() - currentDate.getTime()) / 1000);
  };

  let si = setInterval(() => check(), 1000);

  onCleanup(() => clearInterval(si));

  return [isBetween, diffWithStart] as const;
}
