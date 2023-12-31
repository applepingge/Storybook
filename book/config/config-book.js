//  ------------------------------------------------------------------
//  book.js
//
//  Copyright 2012 PBS KIDS Interactive. All Rights Reserved.

PBS.KIDS.storybook.config = {
	background: {
		color: "#ababab",
		url: "images/circles-background.png"
		//url: "images/reynold-background.jpg"
	},
	audio: {
		enabled: true,
		path: "audio/",
		//path: "http://www.williammalone.com/public/",
		name: "地上"	
	},
	book: {
		//font: "Georgia",
		startOnPage: 0,
		pageWidth: 768,
		pageHeight: 1024,
		previousPageButton: {
			url: "images/prev-page-button.png",
			x: 1,
			y: 50,
			width: "50px",
			height: "50px"
		},
		nextPageButton: {
			url: "images/next-page-button.png",
			horizontalAlign: "RIGHT",
			x: 1,
			y: 50,
			width: "50px",
			height: "50px"
		},
		pageBackground: {
			color: "#fefefe"
		},
		oddPageBackground: {
			color: "#fdfdfd"
		},
		evenPageBackground: {
			color: "#f9f9f9"
		},
		pageTurnDuration: 1000,
		pageSlideDuration: 200
	},
	cover: {
		background: {
			url: "images/cover.jpg"
		},
		content: [
			{
				type: "TextArea",
				x: 0,
				y: 25,
				align: "center",
				color: "#222222",
				size: 68,
				font: "Droid Serif",
				text: "小明历险记"
			},
			{
				type: "Sprite",
				x: 25,
				y: 80,
				numFrames: 10,
				frameDelay: 10,
				loop: true,
				url: "images/ball-roll.png"
			}
		]
	},
	pages: []
};