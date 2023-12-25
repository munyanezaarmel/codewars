var numIdenticalPairs = function(nums) {
    const result=[]
    for(let i=0;i<=nums.length;i++){
        for(let j=i+1;j<=nums.length;j++){
            if(nums[i]==nums[j]){
                result.push(`(${i},${j})`)
            }
        }
    }
    return result.length
};
console.log(numIdenticalPairs([1,2,3,1,1,3]))