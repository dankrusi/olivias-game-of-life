// renderer.js
// This manages the drawing loop for the game

class Renderer {

    canvas;
    game;
    enabled = false;

    constructor(canvas,game) {
        this.canvas = canvas;
        this.game = game;
    }

    start() {
        var self = this;
        this.enabled = true;
        window.requestAnimationFrame(function(time){self.renderLoop(time)});
    }

    stop() {
        this.enabled = false;
    }

    renderLoop(time) {
        var self = this;
        // Get the drawing context
        var w = this.canvas.width;
        var h = this.canvas.height;
        var ctx = this.canvas.getContext("2d");
        ctx.save(); {
            // Clear the canvas
            ctx.clearRect(0,0,w,h);
            // Move to center of canvas
            ctx.translate(w/2,h/2);
            // Do the actual render
            this.render(this.canvas,ctx,time);
        } ctx.restore();
        // Request another render frame, if enabled
        if(this.enabled == true) {
            window.requestAnimationFrame(function(time){self.renderLoop(time)});
        }
    }

    render(canvas,ctx,time) {
        this.game.render(canvas,ctx,time);
    }
}