import { convertDate } from '../lib/utils';
import DateAction from './DateAction';

export default function DateActionContainer({
  startDateStr,
}: {
  startDateStr: string | undefined;
}) {
  const today = convertDate(new Date(), 'en-US');

  const dateToStart = !startDateStr
    ? today
    : convertDate(new Date(startDateStr), 'en-US');

  return <DateAction dateToStart={dateToStart} today={today} />;
}
