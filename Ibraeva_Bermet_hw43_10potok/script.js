"use strict";
//использоваие строго режима для обработки данных

//console.log(document);
//console.log(document.head);
//console.log(document.body);
//document.body.style.background = "red";

//console.log(document.body.childNodes);
//console.log(document.querySelector("#btn1"));


//console.log(document.querySelector("#btn1").parentNode);
//console.log(document.querySelector("#btn1").nextSibling);
//console.log(document.querySelector("#btn1").previousSibling);

//console.log(document.body.childNodes);

for (let per of document.body.childNodes) {
  if (per.nodeName == "#text") {
    continue;
  }
  console.log(per.nodeName)

}




