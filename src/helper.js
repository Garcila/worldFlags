export function shuffle(arr) {
  let arrClone = arr.slice(0);
  return arrClone.sort(function() {
    return Math.random() - 0.5;
  });
};