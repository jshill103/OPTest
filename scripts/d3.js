function generateSVG(rawData){
    d3.select("svg").remove();
       
    
var key;
var data = [];

for(key in rawData){
    if(rawData.hasOwnProperty(key)){
        data.push({'name' : key, 'value' : rawData[key]});
    }
}
    
    
    var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10, ""); 
    
    var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong># of Days:</strong> <span style='color:yellow'>" + d.value + "</span>";
  });

var svg = d3.select("#svgHolder").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr("viewBox","0 0 960 500")
    .attr("preserveAspectRatio", "xMidYMid")
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    //Initialize the svg element to fit any screen with the same aspect ratio
    var aspect = 960 / 500,
    chart = $("#svgHolder");
    var targetWidth = chart.width();
    $('svg').attr("width", targetWidth);
    $('svg').attr("height", targetWidth / aspect);
    
  svg.call(tip);

  x.domain(data.map(function(d) { return d.name; }));
  y.domain([0, d3.max(data, function(d) { return d.value; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Number of days");

  svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.name); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); })
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide);

function type(d) {
  d.value = +d.value;
  return d;
}

}

