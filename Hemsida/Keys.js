document.addEventListener('keypress', function (event) {                          //When Enter is pressed it runs the search name function, which search in the Json data
    if (event.defaultPrevented) {
        return;
    }
    var key = event.key || event.keyCode;

    if (key === 'Enter' || key === 13) {
        searchName()
    }
})