const lotteryPromise = new Promise(function (resolve, reject) {
    if (Math.random() >= 0.5) {
        resolve('you win this game')
    }
    resolve('you loose')
});
lotteryPromise.then(res=>console.log(res)).catch(err=>console.log('error'))