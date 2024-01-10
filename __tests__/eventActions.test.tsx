import { expect, test } from 'vitest';
import { shiftDateDown, shiftDateUp } from '@/app/lib/eventActions';

test('shifts date down to past year', async () => {
  const mockstartDate = '2020-01-01';

  expect(shiftDateDown(mockstartDate)).resolves.toBe('December 31, 2019');
});

test('shifts date down within the same year', () => {
  const mockstartDate = '2020-01-02';

  expect(shiftDateDown(mockstartDate)).resolves.toBe('January 1, 2020');
});

test('shifts date up to next year', () => {
  const mockstartDate = '2019-12-31';

  expect(shiftDateUp(mockstartDate)).resolves.toBe('January 1, 2020');
});

test('shifts date up within the same year', () => {
  const mockstartDate = '2020-01-01';

  expect(shiftDateUp(mockstartDate)).resolves.toBe('January 2, 2020');
});

test('shiftDateDown throws error on invalid date input', async () => {
  const mockstartDate = 'abcde';

  await expect(shiftDateDown(mockstartDate)).rejects.toThrow('Invalid Date!');
});

test('shiftDateUp throws error on invalid date input', async () => {
  const mockstartDate = 'abcde';

  await expect(shiftDateUp(mockstartDate)).rejects.toThrow('Invalid Date!');
});
