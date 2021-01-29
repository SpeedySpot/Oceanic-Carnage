function preload() {
  song = loadSound('assets/music.mp3');
  menu = loadSound('assets/menu.mp3');
  victory = loadSound('assets/victory.mp3');
  gameover = loadSound('assets/gameover.mp3');
  fish = loadImage('assets/fish.png')
  bag = loadImage('assets/bag.png')
  hook = loadImage('assets/hook.png')
  health5 = loadImage('assets/health5.png')
  health4 = loadImage('assets/health4.png')
  health3 = loadImage('assets/health3.png')
  health2 = loadImage('assets/health2.png')
  health1 = loadImage('assets/health1.png')
  health0 = loadImage('assets/health0.png')
  logo = loadImage('assets/logo.png')
  d = loadImage('assets/ranks/D.png')
  c = loadImage('assets/ranks/C.png')
  b = loadImage('assets/ranks/B.png')
  a = loadImage('assets/ranks/A.png')
  s = loadImage('assets/ranks/S.png')
  death = loadImage('assets/death.png')
}

function setup() {
  survive = 0;
  createCanvas(600, 400);
  player = new Person();
  bad = [];
  startOffset = millis();
  scene = 0;
  fish.resize(50, 0);
  bag.resize(70, 100);
  health5.resize(100, 0);
  health4.resize(100, 0);
  health3.resize(100, 0);
  health2.resize(100, 0);
  health1.resize(100, 0);
  health0.resize(100, 0);
  s.resize(100, 0);
  a.resize(100, 0);
  b.resize(100, 0);
  c.resize(100, 0);
  d.resize(100, 0);
  clock1 = new Clock({
    clock: 300,
    start: function() {
      repeat0();
    }
  });
  clock2 = new Clock({
    clock: 1000,
    start: function() {
      repeat1();
    }
  });
  clock3 = new Clock({
    clock: 1000,
    start: function() {
      repeat2();
    }
  });
  clock3b = new Clock({
    clock: 200,
    start: function() {
      repeat2b();
    }
  });
  clock4 = new Clock({
    clock: 600,
    start: function() {
      repeat3();
    }
  });
  clock4b = new Clock({
    clock: 650,
    start: function() {
      repeat3b();
    }
  });
  clock5 = new Clock({
    clock: 1500,
    start: function() {
      repeat4();
    }
  });
  clock6 = new Clock({
    clock: 1000,
    start: function() {
      repeat5();
    }
  });
  clock6b = new Clock({
    clock: 500,
    start: function() {
      repeat5b();
    }
  });
menu.play();
}


function draw() {
  if (scene === 0) {
    scene0();
  } else if (scene === 1) {
    scene1();
  } else if (scene === 2) {
    scene2();
  } else if (scene === 3) {
    scene3();
  } else if (scene === 4) {
    scene4();
  }

}
