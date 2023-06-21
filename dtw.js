const maps = [{
        "main": "DTW_2.png",
        "windspeed": "windspeed_DTW_2.png",
        "winddir": "winddir_DTW_2.png",
        "lightpos": "lightposs_DTW_2.png"
    },
    {
        "main": "DTW_4.png",
        "windspeed": "windspeed_DTW_4.png",
        "winddir": "winddir_DTW_4.png",
        "lightpos": "lightposs_DTW_4.png"
    },
    {
        "main": "DTW_6.png",
        "windspeed": "windspeed_DTW_6.png",
        "winddir": "winddir_DTW_6.png",
        "lightpos": "lightposs_DTW_6.png"
    },
    {
        "main": "DTW_8.png",
        "windspeed": "windspeed_DTW_8.png",
        "winddir": "winddir_DTW_8.png",
        "lightpos": "lightposs_DTW_8.png"
    },
    {
        "main": "DTW_10.png",
        "windspeed": "windspeed_DTW_10.png",
        "winddir": "winddir_DTW_10.png",
        "lightpos": "lightposs_DTW_10.png"
    },
    {
        "main": "DTW_12.png",
        "windspeed": "windspeed_DTW_12.png",
        "winddir": "winddir_DTW_12.png",
        "lightpos": "lightposs_DTW_12.png"
    },
    {
        "main": "DTW_14.png",
        "windspeed": "windspeed_DTW_14.png",
        "winddir": "winddir_DTW_14.png",
        "lightpos": "lightposs_DTW_14.png"
    },
    {
        "main": "DTW_16.png",
        "windspeed": "windspeed_DTW_16.png",
        "winddir": "winddir_DTW_16.png",
        "lightpos": "lightposs_DTW_16.png",
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