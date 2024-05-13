import { format } from 'date-fns';

const ConvertTime = ({ time, newFormat }) => format(time, newFormat);

export default ConvertTime;