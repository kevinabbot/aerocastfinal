const maps = [{
        htmlFile: 'fix_2.html',
        pngFile: 'fctime_2.png',
        time: "20/05\n18:00",
    },
    {
        htmlFile: 'fix_4.html',
        pngFile: 'fctime_2.png',
        time: "20/05\n20:00",
    },
    {
        htmlFile: 'fix_6.html',
        pngFile: 'fctime_2.png',
        time: "20/05\n22:00",
    },
    {
        htmlFile: 'fix_8.html',
        pngFile: 'fctime_2.png',
        time: "21/05\n00:00",
    },
    {
        htmlFile: 'fix_10.html',
        pngFile: 'fctime_2.png',
        time: "21/05\n02:00",
    },
    {
        htmlFile: 'fix_12.html',
        pngFile: 'fctime_2.png',
        time: "21/05\n06:00",
    },
    {
        htmlFile: 'fix_14.html',
        pngFile: 'fctime_2.png',
        time: "21/05\n08:00",
    },
    {
        htmlFile: 'fix_16.html',
        pngFile: 'fctime_2.png',
        time: "21/05\n10:00",
    }
];
document.getElementById("mapRange").max = maps.length - 1;
document.getElementById("mapRange").addEventListener("input", function () {
    let mapIndex = this.value;
    document.getElementById("mapDetails").src = `assets/${maps[mapIndex].pngFile}`;
    document.getElementById("mapDisplay").src = `assets/${maps[mapIndex].htmlFile}`;

});