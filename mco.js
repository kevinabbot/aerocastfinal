const maps = [{
        "main": "MCO_2.png",
        "windspeed": "windspeed_MCO_2.png",
        "winddir": "winddir_MCO_2.png",
        "lightpos": "lightposs_MCO_2.png"
    },
    {
        "main": "MCO_4.png",
        "windspeed": "windspeed_MCO_4.png",
        "winddir": "winddir_MCO_4.png",
        "lightpos": "lightposs_MCO_4.png"
    },
    {
        "main": "MCO_6.png",
        "windspeed": "windspeed_MCO_6.png",
        "winddir": "winddir_MCO_6.png",
        "lightpos": "lightposs_MCO_6.png"
    },
    {
        "main": "MCO_8.png",
        "windspeed": "windspeed_MCO_8.png",
        "winddir": "winddir_MCO_8.png",
        "lightpos": "lightposs_MCO_8.png"
    },
    {
        "main": "MCO_10.png",
        "windspeed": "windspeed_MCO_10.png",
        "winddir": "winddir_MCO_10.png",
        "lightpos": "lightposs_MCO_10.png"
    },
    {
        "main": "MCO_12.png",
        "windspeed": "windspeed_MCO_12.png",
        "winddir": "winddir_MCO_12.png",
        "lightpos": "lightposs_MCO_12.png"
    },
    {
        "main": "MCO_14.png",
        "windspeed": "windspeed_MCO_14.png",
        "winddir": "winddir_MCO_14.png",
        "lightpos": "lightposs_MCO_14.png"
    },
    {
        "main": "MCO_16.png",
        "windspeed": "windspeed_MCO_16.png",
        "winddir": "winddir_MCO_16.png",
        "lightpos": "lightposs_MCO_16.png",
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