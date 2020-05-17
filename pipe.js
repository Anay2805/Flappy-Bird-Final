
function Pipe() {
  this.spacing = 120;
  this.top = random(height / 6, (3 / 4) * height) ;
  this.bottom = height - (this.top + this.spacing);
  this.x = width;
  this.w = 110;
  this.speed = 2;

  this.hits = function(bird) {
    if (bird.y < this.top- 10|| bird.y > height - this.bottom - 40) {
      if (bird.x > this.x - 70  && bird.x < this.x + this.w) {
        return true;
      }
    }
    return false;
  };

  this.show = function() {
    fill(0, 180, 0);
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height - this.bottom, this.w, this.bottom);
  };

  this.update = function() {
    this.x -= this.speed;
  };
 
  this.offscreen = function() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  };
}