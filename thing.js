// thing.js
// AnyTHING in the world...

class Thing {

    game;
    x = 0;
    y = 0;
    size = 6;
    color = "black";
    shape = "square"; // either square or circle
    opacity = 1.0;
    energy = 0.0;

    constructor(game) {
        this.game = game;
    }

    process(time) {
        
    }

    render(canvas,ctx,time) {
        var self = this;
        // ctx.fillRect(Math.sin(time*0.001)*200,0,20,20);
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        if(this.shape == "square") {
            ctx.fillRect(
                self.x - self.size/2, // x
                self.y - self.size/2, // y
                self.size, // width
                self.size // height
            );
        }
        if(this.shape == "circle") {
            ctx.beginPath();
            ctx.arc(
                self.x - self.size/2, // centerX, 
                self.y - self.size/2,// centerY, 
                self.size/2, // radius, 
                0,// startAngle, 
                Math.PI*2// endAngle
            );
            ctx.fill();
        }
    }

    
}