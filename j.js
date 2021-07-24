let cards=[
    {
        image:"https://wallpaperaccess.com/full/859474.jpg",
        value:1,
        status:"closed"
    },
    {
        image:"https://wallpaperaccess.com/full/859474.jpg",
        value:1,
        status:"closed"
    },
    {
        image:"https://archziner.com/wp-content/uploads/2020/02/always-written-over-an-image-of-hogwarts-at-night-harry-potter-phone-background.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"https://archziner.com/wp-content/uploads/2020/02/always-written-over-an-image-of-hogwarts-at-night-harry-potter-phone-background.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"https://files.wallpaperpass.com/2019/10/hogwarts%20wallpaper%20095%20-%201242x2208.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"https://files.wallpaperpass.com/2019/10/hogwarts%20wallpaper%20095%20-%201242x2208.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"https://wallpapers-clan.com/wp-content/uploads/2021/05/harry-potter-hogwarts-is-my-home-wallpaper-scaled.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://wallpapers-clan.com/wp-content/uploads/2021/05/harry-potter-hogwarts-is-my-home-wallpaper-scaled.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/474x/c9/b9/dc/c9b9dce10e71ccc8a8c845b5777f4040.jpg",
        value:5,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/474x/c9/b9/dc/c9b9dce10e71ccc8a8c845b5777f4040.jpg",
        value:5,
        status:"closed"
    },
        
]

let temp;
for(let i=cards.length-1;i>=0;i--) {
    let j=Math.floor(Math.random()*(i+1));

    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}

let cardsCopy=cards;


function displayCards(data){
    let cardsString="";

    data.forEach(function(card,index){
        cardsString+=`
        
           <div class="card" style="background-image:url('${card.image}')">
                <div class=" overlay ${card.status}" onclick="openCard(${index})"></div>
           </div>
        
        `;
    });

    document.getElementById('cards').innerHTML=cardsString;
}

displayCards(cards);

let cardCount=1;
let val1=null,val2=null;
let score=0;

function openCard(index){
   console.log(cards);
    cards[index].status="opened";
    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;
    }
    else if(cardCount===2){
        val2=cards[index].value;

        if(val1===val2){
            score++;
            document.getElementById('score').innerHTML=score;

            val1=null;
            val2=null;
            cardCount=1;
        }
        else {
            alert("Game Over!!");
            location.reload();
        }
    }

    displayCards(cards);
}
