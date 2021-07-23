import {  produce} from 'immer';


let book = { title: "Harry Potter" };

function publish(book) {
    return produce(book, draftBook => {
        draftBook.isPublished = true;
    })
}

let updated=publish(book);

//console.log(book.get('title'));
console.log(book);
console.log(updated);

///exercise-1
const input = { tag: "JAVASCRIPT" };
let output = `"(${input.tag.toLocaleLowerCase()})"`
console.log(output);

///exercise-2
const recipe = { name: 'Spaghetti Bolognese', ingredients: ['egg', 'salt'] };
function add(obj,ingredient) {
    return produce(obj, newRecipe => {
        newRecipe.ingredients.push(ingredient);
    })
}
function replace(obj,ingredient,replaceing) {
    return produce(obj, newRecipe => {
        const index = newRecipe.indexOf(ingredient);
        newRecipe.ingredients[index] = replaceing;
    })
}
function remove(obj,ingredient) {
    return produce(obj, newRecipe => {
        newRecipe.ingredients.filter(ing=>ing!==ingredient);
    })
}

const added = add(recipe, 'cream');
const updeted = replace(recipe, 'egg', 'egg white');
const removed = remove(recipe, 'egg');
console.log(added);
console.log(updeted);
console.log(removed);