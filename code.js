var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["88bb9303-e326-49d7-ba9c-11a3df20d18c","1479c78a-6df8-4c68-95bf-8df5b88df862","7a9e9a24-ecc7-434c-8132-c530aa50ea5e","d5b438b0-4637-4b08-a65e-7ca6509bd4a0","0c5e2230-0277-4de1-bf5d-6294fed2769c","32342f6e-6929-4cce-b655-1e9cf3bb2246","231e344a-57b5-467b-9257-311fd1934b73","672143a6-569e-409c-93f2-629a9add799b"],"propsByKey":{"88bb9303-e326-49d7-ba9c-11a3df20d18c":{"name":"fish_silver_1","sourceUrl":"assets/api/v1/animation-library/gamelab/J0gcjeAowWwRR2XQY.ApgtNCe1P2tzsd/category_animals/fish_silver.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"J0gcjeAowWwRR2XQY.ApgtNCe1P2tzsd","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/J0gcjeAowWwRR2XQY.ApgtNCe1P2tzsd/category_animals/fish_silver.png"},"1479c78a-6df8-4c68-95bf-8df5b88df862":{"name":"bg_underwater_07_1","sourceUrl":"assets/api/v1/animation-library/gamelab/nlKh.1TrqEu2U_N6Zm2Vx5XUmRfunazM/category_backgrounds/bg_underwater_07.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"nlKh.1TrqEu2U_N6Zm2Vx5XUmRfunazM","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/nlKh.1TrqEu2U_N6Zm2Vx5XUmRfunazM/category_backgrounds/bg_underwater_07.png"},"7a9e9a24-ecc7-434c-8132-c530aa50ea5e":{"name":"texture_06_1","sourceUrl":"assets/api/v1/animation-library/gamelab/JArJqjJuiOPXRib55cWC1rlaMtoE5EM4/category_backgrounds/texture_06.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"JArJqjJuiOPXRib55cWC1rlaMtoE5EM4","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/JArJqjJuiOPXRib55cWC1rlaMtoE5EM4/category_backgrounds/texture_06.png"},"d5b438b0-4637-4b08-a65e-7ca6509bd4a0":{"name":"mouse_1","sourceUrl":null,"frameSize":{"x":61,"y":37},"frameCount":1,"looping":true,"frameDelay":12,"version":"OvXkHqKNXfUCI20RCURiNP8Lj9ckgzzr","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":61,"y":37},"rootRelativePath":"assets/d5b438b0-4637-4b08-a65e-7ca6509bd4a0.png"},"0c5e2230-0277-4de1-bf5d-6294fed2769c":{"name":"bee_1","sourceUrl":null,"frameSize":{"x":63,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"Zx.0tay6.C.x0IkAmlXbly8eqo5Aa7zk","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":63,"y":50},"rootRelativePath":"assets/0c5e2230-0277-4de1-bf5d-6294fed2769c.png"},"32342f6e-6929-4cce-b655-1e9cf3bb2246":{"name":"fish_cooked_1","sourceUrl":"assets/api/v1/animation-library/gamelab/m9l4nA.vtEzxV.xA3JQgm6.gnAKo4niO/category_food/fish_cooked.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"m9l4nA.vtEzxV.xA3JQgm6.gnAKo4niO","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/m9l4nA.vtEzxV.xA3JQgm6.gnAKo4niO/category_food/fish_cooked.png"},"231e344a-57b5-467b-9257-311fd1934b73":{"name":"wing_bot_1","sourceUrl":null,"frameSize":{"x":218,"y":128},"frameCount":1,"looping":true,"frameDelay":12,"version":"P3Kg4U08ZyXqZxfW9PahkUuELwpASR_E","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":218,"y":128},"rootRelativePath":"assets/231e344a-57b5-467b-9257-311fd1934b73.png"},"672143a6-569e-409c-93f2-629a9add799b":{"name":"coin_gold_1","sourceUrl":"assets/api/v1/animation-library/gamelab/pUFPchUgZRoy5C6YtEEkLfSDmZWPxW.y/category_board_games_and_cards/coin_gold.png","frameSize":{"x":61,"y":61},"frameCount":1,"looping":true,"frameDelay":2,"version":"pUFPchUgZRoy5C6YtEEkLfSDmZWPxW.y","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":61,"y":61},"rootRelativePath":"assets/api/v1/animation-library/gamelab/pUFPchUgZRoy5C6YtEEkLfSDmZWPxW.y/category_board_games_and_cards/coin_gold.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----





var boundary1 = createSprite(1, 100,800,5);
boundary1.shapeColor="grey";
var boundary2 = createSprite(1, 350,800,5);
boundary2.shapeColor="grey";
var start = createSprite(390, 225,100,250);
start.shapeColor="blue";
var end = createSprite(20, 225,90,250);
end.shapeColor="orange";
var rat1 = createSprite(200, 110,5,5);
rat1.setAnimation("mouse_1");
var rat2 = createSprite(300, 330,5,5);
rat2.setAnimation("mouse_1");
var rat3 = createSprite(100, 330,5,5);
rat3.setAnimation("mouse_1");
var bee = createSprite(380, 200,5,5);
bee.setAnimation("bee_1");
var goal = createSprite(30, 210,2,2);
goal.setAnimation("coin_gold_1");



var lives = 0;
var gameState = "serve";




function draw() {
background("white");

textSize(25);
stroke("red");
text("lives:"+lives,300,40);

if (gameState == "serve") {
  textSize(15);
  stroke("red");
  text("WELCOME PRESS ENTER TO START",70,200);
  
  if (keyDown("enter")) {
    rat1.velocityX=0;
    rat1.velocityY=1;
    rat2.velocityX=0;
    rat2.velocityY=-1;
    rat3.velocityX=0;
    rat3.velocityY=-1;
    gameState = "play";
  }
}

if (gameState == "play") {
  if (keyDown("left")) {
    bee.velocityX=-1;
    bee.velocityY=0;
  }
  if (keyDown("right")) {
    bee.velocityX=+1;
    bee.velocityY=0;
  }
  if (keyDown("up")) {
     bee.velocityY=-1;
    bee.velocityX=0;
  }
   if (keyDown("down")) {
    bee.velocityY=+1;
    bee.velocityX=0;
  }
  if (lives == 5||bee.isTouching(goal)) {
    gameState = "end";
  }
}

if (gameState == "end") {
  textSize(20);
  stroke("red");
  text("GAME OVER",120,200);
  bee.x=380;
  bee.y=200;
  bee.velocityX=0;
  bee.velocityY=0;
  rat1.x=200;
  rat1.y=110;
  rat2.x=300;
  rat2.y=330;
  rat3.x=100;
  rat3.y=330;
  rat1.velocityX=0;
  rat1.velocityY=0;
  rat2.velocityX=0;
  rat2.velocityY=0;
  rat3.velocityX=0;
  rat3.velocityY=0;
}














if (bee.isTouching(rat1)) {
  lives=lives+1;
  bee.x=385;
  bee.y=200;
   bee.velocityX=0;
  bee.velocityY=0;
}

if (bee.isTouching(rat2)) {
  lives=lives+1;
  bee.x=385;
  bee.y=200;
  bee.velocityX=0;
  bee.velocityY=0;
}

if (bee.isTouching(rat3)) {
  lives=lives+1;
  bee.x=385;
  bee.y=200;
   bee.velocityX=0;
  bee.velocityY=0;
}




createEdgeSprites();
rat1.bounceOff(boundary1);
rat1.bounceOff(boundary2);
rat2.bounceOff(boundary1);
rat2.bounceOff(boundary2);
rat3.bounceOff(boundary1);
rat3.bounceOff(boundary2);

drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
