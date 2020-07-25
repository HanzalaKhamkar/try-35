class Food {
  constructor() {
    this.foodStock = new foodStock();
    this.lastFed = new lastFed();
    this.image = loadImage("Milk.png");

  }  

  getFoodStock() {
    Milk.addImage(Milk_Img);

  }

  updateFoodStock() {

  }

  deductFood() {

  }

  display() {

    var x = 80, y = 100;

    imageMode (CENTER);
    image (this.image, 720, 220, 70, 70);
    this.image = loadImage("Milk.png");  

    if(this.foodStock!=10){
        for(var i = 0 < this.foodStock; i++;) {
            if(i % 10==0) {
                x = 80;
                y = y + 50;
            }

            image(this.image, x, y, 50, 50);
            x = 80;
            y = y + 50;

        }
    }
  }

}
