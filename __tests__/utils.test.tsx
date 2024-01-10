import { expect } from 'vitest';
import {
  convertDate,
  toYearMonthDay,
  add30Days,
  sortByDate,
} from '@/app/lib/utils';

describe('convertDate', () => {
  it('converts date', () => {
    const mockstartDate = '2020-01-01';

    expect(convertDate(mockstartDate, 'en-US')).toBe('January 1, 2020');
  });
});

describe('toYearMonthDay', () => {
  it('throws error on invalid date', () => {
    const invalidDate = 'abcde';

    expect(() => toYearMonthDay(invalidDate)).toThrowError('Invalid Date!');
  });

  it('converts date string to YYYY-MM-DD format', () => {
    const mockstartDate = 'January 1, 2020';

    expect(toYearMonthDay(mockstartDate)).toBe('2020-01-01');
  });
});

describe('add30Days', () => {
  it('throws error on invalid date', () => {
    const invalidDate = 'abcde';

    expect(() => add30Days(invalidDate)).toThrowError('Invalid Date!');
  });

  it('returns 30 more days within the same month', () => {
    const mockstartDate = '2020-01-01';

    expect(add30Days(mockstartDate)).toStrictEqual([
      '2020-01-01',
      '2020-01-02',
      '2020-01-03',
      '2020-01-04',
      '2020-01-05',
      '2020-01-06',
      '2020-01-07',
      '2020-01-08',
      '2020-01-09',
      '2020-01-10',
      '2020-01-11',
      '2020-01-12',
      '2020-01-13',
      '2020-01-14',
      '2020-01-15',
      '2020-01-16',
      '2020-01-17',
      '2020-01-18',
      '2020-01-19',
      '2020-01-20',
      '2020-01-21',
      '2020-01-22',
      '2020-01-23',
      '2020-01-24',
      '2020-01-25',
      '2020-01-26',
      '2020-01-27',
      '2020-01-28',
      '2020-01-29',
      '2020-01-30',
    ]);
  });

  it('returns 30 more days when the year changes', () => {
    const mockstartDate = '2019-12-31';

    expect(add30Days(mockstartDate)).toStrictEqual([
      '2019-12-31',
      '2020-01-01',
      '2020-01-02',
      '2020-01-03',
      '2020-01-04',
      '2020-01-05',
      '2020-01-06',
      '2020-01-07',
      '2020-01-08',
      '2020-01-09',
      '2020-01-10',
      '2020-01-11',
      '2020-01-12',
      '2020-01-13',
      '2020-01-14',
      '2020-01-15',
      '2020-01-16',
      '2020-01-17',
      '2020-01-18',
      '2020-01-19',
      '2020-01-20',
      '2020-01-21',
      '2020-01-22',
      '2020-01-23',
      '2020-01-24',
      '2020-01-25',
      '2020-01-26',
      '2020-01-27',
      '2020-01-28',
      '2020-01-29',
    ]);
  });
});

describe('sortByDate', () => {
  it('sorts dates correctly', () => {
    const mockDates = [
      { date: '2020-02-01' },
      { date: '2020-01-12' },
      { date: '2020-02-02' },
    ];

    expect(mockDates.sort(sortByDate)).toStrictEqual([
      { date: '2020-01-12' },
      { date: '2020-02-01' },
      { date: '2020-02-02' },
    ]);
  });
});
