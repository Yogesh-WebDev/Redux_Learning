import { compose, pipe } from 'lodash/fp';


let input = "       JavaScript       ";
let output = "<div>" + input.trim() + "</div>";


//trim
//wrapInDiv

const trim = str => str.trim();
const wrap = type=>str => `<${type}>${str}</${type}>`;
const toLowerCase = str => str.toLowerCase();
const result = wrapInDiv(trim(input));//this is called functional composition

const transform = compose(wrapInDiv, toLowerCase, trim);
const transform = pipe( trim,toLowerCase,wrap('div'));//to solve reading problem of compose from right to left
transform(input);//to overcome functional composition parenthesis problem
