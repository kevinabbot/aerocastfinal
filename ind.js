const maps = [{
        "main": "IND_2.png",
        "windspeed": "windspeed_IND_2.png",
        "winddir": "winddir_IND_2.png",
        "lightpos": "lightposs_IND_2.png"
    },
    {
        "main": "IND_4.png",
        "windspeed": "windspeed_IND_4.png",
        "winddir": "winddir_IND_4.png",
        "lightpos": "lightposs_IND_4.png"
    },
    {
        "main": "IND_6.png",
        "windspeed": "windspeed_IND_6.png",
        "winddir": "winddir_IND_6.png",
        "lightpos": "lightposs_IND_6.png"
    },
    {
        "main": "IND_8.png",
        "windspeed": "windspeed_IND_8.png",
        "winddir": "winddir_IND_8.png",
        "lightpos": "lightposs_IND_8.png"
    },
    {
        "main": "IND_10.png",
        "windspeed": "windspeed_IND_10.png",
        "winddir": "winddir_IND_10.png",
        "lightpos": "lightposs_IND_10.png"
    },
    {
        "main": "IND_12.png",
        "windspeed": "windspeed_IND_12.png",
        "winddir": "winddir_IND_12.png",
        "lightpos": "lightposs_IND_12.png"
    },
    {
        "main": "IND_14.png",
        "windspeed": "windspeed_IND_14.png",
        "winddir": "winddir_IND_14.png",
        "lightpos": "lightposs_IND_14.png"
    },
    {
        "main": "IND_16.png",
        "windspeed": "windspeed_IND_16.png",
        "winddir": "winddir_IND_16.png",
        "lightpos": "lightposs_IND_16.png",
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