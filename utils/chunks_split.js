const splitIntoChunks = (list, chunkSize) => {
    // This prevents infinite loops
    if (chunkSize < 1) throw new Error('Size must be positive');

    const result = [];
    for (let i = 0; i < list.length; i += chunkSize) {
        result.push(list.slice(i, i + chunkSize))
    }
    return result
};

module.exports = splitIntoChunks;
