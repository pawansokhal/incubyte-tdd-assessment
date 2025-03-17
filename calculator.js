function add(numbers) {
    if (numbers === "") return 0;

    if (numbers.startsWith("//")) {
        const delimiterEndIndex = numbers.indexOf("\n");
        const delimiter = numbers.slice(2, delimiterEndIndex);
        let numbersPart = numbers.slice(delimiterEndIndex + 1);
        let delimiterRegex;

        if (delimiter.startsWith("[") && delimiter.endsWith("]")) {
            const delimiters = delimiter.slice(1, -1).split("][").map(d => d.trim());
            delimiterRegex = new RegExp(delimiters.map(d => d.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")).join("|"), 'g');
        } else {
            delimiterRegex = new RegExp(`[${delimiter.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")}]`, 'g');
        }
        const numbersArray = numbersPart.split(delimiterRegex).filter(Boolean).map(Number);
        return handleNegativeNumbers(numbersArray);
    }

    const numbersArray = numbers.split(/[\n,]/).filter(Boolean).map(Number);
    return handleNegativeNumbers(numbersArray);
}

function handleNegativeNumbers(numbersArray) {
    const negativeNumbers = numbersArray.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(", ")}`);
    }
    return numbersArray.reduce((sum, curr) => sum + curr, 0);
}

module.exports = add;
