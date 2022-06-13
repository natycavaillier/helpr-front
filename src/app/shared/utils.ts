export function trueIndexes(array: boolean[]): number[] {
  return array.map((bool, i) => (bool ? i : -1)).filter((num) => num >= 0);
}

export function profileChecked(array: string[]): boolean[] {
  const perfis = [false, false, true];
  const labels = ['ADMIN', 'CLIENTE', 'TECNICO'];

  perfis.forEach((_, i) => {
    perfis[i] = array.includes(labels[i]);
  });

  return perfis;
}
