class Stringer {
  constructor(string, length) {
    this.string = string;
    this.length = length;
    //states
    this.innerString = string;
    this.innerLength = length;
  }

  increase(x) {
    this.length += x;
    this.innerString =
      this.string.substring(0, this.length) +
      ".".repeat(this.innerString.length - this.length);
  }

  decrease(x) {
    if (this.length > x && x > 0) {
      this.length -= x;
      this.innerString =
        this.innerString.slice(0, this.length) +
        ".".repeat(this.innerString.length - this.length);
    } else {
      this.length = 0;
      return (this.innerString = "...");
    }
  }

  toString() {
    return `${this.innerString}`;
  }
}

let test = new Stringer("Test", 5);
console.log(test.toString());
test.decrease(4);
console.log(test.toString());
test.increase(1);
console.log(test.toString());
