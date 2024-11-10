const files = [
	{ filePath: 'step/CFOP.json', id: 'CFOP' },
	{ filePath: 'step/ROUX.json', id: 'ROUX' },
	{ filePath: 'step/ZZ.json', id: 'ZZ' },
	{ filePath: 'step/Ortega.json', id: 'Ortega' },
	{ filePath: 'step/CLL.json', id: 'CLL' },
	{ filePath: 'step/EG1.json', id: 'EG1' },
	{ filePath: 'step/EG2.json', id: 'EG2' },
	{ filePath: 'step/TopFirst.json', id: 'TopFirst' },
	{ filePath: 'step/LLC.json', id: 'LLC' },
	{ filePath: 'step/Lin.json', id: 'Lin' },
];
  
files.forEach((file) => {
	loadStepData(file.filePath, file.id);
});

function loadStepData(filePath, id) {
	fetch(filePath)
		.then(response => response.json())
		.then(data => {
			let html = '';
			data.forEach((item, index) => {
				if (item.image == "image/right.png") {
					html += `
						<div>
							<img src="${item.image}">
							<p>${item.step}</p>
						</div>
					`;
				} else {
					html += `
						<div class="cube">
							<img src="${item.image}">
						</div>
					`;
				}
			});
			document.getElementById(id).innerHTML += html;
		});
}