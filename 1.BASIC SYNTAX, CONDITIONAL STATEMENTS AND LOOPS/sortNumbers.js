function sortNumbers(nums) {
    nums.sort((a, b) => b - a);

    nums.forEach(element => {
        console.log(element);
    });
}