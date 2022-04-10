// 
const twototal = (num, total) => {
    const subpair = [];
    const ans = [];
    
    for(let a of num){
      const b = total - a;
      if(ans.indexOf(b) !== -1){
        subpair.push([a, b]);
      }
      ans.push(a);
    }
    return subpair;
  }
  
  console.log(twototal([2,3,5,1,5,1,3,4], 2))

  ////
  function twoSum(nums, target_num) {  
    var map = [];  
    var indexnum = [];  

    for (var x = 0; x < nums.length; x++)  
    {  
        if (map[nums[x]] != null)  
        // what they meant by map[nums[x]]
        {  
            index = map[nums[x]];  
            indexnum[0] = index+1;  
            indexnum[1] = x+1;  
            break;  
        }  
        else  
        {  
            map[target_num - nums[x]] = x;  
        }  
    }  
    return indexnum;  
    }  
console.log(twoSum([10,20,10,40,50,60,70],50));