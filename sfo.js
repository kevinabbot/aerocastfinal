const maps = [{
        "main": "SFO_2.png",
        "windspeed": "windspeed_SFO_2.png",
        "winddir": "winddir_SFO_2.png",
        "lightpos": "lightposs_SFO_2.png"
    },
    {
        "main": "SFO_4.png",
        "windspeed": "windspeed_SFO_4.png",
        "winddir": "winddir_SFO_4.png",
        "lightpos": "lightposs_SFO_4.png"
    },
    {
        "main": "SFO_6.png",
        "windspeed": "windspeed_SFO_6.png",
        "winddir": "winddir_SFO_6.png",
        "lightpos": "lightposs_SFO_6.png"
    },
    {
        "main": "SFO_8.png",
        "windspeed": "windspeed_SFO_8.png",
        "winddir": "winddir_SFO_8.png",
        "lightpos": "lightposs_SFO_8.png"
    },
    {
        "main": "SFO_10.png",
        "windspeed": "windspeed_SFO_10.png",
        "winddir": "winddir_SFO_10.png",
        "lightpos": "lightposs_SFO_10.png"
    },
    {
        "main": "SFO_12.png",
        "windspeed": "windspeed_SFO_12.png",
        "winddir": "winddir_SFO_12.png",
        "lightpos": "lightposs_SFO_12.png"
    },
    {
        "main": "SFO_14.png",
        "windspeed": "windspeed_SFO_14.png",
        "winddir": "winddir_SFO_14.png",
        "lightpos": "lightposs_SFO_14.png"
    },
    {
        "main": "SFO_16.png",
        "windspeed": "windspeed_SFO_16.png",
        "winddir": "winddir_SFO_16.png",
        "lightpos": "lightposs_SFO_16.png",
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