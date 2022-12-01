export function spreader(arr) {
  return arr.map((item, idx) => {
    if (idx < arr.length - 1) {
      return item.no + ", ";
    }
    return item.no;
  });
}