// lifelet.js
// 
// Notes: 

class Lifelet extends Thing {


    constructor(game) {
        super(game);
        this.size = game.getRandomNumberBetween(6,10);
        this.energy = game.getRandomNumberBetween(1,4); 
        this.shape = "circle";
        this.color = "red";
    }

    process(time) {
        // Set the opacity to the energy so we can see how much it has
        this.opacity = this.energy;
        // Move the lifelet
        this.x = this.x + this.game.getRandomNumberBetween(-1,+1);
        this.y = this.y + this.game.getRandomNumberBetween(-1,+1);;
    }

    
}