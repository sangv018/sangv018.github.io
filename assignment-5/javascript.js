setInterval(
    function () {
      var randomColor = Math.floor(Math.random()*16777215).toString(16);
      document.body.style.backgroundColor = "#"+randomColor;
    },1000);

    // var tx = document.getElementByClassName("this");

    // function getRandomColor() {
    //     var letters = '0123456789ABCDEF';
    //     var color = '#';
    //     for (var i = 0; i < 6; i++ ) {
    //         color += letters[Math.floor(Math.random() * 16)];
    //     }
    //     return color;
    // }
    
    // function changeColor(){
    //   tx.style.color= getRandomColor();
    // }
    
    // setInterval(changeColor,1000);

// onload="setInterval(changeColor,1000)"

function changeColor() {
    var x=document.getElementById("a");
    if(x.style.color=="yellow")
    x.style.color="red";
    else if (x.style.color=="red")
    x.style.color="green";
    else
    x.style.color="red";
}


  const currentTime = new Date();
  let text = currentTime.toString();
  document.getElementById('timeZone').innerHTML = text;
