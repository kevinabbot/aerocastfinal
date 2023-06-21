const maps = [{
        "main": "JAX_2.png",
        "windspeed": "windspeed_JAX_2.png",
        "winddir": "winddir_JAX_2.png",
        "lightpos": "lightposs_JAX_2.png"
    },
    {
        "main": "JAX_4.png",
        "windspeed": "windspeed_JAX_4.png",
        "winddir": "winddir_JAX_4.png",
        "lightpos": "lightposs_JAX_4.png"
    },
    {
        "main": "JAX_6.png",
        "windspeed": "windspeed_JAX_6.png",
        "winddir": "winddir_JAX_6.png",
        "lightpos": "lightposs_JAX_6.png"
    },
    {
        "main": "JAX_8.png",
        "windspeed": "windspeed_JAX_8.png",
        "winddir": "winddir_JAX_8.png",
        "lightpos": "lightposs_JAX_8.png"
    },
    {
        "main": "JAX_10.png",
        "windspeed": "windspeed_JAX_10.png",
        "winddir": "winddir_JAX_10.png",
        "lightpos": "lightposs_JAX_10.png"
    },
    {
        "main": "JAX_12.png",
        "windspeed": "windspeed_JAX_12.png",
        "winddir": "winddir_JAX_12.png",
        "lightpos": "lightposs_JAX_12.png"
    },
    {
        "main": "JAX_14.png",
        "windspeed": "windspeed_JAX_14.png",
        "winddir": "winddir_JAX_14.png",
        "lightpos": "lightposs_JAX_14.png"
    },
    {
        "main": "JAX_16.png",
        "windspeed": "windspeed_JAX_16.png",
        "winddir": "winddir_JAX_16.png",
        "lightpos": "lightposs_JAX_16.png",
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