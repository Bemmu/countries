
// Go to https://en.wikipedia.org/wiki/List_of_country_calling_codes
// then run this in console to get calling codes list.
function extractFromWikipedia() {
    var trs = document.querySelectorAll('table')[1].querySelectorAll('tbody tr');
    var out = [];
    for (var i = 0; i < trs.length; i++) {
        var tds = trs[i].querySelectorAll('td');
        var countryName = tds[0].innerText;
        var prefix = tds[1].querySelector('a').innerText;

        var prefixes = prefix.split(',');
        for (var j = 0; j < prefixes.length; j++) {
            out.push([prefixes[j].replace(/ /g, ''), countryName]);
        }
    }
    out.sort(function (a, b) {
        if (a[1] < b[1]) return -1;
        if (a[1] > b[1]) return 1;
        return 0;
    });
    return out;
}