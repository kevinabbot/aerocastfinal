const maps = [{
        "main": "ORD_2.png",
        "windspeed": "windspeed_ORD_2.png",
        "winddir": "winddir_ORD_2.png",
        "lightpos": "lightposs_ORD_2.png"
    },
    {
        "main": "ORD_4.png",
        "windspeed": "windspeed_ORD_4.png",
        "winddir": "winddir_ORD_4.png",
        "lightpos": "lightposs_ORD_4.png"
    },
    {
        "main": "ORD_6.png",
        "windspeed": "windspeed_ORD_6.png",
        "winddir": "winddir_ORD_6.png",
        "lightpos": "lightposs_ORD_6.png"
    },
    {
        "main": "ORD_8.png",
        "windspeed": "windspeed_ORD_8.png",
        "winddir": "winddir_ORD_8.png",
        "lightpos": "lightposs_ORD_8.png"
    },
    {
        "main": "ORD_10.png",
        "windspeed": "windspeed_ORD_10.png",
        "winddir": "winddir_ORD_10.png",
        "lightpos": "lightposs_ORD_10.png"
    },
    {
        "main": "ORD_12.png",
        "windspeed": "windspeed_ORD_12.png",
        "winddir": "winddir_ORD_12.png",
        "lightpos": "lightposs_ORD_12.png"
    },
    {
        "main": "ORD_14.png",
        "windspeed": "windspeed_ORD_14.png",
        "winddir": "winddir_ORD_14.png",
        "lightpos": "lightposs_ORD_14.png"
    },
    {
        "main": "ORD_16.png",
        "windspeed": "windspeed_ORD_16.png",
        "winddir": "winddir_ORD_16.png",
        "lightpos": "lightposs_ORD_16.png",
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