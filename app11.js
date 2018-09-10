

const icons=["fa fa-diamond","fa fa-diamond","fa fa-paper-plane-o","fa fa-paper-plane-o","fa fa-anchor","fa fa-anchor","fa fa-bolt","fa fa-bolt",
"fa fa-cube","fa fa-cube","fa fa-leaf","fa fa-leaf","fa fa-bicycle","fa fa-bicycle","fa fa-bomb","fa fa-bomb"];



//shuffling of an icon cards
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


const cardcontainer=document.querySelector(".deck");
let openedcard=[];

let matched=[];
const moves=document.querySelector(".moves");

var myTimer;
var c=0;
	 
var c1=0;


//calling timer function to determine the time
clock();

shuffle(icons); 
//initiating the game by calling init()
init();







function init()
{


	for(let i=0;i<icons.length;i++)
	{
		const card=document.createElement("li");
		card.classList.add("card");
		card.innerHTML=`<i class="${icons[i]}"></i>`;
		cardcontainer.appendChild(card);
		
	
		card.addEventListener("click",function(){
		
		
		
		const currentcard=this;
		
			if(openedcard.length==1)
			{
				//counting the number of moves
				move();
				
				card.classList.add("open","show","disable");
			
				
				//matching the previous and the current card
				
				//successful matches
				
				if(this.innerHTML===openedcard[0].innerHTML)
				{
					
						currentcard.classList.add("match");
						openedcard[0].classList.add("match");
						
						
						//all the matched pair of cards are pushed on to the matched array
						
						matched.push(currentcard,openedcard[0]);
						
						 rating();
						//determining an end of the game
						over();
						
						openedcard=[];
					
				}
				
				//unsuccessful matches
				else
				{
					
					
					setTimeout(function(){
						currentcard.classList.remove("open","show","disable");
						openedcard[0].classList.remove("open","show","disable");
						
						openedcard=[];
						},100);
						
						
						
				}
			
				
			}
			else
			{
				card.classList.add("open","show","disable");
				openedcard.push(this);
			
				
			}
			
		});
		
	}
	
}	

function move()
{
	moves.innerHTML++;
}



const star=document.querySelector(".stars");


var cc,cc1;

function over()
{
	
	if(matched.length===icons.length)
	{
		//rating of stars based on number of moves
		rating();
		cc=confirm("Congrats,Game Over\nMoves:"+" "+moves.innerHTML+"\n"+"Time(mm:ss): "+document.getElementById("demo").innerHTML+"\nRating: "+document.getElementById("star").innerHTML+"\nStart the new game by clicking on 'OK'");
		
			if(cc==true)
			{
				document.location.href="Game.html";
			}
		

		clearInterval(myTimer);
		
		matched=[];
	}	
}


function rating()
{
		if(moves.innerHTML==8)
		{
					
			document.getElementById("star").innerHTML=" ";
					
			document.getElementById("star").innerHTML="&#9733 &#9733 &#9733";
			
			
		
				
					
			
			
		}
		else if(moves.innerHTML<=20&&moves.innerHTML>8)
		{
					
			document.getElementById("star").innerHTML="";
					
			document.getElementById("star").innerHTML="&#9733 &#9733 &#9733";
			
		}
		else if(moves.innerHTML<=40&&moves.innerHTML>20)
		{
					
			document.getElementById("star").innerHTML="";
			
			document.getElementById("star").innerHTML="&#9733 &#9733";
			
			
		}
		else
		{
					
			document.getElementById("star").innerHTML="";
			
			document.getElementById("star").innerHTML="&#9733 &#9733";
			
		
		}
		
		
}


		
	
	


// restarting the game
const restart=document.querySelector(".restart");
restart.addEventListener("click",function(){
	
	cardcontainer.innerHTML="";
	
	matched=[];
	c=0;
	c1=0;
	
			
	document.getElementById("star").innerHTML="";
			
	
    document.getElementById("demo").innerHTML =c1+":"+c;
	clock();
	
	init();
	moves.innerHTML=0;
	
	openedcard=[];
	
	
	
});
	
	
// initialization of clock method	
function clock() {
      myTimer = setInterval(myClock, 1000);
	

     function myClock() {
       document.getElementById("demo").innerHTML =c1+":"+c++;
       if (c === 60) {
		   c=0;
		   c1++;
		   document.getElementById("demo").innerHTML=c1+":"+c;
		   
		   document.getElementById("demo").innerHTML=c1+":"+c++;
        
       }
     }
   }
	

