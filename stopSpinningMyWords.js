//This function takes a string and reverses any words that are at least 5 in length

function spinWords(string) {
  return string
    .split(" ")
    .map((x) => (x.length >= 5 ? x.split("").reverse("").join("") : x))
    .join(" ");
}
