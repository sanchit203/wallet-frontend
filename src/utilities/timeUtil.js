import { format } from 'date-fns';

export const convertDateTimeToEnglishDate = (dateTime) => {
    const parsedDate = new Date(dateTime);
    const formattedDate = format(parsedDate, 'dd MMMM yyyy');
    return formattedDate;
}