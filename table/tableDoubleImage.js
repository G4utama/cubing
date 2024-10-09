const tableData = {
    '_2x2-PBL': 'table/2x2-PBL.json'
};

Object.keys(tableData).forEach(tableId => {
    const jsonFile = tableData[tableId];
    fetch(jsonFile)
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector(`#${tableId} tbody`);
            data.forEach(item => {
            const row = document.createElement('tr');
                Object.values(item).forEach((value, index) => {
                    const cell = document.createElement('td');
                    if (index === 0) {
                        cell.innerHTML = value;
                    } else if (index === 1) {
                        value.forEach(image => {
                            const img = document.createElement('img');
                            img.src = image;
                            cell.appendChild(img);
                        });
                    } else {
                        cell.textContent = value;
                    }
                    row.appendChild(cell);
                });
                tableBody.appendChild(row);
            });
        });
  });