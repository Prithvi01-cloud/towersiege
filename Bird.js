class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,25,25);

  }

  display() {
     
    var pos =this.body.position;
    push();
    
    rectMode(CENTER);
    fill("cyan");
    rect(pos.x, pos.y, this.width, this.height);
    pop();
  }
}
