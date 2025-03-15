
function add(numbers) {
    let sum = 0;
    if (numbers === "") return sum;
    sum = numbers.split(/[\n,]/).map(Number).reduce((sum, curr) => {
        return sum + parseInt(curr)
    }, 0);
    return sum;
}

module.exports = add;