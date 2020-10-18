class Pig extends BaseClass {
  constructor(x, y,width,height){
    super(x,y,20,20);

  this.Visiblity = 255;
  }

display(){

 
if(this.body.speed<2.7777) {
var pos= this.body.position 
  var a=random(0,225)
  var b=random(0,225)
  var c=random(0,225)
  rectMode(CENTER);
  fill(a,b,c);
  rect(pos.x, pos.y, this.width, this.height);
  

}else{
World.remove(world,this.body);
push();
this.Visiblity-=5
tint(255,this.Visiblity);

tint(255,this.Visiblity);
this.Visiblity-=5
pop();
}



}
};
