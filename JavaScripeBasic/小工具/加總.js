// srting 數字 [1,1,1,] 想加 的方式

const mission = res.data.dataLists[0].thisMissionStatus;
const missionList = mission.split(',')
// 等級加總
let sum = 0;
for (let i = 0; i < missionList.length; i++) {
    sum += parseInt(missionList[i])
}
this.taskNum = sum;