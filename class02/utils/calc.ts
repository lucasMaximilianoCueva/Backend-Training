const sum = (a: number, b: number) => a + b;
const substract = (a: number, b: number) => a - b;

export class Ops {
  private a: number;
  private b: number;
  private operator: string;

  constructor(num1: number, num2: number, operator: string) {
    this.a = num1;
    this.b = num2;
    this.operator = operator;
  }

  public result() {
    switch (this.operator) {
      case "sum":
        console.log(sum(this.a, this.b));
        break;
      case "substract":
        console.log(substract(this.a, this.b));
        break;
      default:
        console.log(`"${this.operator}" is not a valid operator`);
        break;
    }
  }
}
