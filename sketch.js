var box1, box2
var m="hello"
function setup() 
{
  createCanvas(400, 400);
  box1 = new Box(100, 100, 40, 40, 1, 2)
  box2 = new Box(100, 100, 40, 40, -1, -2)

}

function draw() 
{
  background(220);
box1.show();
box1.moveh();
box1.movev();
box2.show();
box2.moveh();
box2.movev();
console.log(m);

}


