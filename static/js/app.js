// import the data from data.js
const tableData = data;

// reference the HTML table using d3
var tbody = d3.select("tbody");

// creating a function to fill our table with the data
function buildTable(data){
    // clear the table with empty quotes
    tbody.html("");

    // create a forEach function that will loop through our data and
    // append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // append a row to the table body
        let row =  tbody.append("tr");

        // set up another function to loop through each field in the dataRow and
        // add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}

function handleClick() {
    // select the first id in the HTML tag and store it in the date variable
    let date = d3.select("#datetime").property("value");
    
    // allow users to filter the data
    // tableData is all of our data in the js file
    let filteredData = tableData;
    
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
    buildTable(filteredData);
}

// run the handleClick function on the button click
d3.selectAll("#filter-btn").on("click", handleClick);

// build the table when the page loads
buildTable(tableData);