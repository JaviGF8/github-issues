import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

const DATE_FORMAT = 'dd-MM-yyyy';
const HOUR_FORMAT = 'HH:mm:ss';
const FULL_FORMAT = `${DATE_FORMAT} ${HOUR_FORMAT}`;

export const dateToString = (date: Date): string => format(date, FULL_FORMAT);

export const stringToDate = (date: string): Date => parseISO(date);
