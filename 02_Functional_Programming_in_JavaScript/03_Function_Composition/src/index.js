let input = "       JavaScript       ";
let output = "<div>" + input.trim() + "</div>";


//trim
//wrapInDiv

const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
const result = wrapInDiv(trim(input));//this is called functional composition