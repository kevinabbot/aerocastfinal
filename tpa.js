const maps = [{
        "main": "TPA_2.png",
        "windspeed": "windspeed_TPA_2.png",
        "winddir": "winddir_TPA_2.png",
        "lightpos": "lightposs_TPA_2.png"
    },
    {
        "main": "TPA_4.png",
        "windspeed": "windspeed_TPA_4.png",
        "winddir": "winddir_TPA_4.png",
        "lightpos": "lightposs_TPA_4.png"
    },
    {
        "main": "TPA_6.png",
        "windspeed": "windspeed_TPA_6.png",
        "winddir": "winddir_TPA_6.png",
        "lightpos": "lightposs_TPA_6.png"
    },
    {
        "main": "TPA_8.png",
        "windspeed": "windspeed_TPA_8.png",
        "winddir": "winddir_TPA_8.png",
        "lightpos": "lightposs_TPA_8.png"
    },
    {
        "main": "TPA_10.png",
        "windspeed": "windspeed_TPA_10.png",
        "winddir": "winddir_TPA_10.png",
        "lightpos": "lightposs_TPA_10.png"
    },
    {
        "main": "TPA_12.png",
        "windspeed": "windspeed_TPA_12.png",
        "winddir": "winddir_TPA_12.png",
        "lightpos": "lightposs_TPA_12.png"
    },
    {
        "main": "TPA_14.png",
        "windspeed": "windspeed_TPA_14.png",
        "winddir": "winddir_TPA_14.png",
        "lightpos": "lightposs_TPA_14.png"
    },
    {
        "main": "TPA_16.png",
        "windspeed": "windspeed_TPA_16.png",
        "winddir": "winddir_TPA_16.png",
        "lightpos": "lightposs_TPA_16.png",
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