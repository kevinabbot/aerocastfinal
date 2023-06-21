const maps = [{
        "main": "SLC_2.png",
        "windspeed": "windspeed_SLC_2.png",
        "winddir": "winddir_SLC_2.png",
        "lightpos": "lightposs_SLC_2.png"
    },
    {
        "main": "SLC_4.png",
        "windspeed": "windspeed_SLC_4.png",
        "winddir": "winddir_SLC_4.png",
        "lightpos": "lightposs_SLC_4.png"
    },
    {
        "main": "SLC_6.png",
        "windspeed": "windspeed_SLC_6.png",
        "winddir": "winddir_SLC_6.png",
        "lightpos": "lightposs_SLC_6.png"
    },
    {
        "main": "SLC_8.png",
        "windspeed": "windspeed_SLC_8.png",
        "winddir": "winddir_SLC_8.png",
        "lightpos": "lightposs_SLC_8.png"
    },
    {
        "main": "SLC_10.png",
        "windspeed": "windspeed_SLC_10.png",
        "winddir": "winddir_SLC_10.png",
        "lightpos": "lightposs_SLC_10.png"
    },
    {
        "main": "SLC_12.png",
        "windspeed": "windspeed_SLC_12.png",
        "winddir": "winddir_SLC_12.png",
        "lightpos": "lightposs_SLC_12.png"
    },
    {
        "main": "SLC_14.png",
        "windspeed": "windspeed_SLC_14.png",
        "winddir": "winddir_SLC_14.png",
        "lightpos": "lightposs_SLC_14.png"
    },
    {
        "main": "SLC_16.png",
        "windspeed": "windspeed_SLC_16.png",
        "winddir": "winddir_SLC_16.png",
        "lightpos": "lightposs_SLC_16.png",
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