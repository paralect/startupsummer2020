export const tail = arr => {
  return !arr ? undefined : !arr.length ? undefined : arr.slice(1);
}
