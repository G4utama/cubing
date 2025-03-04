const tableData = {
    '_3x3-OLL': 'table/3x3-OLL.json',
    '_3x3-PLL': 'table/3x3-PLL.json',
    '_3x3-COLL': 'table/3x3-COLL.json',
    '_2x2-OLL': 'table/2x2-OLL.json',
    '_4x4-OLL': 'table/4x4-OLL.json',
    '_megaminx-EO': 'table/megaminx-EO.json',
    '_megaminx-CO': 'table/megaminx-CO.json',
    '_megaminx-EP': 'table/megaminx-EP.json',
    '_pyra-L3C': 'table/pyra-L3C.json',
    '_pyra-L3E': 'table/pyra-L3E.json',
    '_skewb-LL': 'table/skewb-LL.json',
    '_skewb-L4C': 'table/skewb-L4C.json',
    '_SQ1-CPDF': 'table/SQ1-CP+DF.json',
    '_SQ1-PLL': 'table/SQ1-PLL.json'
};

Object.keys(tableData).forEach(tableId => {
    const jsonFile = tableData[tableId];
    fetch(jsonFile)
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector(`#${tableId} tbody`);
            data.forEach(item => {
                const row = document.createElement('tr');
                Object.values(item).forEach(value => {
                    const cell = document.createElement('td');
                    if (value.includes('image')) {
                        const img = document.createElement('img');
                        img.src = value;
                        cell.appendChild(img);
                    } else {
                        cell.textContent = value;
                    }
                    row.appendChild(cell);
                });
                tableBody.appendChild(row);
            });
        });
});