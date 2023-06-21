const maps = [{
        "main": "BOS_2.png",
        "windspeed": "windspeed_BOS_2.png",
        "winddir": "winddir_BOS_2.png",
        "lightpos": "lightposs_BOS_2.png"
    },
    {
        "main": "BOS_4.png",
        "windspeed": "windspeed_BOS_4.png",
        "winddir": "winddir_BOS_4.png",
        "lightpos": "lightposs_BOS_4.png"
    },
    {
        "main": "BOS_6.png",
        "windspeed": "windspeed_BOS_6.png",
        "winddir": "winddir_BOS_6.png",
        "lightpos": "lightposs_BOS_6.png"
    },
    {
        "main": "BOS_8.png",
        "windspeed": "windspeed_BOS_8.png",
        "winddir": "winddir_BOS_8.png",
        "lightpos": "lightposs_BOS_8.png"
    },
    {
        "main": "BOS_10.png",
        "windspeed": "windspeed_BOS_10.png",
        "winddir": "winddir_BOS_10.png",
        "lightpos": "lightposs_BOS_10.png"
    },
    {
        "main": "BOS_12.png",
        "windspeed": "windspeed_BOS_12.png",
        "winddir": "winddir_BOS_12.png",
        "lightpos": "lightposs_BOS_12.png"
    },
    {
        "main": "BOS_14.png",
        "windspeed": "windspeed_BOS_14.png",
        "winddir": "winddir_BOS_14.png",
        "lightpos": "lightposs_BOS_14.png"
    },
    {
        "main": "BOS_16.png",
        "windspeed": "windspeed_BOS_16.png",
        "winddir": "winddir_BOS_16.png",
        "lightpos": "lightposs_BOS_16.png",
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