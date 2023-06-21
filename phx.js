const maps = [{
        "main": "PHX_2.png",
        "windspeed": "windspeed_PHX_2.png",
        "winddir": "winddir_PHX_2.png",
        "lightpos": "lightposs_PHX_2.png"
    },
    {
        "main": "PHX_4.png",
        "windspeed": "windspeed_PHX_4.png",
        "winddir": "winddir_PHX_4.png",
        "lightpos": "lightposs_PHX_4.png"
    },
    {
        "main": "PHX_6.png",
        "windspeed": "windspeed_PHX_6.png",
        "winddir": "winddir_PHX_6.png",
        "lightpos": "lightposs_PHX_6.png"
    },
    {
        "main": "PHX_8.png",
        "windspeed": "windspeed_PHX_8.png",
        "winddir": "winddir_PHX_8.png",
        "lightpos": "lightposs_PHX_8.png"
    },
    {
        "main": "PHX_10.png",
        "windspeed": "windspeed_PHX_10.png",
        "winddir": "winddir_PHX_10.png",
        "lightpos": "lightposs_PHX_10.png"
    },
    {
        "main": "PHX_12.png",
        "windspeed": "windspeed_PHX_12.png",
        "winddir": "winddir_PHX_12.png",
        "lightpos": "lightposs_PHX_12.png"
    },
    {
        "main": "PHX_14.png",
        "windspeed": "windspeed_PHX_14.png",
        "winddir": "winddir_PHX_14.png",
        "lightpos": "lightposs_PHX_14.png"
    },
    {
        "main": "PHX_16.png",
        "windspeed": "windspeed_PHX_16.png",
        "winddir": "winddir_PHX_16.png",
        "lightpos": "lightposs_PHX_16.png",
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