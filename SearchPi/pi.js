let raw;
let digits, searchBox;
let indexP;
let button = [];

function preload() {
  raw = loadStrings('pi-million.txt');
}

function indexOf(txt, search) {
  let start = search.charAt(0);
  for (let i = 0; i < txt.length; i++) {
    if (txt.charAt(i) === start) {
      let found = true;
      for (let j = 1; j < search.length; j++) {
        if (txt.charAt(i + j) !== search.charAt(j)) {
          found = false;
          break;
        }
      }
      if (found) {
        return i;
      }
    }
  }
  return -1;
}


function searchItUp() {
  let search = searchBox.value();
  console.log(search);
  let index = indexOf(digits, search);

  if (index > 0) {
    indexP.html("Found starting at "+ (index-1) +"th digit of &pi;")

  } else {
    indexP.html('not found in the first 1 million digits');
  }
}

function setup() {
  noCanvas();
  let div0 = createDiv().addClass('container');
  let div1 = createDiv().addClass('row col-12 mt-4 top');
  div0.child(div1);

  digits = raw[0];
  searchBox = createInput('');

  div1.child(searchBox);
  searchBox.addClass('input');

  searchBox.input(searchItUp);

  indexP = createP('Searching........');
  div1.child(indexP);


  // let div2 = createDiv().addClass('row col-12 d-flex justify-content-center');
  // div0.child(div2);

  let div2 = [];

  for(let i=0;i<4;i++){
    div2[i] = createDiv().addClass('row col-12 d-flex justify-content-center');
    div0.child(div2[i]);
    for(let j=0;j<3;j++){
      if(i<3){
        button[3*i +j+1] = createButton(3*i +j+1);
        button[3*i +j+1].addClass('btn btn-dark');
        div2[i].child(button[3*i +j+1]);
    }
    else {
      if(j==1){
        button[0] = createButton(0);
        button[0].addClass('btn btn-dark');
        div2[i].child(button[0]);
        }
      }
    }
  }
  let bottomP = createP('Type in Search Box (or tap above) for a number in digits of &pi;');
  div0.child(bottomP);
  for(let i=0;i<10;i++){

    button[i].mousePressed(function(){
      let v = searchBox.value();
      searchBox.value(v+i);
      let search = searchBox.value();
      console.log(search);
      let index = indexOf(digits, search);

      if (index > 0) {
        indexP.html("Found starting at "+ (index-1) +"th digit of &pi;")

      } else {
        indexP.html('not found in the first 1 million digits');
      }
    });
  }

  
}
