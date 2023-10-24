//  ------------------------------------------------------------------
//  
//
//  Copyright 2012 PBS KIDS Interactive. All Rights Reserved.

PBS.KIDS.storybook.config.pages.push({
	background: {
		url: "images/trees-right.jpg",
	},
	content: [
		{
			type: "TextArea",
			x: 0,
			y: 95,
			align: "center",
			color: "#222222",
			size: 18,
			font: "Droid Serif",
			text: "第10页"
		},
		{
			type: "TextArea",
			x: 20,
			y: 50,
			width: 80,
			align: "left",
			color: "#444444",
			size: 40,
			font: "Droid Serif",
			text: "\"大家好，可以和我跳个舞吗？\""
		},
		{
			type: "Sprite",
			x: 55,
			y: 33,
			numFrames: 8,
			frameDelay: 4,
			playOnPress: true,
			autoStart: false,
			autoReset: false,
			url: "images/apple-drop.png"
		},
		{
			type: "Sprite",
			x: 25,
			y: 57,
			numFrames: 2,
			frameDelay: 15,
			loop: false,
			playOnPress: true,
			autoStart: false,
			autoReset: true,
			url: "images/character-jump-animation.png"
		},
		{
			type: "Sprite",
			x: 75,
			y: 90,
			numFrames: 12,
			frameDelay: 5,
			playOnPress: true,
			autoStart: false,
			autoReset: true,
			url: "images/water-creature-hide-animation.png"
		},
		{
			type: "Sprite",
			x: 81,
			y: 18,
			numFrames: 20,
			frameDelay: 4,
			toggleOnPress: true,
			autoStart: true,
			loop: true,
			url: "images/bee-circle.png"
		},
		{
			type: "Sprite",
			x: 96,
			y: 28,
			numFrames: 20,
			frameDelay: 8,
			toggleOnPress: true,
			autoStart: true,
			loop: true,
			url: "images/bee-circle.png"
		},
		{
			type: "Sprite",
			x: -10,
			y: 92,
			numFrames: 12,
			frameDelay: 5,
			playOnPress: true,
			autoStart: false,
			autoReset: true,
			url: "images/water-creature-hide-animation.png"
		}
	]
});