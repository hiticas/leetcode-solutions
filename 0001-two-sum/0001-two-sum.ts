function twoSum(nums: number[], target: number): number[] {
    const numToIndex: { [key: number]: number } = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numToIndex.hasOwnProperty(complement)) {
            return [numToIndex[complement], i];
        }
        numToIndex[nums[i]] = i;
    }
}