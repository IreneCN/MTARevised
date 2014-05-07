/**
 * @author Chidinma Irene Nwoye
 */

console.log("My Javascript is working"); //I'm testing my javascript file

function dataUp(MTAFareData){   //This is my function for charting out the fare media liability          
	
	console.log(MTAFareData);        //Testing if it works
	
	var gDataTable = new google.visualization.DataTable();
	
	//I'm creating two columns to plot the change in the unredeemed fares against their years
	
	gDataTable.addColumn('string', MTAFareData.columns[0]); // Year column
	gDataTable.addColumn('number', MTAFareData.columns[1]); //Unredeemed fare column
	
	
	gDataTable.addRows(MTAFareData.rows); 
	
	var ChartOptions = {                           //This variable allows me to customize the appearance of my chart
          title: "Fare Media Liability Since 2003",       //This is my headline
          vAxis: {title: "Year"},
          hAxis: {title: "Estimated Amount From Unused Farecards and Tolls In Millions of Dollars"}      
         };
        
		//tells Google Visualization to create a line chart 
	var ThisChart = new google.visualization.BarChart(document.getElementById('newChartDiv2')); 
	ThisChart.draw(gDataTable,ChartOptions); //This allows me to draw my visualization
	
	
	
}
	
function GoogleVizUp() {

	console.log("I've put up Google!");
	$.get("https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+*+FROM+1eGvCRFYGb87M7VD804CKyGAP5d5-Eaheysbce9PI&key=AIzaSyCgfAUYUUuX8vurL0WtKGYRGho11LEnsPI", dataUp, "json"); 
	//I created a fusion table where my javascript can retrieve the data and use it to create a bar chart 
	
}	
	



function docUp() {

	console.log("My page is up!"); //Testing if my function works
	
	google.load("visualization", "1", {
		packages : ["corechart"],
		callback : "GoogleVizUp"
	});

}


$(document).ready(docUp);  //I've used $(document).ready to call my function, docUp



