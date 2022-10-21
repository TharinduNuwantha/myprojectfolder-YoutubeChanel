const cardArry = [
    {
        name:'fries',
        img:'img/fries.png'
    },

    {
        name:'cheeseburger',
        img:'img/cheeseburger.png'
    },    

    {
        name:'hotdog',
        img:'img/hotdog.png'
    },    

    {
        name:'ice-cream',
        img:'img/ice-cream.png'
    },    

    {
        name:'milkshake',
        img:'img/milkshake.png'
    },    

    {
        name:'pizza',
        img:'img/pizza.png'
    },    
    {
        name:'fries',
        img:'img/fries.png'
    },

    {
        name:'cheeseburger',
        img:'img/cheeseburger.png'
    },    

    {
        name:'hotdog',
        img:'img/hotdog.png'
    },    

    {
        name:'ice-cream',
        img:'img/ice-cream.png'
    },    

    {
        name:'milkshake',
        img:'img/milkshake.png'
    },    

    {
        name:'pizza',
        img:'img/pizza.png'
    },   
];

var chooseCardName=[];
var chooseCardId=[];
let over = [];
const grid = document.getElementById('grid');
displayCard();
function displayCard(){
    for(let i =0;i<cardArry.length;i++){
         const cards = document.createElement('img');
         cards.setAttribute('src','image/blank4.png');
         cards.setAttribute('id',i);
         
         cards.addEventListener('click',()=>{
           // cards.style.transform='rotateY(180deg)';
            
         });
        
         cards.addEventListener('click',flipCard);
         grid.appendChild(cards);
        // console.log(cards);
    }
   

}

function flipCard(){
    const carId = this.getAttribute('id');
    // this.style.transform='rotateY(0)';
    //cards.style.transform='rotateY(180deg)';
    this.style.transform='rotateY(180deg)';
    
    setTimeout(()=>{
        this.setAttribute('src',cardArry[carId].img);
    },400);
    
   chooseCardName.push(cardArry[carId].name);
   chooseCardId.push(carId);
  // console.log(chooseCardName);
  // console.log(chooseCardId);
   if(chooseCardName.length ===2){
       chackMach();
       
   }
}
  const imageList = document.querySelectorAll('#grid img');
function chackMach(){
    
   // console.log(imageList[0]);

    if(chooseCardName[0] == chooseCardName[1]){
        setTimeout(()=>{
            imageList[chooseCardId[0]].style.opacity='0.01';
            imageList[chooseCardId[1]].style.opacity='0.01';
            imageList[chooseCardId[0]].removeEventListener('click',flipCard);
            imageList[chooseCardId[1]].removeEventListener('click',flipCard);
            over.push("s");
            console.log(over);
            if(over.length == 6){
                win();
            }
            chooseCardId=[];
            chooseCardName=[];
        },1000);        
                  
            // 
         
    }else{
        imageList[chooseCardId[0]].style.transform='rotateY(180deg)';
        imageList[chooseCardId[1]].style.transform='rotateY(180deg)';
        imageList[chooseCardId[1]].setAttribute('src','image/blank4.png');
        imageList[chooseCardId[0]].setAttribute('src','image/blank4.png');
        chooseCardId.shift();
        chooseCardName.shift();
        
    }
    
   
}
function win(){
    let winText = document.getElementById('text');
    winText.innerHTML=`<h2>congratulations</h2><h1>You Win</h1>`;
}
