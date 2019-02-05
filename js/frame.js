function Fire(){
  this.life = 100;
}

var fire = new Fire();
var player = new Player();
function Player(){
  this.pos = [50,50];
  this.inventory = [{type: "wood", amount: 0}];
  this.score = 0;
  this.time = 0;
}

// Player.prototype.addToInventory(obj){
//   this.inventory.push(obj);
// }


Player.prototype.cutTree = function(arr){
  this.inventory[0].amount++;
    arr.forEach(function(ar){
      map[map.indexOf(ar)] = [];
    })
    map = map.filter(function(ma){
      if(ma.length > 1)
      {
        return ma;
      }
    })
    console.log(map.length);
    $(".tree").remove();
    mapFill();
    setTimeout(refill, 10000);

  }

Player.prototype.addToFire = function(){
  if(this.inventory[0].amount > 0){
    this.inventory[0].amount -= 1;
    fire.life += 5;
  }
};

var over = false;
function gameOver(){
$("#gridSpot").hide();
$("#game-over").show();
$(".bonfire").hide();
$(".man").empty();
$("#inventory").hide();
over = true;
}

function gameRestart(){
  $("#gridSpot").show();
  $("#game-over").hide();
  $(".bonfire").show();
  $(".man").empty();
  $("#inventory").show();
  fire = new Fire();
  myTimer();
  myVar = setInterval(myTimer, 1000);
  player = new Player();
  over = false;
}
