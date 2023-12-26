var countPrimes = function(n) {
    const answer=[]
 
    for(let i=2;i<n;i++){
    for(let j=2;j<n;j++){
        if(i%j!==0){
         answer.push(i)
         break
        }
    }    
    }
    return answer
};
console.log(countPrimes(10))