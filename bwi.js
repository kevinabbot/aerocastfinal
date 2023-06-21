const maps = [{
        "main": "BWI_2.png",
        "windspeed": "windspeed_BWI_2.png",
        "winddir": "winddir_BWI_2.png",
        "lightpos": "lightposs_BWI_2.png"
    },
    {
        "main": "BWI_4.png",
        "windspeed": "windspeed_BWI_4.png",
        "winddir": "winddir_BWI_4.png",
        "lightpos": "lightposs_BWI_4.png"
    },
    {
        "main": "BWI_6.png",
        "windspeed": "windspeed_BWI_6.png",
        "winddir": "winddir_BWI_6.png",
        "lightpos": "lightposs_BWI_6.png"
    },
    {
        "main": "BWI_8.png",
        "windspeed": "windspeed_BWI_8.png",
        "winddir": "winddir_BWI_8.png",
        "lightpos": "lightposs_BWI_8.png"
    },
    {
        "main": "BWI_10.png",
        "windspeed": "windspeed_BWI_10.png",
        "winddir": "winddir_BWI_10.png",
        "lightpos": "lightposs_BWI_10.png"
    },
    {
        "main": "BWI_12.png",
        "windspeed": "windspeed_BWI_12.png",
        "winddir": "winddir_BWI_12.png",
        "lightpos": "lightposs_BWI_12.png"
    },
    {
        "main": "BWI_14.png",
        "windspeed": "windspeed_BWI_14.png",
        "winddir": "winddir_BWI_14.png",
        "lightpos": "lightposs_BWI_14.png"
    },
    {
        "main": "BWI_16.png",
        "windspeed": "windspeed_BWI_16.png",
        "winddir": "winddir_BWI_16.png",
        "lightpos": "lightposs_BWI_16.png",
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