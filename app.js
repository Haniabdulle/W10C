// This Eventlistner function will turn content to blue //

let hover = document.getElementById("hover1");
hover.addEventListener("mouseover" ,function(){
    hover.style.color = "blue";
})


// This EventListner function changes the content and reveals new h1 tag when space bar is clicked // 

document.addEventListener('keyup', function (event) {
    if (event.code === 'Space') {
      document.getElementById("space").innerHTML = "<h1> Hey Alex, you should only see this when the space bar is clicked (: </h1>";
    }
  })



// This Eventlistner function will change font size to 50px when clicked //

let click = document.getElementById("click");
click.addEventListener("click", function(){
    click.style.fontSize = "50px";
});

