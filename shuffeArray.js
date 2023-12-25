var shuffle = function(nums, n) {
  const answer=[]
  for(let i=0;i<=nums.length;i++){
    for(let j=i+n;j<nums.length;j++){
    answer.push(nums[i],nums[j])
    break
    }
  }  
  return answer
};
console.log(shuffle([1,1,2,2],2))

//1,4,2,3,3,2,4,1