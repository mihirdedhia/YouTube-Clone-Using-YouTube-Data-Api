export const value_converter = (value) => {
    // check value greater than 1 Million
    if (value >= 1000000) {
        return Math.floor(value / 1000000) + "M";
    }
    // check value greater than 1 Thousand
    else if (value >= 1000) {
        return Math.floor(value / 1000) + "K";
    }
    else {
        return value;
    }
}