
//Responsive design for the svg element
var aspect = 960 / 500,
    chart = $("#svgHolder");
$(window).on("resize", function() {
    var targetWidth = chart.width();
    $('svg').attr("width", targetWidth);
    $('svg').attr("height", targetWidth / aspect);
});