(function() {
  // data layer
  var kaki = {
    actor: {
      x: 50,
      y: 50,
      speed: 1,
      width: 30,
      height: 30,
    },
    scene: {
      width: 400,
      height: 300
    },
    system: {
      fps: 60,
    },
  };

  // view layer
  var canvas;
  var ctx;

  // init
  function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
  }


  // functions
  function welcomeUI() {
  }

  function calculateActorGravity() {
    if(kaki.actor.y < kaki.scene.height - kaki.actor.height) {
      kaki.actor.y += (function(){
        return kaki.actor.speed += kaki.actor.speed * 0.05
      })();
    }
  }

  function actorHited() {
    if(kaki.actor.y > kaki.scene.height) {
      gameOver();
    }
  }

  function gameOver() {
    log('game over');
  }

  function actorJump() {
    kaki.actor.y -= 50;
  }

  function renderActor() {
    ctx.fillStyle= '#ffb52d'
    ctx.fillRect(10, kaki.actor.y, kaki.actor.width, kaki.actor.height);
  }

  function renderScene() {
    ctx.fillStyle= '#00c9ff'
    ctx.fillRect(0, 0, kaki.scene.width, kaki.scene.height)
  }

  // render canvas
  function render() {
    calculateActorGravity();
    renderScene();
    renderActor();
  }

  // clear canvas
  function clearRender() {
    ctx.clearRect(0, 0, kaki.scene.width, kaki.scene.height);
  }

  // update canvas
  function updateRender() {
    clearRender();
    actorHited()
    render();
  }

  window.addEventListener('keydown', function(e) {
    // 如果是空格
    if (e.keyCode === 32) {
      actorJump();
      kaki.actor.speed = 1;
    }
  });

  function __main() {
    window.requestAnimationFrame(__main);
    updateRender();
  }

  init(); // game initialize
  __main(); // game begin

  //
  function log() {
    console.log.bind(this, arguments)();
  }
})();
