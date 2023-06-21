const maps = [{
        "main": "OKC_2.png",
        "windspeed": "windspeed_OKC_2.png",
        "winddir": "winddir_OKC_2.png",
        "lightpos": "lightposs_OKC_2.png"
    },
    {
        "main": "OKC_4.png",
        "windspeed": "windspeed_OKC_4.png",
        "winddir": "winddir_OKC_4.png",
        "lightpos": "lightposs_OKC_4.png"
    },
    {
        "main": "OKC_6.png",
        "windspeed": "windspeed_OKC_6.png",
        "winddir": "winddir_OKC_6.png",
        "lightpos": "lightposs_OKC_6.png"
    },
    {
        "main": "OKC_8.png",
        "windspeed": "windspeed_OKC_8.png",
        "winddir": "winddir_OKC_8.png",
        "lightpos": "lightposs_OKC_8.png"
    },
    {
        "main": "OKC_10.png",
        "windspeed": "windspeed_OKC_10.png",
        "winddir": "winddir_OKC_10.png",
        "lightpos": "lightposs_OKC_10.png"
    },
    {
        "main": "OKC_12.png",
        "windspeed": "windspeed_OKC_12.png",
        "winddir": "winddir_OKC_12.png",
        "lightpos": "lightposs_OKC_12.png"
    },
    {
        "main": "OKC_14.png",
        "windspeed": "windspeed_OKC_14.png",
        "winddir": "winddir_OKC_14.png",
        "lightpos": "lightposs_OKC_14.png"
    },
    {
        "main": "OKC_16.png",
        "windspeed": "windspeed_OKC_16.png",
        "winddir": "winddir_OKC_16.png",
        "lightpos": "lightposs_OKC_16.png",
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