const maps = [{
        "main": "MIA_2.png",
        "windspeed": "windspeed_MIA_2.png",
        "winddir": "winddir_MIA_2.png",
        "lightpos": "lightposs_MIA_2.png"
    },
    {
        "main": "MIA_4.png",
        "windspeed": "windspeed_MIA_4.png",
        "winddir": "winddir_MIA_4.png",
        "lightpos": "lightposs_MIA_4.png"
    },
    {
        "main": "MIA_6.png",
        "windspeed": "windspeed_MIA_6.png",
        "winddir": "winddir_MIA_6.png",
        "lightpos": "lightposs_MIA_6.png"
    },
    {
        "main": "MIA_8.png",
        "windspeed": "windspeed_MIA_8.png",
        "winddir": "winddir_MIA_8.png",
        "lightpos": "lightposs_MIA_8.png"
    },
    {
        "main": "MIA_10.png",
        "windspeed": "windspeed_MIA_10.png",
        "winddir": "winddir_MIA_10.png",
        "lightpos": "lightposs_MIA_10.png"
    },
    {
        "main": "MIA_12.png",
        "windspeed": "windspeed_MIA_12.png",
        "winddir": "winddir_MIA_12.png",
        "lightpos": "lightposs_MIA_12.png"
    },
    {
        "main": "MIA_14.png",
        "windspeed": "windspeed_MIA_14.png",
        "winddir": "winddir_MIA_14.png",
        "lightpos": "lightposs_MIA_14.png"
    },
    {
        "main": "MIA_16.png",
        "windspeed": "windspeed_MIA_16.png",
        "winddir": "winddir_MIA_16.png",
        "lightpos": "lightposs_MIA_16.png",
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