// burger
function showDiv() {
	
	document.querySelector(".inside-burger").style.display="block";
	document.getElementById("burger").style.display="none";
	document.getElementById("close").style.display="block";
}

function hideDiv() {
	document.querySelector(".inside-burger2").style.display="none";
}

function closeDiv() {
	
	document.querySelector(".inside-burger").style.display="none";
	document.querySelector(".inside-burger2").style.display="block";
	setTimeout(hideDiv , 400);
	document.getElementById("burger").style.display="block";
	document.getElementById("close").style.display="none";
	
}

// shorten it 

function showURL(){  
var mq = window.matchMedia( "(max-width: 850px)" );
	
	document.getElementById("shorten-text").style.display="block";
	document.getElementById("load").style.display="none";
	document.getElementById("inp").style.top="0px";
	document.getElementById("urls").style.display="block";
	if(mq.matches){  
	
	document.querySelector(".advanced").style.paddingTop="900px";
	document.querySelector(".advanced").style.height="2300px";
	document.querySelector(".boost").style.marginTop="0px";
	}
	else{  
	document.querySelector(".advanced").style.paddingTop="550px";
	document.querySelector(".advanced").style.height="1300px";
	document.querySelector(".boost").style.marginTop="0px";
       }
}




function showShorten() {
	
	 var text=document.getElementById("inp").value;
	 var batt;

//batt=/^[A-Z]{1}$/;
	batt=/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
        var b = batt.test(text);
	
	if(b){  
	document.getElementById("shorten-text").style.display="none";
	document.getElementById("load").style.display="block";
		document.getElementById("invalid").style.display="none";
		document.getElementById("inp").style.border="2px solid transparent";
	document.getElementById("inp").style.top="-8px";
	setTimeout(showURL , 1000);
		
		}
	
	else if(document.getElementById("inp").value===""){
		
		document.getElementById("inp").style.border="2px solid red";
		document.getElementById("invalid").style.display="block";
		document.getElementById("invalid").innerHTML="Please add a link";
	}
	
	else {
		document.getElementById("inp").style.border="2px solid red";
		document.getElementById("invalid").style.display="block";
		document.getElementById("invalid").innerHTML="Url is not valid";
	}
}





// copied


function copied(class0 , class1) {

	document.querySelector(class0).style.backgroundColor="hsl(257, 27%, 26%)";
	document.querySelector(class0).innerHTML="copied!";
	document.querySelector(class0).style.opacity="0.7"; 
	
	//copy link
	var textToCopy = document.querySelector(class1);
	var textBox = document.querySelector(".inp-hidden");
  textBox.setAttribute('value', textToCopy.innerHTML);
  textBox.select();
  document.execCommand('copy');
}













