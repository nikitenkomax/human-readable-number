module.exports = function toReadable(number) {
    const units = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];

    const secondDecade = [
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    if (number === 0) {
        return "zero";
    }
    if (number < 10) {
        return units[number - 1];
    }
    if (number >= 11 && number <= 19) {
        return secondDecade[(number % 10) - 1];
    }
    if (number === 10) {
        return tens[0];
    }
    if (number > 19 && number < 100) {
        return `${tens[Math.floor(number / 10) - 1]}${
            units[(number % 10) - 1] ? ` ${units[(number % 10) - 1]}` : ""
        }`;
    }
    if (number >= 100 && number < 1000) {
        return `${units[Math.floor(number / 100) - 1]} hundred${
            Math.floor((number % 100) / 10) > 1
                ? ` ${tens[Math.floor((number % 100) / 10) - 1]}${
                      units[(number % 10) - 1]
                          ? ` ${units[(number % 10) - 1]}`
                          : ""
                  }`
                : "" || (number % 100) / 10 === 1
                ? ` ${tens[0]}`
                : "" || Math.floor((number % 100) / 10) < 1
                ? units[(number % 10) - 1]
                    ? ` ${units[(number % 10) - 1]}`
                    : ""
                : "" || number % 100 > 10 || number % 100 < 20
                ? ` ${secondDecade[(number % 10) - 1]}`
                : ""
        }`;
    }
};
