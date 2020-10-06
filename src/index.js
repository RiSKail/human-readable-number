function strNumber(num) {
    let str = "";
    switch (num) {
        case 1:
            str += "one";
            break;
        case 2:
            str += "two";
            break;
        case 3:
            str += "three";
            break;
        case 4:
            str += "four";
            break;
        case 5:
            str += "five";
            break;
        case 6:
            str += "six";
            break;
        case 7:
            str += "seven";
            break;
        case 8:
            str += "eight";
            break;
        case 9:
            str += "nine";
            break;
    }
    return str;
}

function strNumber2(num) {
    let str = "";
    switch (num) {
        case 10:
            str += "ten";
            break;
        case 11:
            str += "eleven";
            break;
        case 12:
            str += "twelve";
            break;
        case 13:
            str += "thirteen";
            break;
        case 14:
            str += "fourteen";
            break;
        case 15:
            str += "fifteen";
            break;
        case 16:
            str += "sixteen";
            break;
        case 17:
            str += "seventeen";
            break;
        case 18:
            str += "eighteen";
            break;
        case 19:
            str += "nineteen";
            break;
        case 20:
            str += "twenty";
            break;
    }
    return str;
}

function strNumber3(num) {
    let str = "";
    switch (num) {
        case 2:
            str += "twenty";
            break;
        case 3:
            str += "thirty";
            break;
        case 4:
            str += "forty";
            break;
        case 5:
            str += "fifty";
            break;
        case 6:
            str += "sixty";
            break;
        case 7:
            str += "seventy";
            break;
        case 8:
            str += "eighty";
            break;
        case 9:
            str += "ninety";
            break;

    }
    return str;
}

module.exports = function toReadable(number) {
    let str = "";
    if (number == 0) return "zero";
    if (number > 99 && number <= 999) {
        if (Math.trunc(number / 10) % 10 == 0 && number % 10 == 0) {
            str = strNumber(Math.trunc(number / 100));
            str += " hundred";
        } else {
            str = strNumber(Math.trunc(number / 100) % 10);
            str += " hundred";
            if (number % 100 > 9 && number % 100 <= 20) {
                str += " " + strNumber2(number % 100);
            } else {
                str += " " + strNumber3(Math.trunc(number / 10) % 10);
                str += " " + strNumber(number % 10);
            }
        }
    }
    if (number > 20 && number <= 99) {
        str += strNumber3(Math.trunc(number / 10) % 10);
        str += " " + strNumber(number % 10);
    }
    if (number > 9 && number <= 20) {
        str = strNumber2(number);
    }
    if (number < 10 && number > 0) {
        str = strNumber(number);
    }
    return str.replace(/\s+/g, ' ').trim();
};
