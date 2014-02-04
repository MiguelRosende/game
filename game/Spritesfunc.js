function Ele(ctx, color, offsetXY, shape) {
    this.color = color;
    this.context = ctx;
    this.direction = 0;
    this.shape = shape;
    this.position = { pageX: 0, pageY: 0 };
    this.render = function (event) {
        this.context.fillStyle = this.color;
        for (sp in this.shape[this.direction]) {
            var s = this.shape[this.direction][sp];
            this.context.fillRect(this.position.pageX + s.x + offsetXY, this.position.pageY + s.y + offsetXY, s.w, s.h);
        }
    };
    this.click = function (event) {
        switch (this.direction) {
            case 0:
                this.direction = 1
                break;
            case 1:
                this.direction = 2
                break;
            case 2:
                this.direction = 3
                break;
            default:
                this.direction = 0
                break;

        }
    };
};

function independentsprite(ctx, color, shape, startxy, initialspeed) {
    this.context = ctx;
    this.color = color;
    this.shape = shape;
    this.flag = 0;
    this.currentxy = startxy;
    this.speed = initialspeed;
    this.render = function (event) {
        this.context.fillStyle = this.color;
        this.context.fill();
        this.context.beginPath();
        this.context.arc(startxy.x, startxy.y, shape.r, shape.s, shape.e);
        switch (this.flag) {
            case 0:
                this.flag = 1;
                startxy.x++;
                startxy.y--;
                break;
            case 1:
                this.flag = 1;
                startxy.x--;
                startxy.y++;
                break;
        }
    };
};

function independentspritetwo(ctx, color, shape, startxy, initialspeed) {
    this.context = ctx;
    this.color = color;
    this.shape = shape;
    this.flag = 0;
    this.currentxy = startxy;
    this.speed = initialspeed;
    this.render = function (event) {
        this.context.fillStyle = this.color;
        this.context.fill();
        this.context.beginPath();
        this.context.arc(startxy.x, startxy.y, shape.r, shape.s, shape.e);
        switch (this.flag) {
            case 0:
                this.flag = 1;
                startxy.x--;
                startxy.y--;
                break;
            case 1:
                this.flag = 1;
                startxy.x++;
                startxy.y++;
                break;
        }
    };
};

//no funciona
function cuadrado(ctx, color, offsetXY, shape) {
    this.color = color;
    this.context = ctx;
    this.shape = shape;
    this.position = { pageX: 0, pageY: 0 };
    this.render = function (event) {
        this.context.fillStyle = this.color;
        for (sp in this.shape) {
            var s = this.shape[sp];
            this.context.fillRect(this.position.pageX + s.x + offsetXY, this.position.pageY + s.y + offsetXY, s.w, s.h);
        }

    };

};

function spritemirror(ctx, color, offsetXY, shape) {
    this.color = color;
    this.context = ctx;
    this.direction = 0;
    this.shape = shape;
    this.position = { pageX: 0, pageY: 0 };
    this.render = function (event) {
        this.context.fillStyle = this.color;
        for (sp in this.shape[this.direction]) {
            var s = this.shape[this.direction][sp];
            this.context.fillRect(this.context.canvas.width - this.position.pageX + s.x + offsetXY, this.position.pageY + s.y + offsetXY, s.w, s.h);
        }
    };
    this.click = function (event) {
        switch (this.direction) {
            case 0:
                this.direction = 1
                break;
            case 1:
                this.direction = 2
                break;
            case 2:
                this.direction = 3
                break;
            default:
                this.direction = 0
                break;

        }
    };
};