var dog,dog_Img,dog_Img1,Milk,Milk_Img;
var database;
var feedDog, addFoods, foodObj;
var foods,foodStock, lastFed;

function preload(){
   dog_Img=loadImage("Dog.png");
   dog_Img1=loadImage("happy dog.png");
   Milk_img = loadImage("Milk.png");  
  }
  

function setup() {
  database=firebase.database();
  createCanvas(500,500);

  dog=createSprite(250,300,150,150);
  dog.addImage(dog_Img);
  dog.scale=0.15;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20);
  
  feed = createButton("Feed the dog");
  feed.position(600, 100);
  feed.mousePressed(feedDog);

  addFood = createButton("Add Food");
  addFood.position(700, 100);
  addFood.mousePressed(addFoods);

  FedTime=database.ref('FeedTime');
  FedTime.on("value", function(data){
    lastFed = data.val();
  }); 

}

function draw() {
  background(46,139,87);
 
  if(keyCode === UP_ARROW){
    writeStock(foods);
    dog.addImage(dog_Img1);
  }

  drawSprites();
  fill(255,255,254);
  stroke("black");
  text("Food remaining : "+foods,170,200);
  
  fill(255, 255, 254);
  textSize(15);
  if(lastFed >= 12) {
    text("Last Feed : 12 AM" + lastFed % 12 + "PM", 350, 30);
  } else if(lastFed == 0 ) {
    text("Last Feed : + 12 AM", 350, 30);
  }else{
    text("Last Feed : " + lastFed + "AM", 350, 30);
  }

  //display() {
   // this.image = loadImage(Milk.png);  

  //}

}

function readStock(data){
  foods=data.val();
}

function writeStock(x){
  if(x < 0){
    x= 0;
  }
  
  else {
    x = x + 1;
  
  } 
  database.ref('/').update({
    Food:x
  })
}

function feedDog() {
  dog.addImage(dog_Img1);
  Milk.addImage(Milk_Img);
  foodObj.updateFoodStock(foodObj.getFoodStock() - 1);
  database.ref('/').update({Food : foodObj.getFoodStock(),
  FeedTime : hour ()
  });
}

function addFoods() {
  this.image = loadImage("Milk.png");
  foods++;
  database.ref('/').update({
    Food : foods
  })
}