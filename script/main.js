// trigger to play music in the background with sweetalert
  window.addEventListener('load', () => {
    Swal.fire({
      title: 'Do you want to play music in the background?',
      // text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        document.querySelector('.song').play();
        resolveFetch().then(animationTimeline());
      } else {
        resolveFetch().then(animationTimeline());
      }
    });
  });


  // animation timeline
  const animationTimeline = () => {
    // split chars that needs to be animated individually
    const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
    const hbd = document.getElementsByClassName("wish-hbd")[0];

    textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
      .split("")
      .join("</span><span>")}</span`;

    hbd.innerHTML = `<span>${hbd.innerHTML
      .split("")
      .join("</span><span>")}</span`;

    const ideaTextTrans = {
      opacity: 0,
      y: -20,
      rotationX: 5,
      skewX: "15deg"
    }

    const ideaTextTransLeave = {
      opacity: 0,
      y: 20,
      rotationY: 5,
      skewX: "-15deg"
    }

    // timeline
    const tl = new TimelineMax();

    tl.to(".container", 0.6, {
      visibility: "visible"
    })
      .from(".one", 0.7, {
        opacity: 0,
        y: 10
      })
      .from(".two", 0.4, {
        opacity: 0,
        y: 10
      })
      .to(".one",
        0.7,
        {
          opacity: 0,
          y: 10
        },
      "+=3.5")
      .to(".two",
        0.7,
        {
          opacity: 0,
          y: 10
        },
      "-=1")
      .from(".three", 0.7, {
        opacity: 0,
        y: 10
      })
      .to(".three",
        0.7,
        {
          opacity: 0,
          y: 10
        },
      "+=3")
      .from(".four", 0.7, {
        scale: 0.2,
        opacity: 0,
      })
      .from(".fake-btn", 0.3, {
        scale: 0.2,
        opacity: 0,
      })
      .staggerTo(
        ".hbd-chatbox span",
        1.5, {
          visibility: "visible",
        },
        0.05
      )
      .to(".fake-btn", 0.1, {
        backgroundColor: "rgb(127, 206, 248)",
      },
      "+=4")
      .to(
        ".four",
        0.5, {
          scale: 0.2,
          opacity: 0,
          y: -150
        },
      "+=1")
      .from(".idea-1", 0.7, ideaTextTrans)
      .to(".idea-1", 0.7, ideaTextTransLeave, "+=2.5")
      .from(".idea-2", 0.7, ideaTextTrans)
      .to(".idea-2", 0.7, ideaTextTransLeave, "+=2.5")
      .from(".idea-3", 0.7, ideaTextTrans)
      .to(".idea-3 strong", 0.5, {
        scale: 1.2,
        x: 10,
        backgroundColor: "rgb(21, 161, 237)",
        color: "#fff",
      })
      .to(".idea-3", 0.7, ideaTextTransLeave, "+=2.5")
      .from(".idea-4", 0.7, ideaTextTrans)
      .to(".idea-4", 0.7, ideaTextTransLeave, "+=2.5")
      .from(
        ".idea-5",
        0.7, {
          rotationX: 15,
          rotationZ: -10,
          skewY: "-5deg",
          y: 50,
          z: 10,
          opacity: 0,
        },
        "+=1.5"
      )
      .to(
        ".idea-5 span",
        0.7, {
          rotation: 90,
          x: 8,
        },
        "+=1.4"
      )
      .to(
        ".idea-5",
        0.7, {
          scale: 0.2,
          opacity: 0,
        },
        "+=2"
      )
      .staggerFrom(
        ".idea-6 span",
        0.8, {
          scale: 3,
          opacity: 0,
          rotation: 15,
          ease: Expo.easeOut,
        },
        0.2
      )
      .staggerTo(
        ".idea-6 span",
        0.8, {
          scale: 3,
          opacity: 0,
          rotation: -15,
          ease: Expo.easeOut,
        },
        0.2,
        "+=1.5"
      )
      .staggerFromTo(
        ".baloons img",
        2.5, {
          opacity: 0.9,
          y: 1400,
        }, {
          opacity: 1,
          y: -1000,
        },
        0.2
      )
      .from(
        ".profile-picture",
        0.5, {
          scale: 3.5,
          opacity: 0,
          x: 25,
          y: -25,
          rotationZ: -45,
        },
        "-=2"
      )
      .from(".hat", 0.5, {
        x: -100,
        y: 350,
        rotation: -180,
        opacity: 0,
      })
      .staggerFrom(
        ".wish-hbd span",
        0.7, {
          opacity: 0,
          y: -50,
          // scale: 0.3,
          rotation: 150,
          skewX: "30deg",
          ease: Elastic.easeOut.config(1, 0.5),
        },
        0.1
      )
      .staggerFromTo(
        ".wish-hbd span",
        0.7, {
          scale: 1.4,
          rotationY: 150,
        }, {
          scale: 1,
          rotationY: 0,
          color: "#ff69b4",
          ease: Expo.easeOut,
        },
        0.1,
        "party"
      )
      .from(
        ".wish h5",
        0.5, {
          opacity: 0,
          y: 10,
          skewX: "-15deg",
        },
        "party"
      )
      .staggerTo(
        ".eight svg",
        1.5, {
          visibility: "visible",
          opacity: 0,
          scale: 80,
          repeat: 3,
          repeatDelay: 1.4,
        },
        0.3
      )
      .to(".six", 0.5, {
        opacity: 0,
        y: 30,
        zIndex: "-1",
      })
      .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
      .to(
        ".last-smile",
        0.5, {
          rotation: 90,
        },
        "+=1"
      );

    // Restart Animation on click
    const replyBtn = document.getElementById("replay");
    replyBtn.addEventListener("click", () => {
      tl.restart();
    });
  }

  // Import the data to customize and insert them into page
  const fetchData = () => {
    fetch("customize.json")
      .then(data => data.json())
      .then(data => {
        Object.keys(data).map(customData => {
          if (data[customData] !== "") {
            if (customData === "imagePath") {
              document
                .getElementById(customData)
                .setAttribute("src", data[customData]);
            } else {
              document.getElementById(customData).innerText = data[customData];
            }
          }
        });
      });
  };

  // Run fetch and animation in sequence
  const resolveFetch = () => {
    return new Promise((resolve, reject) => {
      fetchData();
      resolve("Fetch done!");
    });
  };


  // firework

  (function () {
  'use strict';
  
  var canvas = document.querySelector('canvas'),
      ctx = canvas.getContext('2d'),
      W = canvas.width = window.innerWidth,
      H = canvas.height = window.innerHeight,
      maxP = 700,
      minP = 1000,
      fireworks = [];
  
  function tick() {
    var newFireworks = [];
    ctx.clearRect(0, 0, W, H);
    
    fireworks.forEach(function (firework) {
      firework.draw();
      if (!firework.done) newFireworks.push(firework);
    });
    
    fireworks = newFireworks;
    window.requestAnimationFrame(tick);
  }
  
  function Vector(x, y) {
    this.x = x;
    this.y = y;
  }
  
  Vector.prototype = {
    constructor: Vector,
    
    add: function (vector) {
      this.x += vector.x;
      this.y += vector.y;
    },
    
    diff: function (vector) {
      var target = this.copy();
      return Math.sqrt(
        (target.x-=vector.x) * target.x + (target.y-=vector.y) * target.y
      );
    },
    
    copy: function () {
      return new Vector(this.x, this.y);
    }
  };
  
  var colors = [
    ['rgba(179,255,129,', 'rgba(0,255,0,'], //green / white
    ['rgba(0,0,255,', 'rgba(100,217,255,'], //blue / cyan
    ['rgba(255,0,0,', 'rgba(255,255,0,'], //red / yellow
    ['rgba(145,0,213,', 'rgba(251,144,204,'] //purple / pink
  ];
  
  function Firework(start, target, speed) {
    this.start = start;
    this.pos = this.start.copy();
    this.target = target;
    this.spread = Math.round(Math.random() * (maxP-minP)) + minP;
    this.distance = target.diff(start);
    this.speed = speed || Math.random() * 5 + 15;
    this.angle = Math.atan2(target.y - start.y, target.x - start.x);
    this.velocity = new Vector(
      Math.cos(this.angle) * this.speed,
      Math.sin(this.angle) * this.speed
    );
    
    this.particals = [];
    this.prevPositions = [];
    
    var colorSet = colors[Math.round(Math.random() * (colors.length -1))];
    
    for (var i=0; i<this.spread; i++) {
      this.particals.push(new Partical(target.copy(), colorSet));
    }
  }
  
  Firework.prototype = {
    constructor: Firework,
    
    draw: function () {
      var last = this.prevPositions[this.prevPositions.length -1] || this.pos;
      
      ctx.beginPath();
      ctx.moveTo(last.x, last.y);
      ctx.lineTo(this.pos.x, this.pos.y);
      ctx.strokeStyle = 'rgba(255,255,255,.7)';
      ctx.stroke();
      
      this.update();
    },
    
    update: function () {
      if (this.start.diff(this.pos) >= this.distance) {
        var newParticals = [];
        this.particals.forEach(function (partical) {
          partical.draw();
          if (!partical.done) newParticals.push(partical);
        });
        
        this.particals = newParticals;
        this.prevPositions = [];
        
        if (!newParticals.length) this.done = true;
      } else {
        this.prevPositions.push(this.pos.copy());
        
        if (this.prevPositions.length > 8) {
          this.prevPositions.shift();
        }

        this.pos.add(this.velocity);
      }
    }
  };
  
  function Partical(pos, colors) {
    this.pos = pos;
    this.ease = 0.2;
    this.speed = Math.random() * 6 + 2;
    this.gravity = Math.random() * 3 + 0.1;
    this.alpha = .8;
    this.angle = Math.random() * (Math.PI*2);
    this.color = colors[Math.round(Math.random() * (colors.length - 1))];
    this.prevPositions = [];
  }
  
  Partical.prototype = {
    constructor: Partical,
    
    draw: function () {
      var last = this.prevPositions[this.prevPositions.length -1] || this.pos;
      
      ctx.beginPath();
      ctx.moveTo(last.x, last.y);
      ctx.lineTo(this.pos.x, this.pos.y);
      ctx.strokeStyle = this.color + this.alpha + ')';
      ctx.stroke();
      
      this.update();
    },
    
    update: function () {
      if (this.alpha <= 0) {
        this.done = true;
      } else {
        this.prevPositions.push(this.pos.copy());
        
        if (this.prevPositions.length > 10) this.prevPositions.shift();
        if (this.speed > 1) this.speed -= this.ease;
        
        this.alpha -= 0.01;
        this.gravity += 0.01;
        
        this.pos.add({
          x: Math.cos(this.angle) * this.speed,
          y: Math.sin(this.angle) * this.speed + this.gravity
        });
      }
    }
  };
  
  function addFirework(target) {
    var startPos = new Vector(W/2, H);
    target = target || new Vector(Math.random() * W, Math.random() * (H - 300));
    fireworks.push(new Firework(startPos, target));
  }
  
  canvas.addEventListener('click', function (e) {
    addFirework(new Vector(e.clientX, e.clientY))
  }, false);
  
  function randomFirework() {
    addFirework();
    window.setTimeout(randomFirework, Math.random() * 500);
  }
  
  tick();
  randomFirework();
  
})();