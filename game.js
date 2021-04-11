// game.js
// This file will run the game and all the little animals

class Game {

    things = [];
    worldSize = 1000;

    constructor() {
        var self = this;

        // Create some things...
        
        // Foods
        for(var i = 0; i < 100; i++) {
            var newFood = new Food(this);
            newFood.x = this.getRandomNumberBetween(-this.worldSize/2, this.worldSize/2);
            newFood.y = this.getRandomNumberBetween(-this.worldSize/2, this.worldSize/2);
            self.things.push(newFood);
        }

        // Lifelets
        for(var i = 0; i < 20; i++) {
            var newLifelet = new Lifelet(this);
            newLifelet.x = this.getRandomNumberBetween(-this.worldSize/2, this.worldSize/2);
            newLifelet.y = this.getRandomNumberBetween(-this.worldSize/2, this.worldSize/2);
            self.things.push(newLifelet);
        }
    }

    getRandomNumberBetween(min,max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    getRandomNumberBetween0and1() {
        return Math.random();
    }

    render(canvas,ctx,time) {
        var self = this;
        var w = canvas.width;
        var h = canvas.height;
        
        // Test cube
        //ctx.fillStyle = 'rgb('+Math.random()*255+',0,0)';
        //ctx.fillRect(Math.sin(time*0.001)*200,0,20,20);

        self.things.forEach(function(thing) {
            ctx.save();
            thing.process(time);
            thing.render(canvas,ctx,time);
            ctx.restore();
        });
    }

}