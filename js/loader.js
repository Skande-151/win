var ctx = document.getElementById('circularLoader').getContext('2d');
var al = 0;
var start = 4.72;
var cw = ctx.canvas.width;
var ch = ctx.canvas.height; 
var diff;
var sim;
function progressSim(){
	diff = ((al / 100) * Math.PI*2*10).toFixed(2);
	ctx.clearRect(0, 0, cw, ch);
	ctx.lineWidth = 17;
	ctx.fillStyle = '#4285f4';
	ctx.strokeStyle = "#4285f4";
	ctx.textAlign = "center";
	ctx.font="28px monospace";
	ctx.fillText(al+'%', cw*.52, ch*.5+5, cw+12);
	ctx.beginPath();
	ctx.arc(100, 100, 75, start, diff/10+start, false);
	ctx.stroke();
	if(al >= 100){
		clearTimeout(sim);
	    // Add scripting here that will run when progress completes
		    myModal.show();
			loader.style.display ='none';

	}
	al++;
}



//اختيار الرابح
const win = document.querySelector("#winner");
const loader = document.querySelector(".loader-con");



var myModal = new bootstrap.Modal(document.getElementById('modal'), {
  KeyboardEvent: false
})



win.addEventListener('click',function(){
  loader.style.display ='block';
   sim = setInterval(progressSim, 20);


  
}); 
tsParticles.load("tsparticles", {
	"fullScreen": {
	  "zIndex": 1
	},
	"particles": {
	  "color": {
		"value": [
		  "#FFFFFF",
		  "#FFd700"
		]
	  },
	  "move": {
		"direction": "bottom",
		"enable": true,
		"outModes": {
		  "default": "out"
		},
		"size": true,
		"speed": {
		  "min": 1,
		  "max": 3
		}
	  },
	  "number": {
		"value": 500,
		"density": {
		  "enable": true,
		  "area": 800
		}
	  },
	  "opacity": {
		"value": 1,
		"animation": {
		  "enable": false,
		  "startValue": "max",
		  "destroy": "min",
		  "speed": 0.3,
		  "sync": true
		}
	  },
	  "rotate": {
		"value": {
		  "min": 0,
		  "max": 360
		},
		"direction": "random",
		"move": true,
		"animation": {
		  "enable": true,
		  "speed": 60
		}
	  },
	  "tilt": {
		"direction": "random",
		"enable": true,
		"move": true,
		"value": {
		  "min": 0,
		  "max": 360
		},
		"animation": {
		  "enable": true,
		  "speed": 60
		}
	  },
	  "shape": {
		"type": [
		  "square",
		  "polygon"
		],
		"options": {
		  "polygon": [
			{
			  "sides": 5
			},
			{
			  "sides": 6
			}
		  ]
		}
	  },
	  "size": {
		"value": {
		  "min": 2,
		  "max": 4
		}
	  },
	  "roll": {
		"darken": {
		  "enable": true,
		  "value": 30
		},
		"enlighten": {
		  "enable": true,
		  "value": 30
		},
		"enable": true,
		"speed": {
		  "min": 15,
		  "max": 25
		}
	  },
	  "wobble": {
		"distance": 30,
		"enable": true,
		"move": true,
		"speed": {
		  "min": -15,
		  "max": 15
		}
	  }
	}
  });