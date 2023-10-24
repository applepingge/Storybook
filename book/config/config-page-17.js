
PBS.KIDS.storybook.config.pages.push({
	background: {
		color: "#fdfdfd",
		url: "images/carpet-left.jpg"
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
			text: "第17页"
		},
		{
			type: "TextArea",
			x: 45,
			y: 63,
			width: 55,
			align: "left",
			color: "#cccccc",
			size: 38,
			font: "Droid Serif",
			paragraphSpacing:"20px",
			text: ["在城堡里的画板上画画，","这种感觉太奇妙了。"]
		},
		{
			type: "DrawingPad",
			x: "455px",
			y: "81px",
			width: "254px",
			height: "394px",
			defaultColor: "#776699",
			radius: 10,
			overlayUrl: "images/banner-outline.png"
		}
	]
});
