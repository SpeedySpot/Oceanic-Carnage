function game() {
  setTimeout(game0, 25500);
  //setTimeout(win, 4000);
  for (i = 0; i < 5; i++) {
    setTimeout(game1a, 28000 + 2000 * i);
    setTimeout(game1b, 29000 + 2000 * i);
  }
  setTimeout(game2, 39000);
  for (i = 0; i < 5; i++) {
    setTimeout(game3, 43000 + i * 300);
  }
  for (i = 0; i < 9; i++) {
    setTimeout(setTimeout(game4.bind(null, i), 47000 + i * 100));
  }
  for (i = 0; i < 9; i++) {
    setTimeout(setTimeout(game4b.bind(null, i), 48000 + i * 100));
  }

  setTimeout(setTimeout(game5.bind(null, 0, 50, 600, 100), 64000));
  setTimeout(setTimeout(game5.bind(null, 0, 250, 600, 100), 64300));
  setTimeout(setTimeout(game5.bind(null, 100, 0, 100, 400), 64600));
  setTimeout(setTimeout(game5.bind(null, 400, 0, 100, 400), 64900));
  setTimeout(game5b, 65200);
  for (i = 0; i < 9; i++) {
    setTimeout(setTimeout(game4.bind(null, i), 79000 + i * 100));
  }
  for (i = 0; i < 9; i++) {
    setTimeout(setTimeout(game4b.bind(null, i), 80000 + i * 100));
  }
  for (i = 0; i < 4; i++) {
    setTimeout(game3, 110500 + i * 400);
  }
  for (i = 0; i < 8; i++) {
    setTimeout(game3, 112000 + i * 200);
  }
  for (i = 0; i < 9; i++) {
    setTimeout(setTimeout(game4.bind(null, i), 132500 + i * 100));
  }
  for (i = 0; i < 9; i++) {
    setTimeout(setTimeout(game4b.bind(null, i), 133500 + i * 100));
  }
  setTimeout(setTimeout(game5.bind(null, 0, 0, 600, 100), 122500));
  setTimeout(setTimeout(game5.bind(null, 0, 150, 600, 100), 123000));
  setTimeout(setTimeout(game5.bind(null, 0, 300, 600, 100), 123500));
  setTimeout(game6, 124000);
  setTimeout(game6, 124200);
  setTimeout(win, 126000);
}

function repeat0() {
  bad.push(new Bad({
    x: 600,
    y: random(-10, 410),
    size: 20,
    code: function() {
      this.x -= 5;
    },
    id: 1
  }))

}

function repeat1() {
  bad.push(new Bad({
    x: player.position.x,
    y: 0,
    size: 20,
    code: function() {
      this.y += 15;
    },
    id: 1
  }))
  bad.push(new Bad({
    x: 0,
    y: player.position.y,
    size: 20,
    code: function() {
      this.x += 15;
    },
    id: 1
  }))
}

function repeat2() {
  bad.push(new Bad({
    x: player.position.x,
    y: 0,
    stage: 0,
    code: function() {
      if (this.stage === 0) {
        this.y += 12;
        if (this.y > 400) {
          this.stage = 1;
        }
      }
      if (this.stage === 1) {
        this.y -= 12;
      }
    },
    id: 3
  }))
}

function repeat2b() {
  bad.push(new Bad({
    x: 600,
    y: random(-10, 410),
    size: 10,
    code: function() {
      this.x -= 5;
    },
    id: 1
  }))

}

function repeat3() {
  bad.push(new Bad({
    x: 600,
    y: random(-10, 410),
    code: function() {
      this.x -= 10;
      if (floor(random(0, 2)) === 0) {
        this.y += 10;
      } else {
        this.y -= 10;
      }
    },
    id: 2
  }))
}

function repeat3b() {
  bad.push(new Bad({
    x: 0,
    y: random(-10, 410),
    size: 10,
    code: function() {
      this.x += 5;

    },
    id: 1
  }))
}

function repeat4() {
  bad.push(new Bad({
    x: 0,
    y: player.position.y,
    size: 25,
    code: function() {
      this.x += 10;

    },
    id: 1
  }))
  bad.push(new Bad({
    x: 600,
    y: player.position.y,
    size: 25,
    code: function() {
      this.x -= 10;

    },
    id: 1
  }))
  bad.push(new Bad({
    x: player.position.x,
    y: 0,
    size: 25,
    code: function() {
      this.y += 10;

    },
    id: 1
  }))
  bad.push(new Bad({
    x: player.position.x,
    y: 400,
    size: 25,
    code: function() {
      this.y -= 10;

    },
    id: 1
  }))
}

function repeat5() {
  bad.push(new Bad({
    x: player.position.x,
    y: 0,
    stage: 0,
    code: function() {
      if (this.stage === 0) {
        this.y += 12;
        if (this.y > 400) {
          this.stage = 1;
        }
      }
      if (this.stage === 1) {
        this.y -= 12;
      }
    },
    id: 3
  }))
}

function repeat5b() {
  bad.push(new Bad({
    x: random(-10, 610),
    y: 400,
    size: 10,
    code: function() {
      this.y -= 5;

    },
    id: 1
  }))
}

function game0() {
  bad.push(new Bad({
    x: 0,
    y: 150,
    size: 600,
    size2: 100,
    t: 255,
    code: function() {
      this.t -= 2;
      if (this.t < 0) {
        bad.push(new Bad({
          x: 600,
          y: 200,
          size: 100,
          code: function() {
            this.x -= 15;
          },
          id: 1
        }))
        this.x = 1000;
      }
    },
    id: 4
  }))
}

function game1a() {
  bad.push(new Bad({
    x: 0,
    y: 100,
    size: 200,
    code: function() {
      this.x += 10;
    },
    id: 1
  }))
}

function game1b() {
  bad.push(new Bad({
    x: 600,
    y: 300,
    size: 200,
    code: function() {
      this.x -= 10;
    },
    id: 1
  }))
}

function game2() {
  bad.push(new Bad({
    x: 290,
    y: 0,
    size: 20,
    size2: 400,
    t: 255,
    code: function() {
      this.t -= 2;
      if (this.t < 0) {
        bad.push(new Bad({
          x: 290,
          y: 0,
          stage: 0,
          code: function() {
            if (this.stage === 0) {
              this.y += 12;
              if (this.y > 400) {
                this.stage = 1;
              }
            }
            if (this.stage === 1) {
              this.y -= 12;
            }
          },
          id: 3
        }))
        this.x = 1000;
      }
    },
    id: 4
  }))
}

function game3() {
  bad.push(new Bad({
    x: 0,
    y: player.position.y,
    size: 100,
    code: function() {
      this.x += 10;
    },
    id: 1
  }))
}

function game3() {
  bad.push(new Bad({
    x: 0,
    y: player.position.y,
    size: 50,
    code: function() {
      this.x += 10;
    },
    id: 1
  }))
}

function game4(i) {
  bad.push(new Bad({
    x: 20 + i * 70,
    y: 0,
    size: 20,
    size2: 400,
    t: 255,
    code: function() {
      this.t -= 2;
      if (this.t < 0) {

        this.x = 1000;
      }
    },
    id: 4
  }))

}

function game4b(i) {
  bad.push(new Bad({
    x: 20 + i * 70,
    y: 0,
    stage: 0,
    code: function() {
      if (this.stage === 0) {
        this.y += 12;
        if (this.y > 400) {
          this.stage = 1;
        }
      }
      if (this.stage === 1) {
        this.y -= 12;
      }
    },
    id: 3
  }))
}

function game5(a, s, d, f) {
  bad.push(new Bad({
    x: a,
    y: s,
    size: d,
    size2: f,
    t: 255,
    code: function() {
      this.t -= 6;
      if (this.t < 0) {

        this.x = 1000;
      }
    },
    id: 4
  }))
}

function game5b() {
  bad.push(new Bad({
    x: 0,
    y: 100,
    size: 100,
    code: function() {
      this.x += 15;
    },
    id: 1
  }))
  bad.push(new Bad({
    x: 600,
    y: 300,
    size: 100,
    code: function() {
      this.x -= 15;
    },
    id: 1
  }))
  bad.push(new Bad({
    x: 200,
    y: 400,
    size: 100,
    code: function() {
      this.y -= 15;
    },
    id: 1
  }))
  bad.push(new Bad({
    x: 500,
    y: 0,
    size: 100,
    code: function() {
      this.y += 15;
    },
    id: 1
  }))
}

function game6() {
  bad.push(new Bad({
    x: 0,
    y: 50,
    size: 100,
    code: function() {
      this.x += 15;
    },
    id: 1
  }))
  bad.push(new Bad({
    x: 0,
    y: 200,
    size: 100,
    code: function() {
      this.x += 15;
    },
    id: 1
  }))
  bad.push(new Bad({
    x: 0,
    y: 350,
    size: 100,
    code: function() {
      this.x += 15;
    },
    id: 1
  }))


}
/*bad.push(new Bad({
      x: 500,
      y: 0,
      size: 50,
      code: function() {
        this.y++;
      },
      id: 1
    }))
  */
/*bad.push(new Bad({
      x: 500,
      y: 0,
      code: function() {
        this.x -= 5;
        if (floor(random(0, 2)) === 0) {
          this.y += 5;
        } else {
          this.y -= 5;
        }
      },
      id: 2
    }))
  */

/*
  bad.push(new Bad({
    x: 500,
    y: 0,
    num: bad.length,
    stage: 0,
    code: function() {
      if (this.stage === 0) {
        this.y += 5;
        if (this.y > 300) {
          this.stage = 1;
        }
      }
      if (this.stage === 1) {
        this.y -= 5;
      }
    },
    id: 3
  }))
*/