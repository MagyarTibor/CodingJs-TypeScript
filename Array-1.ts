// Array-1 -- sum3

function sum3(nums: number[]): number {
  let sum: number = nums.reduce(
    (a: number, b: number) => a + b,
  );
  return sum;
}
