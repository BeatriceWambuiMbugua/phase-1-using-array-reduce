const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let initialValue = 0;
const totalBatteries = batteryBatches.reduce(
  (prevVal, curVal) => prevVal + curVal,
  initialValue
);
console.log(totalBatteries);
