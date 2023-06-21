const maps = [{
        "main": "BNA_2.png",
        "windspeed": "windspeed_BNA_2.png",
        "winddir": "winddir_BNA_2.png",
        "lightpos": "lightposs_BNA_2.png"
    },
    {
        "main": "BNA_4.png",
        "windspeed": "windspeed_BNA_4.png",
        "winddir": "winddir_BNA_4.png",
        "lightpos": "lightposs_BNA_4.png"
    },
    {
        "main": "BNA_6.png",
        "windspeed": "windspeed_BNA_6.png",
        "winddir": "winddir_BNA_6.png",
        "lightpos": "lightposs_BNA_6.png"
    },
    {
        "main": "BNA_8.png",
        "windspeed": "windspeed_BNA_8.png",
        "winddir": "winddir_BNA_8.png",
        "lightpos": "lightposs_BNA_8.png"
    },
    {
        "main": "BNA_10.png",
        "windspeed": "windspeed_BNA_10.png",
        "winddir": "winddir_BNA_10.png",
        "lightpos": "lightposs_BNA_10.png"
    },
    {
        "main": "BNA_12.png",
        "windspeed": "windspeed_BNA_12.png",
        "winddir": "winddir_BNA_12.png",
        "lightpos": "lightposs_BNA_12.png"
    },
    {
        "main": "BNA_14.png",
        "windspeed": "windspeed_BNA_14.png",
        "winddir": "winddir_BNA_14.png",
        "lightpos": "lightposs_BNA_14.png"
    },
    {
        "main": "BNA_16.png",
        "windspeed": "windspeed_BNA_16.png",
        "winddir": "winddir_BNA_16.png",
        "lightpos": "lightposs_BNA_16.png",
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