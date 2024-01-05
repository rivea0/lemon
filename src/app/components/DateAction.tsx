'use client';

import { useState } from 'react';
import { shiftDateUp, shiftDateDown } from '../lib/eventActions';

export default function DateAction({
  dateToStart,
  today,
}: {
  dateToStart: string;
  today: string;
}) {
  const [dateStr, setDateStr] = useState(dateToStart);

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-8">
        <div className="flex">
          <button
            type="button"
            onClick={async () => {
              const result = await shiftDateDown(dateStr);
              setDateStr(result);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 256 256"
              className="hover:scale-125"
            >
              <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
            </svg>
          </button>
          <div className="w-96 portrait:w-48">
            <h1 className="font-extralight text-center text-4xl">{dateStr}</h1>
          </div>
          <button
            type="button"
            onClick={async () => {
              const result = await shiftDateUp(dateStr);
              setDateStr(result);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 256 256"
              className="hover:scale-125"
            >
              <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
            </svg>
          </button>
          <input
            type="hidden"
            name="activeDate"
            value={new Date(dateStr).toLocaleDateString('en-CA').split('T')[0]}
          />
        </div>
        <p
          className={`mt-4 font-extralight text-center ${
            dateStr === today ? 'visible' : 'invisible'
          }`}
        >
          * today
        </p>
      </div>
    </>
  );
}
