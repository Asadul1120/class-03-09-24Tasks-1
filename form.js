document.getElementById('btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the input values
    const name = document.getElementById('name').value;
    const roll = document.getElementById('Roll').value;
    const className = document.getElementById('className').value;

    // Create a new row
    const newRow = document.createElement('tr');

    // Create cells for the new row
    const nameCell = document.createElement('td');
    const rollCell = document.createElement('td');
    const classCell = document.createElement('td');

    // Set the text content of the cells
    nameCell.textContent = name;
    rollCell.textContent = roll;
    classCell.textContent = className;

    // Append the cells to the new row
    newRow.appendChild(nameCell);
    newRow.appendChild(rollCell);
    newRow.appendChild(classCell);

    // Add the year cell only if the row count is less than 3
    const tableBody = document.querySelector('table tbody');
    if (tableBody.rows.length < 3) {
        const yearCell = document.createElement('td');
        yearCell.setAttribute('rowspan', '4');
        yearCell.textContent = '2024';
        newRow.appendChild(yearCell);
    }

    // Add the new row to the table body before the last row (All Rights Reserved row)
    const lastRow = tableBody.lastElementChild;
    tableBody.insertBefore(newRow, lastRow);

    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('Roll').value = '';
    document.getElementById('className').value = '';
});
