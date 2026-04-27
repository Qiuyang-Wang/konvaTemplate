//find our elements
const stageContainer = document.getElementById('stage-container');
const circlebutton = document.getElementById('circle-button');

let stagecontainerwidth = stageContainer.offsetWidth;
console.log(stagecontainerwidth);
let satgecontainerHeight = stageContainer.offsetHeight
console.log(satgecontainerHeight);

let circleColour = "red"

let sceneWidth = 900;
let sceneHeight = 1600;

let scale = stageContainerHeight / sceneHeight;

// create the Konva stage
const stage = new Konva.Stage({
    container: 'konva-stage',
    width: window.innerWidth,
    height: window.innerHeight
});

//handle when user changes the size of the windows
function resizeHandler(){
    stage.width(stageContainer.offsetWidth);
    stage.height(stageContainer.offsetHeight)
}
//
window.addEventListener('resize', resizeHandler);

//create our layer
const firstlayer = new Konva.Layer();

let isPportrait =window.matchMedia("orientation:portrait");
console.log(isPportrait);
if(isPportrait.matches){
    //
}

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


//drawing circle
//feature analysis
//What is the user goal? Trying to draw a picture
//what is the represented model? cursor on the canvas; define cursor; brush select
//color? or would that be its own system
//how does it behavior?
//move our cursor onto canvas, press mouse botton down, move mouse, release mouse button
//what is the implemented model? create a new line when mouse button down,add to that line when mouse button move
//how does it interact with other features?
//color, image for the brush, eraser, upload image

//keep track of when button is held
let isDrawing = false;
let lastLine;


//user press mouse button
function drawMouseDown(){
    isDrawing = true;
    const pos = stage.getPointerPosition()
    lastLine = new Konva.Line({
        stroke: "red",
        strokeWidth: 5,
        lineCap: "round",
        lineJoin: "round",
        points: [pos.x, pos.y, pos.x, pos.y]
    });
    firstlayer.add(lastLine);

}
stage.on("mousedown", drawMouseDown)
//user move their mousse
function drawMouseMove(){
    console.log(Date.now())
    //don't run if not drawing
    if(isDrawing === false){
        return;
    }
    //if isdrawing is ture
    const pos = stage.getPointerPosition()
    let newPoints = lastLine.points().concat([pos.x, pos.y]);
    lastLine.points(newPoints);
}
//add function to mousemove event
stage.on("mousemove", drawMouseMove);
//user releases mouse button
function drawMouseUp(){
    isDrawing = false;
}
//add function to mouseup event
//stage.on("mouseup", drawMouseUp);
window.addEventListener("mouseup", drawMouseMove);