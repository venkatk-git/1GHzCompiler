export function processCode(code) {
  return code
    .split("\n")
    .map((line) => line.trim())
    .join("");
}
