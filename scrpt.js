// window.alert("This calculates only if you handle with keyboards !!")
let h1 = document.createElement("h1");
h1.id = "title";
h1.innerHTML = "Calculator";
const para = document.createElement("p");
para.id = "description";
para.innerHTML =
  "<strong>Calculator</strong> using Javascript DOM Manupilation";
function calculator(
  tagname,
  content,
  attrname,
  attrvalue,
  idvalue,
  classvalue
) {
  let Container = document.createElement(tagname);
  Container.innerText = content;
  Container.setAttribute(attrname, attrvalue);
  Container.id = idvalue;
  Container.classList.add(classvalue);
  return Container;
}
let div1 = calculator("div", "", "id", "div1", "head", "container");
let div2 = calculator("div", "", "id", "div1", "childHead", "calculator");
let input = calculator("input", "", "placeholder", "0", "result", "result");
let clear = calculator("button", "C", "type", "button", "clear", "clear");
let delButton = calculator("button", "Del", "type", "button", "delete", "del");
let dot = calculator("button", ".", "type", "button", ".", "bt");
let star = calculator("button", "*", "type", "button", "*", "bt");
let seven = calculator("button", "7", "type", "button", "7", "bt");
let eight = calculator("button", "8", "type", "button", "8", "bt");
let nine = calculator("button", "9", "type", "button", "9", "bt");
let divide = calculator("button", "/", "type", "button", "/", "bt");
let four = calculator("button", "4", "type", "button", "4", "bt");
let five = calculator("button", "5", "type", "button", "5", "bt");
let six = calculator("button", "6", "type", "button", "6", "bt");
let minus = calculator("button", "-", "type", "button", "subtract", "bt");
let one = calculator("button", "1", "type", "button", "1", "bt");
let two = calculator("button", "2", "type", "button", "2", "bt");
let three = calculator("button", "3", "type", "button", "3", "bt");
let add = calculator("button", "+", "type", "button", "add", "bt");
let zero = calculator("button", "0", "type", "button", "0", "bt");
let dzero = calculator("button", "00", "type", "button", "00", "bt");
let equal = calculator("button", "=", "type", "button", "equal", "ebt");

div1.append(h1, para, div2);
div2.append(
  input,
  clear,
  delButton,
  dot,
  star,
  seven,
  eight,
  nine,
  divide,
  four,
  five,
  six,
  minus,
  one,
  two,
  three,
  add,
  zero,
  dzero,
  equal
);
document.body.append(div1);

const buttons = document.querySelectorAll(".bt");
buttons.forEach((button) =>
  button.addEventListener("click", () => fun(button.textContent))
);
function fun(num) {
  input.value += num;
}
const eql = document.querySelector(".ebt");
eql.addEventListener("click", foo);
function foo() {
  try {
    input.value = eval(input.value);
  } catch (err) {
    alert("only numbers are allowed");
  }
}
const clr = document.querySelector(".clear");
clr.addEventListener("click", clrFunction);
function clrFunction() {
  input.value = "";
}
const del = document.querySelector(".del");
del.addEventListener("click", delFunction);
function delFunction() {
  input.value = input.value.slice(0, -1);
}
