//This function removes all non-letters/spaces from a string

function removeChars(s) {
  return s.replace(/[^a-zA-Z\s]/g, "");
}
