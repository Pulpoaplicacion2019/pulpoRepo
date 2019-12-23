const obj = { prueba1: { p1: "1", p2: "2" }, prueba2: { p5: "1", p6: "2" } };

const func = () => {
  console.log(obj);
  let list = Object.values(obj);
  console.log(list);
  return list;
};

function sum() {
  console.log(obj);
  let list = Object.values(obj);
  console.log(list);
}

exports.func = func;
