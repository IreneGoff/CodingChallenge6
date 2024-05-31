U#35549532

class Ball {
    constructor(x, y, radius, dx, dy, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    update(canvas) {
        // Check for collision with canvas edges
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        // Update ball position
        this.x += this.dx;
        this.y += this.dy;
    }
}

// Initialize canvas and ball
const canvas = document.getElementById('ballCanvas');
const ctx = canvas.getContext('2d');

const ball = new Ball(200, 160, 20, 2, 2, 'red');

// Animation function
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball.draw(ctx);
    ball.update(canvas);
}

setInterval(animate, 10);




