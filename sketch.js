// put in setup ( need setup and draw when ur project first starts) whatever needs to be done to get things started
function setup() {

    // this line creates a (virtual canvas) and attaches it to your HTML
    createCanvas(640, 480).parent('p5')
    noLoop()

}


// put in draw everything you want to draw to the canvas
function draw() {

    // start off with a background (ALWAYS)
    //make background to (255) to make white background if u want
    background(210,180,140,255)
    strokeWeight(1)
    //to end color just for that section ex like the </color>
    stroke(0,0,0)
//
nofill()
strokeWeight(20)

stroke(0,128,0)
beginShape()

curveVertex(17,478)
curveVertex(15,440)
curveVertex(20,395)
curveVertex(23,354)

curveVertex(45,336)
curveVertex(54,296)
curveVertex(20,395)
curveVertex(29,274)
curveVertex(68,288)
curveVertex(83,318)
curveVertex(85,355)
curveVertex(75,388)

curveVertex(72,418)
curveVertex(78,439)
curveVertex(91,449)
curveVertex(101,459)
curveVertex(116,475)

endShape()








}

// this function will print coordinates to the console whenever you click
function mouseClicked() {
    print(int(mouseX), int(mouseY))
}
