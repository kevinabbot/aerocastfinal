const maps = [{
        "main": "CLT_2.png",
        "windspeed": "windspeed_CLT_2.png",
        "winddir": "winddir_CLT_2.png",
        "lightpos": "lightposs_CLT_2.png"
    },
    {
        "main": "CLT_4.png",
        "windspeed": "windspeed_CLT_4.png",
        "winddir": "winddir_CLT_4.png",
        "lightpos": "lightposs_CLT_4.png"
    },
    {
        "main": "CLT_6.png",
        "windspeed": "windspeed_CLT_6.png",
        "winddir": "winddir_CLT_6.png",
        "lightpos": "lightposs_CLT_6.png"
    },
    {
        "main": "CLT_8.png",
        "windspeed": "windspeed_CLT_8.png",
        "winddir": "winddir_CLT_8.png",
        "lightpos": "lightposs_CLT_8.png"
    },
    {
        "main": "CLT_10.png",
        "windspeed": "windspeed_CLT_10.png",
        "winddir": "winddir_CLT_10.png",
        "lightpos": "lightposs_CLT_10.png"
    },
    {
        "main": "CLT_12.png",
        "windspeed": "windspeed_CLT_12.png",
        "winddir": "winddir_CLT_12.png",
        "lightpos": "lightposs_CLT_12.png"
    },
    {
        "main": "CLT_14.png",
        "windspeed": "windspeed_CLT_14.png",
        "winddir": "winddir_CLT_14.png",
        "lightpos": "lightposs_CLT_14.png"
    },
    {
        "main": "CLT_16.png",
        "windspeed": "windspeed_CLT_16.png",
        "winddir": "winddir_CLT_16.png",
        "lightpos": "lightposs_CLT_16.png",
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