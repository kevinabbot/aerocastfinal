const maps = [{
        "main": "PIT_2.png",
        "windspeed": "windspeed_PIT_2.png",
        "winddir": "winddir_PIT_2.png",
        "lightpos": "lightposs_PIT_2.png"
    },
    {
        "main": "PIT_4.png",
        "windspeed": "windspeed_PIT_4.png",
        "winddir": "winddir_PIT_4.png",
        "lightpos": "lightposs_PIT_4.png"
    },
    {
        "main": "PIT_6.png",
        "windspeed": "windspeed_PIT_6.png",
        "winddir": "winddir_PIT_6.png",
        "lightpos": "lightposs_PIT_6.png"
    },
    {
        "main": "PIT_8.png",
        "windspeed": "windspeed_PIT_8.png",
        "winddir": "winddir_PIT_8.png",
        "lightpos": "lightposs_PIT_8.png"
    },
    {
        "main": "PIT_10.png",
        "windspeed": "windspeed_PIT_10.png",
        "winddir": "winddir_PIT_10.png",
        "lightpos": "lightposs_PIT_10.png"
    },
    {
        "main": "PIT_12.png",
        "windspeed": "windspeed_PIT_12.png",
        "winddir": "winddir_PIT_12.png",
        "lightpos": "lightposs_PIT_12.png"
    },
    {
        "main": "PIT_14.png",
        "windspeed": "windspeed_PIT_14.png",
        "winddir": "winddir_PIT_14.png",
        "lightpos": "lightposs_PIT_14.png"
    },
    {
        "main": "PIT_16.png",
        "windspeed": "windspeed_PIT_16.png",
        "winddir": "winddir_PIT_16.png",
        "lightpos": "lightposs_PIT_16.png",
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