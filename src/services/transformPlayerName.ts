export function playerStringToAsterisk(string: string) {
  return string.toLowerCase().replace(/[a-z]/g, '*');
}
