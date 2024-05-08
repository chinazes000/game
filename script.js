class EnemyCar {
  constructor(x, y, d) {
    this.x = x;
    this.y = y;
    this.d = d;
  }

  draw() {
    if (this.d == 0) {
      this.x += 1;
    }
    if (this.d == 1) {
      this.y += 1;
    }
    if (this.d == 2) {
      this.x -= 1;
    }
    if (this.d == 3) {
      this.y -= 1;
    }

    if (this.x < 70) {
      if (this.y < 70) {
        this.d = 1;
      }
    }
    if (this.x < 70) {
      if (this.y > height - 70) {
        this.d = 0;
      }
    }
    if (this.x > width - 70) {
      if (this.y > height - 70) {
        this.d = 3;
      }
    }
    if (this.x > width - 70) {
      if (this.y < 70) {
        this.d = 2;
      }
    }

    fill(255, 0, 0);
    rect(this.x, this.y, 50, 30);
  }
}

class MyCar {
  constructor(x, y, d) {
    this.x = x;
    this.y = y;
    this.d = d;
  }

  draw() {
    if (this.d == 0) {
      this.x += 1;
    }
    if (this.d == 1) {
      this.y += 1;
    }
    if (this.d == 2) {
      this.x -= 1;
    }
    if (this.d == 3) {
      this.y -= 1;
    }

    if (this.x < 70) {
      if (this.y < 70) {
        this.d = 0;
      }
    }

    if (this.x < 70) {
      if (this.y > height - 70) {
        this.d = 3;
      }
    }
    if (this.x > width - 70) {
      if (this.y > height - 70) {
        this.d = 2;
      }
    }
    if (this.x > width - 70) {
      if (this.y < 70) {
        this.d = 1;
      }
    }
    // рух по колу проти годинникової стрілки

    // підрахунок балів
    fill(255, 255, 255);
    rect(this.x, this.y, 50, 30);
  }
}

var cars = [];
var myCar;

function setup() {
  createCanvas(600, 600);
  cars.push(
    new EnemyCar(width-80, 10, 2)
  );
  myCar = new MyCar(width/2, height-40, 2);
}

function draw() {
  background("gray");

  for (var i = 0; i < cars.length; i++) {
    cars[i].draw(); 
    // преервірка зіткнення

  }
  myCar.draw();
  

}