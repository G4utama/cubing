const files = [
	{ filePath: 'step/CFOP.json', id: 'CFOP' },
	{ filePath: 'step/ROUX.json', id: 'ROUX' },
	{ filePath: 'step/ZZ.json', id: 'ZZ' },
	{ filePath: 'step/Ortega.json', id: 'Ortega' },
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