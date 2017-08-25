export const getDisplayValue = originalValue => {
    if (originalValue) {
        return originalValue.toString();
    } else {
        return '';
    }
};

export const getDisplayTableRowValue = (row, name) => {
    const originalValue = row[name];
    if (originalValue) {
        return originalValue.toString();
    } else {
        return '';
    }
};

export const getCellRowColmId = (idx, property) => {
    return `C${idx}-${property}`;
};
