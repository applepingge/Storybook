//  ------------------------------------------------------------------
//  
//
//  Copyright 2012 PBS KIDS Interactive. All Rights Reserved.

PBS.KIDS.storybook.config.pages.push({
	background: {
		url: "images/trees-left.jpg",
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
			text: "第9页"
		},
		{
			type: "TextArea",
			x: 20,
			y: 50,
			width: 60,
			align: "center",
			color: "#7b5900",
			size: 40,
			font: "Droid Serif",
			text: ["来到森林深处，小明遇到","了鳄鱼先生和蜜蜂小姐。"]
			
		},
		{
			type: "Sprite",
			x: 18,
			y: 85,
			numFrames: 12,
			frameDelay: 5,
			playOnPress: true,
			autoStart: false,
			autoReset: true,
			url: "images/water-creature-hide-animation.png"
		},
		{
			type: "Sprite",
			x: 60,
			y: 81,
			numFrames: 12,
			frameDelay: 4,
			playOnPress: true,
			autoStart: false,
			autoReset: true,
			url: "images/water-creature-hide-animation.png"
		},
		{
			type: "Sprite",
			x: 54,
			y: 30,
			numFrames: 20,
			frameDelay: 5,
			toggleOnPress: true,
			autoStart: true,
			loop: true,
			url: "images/bee-circle.png"
		},
		{
			type: "Sprite",
			x: 64,
			y: 34,
			numFrames: 20,
			frameDelay: 4,
			toggleOnPress: true,
			autoStart: true,
			loop: true,
			url: "images/bee-circle.png"
		},
		{
			type: "Sprite",
			x: 31,
			y: 36,
			numFrames: 20,
			frameDelay: 6,
			toggleOnPress: true,
			autoStart: true,
			loop: true,
			url: "images/bee-circle.png"
		}
	]
});