document.addEventListener('DOMContentLoaded', function() {
    fetch('/template/header.html')
    	.then(response => response.text())
		.then(html => {
			const headerContainer = document.getElementById('header');
			headerContainer.innerHTML = html;
		})
		.catch(error => {
			console.error('Error loading header:', error);
		});
	
	fetch('/template/footer.html')
        .then(response => response.text())
        .then(html => {
            const footerContainer = document.getElementById('footer');
            footerContainer.innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading footer:', error);
        });
});