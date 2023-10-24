//  ------------------------------------------------------------------
//  
//
//  Copyright 2012 PBS KIDS Interactive. All Rights Reserved.

PBS.KIDS.storybook.config.pages.push({
	background: {
		url: "images/orchard-left.png"
	},
	content: [
		{
			type: "Sprite",
			x: -6,
			y: 30,
			numFrames: 20,
			frameDelay: 6,
			toggleOnPress: true,
			autoStart: true,
			loop: true,
			url: "images/bee-circle.png"
		},
		{
			type: "Sprite",
			x: 37,
			y: 55,
			numFrames: 8,
			frameDelay: 4,
			playOnPress: true,
			autoStart: false,
			autoReset: false,
			url: "images/apple-drop.png"
		},
		{
			type: "Sprite",
			x: 65,
			y: 38,
			numFrames: 8,
			frameDelay: 4,
			playOnPress: true,
			autoStart: true,
			autoReset: false,
			url: "images/apple-drop.png"
		},
		{
			type: "Sprite",
			x: 86,
			y: 27,
			numFrames: 8,
			frameDelay: 4,
			playOnPress: true,
			autoStart: false,
			autoReset: false,
			url: "images/apple-drop.png"
		},
		{
			type: "Sprite",
			x: 76,
			y: 59,
			numFrames: 8,
			frameDelay: 4,
			playOnPress: true,
			autoStart: false,
			autoReset: false,
			url: "images/apple-drop.png"
		},
		{
			type: "TextArea",
			x: 0,
			y: 95,
			align: "center",
			color: "#222222",
			size: 18,
			font: "Droid Serif",
			text: "第11页"
		},
		{
			type: "Sprite",
			x: 5,
			y: 92,
			numFrames: 12,
			frameDelay: 5,
			playOnPress: true,
			autoStart: false,
			autoReset: false,
			url: "images/water-creature-hide-animation.png"
		},
		{
			type: "Sprite",
			x: 27,
			y: 64,
			url: "images/apple-cart.png"
		}
	]
});
