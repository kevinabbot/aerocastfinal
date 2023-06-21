const maps = [{
        "main": "LAX_2.png",
        "windspeed": "windspeed_LAX_2.png",
        "winddir": "winddir_LAX_2.png",
        "lightpos": "lightposs_LAX_2.png"
    },
    {
        "main": "LAX_4.png",
        "windspeed": "windspeed_LAX_4.png",
        "winddir": "winddir_LAX_4.png",
        "lightpos": "lightposs_LAX_4.png"
    },
    {
        "main": "LAX_6.png",
        "windspeed": "windspeed_LAX_6.png",
        "winddir": "winddir_LAX_6.png",
        "lightpos": "lightposs_LAX_6.png"
    },
    {
        "main": "LAX_8.png",
        "windspeed": "windspeed_LAX_8.png",
        "winddir": "winddir_LAX_8.png",
        "lightpos": "lightposs_LAX_8.png"
    },
    {
        "main": "LAX_10.png",
        "windspeed": "windspeed_LAX_10.png",
        "winddir": "winddir_LAX_10.png",
        "lightpos": "lightposs_LAX_10.png"
    },
    {
        "main": "LAX_12.png",
        "windspeed": "windspeed_LAX_12.png",
        "winddir": "winddir_LAX_12.png",
        "lightpos": "lightposs_LAX_12.png"
    },
    {
        "main": "LAX_14.png",
        "windspeed": "windspeed_LAX_14.png",
        "winddir": "winddir_LAX_14.png",
        "lightpos": "lightposs_LAX_14.png"
    },
    {
        "main": "LAX_16.png",
        "windspeed": "windspeed_LAX_16.png",
        "winddir": "winddir_LAX_16.png",
        "lightpos": "lightposs_LAX_16.png",
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