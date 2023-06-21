const maps = [{
        "main": "LAS_2.png",
        "windspeed": "windspeed_LAS_2.png",
        "winddir": "winddir_LAS_2.png",
        "lightpos": "lightposs_LAS_2.png"
    },
    {
        "main": "LAS_4.png",
        "windspeed": "windspeed_LAS_4.png",
        "winddir": "winddir_LAS_4.png",
        "lightpos": "lightposs_LAS_4.png"
    },
    {
        "main": "LAS_6.png",
        "windspeed": "windspeed_LAS_6.png",
        "winddir": "winddir_LAS_6.png",
        "lightpos": "lightposs_LAS_6.png"
    },
    {
        "main": "LAS_8.png",
        "windspeed": "windspeed_LAS_8.png",
        "winddir": "winddir_LAS_8.png",
        "lightpos": "lightposs_LAS_8.png"
    },
    {
        "main": "LAS_10.png",
        "windspeed": "windspeed_LAS_10.png",
        "winddir": "winddir_LAS_10.png",
        "lightpos": "lightposs_LAS_10.png"
    },
    {
        "main": "LAS_12.png",
        "windspeed": "windspeed_LAS_12.png",
        "winddir": "winddir_LAS_12.png",
        "lightpos": "lightposs_LAS_12.png"
    },
    {
        "main": "LAS_14.png",
        "windspeed": "windspeed_LAS_14.png",
        "winddir": "winddir_LAS_14.png",
        "lightpos": "lightposs_LAS_14.png"
    },
    {
        "main": "LAS_16.png",
        "windspeed": "windspeed_LAS_16.png",
        "winddir": "winddir_LAS_16.png",
        "lightpos": "lightposs_LAS_16.png",
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