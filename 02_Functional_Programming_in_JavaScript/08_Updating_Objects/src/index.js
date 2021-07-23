const person = {
    name: "Yogesh", addres: {
        country: 'USA',
        city:"San Francisco"
} };
//1-way
const updated = Object.assign({}, person, { name: 'raut', age: 25 });
//2-way
const updated = {
    ...person,
    addres: {
        ...person.addres,
        city:"New York"
    },
    name: 'Bob', age: 25
};
console.log(person);


