

knap1.style.display = "none";
knap3.style.display = "none";

function accVis(hvisKlikket) {
  var knap1 = document.getElementById("knap1");
  var knap2 = document.getElementById("knap2");
  var knap3 = document.getElementById("knap3");

  if (hvisKlikket === 1) {
    if (knap2.style.display === "none" && knap3.style.display === "none") {
      knap2.style.display = "block";
      knap3.style.display = "block";
    } else {
      knap2.style.display = "none";
      knap3.style.display = "none";
    }
  } else if (hvisKlikket === 2) {
    if (knap1.style.display === "none" && knap3.style.display === "none") {
      knap1.style.display = "block";
      knap3.style.display = "block";
    } else {
      knap1.style.display = "none";
      knap3.style.display = "none";
    }
  } else if (hvisKlikket === 3) {
    if (knap1.style.display === "none" && knap2.style.display === "none") {
      knap1.style.display = "block";
      knap2.style.display = "block";
    } else {
      knap1.style.display = "none";
      knap2.style.display = "none";
    }
  }
}

    
function sorterKnapper(trykketPaa) {
var kassenKnapper = document.getElementById("kassen");
var knap1 = document.getElementById("knap1");
var knap2 = document.getElementById("knap2");
var knap3 = document.getElementById("knap3");



if (trykketPaa === 1 ) {
kassenKnapper.insertBefore(knap3, knap1.nextSibling);
kassenKnapper.insertBefore(knap2, knap1.nextSibling);


}
else if (trykketPaa === 2) {
kassenKnapper.insertBefore(knap1, knap2.nextSibling);
kassenKnapper.insertBefore(knap3, knap1.nextSibling);



} else if (trykketPaa === 3) {
kassenKnapper.insertBefore(knap1, knap3.nextSibling);
kassenKnapper.insertBefore(knap2, knap1.nextSibling);

} 
}






function sortElements() {
  var container = document.querySelector('.container');
  var elementss = Array.from(container.children);

  elementss.sort((a, b) => {
    var order = ['fire', 'syv', 'otte', 'fem', 'seks', 'tre', 'to', 'en'];
    return order.indexOf(a.classList[0]) - order.indexOf(b.classList[0]);
  });

  
  elementss.forEach(element => container.appendChild(element));
}

function sortElementstal() {
  var container = document.querySelector('.container');
  var elementss = Array.from(container.children);

  elementss.sort((a, b) => {
    var order = ['en', 'to', 'tre', 'fire', 'fem', 'seks', 'syv', 'otte'];
    return order.indexOf(a.classList[0]) - order.indexOf(b.classList[0]);
  });

 

  elements.forEach(element => container.appendChild(element));
}


function sortElementstitel() {
  var container = document.querySelector('.container');
  var elementss = Array.from(container.children);

  elementss.sort((a, b) => {
    var order = ['syv', 'otte', 'to', 'tre', 'seks','en', 'fem', 'fire'];
    return order.indexOf(a.classList[0]) - order.indexOf(b.classList[0]);
  });



  elementss.forEach(element => container.appendChild(element));
}


