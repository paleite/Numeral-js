/*! @preserve
 * numeral.js locale configuration
 * locale : Bulgarian
 * author : Don Vince : https://github.com/donvince/
 */
(function () {
    var locale = {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: { // I found these here http://www.unicode.org/cldr/charts/28/verify/numbers/bg.html
            thousand: 'хил',
            million: 'млн',
            billion: 'млрд',
            trillion: 'трлн'
        },
        ordinal: function (number) {
            // google translate suggests:
            // 1st=1-ви; 2nd=2-ри; 7th=7-ми;
            // 8th=8-ми and many others end with -ти
            // for example 3rd=3-ти
            // However since I've seen suggestions that in
            // Bulgarian the ordinal can be taken in
            // different forms (masculine, feminine, neuter)
            // I've opted to wimp out on commiting that to code
            return '';
        },
        currency: {
            symbol: 'лв'
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = locale;
    }
    // Browser
    if (typeof window !== 'undefined' && this.numeral && this.numeral.locale) {
        this.numeral.locale('bg', locale);
    }
}());