
PBS.KIDS.storybook.config.pages.push({
	background: {
		color: "#fdfdfd",
		url: "images/carpet-right.jpg"
	},
	content: [
		{
			type: "TextArea",
			x: 0,
			y: 95,
			align: "center",
			color: "#eeeeee",
			size: 18,
			font: "Droid Serif",
			text: "第18页"
		},
		{
			type: "DrawingPad",
			x: "177px",
			y: "126px",
			width: "413px",
			height: "345px",
			defaultColor: "#346679",
			radius: 15,
			textureUrl: "images/window-texture.png",
			eraserButtons: [
				{
					x: "680px",
					y: "210px",
					url: "images/eraser-button.png"
				}
			],
			clearButtons: [
				{
					x: "680px",
					y: "120px",
					url: "images/clear-button.png"
				}
			],
			colorButtons: [
				{
					paintColor: "#ffdc00",
					x: "680px",
					y: "400px",
					url: "images/paint-brush-yellow.png"
				},
				{
					paintColor: "#ff0074",
					x: "680px",
					y: "300px",
					url: "images/paint-brush-purple.png"
				}
			]
		}
	]
});