alert("connected!");
let squares = document.querySelectorAll('.square');
let colors = generateRandomColors();
let pickedcolor = pickedColor();
let colordisplay = document.getElementById("colordisplay");
let message = document.getElementById("message");
let h1 = document.querySelector('h1');

pickedColor()

colordisplay.textContent = pickedcolor;

for(let i = 0 ; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener('click', function(){
        let clickedcolor = this.style.backgroundColor;

        if(clickedcolor === pickedcolor){
            message.textContent = "correct";
            changeColors();
            h1.style.backgroundColor = clickedcolor;
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