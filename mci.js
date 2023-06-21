const maps = [{
        "main": "MCI_2.png",
        "windspeed": "windspeed_MCI_2.png",
        "winddir": "winddir_MCI_2.png",
        "lightpos": "lightposs_MCI_2.png"
    },
    {
        "main": "MCI_4.png",
        "windspeed": "windspeed_MCI_4.png",
        "winddir": "winddir_MCI_4.png",
        "lightpos": "lightposs_MCI_4.png"
    },
    {
        "main": "MCI_6.png",
        "windspeed": "windspeed_MCI_6.png",
        "winddir": "winddir_MCI_6.png",
        "lightpos": "lightposs_MCI_6.png"
    },
    {
        "main": "MCI_8.png",
        "windspeed": "windspeed_MCI_8.png",
        "winddir": "winddir_MCI_8.png",
        "lightpos": "lightposs_MCI_8.png"
    },
    {
        "main": "MCI_10.png",
        "windspeed": "windspeed_MCI_10.png",
        "winddir": "winddir_MCI_10.png",
        "lightpos": "lightposs_MCI_10.png"
    },
    {
        "main": "MCI_12.png",
        "windspeed": "windspeed_MCI_12.png",
        "winddir": "winddir_MCI_12.png",
        "lightpos": "lightposs_MCI_12.png"
    },
    {
        "main": "MCI_14.png",
        "windspeed": "windspeed_MCI_14.png",
        "winddir": "winddir_MCI_14.png",
        "lightpos": "lightposs_MCI_14.png"
    },
    {
        "main": "MCI_16.png",
        "windspeed": "windspeed_MCI_16.png",
        "winddir": "winddir_MCI_16.png",
        "lightpos": "lightposs_MCI_16.png",
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