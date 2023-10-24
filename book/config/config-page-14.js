PBS.KIDS.storybook.config.pages.push({
	background: {
		color: "#fdfdfd",
		url: "images/frozen-right.png"
	},
	content: [
		{
			type: "TextArea",
			x: 0,
			y: 95,
			align: "center",
			color: "#333333",
			size: 18,
			font: "Droid Serif",
			text: "第14页"
		},
		{
			type: "Cycler",
			autoStart: false,
			content: [
				{
					type: "Sprite",
					id: "tower2",
					x: "178px",
					y: "316px",
					numFrames: 12,
					frameDelay: 6,
					autoStart: false,
					url: "images/tower-top-2.png"
				},
				{
					type: "Sprite",
					id: "tower3",
					x: "178px",
					y: "316px",
					numFrames: 14,
					frameDelay: 2,
					url: "images/tower-top-3.png"
				}
			]
		}
	]
});