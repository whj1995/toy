export function parseSel(sel: string) {
  let type = '';
  const classes: string[] = [];
  let classCount = -1;
  let id = '';

  let state: 'type' | 'class' | 'id' = 'type';

  for (let i = 0; i < sel.length; ++i) {
    if (sel[i] === '.') {
      state = 'class';
      classes[++classCount] = '';
      continue;
    }
    if (sel[i] === '#') {
      state = 'id';
      continue;
    }
    if (state === 'type') {
      type += sel[i];
    }
    if (state === 'class') {
      classes[classCount] += sel[i];
    }
    if (state === 'id') {
      id += sel[i];
    }
  }

  return { type, classes, id: id || undefined };
}
