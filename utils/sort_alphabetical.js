const sortListAlphabetically = (list, picker) => list.sort((x, y) => {
    let a = picker(x).toUpperCase(),
        b = picker(y).toUpperCase();
    return a === b ? 0 : a > b ? 1 : -1;
});

module.exports = sortListAlphabetically;
