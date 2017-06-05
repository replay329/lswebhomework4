//red body background colour change

document.body.style.backgroundColor = "red";

//blue title background colour change

document.getElementById("whatever").style.backgroundColor = "blue";

//entire document font change

document.body.style.fontFamily = "sans-serif";

//change nickname details to full nickname

document.getElementById("nickname").innerHTML = "Replay329";

//change favourite things to full list of favourites

document.getElementById("favorites").innerHTML = "Family, music, graffiti and Star Wars";

//change hometown to more specific town and country

document.getElementById("hometown").innerHTML = "London England";


//Iterate through each li and change the class to "listitem". 

var items = document.getElementsByTagName('li');

for (var i = 0; i < items.length; i++) {
    items[i].className = 'listitem';
   

//Add a style tag that sets a rule for "listitem" to make the color red.

     items[i].style.color = "red";
 
// added a dark red background to allow red text to still remain visible    
    items[i].style.backgroundColor = "#ce0000";
   
}

//append photo

var img = document.createElement("img");
     
img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/NY-329.svg/500px-NY-329.svg.png";

var src = document.getElementById("x");
     
src.appendChild(img);