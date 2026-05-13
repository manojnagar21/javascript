const Person = {
    id: 1,
    name: "Manoj",
    salary: 25000.00
};
const idNew = Person.id;
const nameNew = Person.name;
const salaryNew = Person.salary;
console.log(idNew);
console.log(nameNew);
console.log(salaryNew);


const { id, name, salary } = Person; // by default variable name is key name
console.log(id);
console.log(name);
console.log(salary);

const { id: a, name: b, salary: c } = Person; // by default variable name is key name
console.log(a);
console.log(b);
console.log(c);

const {id: d, name: e, ...restProps} = Person;
console.log(restProps);