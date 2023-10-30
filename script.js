function createTable() {
    // Prompt for the number of rows
    const rowCount = prompt("Input number of rows:");
    if (rowCount === null) return; // Handle Cancel button

    // Prompt for the number of columns
    const colCount = prompt("Input number of columns:");
    if (colCount === null) return; // Handle Cancel button

    const table = document.getElementById("myTable");

    // Clear any existing table content
    table.innerHTML = "";

    for (let i = 0; i < rowCount; i++) {
        const row = table.insertRow();
        for (let j = 0; j < colCount; j++) {
            const cell = row.insertCell();
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}
