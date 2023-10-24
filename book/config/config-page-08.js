//  ------------------------------------------------------------------
//  
//
//  Copyright 2012 PBS KIDS Interactive. All Rights Reserved.

PBS.KIDS.storybook.config.pages.push({
	background: {
		numFrames: 5,
		frameDelay: 10,
		loop: false,
		url: "images/sunrise.jpg",
		playOnPress: true
	},
	content: [
		{
			type: "TextArea",
			x: 15,
			y: 60,
			width: 70,
			align: "left",
			color: "#444444",
			size: 40,
			font: "Droid Serif",
			paragraphSpacing:"20px",
			text: ["太阳升起来了，草原被洒上了","一层金色的光芒。"]
		},
		{
			type: "TextArea",
			x: 0,
			y: 95,
			align: "center",
			color: "#222222",
			size: 18,
			font: "Droid Serif",
			text: "第8页"
		}
	]
});