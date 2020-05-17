function Bird() {
  this.y = height / 2;
  this.x = 64;

  this.gravity = 0.3;
  this.lift = -7;
  this.velocity = 0;
  this.image = loadImage("flappy-bird.png")

  this.show = function() {
    fill(255);
    image(this.image, this.x, this.y, 80, 50);
  };

  this.up = function() {
    this.velocity += this.lift;
  };

  this.update = function() {
    this.velocity += this.gravity;
    // this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  };
}