const maps = [{
        "main": "ATL_2.png",
        "windspeed": "windspeed_ATL_2.png",
        "winddir": "winddir_ATL_2.png",
        "lightpos": "lightposs_ATL_2.png"
    },
    {
        "main": "ATL_4.png",
        "windspeed": "windspeed_ATL_4.png",
        "winddir": "winddir_ATL_4.png",
        "lightpos": "lightposs_ATL_4.png"
    },
    {
        "main": "ATL_6.png",
        "windspeed": "windspeed_ATL_6.png",
        "winddir": "winddir_ATL_6.png",
        "lightpos": "lightposs_ATL_6.png"
    },
    {
        "main": "ATL_8.png",
        "windspeed": "windspeed_ATL_8.png",
        "winddir": "winddir_ATL_8.png",
        "lightpos": "lightposs_ATL_8.png"
    },
    {
        "main": "ATL_10.png",
        "windspeed": "windspeed_ATL_10.png",
        "winddir": "winddir_ATL_10.png",
        "lightpos": "lightposs_ATL_10.png"
    },
    {
        "main": "ATL_12.png",
        "windspeed": "windspeed_ATL_12.png",
        "winddir": "winddir_ATL_12.png",
        "lightpos": "lightposs_ATL_12.png"
    },
    {
        "main": "ATL_14.png",
        "windspeed": "windspeed_ATL_14.png",
        "winddir": "winddir_ATL_14.png",
        "lightpos": "lightposs_ATL_14.png"
    },
    {
        "main": "ATL_16.png",
        "windspeed": "windspeed_ATL_16.png",
        "winddir": "winddir_ATL_16.png",
        "lightpos": "lightposs_ATL_16.png",
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