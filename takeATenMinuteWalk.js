//In this function you have a starting point and you have ten minutes to take a walk and return back to the same spot.
//each direction goes one block and takes one minute.

function isValidWalk(walk) {
  let n = 0;
  let e = 0;
  let s = 0;
  let w = 0;
  walk.map((x) => {
    x === "n"
      ? (n += 1)
      : x === "e"
      ? (e += 1)
      : x === "s"
      ? (s += 1)
      : (w += 1);
  });
  return n === s && e === w && walk.length === 10;
}
