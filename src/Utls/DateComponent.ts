import { format } from 'date-fns';

const Format_ddMMyyyy = (date: Date) => {
    return FormatBy(date, 'dd/MM/yyyy');
};

const FormatBy = (date: Date, formatStr: string) => {
    return format(date, formatStr);
};

export { Format_ddMMyyyy, FormatBy as Format };
