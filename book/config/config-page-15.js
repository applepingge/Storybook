
PBS.KIDS.storybook.config.pages.push({
	background: {
		color: "#fdfdfd",
		url: "images/entrance-left.png"
	},
	sound:{
		startTime:0,
		endTime:10,
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
			text: "第15页"
		},
		{
			type: "TextArea",
			x: 40,
			y: 35,
			width: 60,
			align: "left",
			color: "#777777",
			size: 38,
			font: "Droid Serif",
			paragraphSpacing:"20px",
			text: ["\"咦，哪里来的音乐声？\"","\"那是城堡吗？\"想到这","儿，小明难掩内心的激","动，快步向前走去。"]
		},
		{
			type: "Sprite",
			x: 59,
			y: 68,
			url: "images/music-note-sign.png",
			sound: {
				startTime: 9,
				endTime: 10
			},
		},
	]
});
