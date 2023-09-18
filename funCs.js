const inp = document.querySelector("#screen");

const cancelAll = () => {
    console.log(inp);
    inp.innerHTML = ``;
};

const cancelOne = () => {
    inp.innerHTML = inp.innerHTML.slice(0, -1);
};

const multiplication = (...inputs) => {
    // Check if the inputs contain arrays
    const isArrays = inputs.some(Array.isArray);

    if (isArrays) {
        // Flatten the arrays and then multiply element-wise
        const flattenedArray = inputs.reduce((acc, current) => acc.concat(current), []);
        return flattenedArray.reduce((output, value) => output * value, 1);
    } else {
        // Perform regular multiplication for non-array inputs
        return inputs.reduce((output, variable) => output * variable, 1);
    }
};

export { cancelAll, cancelOne, multiplication };