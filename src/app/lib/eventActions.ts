'use server';

import { convertDate } from './utils';

export async function shiftDateUp(d: string) {
  let d_ = new Date(d);
  let up = d_.setDate(d_.getDate() + 1);
  return convertDate(new Date(up), 'en-US');
}

export async function shiftDateDown(d: string) {
  let d_ = new Date(d);
  let down = d_.setDate(d_.getDate() - 1);
  return convertDate(new Date(down), 'en-US');
}
