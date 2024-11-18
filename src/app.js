/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { FlatESLint } from "eslint/use-at-your-own-risk";

window.onload = function() {
  let pronounList = ["the", "our"];
  let adjetiveList = ["great", "big"];
  let nounsList = ["jogger", "racoon"];

  pronounList.forEach(pronoun => {
    adjetiveList.forEach(adjetive => {
      nounsList.forEach(noun => {
        console.log(`${pronoun}${adjetive}${noun}.com`);
      });
    });
  });

  console.log("Hello Rigo from the console!");
};
