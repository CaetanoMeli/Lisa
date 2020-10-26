const splitIntoChunks = (list, chunkSize) =>
    new Array(Math.ceil(list.length / chunkSize))
    .fill(0)
    .map(_ => list.slice(0,chunkSize));

module.exports = splitIntoChunks;
