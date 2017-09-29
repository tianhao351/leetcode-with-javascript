var twoSum = function(nums, target) {
    var map = {};
    for(var i = 0; i<nums.length;i++){
        console.log("map",map,i,nums[i])
        if(map[target - nums[i]] !== undefined){
            return [map[target - nums[i]],i];
        }else{
            map[nums[i]] = i;
        }
    }
    return [];
};

console.log(twoSum([3,2,4,5,12,7,1,22,23],13))