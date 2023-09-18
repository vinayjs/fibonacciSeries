const fibonacciSeries = (n) => {
    let firstNum = 0, secondNum = 1, nextNum;
    for(let i = 0; i < n; i++){
        if (i === 0 ) console.log(firstNum);
        else if (i === 1) console.log(secondNum);
        else {
            nextNum = firstNum + secondNum;
            firstNum = secondNum;
            secondNum = nextNum;
            console.log(nextNum)
        }
    }
}
fibonacciSeries(8);