function sum(numbers) {
    if (numbers.lenght > 1) {
        const reducer = (acc, val) => acc + val
        return numbers.reduce(reducer)
    } else if (numbers.lenght === 1) {
        return numbers[0]

    } else {
        return 0
    }


}


const ar = [1, 2, 3, 4, 5]
console.log(sum(ar))