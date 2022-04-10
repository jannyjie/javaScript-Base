
// 找出最大利潤最小買入以及最大賣出價

var maxProfit = (prices) => {
    let low = prices[0] < prices[1] ? prices[0] : prices[1], 
        high = prices[0] < prices[1] ? prices[1] : prices[2];
    let maxProfit = high - low;
    let temp = low;
    
    for(let index = 2; index < prices.length; index++){
      const sellPrice = prices[index];
      
      if(low > sellPrice) temp = prices[index];
      else{
        const profit = sellPrice - low;
        if(profit > maxProfit)
           (maxProfit = profit),
          (high = sellPrice),
          (low = temp);
      }
    }
    return [low, high];
  }
  
  console.log(maxProfit([24, 27, 32, 45]))