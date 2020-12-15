class tree  {
    constructor(x,y){
        var options = {
            'restitution':0,
            'friction':0,
            'density':0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
      this.image = loadImage("Plucking mangoes/tree.png");
    }
  
    display() {
    push()
      imageMode(CENTER);
      image(this.image, 900,750, 500, 500);
      pop()
    }
  }
  