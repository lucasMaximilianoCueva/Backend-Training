"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ops = void 0;
const sum = (a, b) => a + b;
const substract = (a, b) => a - b;
class Ops {
    constructor(num1, num2, operator) {
        this.a = num1;
        this.b = num2;
        this.operator = operator;
    }
    result() {
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
exports.Ops = Ops;
