document.addEventListener('DOMContentLoaded', function () {
    // Import header
    fetch('main_header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        });
});