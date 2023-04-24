function generateRandomChar(length = 6) {
  let result = "";
  const base62Chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * base62Chars.length);
    result += base62Chars[randomIndex];
  }
  return result;
}

module.exports = generateRandomChar;
