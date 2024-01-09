import { convertDate } from '../lib/utils';
import DateAction from './DateAction';

export default function DateActionContainer({
  startDateStr,
}: {
  startDateStr: string | undefined;
}) {

  const today = convertDate(new Date().toDateString(), 'en-US');

  const dateToStart = !startDateStr
    ? today
    : convertDate(startDateStr, 'en-US');

  return <DateAction dateToStart={dateToStart} today={today} />;
}
