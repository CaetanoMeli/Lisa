const units = require('../data/units');

const unitMap = new Map(units.map(unit => [unit.id, unit]));

const parseFindUnitArgs = (args) => {
    const lastArg = Number.parseInt(args[args.length - 1]);
    const asksPage = Number.isInteger(lastArg);
    let arguments = args;
    let pageNumber = 0;

    if (asksPage) {
        pageNumber = lastArg - 1; // convert human page to index page
        arguments = args.slice(0, -1);
    }

    const unitName = arguments.join('_').replace(/[(]/, '').replace(/[)]/, '');

    return {
        pageNumber,
        unitName
    }
}

const findUnitByName = (unitName) => {
    return unitMap.get(unitName) || units.find(unit => unit.id.toLowerCase().includes(unitName.toLowerCase()));
};

module.exports = {
    findUnitByName,
    parseFindUnitArgs
};
