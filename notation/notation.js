const notationFiles = [
    { filePath: 'notation/3x3_cw.json', id: '3x3_cw' },
    { filePath: 'notation/3x3_ccw.json', id: '3x3_ccw' },
    { filePath: 'notation/3x3_double.json', id: '3x3_double' },
    { filePath: 'notation/3x3_slice.json', id: '3x3_slice' },
    { filePath: 'notation/3x3_rotation.json', id: '3x3_rotation' },
];

notationFiles.forEach((notationFile) => {
    loadNotationData(notationFile.filePath, notationFile.id);
});

function loadNotationData(filePath, id) {
    fetch(filePath)
    .then(response => response.json())
    .then(data => {
        let html = '';
        data.forEach((item, index) => {
            html += `
                <div>
                    <img src="${item.image}">
                    <p>${item.move}</p>
                </div>
            `;
        });
        document.getElementById(id).innerHTML += html;
    });
}