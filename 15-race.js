/* 
Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. 
Young B knows she runs faster than A, and furthermore has not finished her cabbage.

When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. 
How long will it take B to catch A?

More generally: given two speeds v1 (A's speed, integer > 0) 
and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

The result will be an array [hour, min, sec] which is the time needed in 
hours, minutes and seconds (round down to the nearest second) or a string in some languages.

If v1 >= v2 then return nil, nothing, null, None 
or {-1, -1, -1} for C++, C, Go, Nim, Pascal, COBOL, Erlang, [-1, -1, -1] for Perl,[] for Kotlin or "-1 -1 -1".
 */
function minTommss(minutes) {
  const hour = Math.floor(Math.abs(minutes / 60));
  const min = Math.floor(Math.abs(hour * 60 - minutes));
  const sec = Math.floor((Math.abs(minutes) * 60) % 60);

  return [hour, min, sec];
}

const race = (v1, v2, g) => {
  if (v1 >= v2) return null;

  return minTommss((g * 60) / (v2 - v1));
};

console.log(race(720, 850, 70));
