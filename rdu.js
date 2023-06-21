const maps = [{
        "main": "RDU_2.png",
        "windspeed": "windspeed_RDU_2.png",
        "winddir": "winddir_RDU_2.png",
        "lightpos": "lightposs_RDU_2.png"
    },
    {
        "main": "RDU_4.png",
        "windspeed": "windspeed_RDU_4.png",
        "winddir": "winddir_RDU_4.png",
        "lightpos": "lightposs_RDU_4.png"
    },
    {
        "main": "RDU_6.png",
        "windspeed": "windspeed_RDU_6.png",
        "winddir": "winddir_RDU_6.png",
        "lightpos": "lightposs_RDU_6.png"
    },
    {
        "main": "RDU_8.png",
        "windspeed": "windspeed_RDU_8.png",
        "winddir": "winddir_RDU_8.png",
        "lightpos": "lightposs_RDU_8.png"
    },
    {
        "main": "RDU_10.png",
        "windspeed": "windspeed_RDU_10.png",
        "winddir": "winddir_RDU_10.png",
        "lightpos": "lightposs_RDU_10.png"
    },
    {
        "main": "RDU_12.png",
        "windspeed": "windspeed_RDU_12.png",
        "winddir": "winddir_RDU_12.png",
        "lightpos": "lightposs_RDU_12.png"
    },
    {
        "main": "RDU_14.png",
        "windspeed": "windspeed_RDU_14.png",
        "winddir": "winddir_RDU_14.png",
        "lightpos": "lightposs_RDU_14.png"
    },
    {
        "main": "RDU_16.png",
        "windspeed": "windspeed_RDU_16.png",
        "winddir": "winddir_RDU_16.png",
        "lightpos": "lightposs_RDU_16.png",
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