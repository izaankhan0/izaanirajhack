function addToTable() {
    const userInput = document.getElementById('userInput').value;
    const destinationInput = document.getElementById('destinationInput').value;

    if (userInput.trim() === '') {
        
    }

    const tableBody = document.getElementById('tableBody');
    const newRow = tableBody.insertRow(tableBody.rows.length);

    // Add columns
    const orderNumberCell = newRow.insertCell(0);
    const itemNameCell = newRow.insertCell(1);
    const destinationCell = newRow.insertCell(2);
    const statusCell = newRow.insertCell(3);
    const sendCell = newRow.insertCell(4);

    // Populate cells
    orderNumberCell.innerHTML = tableBody.rows.length;
    itemNameCell.innerHTML = userInput;
    destinationCell.innerHTML = destinationInput || 'Not specified';
    statusCell.innerHTML = 'Pending';
    statusCell.innerHTML = '<span class="status-cell">Pending</span>';

    // Create Send button
    const sendButton = document.createElement('button');
    sendButton.textContent = 'Send';
    sendButton.onclick = function() {
        changeStatusToDelivered(newRow);
        showPopup(userInput, destinationInput);
    };

    // Add button to cell
    sendCell.appendChild(sendButton);

    // Add headings if the table is empty
    if (tableBody.rows.length === 1) {
        addTableHeadings(tableBody);
    }

    // Clear the inputs after adding to the table
    clearInputs();
}

function showPopup(itemName, orderDestination) {
    alert(`${itemName} has been sent to ${orderDestination} successfully`);
}

function addTableHeadings(tableBody) {
    const headerRow = tableBody.insertRow(0);

}

function addHeadingCell(row, headingText) {
    const headingCell = row.insertCell(row.cells.length);
    headingCell.innerHTML = headingText;
}

function clearInputs() {
    document.getElementById('userInput').value = '';
    document.getElementById('destinationInput').value = '';
}


function changeStatusToDelivered(row) {
    const statusCell = row.cells[3];
    statusCell.innerHTML = 'Delivered';
    statusCell.classList.add('delivered');
}
function addToTable() {
    const userInput = document.getElementById('userInput').value;
    const destinationInput = document.getElementById('destinationInput').value;

    if (userInput.trim() === '') {
        return; // Do nothing if the input is empty
    }

    const tableBody = document.getElementById('tableBody');
    const newRow = tableBody.insertRow(tableBody.rows.length);

    // Add columns
    const orderNumberCell = newRow.insertCell(0);
    const itemNameCell = newRow.insertCell(1);
    const destinationCell = newRow.insertCell(2);
    const statusCell = newRow.insertCell(3);
    const trackingCell = newRow.insertCell(4); // New column for Tracking
    const sendCell = newRow.insertCell(5);

    // Populate cells
    orderNumberCell.innerHTML = tableBody.rows.length; // Order number based on row count
    itemNameCell.innerHTML = userInput;
    destinationCell.innerHTML = destinationInput || 'Not specified'; // Use input or default to 'Not specified'
    statusCell.innerHTML = '<span class="status-cell">Pending</span>'; // Initial status is red

    // Create Tracking button
    const trackingButton = document.createElement('button');
    trackingButton.textContent = 'Track';
    trackingButton.onclick = function() {
        // Handle tracking logic here, you can redirect or perform other actions
        window.open('./tracking.htm');
    };

    // Add button to cell
    trackingCell.appendChild(trackingButton);

    // Create Send button
    const sendButton = document.createElement('button');
    sendButton.textContent = 'Send';
    sendButton.onclick = function() {
        changeStatusToDelivered(newRow);
        showPopup(userInput, destinationInput);
    };

    // Add button to cell
    sendCell.appendChild(sendButton);

    // Add headings if the table is empty
    if (tableBody.rows.length === 1) {
        addTableHeadings(tableBody);
    }

    // Clear the inputs after adding to the table
    clearInputs();
}
