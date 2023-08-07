/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const who = ["The dog", "My grandma", "His turtle", "My bird"];
  const action = ["ate", "peed", "crushed", "broke"];
  const what = ["my homework", "the keys", "the car"];
  const when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  const ranNum = arr => {
    return Math.floor(Math.random() * arr.length);
  };

  document.querySelector("#excuse").innerHTML =
    who[ranNum(who)] +
    " " +
    action[ranNum(action)] +
    " " +
    what[ranNum(what)] +
    " " +
    when[ranNum(when)];

  // console.log("Hello Rigo from the console!");
};
