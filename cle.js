const maps = [{
        "main": "CLE_2.png",
        "windspeed": "windspeed_CLE_2.png",
        "winddir": "winddir_CLE_2.png",
        "lightpos": "lightposs_CLE_2.png"
    },
    {
        "main": "CLE_4.png",
        "windspeed": "windspeed_CLE_4.png",
        "winddir": "winddir_CLE_4.png",
        "lightpos": "lightposs_CLE_4.png"
    },
    {
        "main": "CLE_6.png",
        "windspeed": "windspeed_CLE_6.png",
        "winddir": "winddir_CLE_6.png",
        "lightpos": "lightposs_CLE_6.png"
    },
    {
        "main": "CLE_8.png",
        "windspeed": "windspeed_CLE_8.png",
        "winddir": "winddir_CLE_8.png",
        "lightpos": "lightposs_CLE_8.png"
    },
    {
        "main": "CLE_10.png",
        "windspeed": "windspeed_CLE_10.png",
        "winddir": "winddir_CLE_10.png",
        "lightpos": "lightposs_CLE_10.png"
    },
    {
        "main": "CLE_12.png",
        "windspeed": "windspeed_CLE_12.png",
        "winddir": "winddir_CLE_12.png",
        "lightpos": "lightposs_CLE_12.png"
    },
    {
        "main": "CLE_14.png",
        "windspeed": "windspeed_CLE_14.png",
        "winddir": "winddir_CLE_14.png",
        "lightpos": "lightposs_CLE_14.png"
    },
    {
        "main": "CLE_16.png",
        "windspeed": "windspeed_CLE_16.png",
        "winddir": "winddir_CLE_16.png",
        "lightpos": "lightposs_CLE_16.png",
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