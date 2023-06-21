const maps = [{
        "main": "JFK_2.png",
        "windspeed": "windspeed_JFK_2.png",
        "winddir": "winddir_JFK_2.png",
        "lightpos": "lightposs_JFK_2.png"
    },
    {
        "main": "JFK_4.png",
        "windspeed": "windspeed_JFK_4.png",
        "winddir": "winddir_JFK_4.png",
        "lightpos": "lightposs_JFK_4.png"
    },
    {
        "main": "JFK_6.png",
        "windspeed": "windspeed_JFK_6.png",
        "winddir": "winddir_JFK_6.png",
        "lightpos": "lightposs_JFK_6.png"
    },
    {
        "main": "JFK_8.png",
        "windspeed": "windspeed_JFK_8.png",
        "winddir": "winddir_JFK_8.png",
        "lightpos": "lightposs_JFK_8.png"
    },
    {
        "main": "JFK_10.png",
        "windspeed": "windspeed_JFK_10.png",
        "winddir": "winddir_JFK_10.png",
        "lightpos": "lightposs_JFK_10.png"
    },
    {
        "main": "JFK_12.png",
        "windspeed": "windspeed_JFK_12.png",
        "winddir": "winddir_JFK_12.png",
        "lightpos": "lightposs_JFK_12.png"
    },
    {
        "main": "JFK_14.png",
        "windspeed": "windspeed_JFK_14.png",
        "winddir": "winddir_JFK_14.png",
        "lightpos": "lightposs_JFK_14.png"
    },
    {
        "main": "JFK_16.png",
        "windspeed": "windspeed_JFK_16.png",
        "winddir": "winddir_JFK_16.png",
        "lightpos": "lightposs_JFK_16.png",
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