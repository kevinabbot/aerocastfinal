const maps = [{
        "main": "STL_2.png",
        "windspeed": "windspeed_STL_2.png",
        "winddir": "winddir_STL_2.png",
        "lightpos": "lightposs_STL_2.png"
    },
    {
        "main": "STL_4.png",
        "windspeed": "windspeed_STL_4.png",
        "winddir": "winddir_STL_4.png",
        "lightpos": "lightposs_STL_4.png"
    },
    {
        "main": "STL_6.png",
        "windspeed": "windspeed_STL_6.png",
        "winddir": "winddir_STL_6.png",
        "lightpos": "lightposs_STL_6.png"
    },
    {
        "main": "STL_8.png",
        "windspeed": "windspeed_STL_8.png",
        "winddir": "winddir_STL_8.png",
        "lightpos": "lightposs_STL_8.png"
    },
    {
        "main": "STL_10.png",
        "windspeed": "windspeed_STL_10.png",
        "winddir": "winddir_STL_10.png",
        "lightpos": "lightposs_STL_10.png"
    },
    {
        "main": "STL_12.png",
        "windspeed": "windspeed_STL_12.png",
        "winddir": "winddir_STL_12.png",
        "lightpos": "lightposs_STL_12.png"
    },
    {
        "main": "STL_14.png",
        "windspeed": "windspeed_STL_14.png",
        "winddir": "winddir_STL_14.png",
        "lightpos": "lightposs_STL_14.png"
    },
    {
        "main": "STL_16.png",
        "windspeed": "windspeed_STL_16.png",
        "winddir": "winddir_STL_16.png",
        "lightpos": "lightposs_STL_16.png",
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