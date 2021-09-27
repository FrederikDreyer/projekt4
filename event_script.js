console.log("det virker");

filterSelection("all")
function filterSelection(c) {
  var x, z;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (z = 0; z < x.length; z++) {
    removeClass(x[z], "show");
    if (x[z].className.indexOf(c) > -1) addClass(x[z], "show");
  }
}

// viser filtrede elementer
function addClass(element, name) {
  var z, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (z = 0; z < arr2.length; z++) {
    if (arr1.indexOf(arr2[z]) == -1) {
      element.className += " " + arr2[z];
    }
  }
}

function removeClass(element, name) {
  var z, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (z = 0; z < arr2.length; z++) {
    while (arr1.indexOf(arr2[z]) > -1) {
      arr1.splice(arr1.indexOf(arr2[z]), 1);
    }
  }
  element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var z = 0; z < btns.length; z++) {
  btns[z].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// åbner om event

function myFunction() {
  var x = document.getElementById("myDIV1");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction2() {
  var x = document.getElementById("myDIV2");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction3() {
  var x = document.getElementById("myDIV3");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction4() {
  var x = document.getElementById("myDIV4");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction5() {
  var x = document.getElementById("myDIV5");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction6() {
  var x = document.getElementById("myDIV6");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction7() {
  var x = document.getElementById("myDIV7");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction8() {
  var x = document.getElementById("myDIV8");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction9() {
  var x = document.getElementById("myDIV9");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction10() {
  var x = document.getElementById("myDIV10");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction11() {
  var x = document.getElementById("myDIV11");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction12() {
  var x = document.getElementById("myDIV12");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction13() {
  var x = document.getElementById("myDIV13");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction14() {
  var x = document.getElementById("myDIV14");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction15() {
  var x = document.getElementById("myDIV15");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction16() {
  var x = document.getElementById("myDIV16");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction17() {
  var x = document.getElementById("myDIV17");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction18() {
  var x = document.getElementById("mobil_nav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
