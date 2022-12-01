export function spreader(arr) {
  return arr.map((item, idx) => {
    if (idx < arr.length - 1) {
      return item.no + ", ";
    }
    return item.no;
  });
}

console.log(spreader([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
