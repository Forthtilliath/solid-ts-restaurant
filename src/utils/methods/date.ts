export const shortFormatter = new Intl.ListFormat("fr", {
  style: "short",
  type: "conjunction",
});


/**
 * The function takes a number of seconds as input and returns a formatted string displaying the
 * equivalent time in hours, minutes, and seconds.
 * @param {number} secs - The number of seconds to be converted into hours, minutes, and seconds
 * format.
 * @returns a formatted string that displays the time in hours, minutes, and seconds. The format is
 * based on the input parameter `secs`, which is the total number of seconds to be displayed. The
 * string includes the number of hours, minutes, and seconds, with each value separated by a space and
 * followed by the corresponding unit of time (i.e. "heures", "minutes")
 */
export function formatSecondsToFullTime(secs: number) {
  const details = ["heures", "minutes", "secondes"];
  const hours = Math.floor(secs / 3600);
  const minutes = Math.floor(secs / 60) % 60;
  const seconds = secs % 60;

  const arr = [hours, minutes, seconds]
    .map((v) => (v < 10 ? "0" + v : "" + v))
    .map((t, i) => `${t} ${details[i]}`)
    .filter((v, i) => !v.startsWith("00") || i > 0);
  
  return shortFormatter.format(arr);
}
