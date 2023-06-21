const maps = [{
        "main": "IAD_2.png",
        "windspeed": "windspeed_IAD_2.png",
        "winddir": "winddir_IAD_2.png",
        "lightpos": "lightposs_IAD_2.png"
    },
    {
        "main": "IAD_4.png",
        "windspeed": "windspeed_IAD_4.png",
        "winddir": "winddir_IAD_4.png",
        "lightpos": "lightposs_IAD_4.png"
    },
    {
        "main": "IAD_6.png",
        "windspeed": "windspeed_IAD_6.png",
        "winddir": "winddir_IAD_6.png",
        "lightpos": "lightposs_IAD_6.png"
    },
    {
        "main": "IAD_8.png",
        "windspeed": "windspeed_IAD_8.png",
        "winddir": "winddir_IAD_8.png",
        "lightpos": "lightposs_IAD_8.png"
    },
    {
        "main": "IAD_10.png",
        "windspeed": "windspeed_IAD_10.png",
        "winddir": "winddir_IAD_10.png",
        "lightpos": "lightposs_IAD_10.png"
    },
    {
        "main": "IAD_12.png",
        "windspeed": "windspeed_IAD_12.png",
        "winddir": "winddir_IAD_12.png",
        "lightpos": "lightposs_IAD_12.png"
    },
    {
        "main": "IAD_14.png",
        "windspeed": "windspeed_IAD_14.png",
        "winddir": "winddir_IAD_14.png",
        "lightpos": "lightposs_IAD_14.png"
    },
    {
        "main": "IAD_16.png",
        "windspeed": "windspeed_IAD_16.png",
        "winddir": "winddir_IAD_16.png",
        "lightpos": "lightposs_IAD_16.png",
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