const maps = [{
        "main": "DCA_2.png",
        "windspeed": "windspeed_DCA_2.png",
        "winddir": "winddir_DCA_2.png",
        "lightpos": "lightposs_DCA_2.png"
    },
    {
        "main": "DCA_4.png",
        "windspeed": "windspeed_DCA_4.png",
        "winddir": "winddir_DCA_4.png",
        "lightpos": "lightposs_DCA_4.png"
    },
    {
        "main": "DCA_6.png",
        "windspeed": "windspeed_DCA_6.png",
        "winddir": "winddir_DCA_6.png",
        "lightpos": "lightposs_DCA_6.png"
    },
    {
        "main": "DCA_8.png",
        "windspeed": "windspeed_DCA_8.png",
        "winddir": "winddir_DCA_8.png",
        "lightpos": "lightposs_DCA_8.png"
    },
    {
        "main": "DCA_10.png",
        "windspeed": "windspeed_DCA_10.png",
        "winddir": "winddir_DCA_10.png",
        "lightpos": "lightposs_DCA_10.png"
    },
    {
        "main": "DCA_12.png",
        "windspeed": "windspeed_DCA_12.png",
        "winddir": "winddir_DCA_12.png",
        "lightpos": "lightposs_DCA_12.png"
    },
    {
        "main": "DCA_14.png",
        "windspeed": "windspeed_DCA_14.png",
        "winddir": "winddir_DCA_14.png",
        "lightpos": "lightposs_DCA_14.png"
    },
    {
        "main": "DCA_16.png",
        "windspeed": "windspeed_DCA_16.png",
        "winddir": "winddir_DCA_16.png",
        "lightpos": "lightposs_DCA_16.png",
    }
];
document.getElementById("mapRange").max = maps.length - 1;
document.getElementById("mapRange").addEventListener("input", function () {
    let mapIndex = +this.value;
    document.getElementById("mainMap").src = `./assets/${maps[mapIndex].main}`;
    document.getElementById("windSpeedMap").src = `./assets/${maps[mapIndex].windspeed}`;
    document.getElementById("windDirMap").src = `./assets/${maps[mapIndex].winddir}`;
    document.getElementById("lightPosMap").src = `./assets/${maps[mapIndex].lightpos}`;
});