//setTimeout()
//setInterval

var counter=10;

var item=document.getElementById("nav");
var stop=document.getElementById("stop");


stop.onclick=function()
{
	clearInterval(timer)
}

item.innerHTML="you will redirect to another page "+counter+" seconds";

function show(){
	counter--;
	item.innerHTML="you will redirect to another page "+counter+" seconds";
	if(counter==0)
	{
		clearInterval(timer);
		//window.location="www.google.com"
	}
	
};

var timer=setInterval(show,1000)


setInterval(animate,100);
var element=document.getElementById("animation");
function animate(){
	var element=document.getElementById("animation");
	var x=element.offsetTop;
	var y=element.offsetLeft;
	element.style.marginTop=x+1;
	element.style.marginLeft=y+1;
}

	//var element=document.getElementById("animation");
//alert(element.offsetLeft)
