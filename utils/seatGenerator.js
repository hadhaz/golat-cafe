export function generate(request) {
  const datas = [];
  let sum = 1;

  for (let i = 0; i < request.length; i++) {
    const temp = [];
    const colLen = request[i].len;
    const col = request[i].cols;

    for (let j = 0; j < colLen; j++) {
      const temp2 = [];
      for (let k = 0; k < col * 2; k++) {
        temp2.push({ no:sum, status: "available" });
        sum += 1;
      }
      temp.push(temp2);
    }

    datas.push({
      col,
      items: temp,
    });
  }

  return datas;
}

generate([3, 3, 2, 2]);
