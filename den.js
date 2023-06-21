const maps = [{
        "main": "DEN_2.png",
        "windspeed": "windspeed_DEN_2.png",
        "winddir": "winddir_DEN_2.png",
        "lightpos": "lightposs_DEN_2.png"
    },
    {
        "main": "DEN_4.png",
        "windspeed": "windspeed_DEN_4.png",
        "winddir": "winddir_DEN_4.png",
        "lightpos": "lightposs_DEN_4.png"
    },
    {
        "main": "DEN_6.png",
        "windspeed": "windspeed_DEN_6.png",
        "winddir": "winddir_DEN_6.png",
        "lightpos": "lightposs_DEN_6.png"
    },
    {
        "main": "DEN_8.png",
        "windspeed": "windspeed_DEN_8.png",
        "winddir": "winddir_DEN_8.png",
        "lightpos": "lightposs_DEN_8.png"
    },
    {
        "main": "DEN_10.png",
        "windspeed": "windspeed_DEN_10.png",
        "winddir": "winddir_DEN_10.png",
        "lightpos": "lightposs_DEN_10.png"
    },
    {
        "main": "DEN_12.png",
        "windspeed": "windspeed_DEN_12.png",
        "winddir": "winddir_DEN_12.png",
        "lightpos": "lightposs_DEN_12.png"
    },
    {
        "main": "DEN_14.png",
        "windspeed": "windspeed_DEN_14.png",
        "winddir": "winddir_DEN_14.png",
        "lightpos": "lightposs_DEN_14.png"
    },
    {
        "main": "DEN_16.png",
        "windspeed": "windspeed_DEN_16.png",
        "winddir": "winddir_DEN_16.png",
        "lightpos": "lightposs_DEN_16.png",
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