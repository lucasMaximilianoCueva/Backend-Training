const dynamicImport = "./utils/calc.js";

const operation = (num1: number, num2: number, operator: string) => {
  return new Promise((res, rej) => {
    import(dynamicImport).then((calc) => {
      const ops = new calc.Ops(num1, num2, operator);
      res(ops.result());
      rej('error');
    });
  });
};

const operations = async () => {
  try {
    await operation(6, 44, "sum");
    await operation(1, 10, "substract");
    await operation(99, 23, "null");
  } catch (err) {
    console.log(err);
  }
};

operations();
