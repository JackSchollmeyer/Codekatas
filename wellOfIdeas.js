//This function checks how many 'good' ideas are in a list and returns the appropriate string

function well(x) {
  let result = x.filter((words) => words === "good");
  return result.length == 1 || result.length == 2
    ? "Publish!"
    : result.length >= 3
    ? "I smell a series!"
    : "Fail!";
}
