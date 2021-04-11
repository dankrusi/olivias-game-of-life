// app.js
// This is the user interface for the game

function resize() {
    var windowWidth = $(document).width();
    var windowHeight = $(document).height();
    $("canvas").attr("width",windowWidth);
    $("canvas").attr("height",windowHeight);
}

$(document).ready(function(){
    // Do initial resize of the canvas
    resize();
    // Get canvas variable
    var canvas = $("canvas")[0];
    // Create a game
    var game = new Game();
    // Create a renderer
    var renderer = new Renderer(canvas,game);
    // Start the renderer
    renderer.start();
});


$(window).resize(function(){
    resize();
});
