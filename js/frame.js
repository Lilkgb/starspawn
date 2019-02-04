function Fire(){
  this.life = 100;
}

function Player(){
  this.pos = [50,50];
  this.inventory = [{type: wood, amount: 0}];
  this.score = 0;
  this.time = 0;
}

Player.prototype.addToInventory(obj){
  this.inventory.push(obj);
}

//When a tree is cut, add 1 wood to inventory, set used value to true, set a re-use time
Player.prototype.cutTree(theTree){
  if(theTree.used === false){
    this.inventory[0].amount += 1;
    theTree.used = true;
    theTree.reUse = 60;
  }
}

//Add wood to fire, add 30 seconds to fire life
Player.prototype.addToFire(theFire){
  if(player.inventory[0].amount > 0){
    this.inventory[0].amount -= 1;
    theFire.life += 30;
  }
}

Function Tree(){
  this.used = false;
  this.reUse = 0;
}
