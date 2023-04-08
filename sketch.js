let input, button, result, question, submit, answer;

// let Answer1;

let colorInput = document.getElementById('color-input');
let c;

function setup() {
    // make the div called "mySketch" a p5.js canvas element
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');

    result = createElement('p', 'Do you want to destroy the patriarchy?    Type: yes, ya, yeah or hell yes');
    result.style('font-size', '30px');
    result.style('margin', '0px');
    result.style('text-align', 'center');
    result.id('answer');
    answer = document.getElementById('answer');
    colorInput.appendChild(answer);

    // result = createElement('p', 'Type: yes, absolutely, yeah');
    // result.style('font-size', '30px');
    // result.style('margin', '0px');
    // result.style('text-align', 'center');
    // result.id('answer');
    // answer = document.getElementById('answer');
    // colorInput.appendChild(answer);

    input = createInput('');
    input.id('question');

    question = document.getElementById('question');
    colorInput.appendChild(question);

  
    button = createButton('submit');
    button.id('submit');
    submit = document.getElementById('submit');
    colorInput.appendChild(submit);
    button.mousePressed(output);


  }
  
  function draw() {

  }
  
  function windowResized() {
    // resize the canvas when the screen is resized.
    resizeCanvas(windowWidth, windowHeight);
}

// function myInputEvent() {
//   console.log('you are typing: ', this.value());
// }

function output() {
  const answers = input.value();
  input.value('');

  let answer1 = createP('');
  answer1.id('answer-1')
  answer1.style('font-size', '30px');
  answer1.style('margin', '0px');

  let Answer1 = document.getElementById('answer-1');
  colorInput.appendChild(Answer1);
  Answer1.innerHTML = answers;

  let a = createA('next.html', 'next');

  if (answers == "yes"){
    Answer1.innerHTML = answers;
    let clock = createImg("images/clock.png");
    clock.size(439,287);
    clock.position(650, 350);
    a.id('next');
    colorInput.appendChild(next);
  } else if (answers == "ya"){
    Answer1.innerHTML = answers;
    let sam = createImg("images/unclesam.png");
    sam.size(179,287);
    sam.position(450, 350);
    a.id('next');
    colorInput.appendChild(next);
  } else if (answers == "yeah"){
    Answer1.innerHTML = answers;
    let red = createImg("images/red.png");
    red.size(200,287);
    red.position(200, 350);
    a.id('next');
    colorInput.appendChild(next);
  } else if (answers == "hell yes") {
    Answer1.innerHTML = answers;
    let planet = createImg("images/planet.jpg");
    planet.size(180,287);
    planet.position(1100, 350);
    a.id('next');
    colorInput.appendChild(next);
  } else {
    Answer1.innerHTML = "News flash: it wants to destroy you. <3";
  }
     
  }
