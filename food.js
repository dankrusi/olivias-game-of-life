// food.js
// 
// Notes: foods should have different color groups for their types/energy etc...

class Food extends Thing {


    constructor(game) {
        super(game);
        this.size = game.getRandomNumberBetween(2,4);
        // Opacity in food equals how much energy food it has
        this.energy = game.getRandomNumberBetween0and1(); 
    }

    process(time) {
        // Set the opacity to the energy so we can see how much it has
        this.opacity = this.energy;
    }

    
}