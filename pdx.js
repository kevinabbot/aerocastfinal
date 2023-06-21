const maps = [{
        "main": "PDX_2.png",
        "windspeed": "windspeed_PDX_2.png",
        "winddir": "winddir_PDX_2.png",
        "lightpos": "lightposs_PDX_2.png"
    },
    {
        "main": "PDX_4.png",
        "windspeed": "windspeed_PDX_4.png",
        "winddir": "winddir_PDX_4.png",
        "lightpos": "lightposs_PDX_4.png"
    },
    {
        "main": "PDX_6.png",
        "windspeed": "windspeed_PDX_6.png",
        "winddir": "winddir_PDX_6.png",
        "lightpos": "lightposs_PDX_6.png"
    },
    {
        "main": "PDX_8.png",
        "windspeed": "windspeed_PDX_8.png",
        "winddir": "winddir_PDX_8.png",
        "lightpos": "lightposs_PDX_8.png"
    },
    {
        "main": "PDX_10.png",
        "windspeed": "windspeed_PDX_10.png",
        "winddir": "winddir_PDX_10.png",
        "lightpos": "lightposs_PDX_10.png"
    },
    {
        "main": "PDX_12.png",
        "windspeed": "windspeed_PDX_12.png",
        "winddir": "winddir_PDX_12.png",
        "lightpos": "lightposs_PDX_12.png"
    },
    {
        "main": "PDX_14.png",
        "windspeed": "windspeed_PDX_14.png",
        "winddir": "winddir_PDX_14.png",
        "lightpos": "lightposs_PDX_14.png"
    },
    {
        "main": "PDX_16.png",
        "windspeed": "windspeed_PDX_16.png",
        "winddir": "winddir_PDX_16.png",
        "lightpos": "lightposs_PDX_16.png",
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