const grid = document.querySelector(".grid")
const bw = 100
const bh = 20
const userStart = [230,10]
const ballStart = [270,40]
let currentPos = userStart
let ballPos = ballStart
class Block{
    constructor(x,y){
        this.bottomLeft=[x,y]
        this.bottomRight = [x+bw,y]
        this.topLeft = [x,y+bh]
        this.topRight = [x+bw,y+bh]

    }
}
const blocks = [
    new Block(10,270),
    new Block(120,270),
    new Block(230,270),
    new Block(340,270),
    new Block(450,270),

    new Block(10,240),
    new Block(120,240),
    new Block(230,240),
    new Block(340,240),
    new Block(450,240),

    new Block(10,210),
    new Block(120,210),
    new Block(230,210),
    new Block(340,210),
    new Block(450,210),
]
function addBlocks(){
    for (let i=0;i<blocks.length;i++){
        const block = document.createElement('div')
        block.classList.add('block')
        block.style.left = blocks[i].bottomLeft[0]+"px"
        block.style.bottom = blocks[i].bottomLeft[1]+"px"
        grid.appendChild(block)}

    }
const user = document.createElement("div")
user.classList.add("user")
function drawUser(){
    user.style.left = currentPos[0]+"px"
    user.style.bottom = currentPos[1]+"px"
}
function drawBall () {
    ball.style.left = ballPos[0]+"px"
    ball.style.bottom = ballPos[1]+"px"
}
drawUser()

grid.appendChild(user)

function moveUser(e){
    switch(e.key){
        case "ArrowLeft":
            if (currentPos[0]-10>0){
            currentPos[0]-=10
            drawUser()}
            break;
        case "ArrowRight":
            if (currentPos[0]+10<boardWidth-bw){
            currentPos[0]+=10
            drawUser()}
            break;

    }
}

document.addEventListener("keydown",moveUser)

const ball = document.createEvent("div")
ball.classList.add("ball")
drawBall()
grid.appendChild(ball)
function moveBall(){
    ballPos[0]
    ballPos[0]
}