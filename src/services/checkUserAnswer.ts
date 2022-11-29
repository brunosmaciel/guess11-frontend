export default function checkUserAnswer(player: string, value: string): boolean {
  if (player.toLocaleLowerCase() !== value.toLocaleLowerCase()) return false;

  return true;
}
