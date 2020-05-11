document.addEventListener('keypress', function (event) {
    if (event.defaultPrevented) {
        return;
    }
    var key = event.key || event.keyCode;

    if (key === 'Enter' || key === 13) {
        searchName()
    }
})