//firstLast6

function firstLast6(nums:number[]):boolean{
  return nums.length>0 ? nums[0] === 6||nums[nums.length-1] === 6 : false
}

//sameFirstLast

function sameFirstLast(nums:number[]):boolean{
  return nums.length>0 && nums[0] === nums[nums.length-1]  
 }

//makePi

function makePi():number[]{
  return [3,1,4]
}

//commonEnd

function commonEnd(a: number[], b: number[]): boolean {
  return a[0] === b[0] || a[a.length - 1] === b[b.length - 1];
}

// Array-1 -- sum3

function sum3(nums: number[]): number {
  let sum: number = nums.reduce(
    (a: number, b: number) => a + b,
  );
  return sum;
}

//rotateLeft3

function rotateLeft3(nums: number[]): number[] {
  return [...nums.slice(1), nums[0]];
}

//reverse3

function reverse3(nums:number[]):number[]{
  return nums.reverse()
}

// maxEnd3

function maxEnd3(nums: number[]): number[] {
  const maxNum = Math.max(nums[0], nums[nums.length - 1]);
  return Array(3).fill(maxNum);
}

//sum2

function sum2(nums:number[]):number{
  return nums.length === 0 ?  0 : nums.length === 1 ? nums[0] : nums[0]+ nums[1]
}

//middleWay

function middleWay(a:number[], b:number[]):number[]{
  return  [a[1], b[1]]
}

//makeEnds
function makeEnds(nums:number[]):number[]{
  return [nums[0], nums[nums.length-1]]
}

