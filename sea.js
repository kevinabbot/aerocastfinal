const maps = [{
        "main": "SEA_2.png",
        "windspeed": "windspeed_SEA_2.png",
        "winddir": "winddir_SEA_2.png",
        "lightpos": "lightposs_SEA_2.png"
    },
    {
        "main": "SEA_4.png",
        "windspeed": "windspeed_SEA_4.png",
        "winddir": "winddir_SEA_4.png",
        "lightpos": "lightposs_SEA_4.png"
    },
    {
        "main": "SEA_6.png",
        "windspeed": "windspeed_SEA_6.png",
        "winddir": "winddir_SEA_6.png",
        "lightpos": "lightposs_SEA_6.png"
    },
    {
        "main": "SEA_8.png",
        "windspeed": "windspeed_SEA_8.png",
        "winddir": "winddir_SEA_8.png",
        "lightpos": "lightposs_SEA_8.png"
    },
    {
        "main": "SEA_10.png",
        "windspeed": "windspeed_SEA_10.png",
        "winddir": "winddir_SEA_10.png",
        "lightpos": "lightposs_SEA_10.png"
    },
    {
        "main": "SEA_12.png",
        "windspeed": "windspeed_SEA_12.png",
        "winddir": "winddir_SEA_12.png",
        "lightpos": "lightposs_SEA_12.png"
    },
    {
        "main": "SEA_14.png",
        "windspeed": "windspeed_SEA_14.png",
        "winddir": "winddir_SEA_14.png",
        "lightpos": "lightposs_SEA_14.png"
    },
    {
        "main": "SEA_16.png",
        "windspeed": "windspeed_SEA_16.png",
        "winddir": "winddir_SEA_16.png",
        "lightpos": "lightposs_SEA_16.png",
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