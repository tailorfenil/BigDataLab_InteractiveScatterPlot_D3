$(document).ready(function() {
	window.column_headings = []; 
d3.csv("car.csv", function(data){
                if(column_headings.length==0){
                    column_headings = d3.keys(data[0]);
                    for(i=1;i<column_headings.length-1;i+=1){
                        d3.select("#sel-x").append("option").attr("value",column_headings[i]).text(column_headings[i]);
                        d3.select("#sel-y").append("option").attr("value",column_headings[i]).text(column_headings[i]);
                    }
}});


    $('#update').on('click', function(){
		
		
		var val1 = Number($('#mpg-min').val());
		var val2 = Number($('#mpg-max').val());
// Set the dimensions of the canvas / graph
var margin = {top: 30, right: 20, bottom: 30, left: 50},
    width = 600 - margin.left - margin.right,
    height = 270 - margin.top - margin.bottom;

// Parse the date / time
//var parseDate = d3.time.format("%d-%b-%y").parse;

// Set the ranges
var x = d3.scale.linear().range([0, width]);
var y = d3.scale.linear().range([height, 0]);

// Define the axes

var xAxis = d3.svg.axis().scale(x)
    .orient("bottom").ticks(5);

var yAxis = d3.svg.axis().scale(y)
    .orient("left").ticks(5);
var A = $("#sel-x option:selected").text();
var B = $("#sel-y option:selected").text();
var div = d3.select("body").append("div")

// Define the line
var valueline = d3.svg.line()
    .x(function(d) {
		if(A=="mpg")		
			{return x(d.mpg);}
		if(A=="displacement")		
			{return x(d.displacement);}
		if(A=="horsepower")		
			{return x(d.horsepower);}
		if(A=="weight")		
			{return x(d.weight);}
		if(A=="acceleration")		
			{return x(d.acceleration);}
		if(A=="cylinders")		
			{return x(d.cylinders);}
		if(A=="model.year")		
			{return x(d["model.year"]);}
 })
    .y(function(d) {
		if(B=="mpg")		
			{return y(d.mpg);}
		if(B=="displacement")		
			{return y(d.displacement);}
		if(B=="horsepower")		
			{return y(d.horsepower);}
		if(B=="weight")		
			{return y(d.weight);}
		if(B=="acceleration")		
			{return y(d.acceleration);}
		if(B=="cylinders")		
			{return y(d.cylinders);}
		if(B=="model.year")		
			{return y(d["model.year"]);}
 } );
    
// Adds the svg canvas
var svg = d3.select("body")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");

// Get the data
d3.csv("car.csv", function(error, data) {
	
    data.forEach(function(d) {
		d.mpg =+d.mpg
		if(A=="displacement")		
			{d.displacement =+d.displacement;}
		if(A=="horsepower")		
			{d.horsepower = +d.horsepower;}
		if(A=="weight")		
			{d.weight = +d.weight;}
		if(A=="acceleration")		
			{d.acceleration = +d.acceleration;}
		if(A=="cylinders")		
			{d.cylinders = +d.cylinders;}
		if(A=="model.year")		
			{d["model.year"] = +d["model.year"];}
	
		if(B=="displacement")		
			{d.displacement =+d.displacement;}
		if(B=="horsepower")		
			{d.horsepower = +d.horsepower;}
		if(B=="weight")		
			{d.weight = +d.weight;}
		if(B=="acceleration")		
			{d.acceleration = +d.acceleration;}
		if(B=="cylinders")		
			{d.cylinders = +d.cylinders;}
		if(B=="model.year")		
			{d["model.year"] = +d["model.year"];}
	
    });

    // Scale the range of the data
    x.domain([0, d3.max(data, function(d) {
		if(Number(d.mpg)>=val1 && Number(d.mpg)<=val2)
		{	
			if(A=="mpg")		
				{return d.mpg;}
			if(A=="displacement")		
				{return d.displacement;}
			if(A=="horsepower")		
				{return d.horsepower;}
			if(A=="weight")		
				{return d.weight;}
			if(A=="acceleration")		
				{return d.acceleration;}
			if(A=="cylinders")		
				{return d.cylinders;}
			if(A=="model.year")		
				{return d["model.year"];}
		}
		})]);
    y.domain([0, d3.max(data, function(d) {
      if(Number(d.mpg)>=val1 && Number(d.mpg)<=val2)
		{		
		if(B=="mpg")		
			{return d.mpg;}
		if(B=="displacement")		
			{return d.displacement;}
		if(B=="horsepower")		
			{return d.horsepower;}
		if(B=="weight")		
			{return d.weight;}
		if(B=="acceleration")		
			{return d.acceleration;}
		if(B=="cylinders")		
			{return d.cylinders;}
		if(B=="model.year")		
			{return d["model.year"];}
		}
	})]);

    // Add the valueline path.
    //svg.append("path")
      //  .attr("class", "line")
        //.attr("d", valueline(data));

    
	// Add the scatterplot
     svg.selectAll("dot")
        .data(data)
        .enter().append("circle")
        .attr("r", function(d)
		{ if(Number(d.mpg)>=val1 && Number(d.mpg)<=val2)
			{return 3.5;}
		})
        .attr("cx", function(d) { 
		  if(Number(d.mpg)>=val1 && Number(d.mpg)<=val2)
		{
			if(A=="mpg")		
				{return x(d.mpg);}
			if(A=="displacement")		
				{return x(d.displacement);}
			if(A=="horsepower")		
				{return x(d.horsepower);}
			if(A=="weight")		
				{return x(d.weight);}
			if(A=="acceleration")		
				{return x(d.acceleration);}
			if(A=="cylinders")		
				{return x(d.cylinders);}
			if(A=="model.year")		
				{return x(d["model.year"]);}
		}})
        .attr("cy", function(d) {
		  if(Number(d.mpg)>=val1 && Number(d.mpg)<=val2){			
			if(B=="mpg")		
				{return y(d.mpg);}
			if(B=="displacement")		
				{return y(d.displacement);}
			if(B=="horsepower")		
				{return y(d.horsepower);}
			if(B=="weight")		
				{return y(d.weight);}
			if(B=="acceleration")		
				{return y(d.acceleration);}
			if(B=="cylinders")		
				{return y(d.cylinders);}
			if(B=="model.year")		
				{return y(d["model.year"]);}
		}})
		.on("mouseover", function(d){
			div.transition()
			   .duration(200)
			   .style("opacity",0.9);
			
			div	.html(d.name)	
                .style("left", (d3.event.pageX) + "px")		
                .style("top", (d3.event.pageY - 28) + "px")
				.style("font-size","20px");
				
            })					
        .on("mouseout", function(d) {		
            div.transition()		
                .duration(500)		
                .style("opacity", 0);	
        });

    // Add the X Axis
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);
	svg.append("text")      // text label for the x axis
        .attr("x", 265 )
        .attr("y", 200 )
        .style("text-anchor", "right")
        .text(A);
    // Add the Y Axis
    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);
	
	svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0)
        .attr("x",0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text(B);

});});});

