
PBS.KIDS.storybook.config.pages.push({
	background: {
		url: "images/orchard-right.png"
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
			text: "第12页"
		},
		{
			type: "Sprite",
			x: 5,
			y: 28,
			numFrames: 8,
			frameDelay: 4,
			playOnPress: true,
			autoStart: false,
			autoReset: false,
			url: "images/apple-drop.png"
		},
		{
			type: "Sprite",
			x: 55,
			y: 34,
			numFrames: 8,
			frameDelay: 4,
			playOnPress: true,
			autoStart: false,
			autoReset: false,
			url: "images/apple-drop.png"
		},
		{
			type: "Sprite",
			x: 15,
			y: 61,
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
			y: 62,
			numFrames: 8,
			frameDelay: 4,
			autoStart: false,
			playAfterDelay: 3,
			url: "images/apple-drop.png"
		},
		{
			type: "TextArea",
			x: 30,
			y: 76,
			width: 70,
			align: "left",
			color: "#444444",
			size: 40,
			font: "Droid Serif",
			text: "这里的<color=#E96413><size=1.3>果子</size></color>真是又大又甜！"
			
		},
		{
			type: "Sprite",
			x: 35,
			y: 60,
			numFrames: 8,
			frameDelay: 4,
			playOnPress: true,
			autoStart: false,
			autoReset: false,
			url: "images/apple-drop.png"
		}
	]
});
