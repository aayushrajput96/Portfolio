
// Automatic Slideshow - change image every 3 seconds
 var myIndex = 1;
carousel();

function carousel()
 {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) 
  {
    x[i].style.display = "none";
  }
  
  if (myIndex > x.length) 
  {
    myIndex = 1
}
  x[myIndex-1].style.display = "block";
  myIndex++;
  setTimeout(carousel, 3000);
}

document.getElementByClassName('image1')
                    .style.display = "block";
 
            document.getElementById('btnID')
                    .style.display = "none";
