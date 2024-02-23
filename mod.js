elements.ghost_particle = {
	color: "#d9d2d0",
	behavior: behaviors.GAS,
	category: "soul",
	state: "gas",
};

elements.soul_fish = {
    color: ["#808080","#a52a2a"], 
    category: "soul",
    behavior: [
       "XX|CR:flash|XX",
        "CR:flash|XX|CR:flash",
        "XX|CR:flash|XX",
    ],
    reactions: {
        "algae": { elem2:null, chance:0.25, func:behaviors.FEEDPIXEL },
        "plant": { elem2:null, chance:0.125, func:behaviors.FEEDPIXEL },
        "fly": { elem2:null, chance:0.4, func:behaviors.FEEDPIXEL },
        "firefly": { elem2:null, chance:0.6, func:behaviors.FEEDPIXEL },
        "worm": { elem2:null, chance:0.25, func:behaviors.FEEDPIXEL },
        "tadpole": { elem2:null, chance:0.25, func:behaviors.FEEDPIXEL },
        "oxygen": { elem2:"carbon_dioxide", chance:0.5 },
        "dead_bug": { elem2:null, chance:0.2, func:behaviors.FEEDPIXEL },
        "broth": { elem2:"water", chance:0.2, func:behaviors.FEEDPIXEL },
        "slug": { elem2:null, chance:0.2, func:behaviors.FEEDPIXEL },
        "herb": { elem2:null, chance:0.15, func:behaviors.FEEDPIXEL },
        "lettuce": { elem2:null, chance:0.15, func:behaviors.FEEDPIXEL },
        "dead_plant": { elem2:null, chance:0.15, func:behaviors.FEEDPIXEL },
        "lichen": { elem2:null, chance:0.1, func:behaviors.FEEDPIXEL },
        "yeast": { elem2:null, chance:0.15, func:behaviors.FEEDPIXEL },
        "yogurt": { elem2:null, chance:0.15, func:behaviors.FEEDPIXEL },
        "tea": { elem2:null, chance:0.2, func:behaviors.FEEDPIXEL },
        "yolk": { elem2:null, chance:0.15, func:behaviors.FEEDPIXEL },
        "cell": { elem2:null, chance:0.15, func:behaviors.FEEDPIXEL },
        "crumb": { elem2:null, chance:0.1, func:behaviors.FEEDPIXEL },
        "alcohol": { elem1:"meat", chance:0.001 },
    }
    };
elements.soul_anger_block = {
    color: ["#eb4034","#ed2415"], 
    category: "soul",
    behavior: [
       "HT|HT|HT",
       "CR:heat_ray|HT|CR:heat_ray",
       "HT|CR:heat_ray|HT",
    ],
};
elements.carboner = {
    color: "#656869",
    category: "machines",
    state: "solid",
    density: 720,
    behavior: behaviors.SOLID,
    tick: function(pixel) {
            createPixel("carbon_dioxide", pixel.x, pixel.y+1);
    },
};

elements.nitrogener = {
    color: "#656869",
    category: "machines",
    state: "solid",
    density: 720,
    behavior: behaviors.SOLID,
    tick: function(pixel) {
            createPixel("hydrogen", pixel.x, pixel.y+1);
    },
};

elements.soul_dirt = {
		color: ["#999a98", "#e6e7e2", "#dddcda"],
		behavior: behaviors.POWDER,
		properties: {
			methaned: false,
		},
		tick: function(pixel) {
			spreadLifeEater(pixel).forEach(infectedPixel => spreadLifeEater(infectedPixel));
			
			if(pixelTicks - pixel.start > 6) {
				if(!pixel.methaned && Math.random() < 0.2) {
					changePixel(pixel,Math.random() < 0.2 ? "ghost_particle" : "ghost_particle");
				} else {
					pixel.methaned = true;
				};
				tryCreatePlus(["ghost_particle","ghost_particle"],pixel.x,pixel.y);
				return;
			};
		},
		category: "soul",
		state: "powder",
		density: 1050,
		excludeRandom: true,
	};
