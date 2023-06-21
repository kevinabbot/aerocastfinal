const maps = [{
        "main": "SAN_2.png",
        "windspeed": "windspeed_SAN_2.png",
        "winddir": "winddir_SAN_2.png",
        "lightpos": "lightposs_SAN_2.png"
    },
    {
        "main": "SAN_4.png",
        "windspeed": "windspeed_SAN_4.png",
        "winddir": "winddir_SAN_4.png",
        "lightpos": "lightposs_SAN_4.png"
    },
    {
        "main": "SAN_6.png",
        "windspeed": "windspeed_SAN_6.png",
        "winddir": "winddir_SAN_6.png",
        "lightpos": "lightposs_SAN_6.png"
    },
    {
        "main": "SAN_8.png",
        "windspeed": "windspeed_SAN_8.png",
        "winddir": "winddir_SAN_8.png",
        "lightpos": "lightposs_SAN_8.png"
    },
    {
        "main": "SAN_10.png",
        "windspeed": "windspeed_SAN_10.png",
        "winddir": "winddir_SAN_10.png",
        "lightpos": "lightposs_SAN_10.png"
    },
    {
        "main": "SAN_12.png",
        "windspeed": "windspeed_SAN_12.png",
        "winddir": "winddir_SAN_12.png",
        "lightpos": "lightposs_SAN_12.png"
    },
    {
        "main": "SAN_14.png",
        "windspeed": "windspeed_SAN_14.png",
        "winddir": "winddir_SAN_14.png",
        "lightpos": "lightposs_SAN_14.png"
    },
    {
        "main": "SAN_16.png",
        "windspeed": "windspeed_SAN_16.png",
        "winddir": "winddir_SAN_16.png",
        "lightpos": "lightposs_SAN_16.png",
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