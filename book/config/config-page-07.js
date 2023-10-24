//  ------------------------------------------------------------------
//  
//
//  Copyright 2012 PBS KIDS Interactive. All Rights Reserved.

PBS.KIDS.storybook.config.pages.push({
	background:{
		url: "images/rise-left.png"
	},
	content: [
		{
			type: "Sprite",
			x: 20,
			y: 33,
			url: "images/ball-bounce.png"
		},
		{
			type: "Sprite",
			x: 25,
			y: 70,
			numFrames: 14,
			frameDelay: 1,
			loop: true,
			url: "images/ball-bounce.png"
		},
		{
			type: "Sprite",
			x: 40,
			y: 70,
			numFrames: 14,
			frameDelay: 2,
			loop: true,
			url: "images/ball-bounce.png"
		},
		{
			type: "Sprite",
			x: 55,
			y: 70,
			numFrames: 14,
			frameDelay: 4,
			loop: true,
			url: "images/ball-bounce.png"
		},
		{
			type: "Sprite",
			x: 70,
			y: 70,
			numFrames: 14,
			frameDelay: 16,
			loop: true,
			url: "images/ball-bounce.png"
		},
		{
			type: "TextArea",
			x: 0,
			y: 95,
			align: "center",
			color: "#222222",
			size: 18,
			font: "Droid Serif",
			text: "第7页"
		}
	]
});