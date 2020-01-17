alert("connected!");
const squares = document.querySelectorAll('.square');
const colors = generateRandomColors();
const pickedcolor = pickedColor();
const colordisplay = document.getElementById("colordisplay");
const message = document.getElementById("message");

pickedColor()

colordisplay.textContent = pickedcolor;
// console.log(squares);

for(var i = 0 ; i < squares.length; i++){
    // console.log(squares[i]);
    squares[i].style.backgroundColor = colors[i];
    console.log(squares[i].style.backgroundColor)

    squares[i].addEventListener('click', function(){
        let clickedcolor = this.style.backgroundColor;

        if(clickedcolor === pickedcolor){
            message.textContent = "correct";
            changeColors();
        }
        else{
            message.textContent = "try again";
            this.style.backgroundColor = '#2c2c55';
        }

    });
}

function changeColors(){
    for(let i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = pickedcolor;
    }
}

function pickedColor(){
    let random = Math.floor(Math.random() * colors.length + 1);
    return colors[random]
}

function generateRandomColors(){
    let arr = [];
    for(let i = 0; i < squares.length ; i++){
        arr.push(randomColors());
    }
    return arr
}

function randomColors(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb("+ r + ", " + g + ", " + b +")"
}