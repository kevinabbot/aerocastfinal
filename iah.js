const maps = [{
        "main": "IAH_2.png",
        "windspeed": "windspeed_IAH_2.png",
        "winddir": "winddir_IAH_2.png",
        "lightpos": "lightposs_IAH_2.png"
    },
    {
        "main": "IAH_4.png",
        "windspeed": "windspeed_IAH_4.png",
        "winddir": "winddir_IAH_4.png",
        "lightpos": "lightposs_IAH_4.png"
    },
    {
        "main": "IAH_6.png",
        "windspeed": "windspeed_IAH_6.png",
        "winddir": "winddir_IAH_6.png",
        "lightpos": "lightposs_IAH_6.png"
    },
    {
        "main": "IAH_8.png",
        "windspeed": "windspeed_IAH_8.png",
        "winddir": "winddir_IAH_8.png",
        "lightpos": "lightposs_IAH_8.png"
    },
    {
        "main": "IAH_10.png",
        "windspeed": "windspeed_IAH_10.png",
        "winddir": "winddir_IAH_10.png",
        "lightpos": "lightposs_IAH_10.png"
    },
    {
        "main": "IAH_12.png",
        "windspeed": "windspeed_IAH_12.png",
        "winddir": "winddir_IAH_12.png",
        "lightpos": "lightposs_IAH_12.png"
    },
    {
        "main": "IAH_14.png",
        "windspeed": "windspeed_IAH_14.png",
        "winddir": "winddir_IAH_14.png",
        "lightpos": "lightposs_IAH_14.png"
    },
    {
        "main": "IAH_16.png",
        "windspeed": "windspeed_IAH_16.png",
        "winddir": "winddir_IAH_16.png",
        "lightpos": "lightposs_IAH_16.png",
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