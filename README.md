# Country lists

I've often needed a list of countries, their ISO abbreviations or the calling codes for each country, so I thought I'd share the lists here.
Use freely, no need to credit. Although the files are .js, they are basically JSON.

The two lists may not be compatible with each other, meaning the countries may be named slightly differently and may not be present in both lists.

## Calling codes

This is for when you want to let your user choose the country of their phone number.

The list of calling codes is in `calling_codes.js`. extracted from [this Wikipedia article](https://en.wikipedia.org/wiki/List_of_country_calling_codes). The code to extract the list is in extract_from_wikipedia.js.

## Country list

Use `country_abbreviations.js` for example when you have an order form and want to let the user select which country to ship to.

If you'd like to iterate through them in alphabetical order, here's a code snippet:

    function alphabeticalCountries() {
        var out = [];
        for (var key in countryAbbreviations) {
            out.push([key, countryAbbreviations[key]]);
        }
        out.sort(function (a, b) {
            if (a[1] < b[1]) return -1;
            if (a[1] > b[1]) return 1;
            return 0;
        });
        return out;
    }
