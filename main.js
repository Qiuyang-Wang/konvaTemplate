//find our elements
const stageContainer = document.getElementById('stage-container');
const circlebutton = document.getElementById('circle-button');

let stagecontainerwidth = stageContainer.offsetWidth;
console.log(stagecontainerwidth);
let satgecontainerHeight = stageContainer.offsetHeight
console.log(satgecontainerHeight);

let circleColour = "red"

// create the Konva stage
const stage = new Konva.Stage({
    container: 'konva-stage',
    width: window.innerWidth,
    height: window.innerHeight
});

//create our layer
const firstlayer = new Konva.Layer();

//add the layer to our stage
stage.add(firstlayer);

//ass interaction to button
function drawNewcircle(){
    const circle = new Konva.Circle({
        x: stage.width() * Math.random(),
        y: stage.height() * Math.random(),
        radius: 50 * Math.random(),
        fill: circleColour
    })
//add the first circle to our layer
    firstlayer.add(circle);
}

circlebutton.addEventListener("click", drawNewcircle);