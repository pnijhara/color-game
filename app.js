alert("connected!");
const squares = document.querySelectorAll('.square');
const colors = [
    'rgb(0, 0, 255)',
    'rgb(0, 255, 255)',
    'rgb(255, 0, 255)',
    'rgb(0, 255, 0)',
    'rgb(255, 0, 0)',
    'rgb(255, 255, 0)',
];
const pickedcolor = colors[4];
const colordisplay = document.getElementById("colordisplay");
const message = document.getElementById("message");

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
