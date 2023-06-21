const maps = [{
        "main": "DFW_2.png",
        "windspeed": "windspeed_DFW_2.png",
        "winddir": "winddir_DFW_2.png",
        "lightpos": "lightposs_DFW_2.png"
    },
    {
        "main": "DFW_4.png",
        "windspeed": "windspeed_DFW_4.png",
        "winddir": "winddir_DFW_4.png",
        "lightpos": "lightposs_DFW_4.png"
    },
    {
        "main": "DFW_6.png",
        "windspeed": "windspeed_DFW_6.png",
        "winddir": "winddir_DFW_6.png",
        "lightpos": "lightposs_DFW_6.png"
    },
    {
        "main": "DFW_8.png",
        "windspeed": "windspeed_DFW_8.png",
        "winddir": "winddir_DFW_8.png",
        "lightpos": "lightposs_DFW_8.png"
    },
    {
        "main": "DFW_10.png",
        "windspeed": "windspeed_DFW_10.png",
        "winddir": "winddir_DFW_10.png",
        "lightpos": "lightposs_DFW_10.png"
    },
    {
        "main": "DFW_12.png",
        "windspeed": "windspeed_DFW_12.png",
        "winddir": "winddir_DFW_12.png",
        "lightpos": "lightposs_DFW_12.png"
    },
    {
        "main": "DFW_14.png",
        "windspeed": "windspeed_DFW_14.png",
        "winddir": "winddir_DFW_14.png",
        "lightpos": "lightposs_DFW_14.png"
    },
    {
        "main": "DFW_16.png",
        "windspeed": "windspeed_DFW_16.png",
        "winddir": "winddir_DFW_16.png",
        "lightpos": "lightposs_DFW_16.png",
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