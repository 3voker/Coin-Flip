//headsImg = image.src 
//tailsImg = image.src

const flipButton = document.querySelector('#Flip-Button');
const body = document.querySelector('body');
var textValue; 

flipButton.addEventListener("click", function(){
    
    console.log("Do something.", coin);
    return coin;
})
let coin = {
    state: 0,
    flip: function( {
        
    }) {
        /* 1. Randomly set your coin object's "state" property to be either
           0 or 1: use "this.state" to access the "state" property on this object.*/
           this.state = 0;
           let randomNumber = Math.random();
           if(random <= 0.49){this.state = 0;} else this.state = 1;  
    },
    toString: function() {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
        let text = document.createElement('textarea');
        if(this.state === 0){return text.value = "Heads"}
        else return body.append(text.value = "tails");
    },
    toHTML: function() {
        let image = document.createElement('img');
        body.append(image);
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
           if(this.state === 0){image.src = "./images/heads.jpg";}
           else image.src = "./images/flip.jpg";
        return image;
    }
};