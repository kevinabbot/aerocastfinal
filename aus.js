const maps = [{
        "main": "AUS_2.png",
        "windspeed": "windspeed_AUS_2.png",
        "winddir": "winddir_AUS_2.png",
        "lightpos": "lightposs_AUS_2.png"
    },
    {
        "main": "AUS_4.png",
        "windspeed": "windspeed_AUS_4.png",
        "winddir": "winddir_AUS_4.png",
        "lightpos": "lightposs_AUS_4.png"
    },
    {
        "main": "AUS_6.png",
        "windspeed": "windspeed_AUS_6.png",
        "winddir": "winddir_AUS_6.png",
        "lightpos": "lightposs_AUS_6.png"
    },
    {
        "main": "AUS_8.png",
        "windspeed": "windspeed_AUS_8.png",
        "winddir": "winddir_AUS_8.png",
        "lightpos": "lightposs_AUS_8.png"
    },
    {
        "main": "AUS_10.png",
        "windspeed": "windspeed_AUS_10.png",
        "winddir": "winddir_AUS_10.png",
        "lightpos": "lightposs_AUS_10.png"
    },
    {
        "main": "AUS_12.png",
        "windspeed": "windspeed_AUS_12.png",
        "winddir": "winddir_AUS_12.png",
        "lightpos": "lightposs_AUS_12.png"
    },
    {
        "main": "AUS_14.png",
        "windspeed": "windspeed_AUS_14.png",
        "winddir": "winddir_AUS_14.png",
        "lightpos": "lightposs_AUS_14.png"
    },
    {
        "main": "AUS_16.png",
        "windspeed": "windspeed_AUS_16.png",
        "winddir": "winddir_AUS_16.png",
        "lightpos": "lightposs_AUS_16.png",
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