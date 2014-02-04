//pinta el fondo una y otra vez

function field(ctx) {
    this.context = ctx;
    this.render = function (event) {
        this.context.clearRect(0, 0, 500, 600);
    };
    this.click = function (event) { };
};

//pinta los sprites al cargar la página

$(document).ready(function() {
    var player = document.getElementById("GameArea");
    var ctx = player.getContext("2d");
    var f  = new field(ctx);
    var sp1 = new Ele(ctx, "violet", 0,
        [[{ x:-15, y: -37, w: 10, h: 41 },
          { x: -6, y: -6, w: 21, h: 10 }],
         [{ x: -6, y: -6, w: 41, h: 10 },
          { x: 25, y: -27, w: 10, h: 21 }],
         [{ x: 25, y: -37, w: 10, h: 41 },
          { x: 25, y: -37, w: -21, h: 10 }],
         [{ x:-15, y:-37, w: 41, h: 10 },
          { x:-15, y:-27, w: 10, h: 21 }]]);
    var sp2 = new spritemirror(ctx, "#4Be082", 30,
        [[{ x: -15, y: -37, w: 10, h: 41 },
          { x: -6, y: -6, w: 21, h: 10 }],
         [{ x: -6, y: -6, w: 41, h: 10 },
          { x: 25, y: -27, w: 10, h: 21 }],
         [{ x: 25, y: -37, w: 10, h: 41 },
          { x: 25, y: -37, w: -21, h: 10 }],
         [{ x: -15, y: -37, w: 41, h: 10 },
          { x: -15, y: -27, w: 10, h: 21 }]]);
    var sp3 = new Ele(ctx, "#4B0e82", 60,
        [[{ x: -15, y: -37, w: 10, h: 41 },
          { x: -6, y: -6, w: 21, h: 10 }],
         [{ x: -6, y: -6, w: 41, h: 10 },
          { x: 25, y: -27, w: 10, h: 21 }],
         [{ x: 25, y: -37, w: 10, h: 41 },
          { x: 25, y: -37, w: -21, h: 10 }],
         [{ x: -15, y: -37, w: 41, h: 10 },
          { x: -15, y: -27, w: 10, h: 21 }]]);
    //hacer que este sprite sea uno solo que no varia, no sé hacerlo sin meterlo en un array
    //cambiar Ele por cuadrado
    var cuadrado = new Ele(ctx, "green", 0,
        [[{ x:-6, y:-6, w: 41, h: 20.5 },
          { x:-6, y:14, w: 41, h: 20.5 }],
         [{ x:-6, y:-6, w: 41, h: 20.5 },
          { x: -6, y: 14, w: 41, h: 20.5 }],
         [{ x:-6, y:-6, w: 41, h: 20.5 },
          { x: -6, y: 14, w: 41, h: 20.5 }],
         [{ x:-6, y:-6, w: 41, h: 20.5 },
          { x: -6, y: 14, w: 41, h: 20.5 }]]);
    var eleInversa = new Ele (ctx, "red", 90,
        [[{ x: -15, y: -37, w: 10, h: 41 },
          { x: -15, y: -6, w: -21, h: 10 }],
         [{ x: -43, y: -37, w: 41, h: 10 },
          { x: -12, y: -30, w: 10, h: 21 }],                     
         [{ x:-43, y: -37, w: 10, h: 41 },
          { x: -35, y: -37, w: 21, h: 10 }],
         [{ x: -43, y: -6, w: 41, h: 10 },
          { x: -43, y: -27, w: 10, h: 21 }]]);
    var palo = new Ele(ctx, "purple", 110, 
        [[{ x: -15, y: -37, w: 10, h: 61 }],
         [{ x: -6, y: 15, w: 61, h: 10 }],
         [{ x: -15, y: -37, w: 10, h: 61 }],
         [{ x: -6, y: 15, w: 61, h: 10 }]]);
    var bullet = new independentsprite(ctx, "black", { r: 10, s: 0, e: 2 * Math.PI }, { x: 540, y: 200 }, { x: 20, y: 20 });
    var bullettwo = new independentspritetwo(ctx, "blue", { r: 20, s: 0, e: 2 * Math.PI }, { x: 0, y: 100 }, { x: 20, y: 20 });

    var stage = [f, sp1, sp2, sp3, eleInversa, palo, bullet, bullettwo];
                
                
    $("#GameArea").mousemove(function (event) {
        for (s in stage) {
            stage[s].position = event;
        }
    });

    //pinta el fondo cada 10 milisegundos

    setInterval(function () {
        for (s in stage) {
            stage[s].render();
        }
    }, 10);

    $("#GameArea").click(function () {
        for (s in stage) {
            stage[s].click();
        }
    });

    //cuando el sprite llega a ciertas coordenadas este queda atado a esa posición y el sprite movil
    //es reemplazado por otro. esta funcion reemplazaria el click


    /*$("#GameArea").keydown(function (event) {
        for (s in stage) {
            stage[s].position = event;
        }
        PageX = 0;
        PageY = 0;
        var flag = 0;

        switch (event.keyCode) {

            // Left arrow.
            case 37:
                PageX = PageX - 20;
                if (PageX < 0) {
                    PageX = 0;
                    flag = 1;
                }
                break;

                // Right arrow.
            case 39:
                PageX = PageX + 20;
                if (PageX > 500) {
                    // If at edge, reset ship position and set flag.
                    PageX = 500;
                    flag = 1;
                }
                break;

                // Down arrow
            case 40:
                PageY = PageY + 20;
                if (PageY > 600) {
                    // If at edge, reset ship position and set flag.
                    PageY = 600;
                    flag = 1;
                }
                break;

                // Up arrow 
            case 38:
                PageY = PageY - 20;
                if (PageY < 0) {
                    // If at edge, reset ship position and set flag.
                    PageY = 0;
                    flag = 1;
                }
                break;

            default:

                flag = 1;
                alert("Please only use the arrow keys.");

    }});*/


    //mover las piezas con flechas, cada case es una flecha

    /*function Keyboard(event) {

        // Flag to put variables back if we hit an edge of the board.
        var flag = 0;
        // Get where the ship was before key process.
        oldShapeX = PageX;
        oldShapeY = PageY;

        switch (event.keyCode) {

            // Left arrow.
            case 37:
                PageX = PageX - 20;
                if (shipX < 0) {
                    shipX = 0;
                    flag = 1;
                }
                break;

                // Right arrow.
            case 39:
                PageX = PageX + 20;
                if (PageX > 500) {
                    // If at edge, reset ship position and set flag.
                    PageX = 500;
                    flag = 1;
                }
                break;

                // Down arrow
            case 40:
                PageY = PageY + 20;
                if (PageY > 600) {
                    // If at edge, reset ship position and set flag.
                    PageY = 600;
                    flag = 1;
                }
                break;

                // Up arrow 
            case 38:
                PageY = PageY - 20;
                if (PageY < 0) {
                    // If at edge, reset ship position and set flag.
                    PageY = 0;
                    flag = 1;
                }
                break;

            default:

                flag = 1;
                alert("Please only use the arrow keys.");
        }*/

})