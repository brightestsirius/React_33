//                  Developer
//            /         |          \
// FrontendDeveloper  TechLead   BackendDeveloper
//         |                           |
//   FrontendLead                 BackendLead

class Developer {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  writeCode() {
    return `${this.fullName} is writing code.`;
  }
}

class FrontendDeveloper extends Developer {
  constructor(firstName, lastName, framework) {
    super(firstName, lastName);
    this.framework = framework;
  }

  get stack() {
    return `Frontend (${this.framework})`;
  }

  buildPage(pageName) {
    return `${this.fullName} built ${pageName} page with ${this.framework}.`;
  }

  writeCode(){
    return `${super.writeCode()}. Using ${this.framework}.`;
  }
}

class BackendDeveloper extends Developer {
  constructor(firstName, lastName, database) {
    super(firstName, lastName);
    this.database = database;
  }

  get stack() {
    return `Backend (${this.database})`;
  }

  createApi(endpoint) {
    return `${this.fullName} created ${endpoint} endpoint with ${this.database}.`;
  }
}

class FrontendLead extends FrontendDeveloper {
  constructor(firstName, lastName, framework, teamName) {
    super(firstName, lastName, framework);
    this.teamName = teamName;
  }

  get position() {
    return `Frontend Lead of ${this.teamName}`;
  }

  reviewCode(developer) {
    return `${this.fullName} reviewed code of ${developer.fullName}.`;
  }
}

class BackendLead extends BackendDeveloper {
  constructor(firstName, lastName, database, teamName) {
    super(firstName, lastName, database);
    this.teamName = teamName;
  }

  get position() {
    return `Backend Lead of ${this.teamName}`;
  }

  reviewCode(developer) {
    return `${this.fullName} reviewed code of ${developer.fullName}.`;
  }
}

class TechLead extends Developer {
  constructor(firstName, lastName, project) {
    super(firstName, lastName);
    this.project = project;
  }

  get position() {
    return `Tech Lead of ${this.project}`;
  }

  planSprint(sprintNumber) {
    return `${this.fullName} planned sprint #${sprintNumber} for ${this.project}.`;
  }
}

const frontendDev = new FrontendDeveloper(`Olena`, `Koval`, `React`);
const backendDev = new BackendDeveloper(`Taras`, `Bondar`, `PostgreSQL`);
const techLead = new TechLead(`Katya`, `Shevchenko`, `Admin Panel`);
const frontendLead = new FrontendLead(`Iryna`, `Melnyk`, `React`, `Web`);
const backendLead = new BackendLead(`Andriy`, `Shevchuk`, `PostgreSQL`, `API`);

// console.log(frontendDev);
// console.log(backendDev);
// console.log(techLead);

// console.log(frontendLead);
// console.log(backendLead);

// console.log(frontendDev.stack);
// console.log(frontendDev.writeCode());
// console.log(frontendDev.buildPage(`Login`));

// console.log(backendDev.stack);
// console.log(backendDev.writeCode());
// console.log(backendDev.createApi(`/users`));

// console.log(techLead.position);
// console.log(techLead.writeCode());
// console.log(techLead.planSprint(12));

// console.log(frontendLead.position);
// console.log(frontendLead.stack);
// console.log(frontendLead.buildPage(`Dashboard`));
// console.log(frontendLead.reviewCode(frontendDev));

// console.log(backendLead.position);
// console.log(backendLead.stack);
// console.log(backendLead.createApi(`/orders`));
// console.log(backendLead.reviewCode(backendDev));

// SOLID Principles

// Liskov
class Rectangle {
  constructor(width, height){
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}

const rectangle = new Rectangle(4, 5);
const square = new Square(4);

// console.log(rectangle.area);
// console.log(square.area);


// Static property

class CompanyDigital{
  static companyType = `Digital`;
  static companyCountry = `France`;
}

class CompanyTech{
  static companyType = `Tech`;
  static companyCountry = `Ukraine`;

  #category = `high`;

  #getCategory() {
    return `Private info: ${this.#category}`;
  }

  constructor(name){
    this.name = name;
  }

  static getCompanyInfo() {
    return `${CompanyTech.companyType} company from ${CompanyTech.companyCountry}.`;
  }

  getCompanyInfo(){
    return `Company name is ${this.name}.`;
  }
}

const Hillel = new CompanyTech(`Hillel`);
const Google = new CompanyTech(`Google`);

// console.log(Hillel);
// console.log(Google);

// console.log(CompanyTech.companyType);
// console.log(CompanyTech.companyCountry);

// console.log(CompanyTech.getCompanyInfo())
// console.log(Hillel.getCompanyInfo());

// console.log(CompanyTech.#category);

// Static and private properties and methods

// class Employee{
//   constructor(firstName, lastName, salary) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.salary = salary;
//   }
// }

class Employee {
  static company = `Hillel Tech`;
  static count = 0;

  #salary;

  constructor(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.#salary = salary;
    Employee.count++;
  }

  static getCount() {
    return `${Employee.company} has ${Employee.count} employees.`;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get salary() {
    return this.#formatMoney(this.#salary);
  }

  #formatMoney(amount) {
    return `${amount}$`;
  }

  raiseSalary(percent) {
    this.#salary = this.#salary + (this.#salary * percent) / 100;
    return `${this.fullName} got a ${percent}% raise.`;
  }

  getInfo() {
    return `${this.fullName} works at ${Employee.company}. Salary: ${this.salary}.`;
  }
}

class TeamLead extends Employee {
  static count = 0;

  #bonus;

  constructor(firstName, lastName, salary, teamName, bonus) {
    super(firstName, lastName, salary);
    this.teamName = teamName;
    this.#bonus = bonus;
    TeamLead.count++;
  }

  static getLeadsCount() {
    return `Team leads: ${TeamLead.count}.`;
  }

  get bonus() {
    return `${this.#bonus}$`;
  }

  getInfo() {
    return `${super.getInfo()} Leads ${this.teamName} team. Bonus: ${this.bonus}.`;
  }
}

const employee = new Employee(`Olena`, `Koval`, 2000);
const teamLead = new TeamLead(`Iryna`, `Melnyk`, 3500, `Web`, 500);

// console.log(employee);
// console.log(teamLead);

// console.log(Employee.company);
// console.log(TeamLead.company);
// console.log(Employee.getCount());
// console.log(TeamLead.getLeadsCount());
// console.log(employee.company);

// console.log(employee.salary);
// console.log(employee.raiseSalary(10));
// console.log(employee.salary);
// console.log(employee.getInfo());

// console.log(teamLead.salary);
// console.log(teamLead.bonus);
// console.log(teamLead.raiseSalary(20));
// console.log(teamLead.getInfo());

let userName = new String(`Katya`);
// console.log(userName);

// userName = userName.toUpperCase();

// let slicedUserName = userName.slice(0, 3); // Kat
// let secondLetter = userName.charAt(1);

// console.log(userName);
// console.log(slicedUserName);
// console.log(secondLetter);

let firstThreeItemToUpper = userName
                              .slice(0,3) // kat
                              .toUpperCase() // KAT
                              .slice(0,2) // KA
                              .toLowerCase() // ka
console.log(firstThreeItemToUpper);