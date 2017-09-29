
var twoSum = function(nums, target) {
    var re = []
    for(var i = 0;i<nums.length;i++){
            for(var j = 0; j<nums.length;j++){
                if(i!=j){
                    if(nums[i]+nums[j] == target){
                        re.push(i)
                        re.push(j)
                        return re
                    }
                }
            }
    }
    return -1
    
};

console.log(twoSum([3,2,4],6))