// create the Konva stage
const stage = new Konva.Stage({
    container: 'konva-stage',
    width: window.innerWidth,
    height: window.innerHeight
});

const firstlayer = new Konva.Layer();

const circle = new Konva.Circle({
    x: 250,
    y: 250,
    radius: 100,
    fill: "tomato"
})

firstlayer.add(circle);
stage.add(firstlayer);
const square=new Konva.Rect({

});
firstlayer.add(square);