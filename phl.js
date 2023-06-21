const maps = [{
        "main": "PHL_2.png",
        "windspeed": "windspeed_PHL_2.png",
        "winddir": "winddir_PHL_2.png",
        "lightpos": "lightposs_PHL_2.png"
    },
    {
        "main": "PHL_4.png",
        "windspeed": "windspeed_PHL_4.png",
        "winddir": "winddir_PHL_4.png",
        "lightpos": "lightposs_PHL_4.png"
    },
    {
        "main": "PHL_6.png",
        "windspeed": "windspeed_PHL_6.png",
        "winddir": "winddir_PHL_6.png",
        "lightpos": "lightposs_PHL_6.png"
    },
    {
        "main": "PHL_8.png",
        "windspeed": "windspeed_PHL_8.png",
        "winddir": "winddir_PHL_8.png",
        "lightpos": "lightposs_PHL_8.png"
    },
    {
        "main": "PHL_10.png",
        "windspeed": "windspeed_PHL_10.png",
        "winddir": "winddir_PHL_10.png",
        "lightpos": "lightposs_PHL_10.png"
    },
    {
        "main": "PHL_12.png",
        "windspeed": "windspeed_PHL_12.png",
        "winddir": "winddir_PHL_12.png",
        "lightpos": "lightposs_PHL_12.png"
    },
    {
        "main": "PHL_14.png",
        "windspeed": "windspeed_PHL_14.png",
        "winddir": "winddir_PHL_14.png",
        "lightpos": "lightposs_PHL_14.png"
    },
    {
        "main": "PHL_16.png",
        "windspeed": "windspeed_PHL_16.png",
        "winddir": "winddir_PHL_16.png",
        "lightpos": "lightposs_PHL_16.png",
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