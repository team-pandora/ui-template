export type Order = "asc" | "desc";

export function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (typeof a[orderBy] === "string" && typeof b[orderBy] === "string") {
        return String(b[orderBy]).localeCompare(String(a[orderBy]));
    }
    if (typeof a[orderBy] === "number" && typeof b[orderBy] === "number") {
        return Number(b[orderBy]) - Number(a[orderBy]);
    }
    return b[orderBy] === undefined ? 1 : a[orderBy] === undefined ? -1 : 0;
}

export function getComparator<T>(order: Order, orderBy: keyof T): (a: T, b: T) => number {
    return order === "asc"
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

export function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
    return [...array].sort((a, b) => comparator(a, b) || array.indexOf(a) - array.indexOf(b));
}
