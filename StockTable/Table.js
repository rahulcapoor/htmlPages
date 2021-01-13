function createTableFromJSON(tableContainer, optionChain, colNames) {

    // EXTRACT VALUE FOR HTML HEADER.       
    var col = [];
    for (var i = 0; i < optionChain.length; i++) {
        for (var key in optionChain[i]) {
            if (col.indexOf(key) === -1 && colNames.includes(key)) {
                col.push(key);
            }
        }
    }

    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");

    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

    var tr = table.insertRow(-1); // TABLE ROW.

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th"); // TABLE HEADER.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < 10; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {

            var tabCell = tr.insertCell(-1);
            if (col[j].includes('Date')) {
                tabCell.innerHTML = new Date(optionChain[i][col[j]]).toISOString().slice(0, 10);
            } else {
                tabCell.innerHTML = optionChain[i][col[j]];
            }
        }
    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    tableContainer.innerHTML = "";
    tableContainer.appendChild(table);
}