/**
 * @author Chidinma Irene Nwoye
 */

console.log("My Javascript is working"); //I'm testing my javascript file

function dataUp(MTAFareData){            
	
	console.log(MTAFareData);        
	
	var gDataTable = new google.visualization.DataTable();
	
	//When I add columns, the 1st parameter is the data type in that column
	// The 2nd parameter is the name of the column
	
	gDataTable.addColumn('string', MTAFareData.columns[0]);
	gDataTable.addColumn('number', MTAFareData.columns[1]);
	gDataTable.addColumn('number', MTAFareData.columns[2]);
	gDataTable.addColumn('number', MTAFareData.columns[3]);
	
	gDataTable.addRows(MTAFareData.rows);
	
	var ChartOptions = {                           //create options object to actually customize the look of our chart
          title: "Fare Hikes Since 1953",       //This is a configuration option
          width: 700,
          height: 500 
          //vAxis: {title: 'Rate of Change'},
          //isStacked: true       
         };
        
		//tells Google Visualization to create a line chart 
	var ThisChart = new google.visualization.LineChart(document.getElementById('newChartDiv')); 
	ThisChart.draw(gDataTable,ChartOptions);
	
	
	
}
	
function GoogleVizUp() {

	console.log("I've put up Google!");
	$.get("https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+*+FROM+1ceoh_Z0vPS8UDRd-5cMw6GjBtynCZ7-KiCHzhMq8&key=AIzaSyCgfAUYUUuX8vurL0WtKGYRGho11LEnsPI", dataUp, "json"); //I'm retrieving my json data 
	
}	
	



function docUp() {

	console.log("My page is up!");
	//I'm loading the google visualization library
	google.load("visualization", "1", {
		packages : ["corechart"],
		callback : "GoogleVizUp"
	});

}


$(document).ready(docUp);  //I've used $(document).ready to call my function, docUp



