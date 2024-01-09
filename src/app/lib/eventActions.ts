'use server';

import { convertDate } from './utils';

export async function shiftDateUp(d: string) {
  let d_ = new Date(d);
  if (d_.toString() === 'Invalid Date') {
    throw new Error('Invalid Date!');
  }

  let up = d_.setDate(d_.getDate() + 1);
  return convertDate(new Date(up).toDateString(), 'en-US');
}

export async function shiftDateDown(d: string) {
  let d_ = new Date(d);
  if (d_.toString() === 'Invalid Date') {
    throw new Error('Invalid Date!');
  }
  let down = d_.setDate(d_.getDate() - 1);
  return convertDate(new Date(down).toDateString(), 'en-US');
}
