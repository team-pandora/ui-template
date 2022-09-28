import { DAY } from "../constants/time";

export const ISOStringToDateString = (ISOString: string, locales: string) => {
    return new Date(ISOString).toLocaleString(locales, {
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        hour12: false,
    });
};

export const checkIfRecent = (date: Date, days = 7) => {
    const diff = Date.now() - date.getTime();
    return diff / DAY < days;
};
