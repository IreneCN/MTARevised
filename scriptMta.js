/**
 * @author Chidinma Irene Nwoye
 */



console.log("My Javascript is working"); //I'm testing my javascript file

function dataUp1(MTAFareData){  //This is my function for charting out the fare increase rate since 1953          
	
	console.log(MTAFareData);        //I'm testing my function to see that it works
	
	var gDataTable = new google.visualization.DataTable();
	
	//I've added the columns for my data
	
	gDataTable.addColumn('string', MTAFareData.columns[0]); 
	gDataTable.addColumn('number', MTAFareData.columns[1]);
	gDataTable.addColumn('number', MTAFareData.columns[2]);
	gDataTable.addColumn('number', MTAFareData.columns[3]);
	
	gDataTable.addRows(MTAFareData.rows);
	
	var ChartOptions1 = {                           
          //title: "Fare Hikes Since 1953",       //This variable allows me to adjust the look of my chart and I tinkered with its width and height
          width: 700,
          height: 400, 
          vAxis: {title: "Rate of Change"}                 
         };
        
		//tells Google Visualization to create a line chart 
	var ThisChart1 = new google.visualization.LineChart(document.getElementById('newChartDiv')); 
	ThisChart1.draw(gDataTable,ChartOptions1); //This will tell my code to draw the code
	
	
	
}
	
function GoogleVizUp1() {

	console.log("I've put up Google!");
	$.get("https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+*+FROM+1ceoh_Z0vPS8UDRd-5cMw6GjBtynCZ7-KiCHzhMq8&key=AIzaSyCgfAUYUUuX8vurL0WtKGYRGho11LEnsPI", dataUp1, "json"); //I'm retrieving my json data 
	//I created a fusion table with my csv data for my line chart
}	
	



function docUp1() {

	console.log("My page is up!");
	//I'm loading the google visualization library
	google.load("visualization", "1", {
		packages : ["corechart"],
		callback : "GoogleVizUp1"
	});

}


$(document).ready(docUp1);  //I've used $(document).ready to call my function, docUp



