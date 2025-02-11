//Destructuring
const department = {
	name: "Engineering",
	director: "Ted Thompson",
	employeeCount: 25,
};

delete department.name;
console.log(department);
const { director, employeeCount } = department;
console.log(director);
console.log(employeeCount);
console.log("--------------------------------");

const obj = { a: 1, b: 2, c: 3 };
const { c, ...props } = obj;
const modifiedObj = {
	...props,
	c: 12,
};
console.log(obj); // { a: 1, b: 2, c: 3, d: 4 }
console.log(modifiedObj);

console.log("*********************************");
let x = {name:"Bob"};
let y = x;
y.name = "Marla";
console.log(x);