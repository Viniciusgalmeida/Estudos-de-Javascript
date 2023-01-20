// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

function printerError(s) {
    var validColors = "abcdefghijklm";
    var errors = 0;
    for (var i = 0; i < s.length; i++) {
        if (validColors.indexOf(s[i]) == -1) {
            errors++;
        }
    }
    return errors + "/" + s.length;
}
