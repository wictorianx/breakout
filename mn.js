const grid = document.querySelector(".grid")
const bw = 100
const bh = 20
const userStart = [230,10]
const ballStart = [270,40]
const ballDiameter =20
const boardWidth = 560
const boardHeight = 300
const scoreDisplay = document.querySelector("#score")
function main(){
    let score = 0
    let currentPos = userStart
    let ballPos = ballStart
    let timerId 

    let xDirection = 2
    let yDirection = 2



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
    addBlocks()
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

    const ball = document.createElement("div")
    ball.classList.add("ball")

    grid.appendChild(ball)
    function moveBall(){
        ballPos[0]+=xDirection
        ballPos[1]+=yDirection

        drawBall()
        collisionCheck()
    }
    timerId = setInterval(moveBall,30)

    function collisionCheck(){
        for (let i = 0; i<blocks.length; i++){
            if
        (
        (ballPos[0] > blocks[i].bottomLeft[0] && ballPos[0] < blocks[i].bottomRight[0]) &&
        ((ballPos[1] + ballDiameter) > blocks[i].bottomLeft[1] && ballPos[1] < blocks[i].topLeft[1]) 
        ){
                const allBlocks = Array.from(document.querySelectorAll(".block"))
                allBlocks[i].classList.remove("block")
                blocks.splice(i,1)
                changeDirection()
                score++
                scoreDisplay.innerHTML=score
                if (blocks.lenght === 0){
                    scoreDisplay.innerHTML= "WIN"
                    clearInterval(timerId)
                    document.removeEventListener("keydown")
                }
            }
        }
        if (ballPos[0] >= (boardWidth-ballDiameter)||
            ballPos[1] >= (boardHeight-ballDiameter)||
            ballPos[0] <= 0
        )
        {
            changeDirection()
        }
        if ((ballPos[0]>currentPos[0] && ballPos[0] < currentPos[0] + bw ) &&
        (ballPos[1] > currentPos[1] && ballPos[1] < currentPos[1]+bh))
        if
        (
        (ballPos[0] > currentPos[0] && ballPos[0] < currentPos[0] + bw) &&
        (ballPos[1] > currentPos[1] && ballPos[1] < currentPos[1] + bh ) 
        )
        {
            changeDirection()
        }
        if (ballPos[1] <= 0) {
            clearInterval(timerId)
            scoreDisplay.innerHTML = 'You lose!'
            document.removeEventListener('keydown', moveUser)
            
        }

    }

    function changeDirection(){
        xDirection = -xDirection-Math.random()
        yDirection = -yDirection-Math.random()


    }

}

main()