class Company {
  departments = {};
  constructor() {}

  addEmployee(name, salary, position, department) {
    if (
      salary < 0 ||
      name === " " ||
      salary === " " ||
      position === " " ||
      department === " "
    ) {
      throw new Error("Invlid input!");
    }
    let employee = {};
    employee.name = name;
    employee.salary = salary;
    employee.position = position;
    employee.department = department;

    if (!this.departments[department]) {
      this.departments[department] = [];
    }

    this.departments[department].push(employee);

    return `New employee is hired. Name: ${employee.name}. Position: ${employee.position}`;
  }

  bestDepartment() {
    let highestAvgSal = 0;
    let bestDept = "";

    for (const department in this.departments) {
      let totalSalary = 0;
      let employeeCount = 0;

      for (const employee of this.departments[department]) {
        totalSalary += employee.salary;
        employeeCount++;
      }

      let avgSal = totalSalary / employeeCount;

      if (avgSal > highestAvgSal) {
        highestAvgSal = avgSal;
        bestDept = department;
      }
    }

    let result = `Best Department is: ${bestDept}\n`;
    result += `Average salary: ${highestAvgSal.toFixed(2)}\n`;

    let employees = this.departments[bestDept];

    let sortedBySalaryAndName = employees.sort((a, b) => {
      if (a.salary === b.salary) {
        return a.name.localeCompare(b.name);
      } else {
        return b.salary - a.salary;
      }
    });

    // Output the sorted employees' names
    for (const employee of sortedBySalaryAndName) {
      result += `${employee.name} ${employee.salary} ${employee.position}\n`;
    }
    return result.trim();
  }
}

let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Human resources");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
console.log("----------");
console.log(
  "Best Department is: Human resources\nAverage salary: 1675.00\nStanimir 2000 engineer\nGosho 1350 HR"
);
