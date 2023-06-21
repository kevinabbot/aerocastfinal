const maps = [{
        "main": "MSP_2.png",
        "windspeed": "windspeed_MSP_2.png",
        "winddir": "winddir_MSP_2.png",
        "lightpos": "lightposs_MSP_2.png"
    },
    {
        "main": "MSP_4.png",
        "windspeed": "windspeed_MSP_4.png",
        "winddir": "winddir_MSP_4.png",
        "lightpos": "lightposs_MSP_4.png"
    },
    {
        "main": "MSP_6.png",
        "windspeed": "windspeed_MSP_6.png",
        "winddir": "winddir_MSP_6.png",
        "lightpos": "lightposs_MSP_6.png"
    },
    {
        "main": "MSP_8.png",
        "windspeed": "windspeed_MSP_8.png",
        "winddir": "winddir_MSP_8.png",
        "lightpos": "lightposs_MSP_8.png"
    },
    {
        "main": "MSP_10.png",
        "windspeed": "windspeed_MSP_10.png",
        "winddir": "winddir_MSP_10.png",
        "lightpos": "lightposs_MSP_10.png"
    },
    {
        "main": "MSP_12.png",
        "windspeed": "windspeed_MSP_12.png",
        "winddir": "winddir_MSP_12.png",
        "lightpos": "lightposs_MSP_12.png"
    },
    {
        "main": "MSP_14.png",
        "windspeed": "windspeed_MSP_14.png",
        "winddir": "winddir_MSP_14.png",
        "lightpos": "lightposs_MSP_14.png"
    },
    {
        "main": "MSP_16.png",
        "windspeed": "windspeed_MSP_16.png",
        "winddir": "winddir_MSP_16.png",
        "lightpos": "lightposs_MSP_16.png",
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