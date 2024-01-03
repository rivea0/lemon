'use client';

import { useState } from 'react';
import Datepicker, { DateValueType } from 'react-tailwindcss-datepicker';

export default function DatePick() {
  const [value, setValue] = useState<DateValueType>({
    startDate: new Date(),
    endDate: new Date(),
  });

  function handleValueChange(newValue: DateValueType) {
    setValue(newValue);
  }

  return (
    <>
      <label htmlFor="startDate">Pick start date</label>
      <Datepicker
        configs={{
          shortcuts: {
            // The values for today and yesterday are default, no need to add start and end date
            // @ts-ignore
            today: {
              text: 'Today',
            },
            // @ts-ignore
            yesterday: {
              text: 'Yesterday',
            },
          },
        }}
        showShortcuts
        // @ts-ignore
        primaryColor="yellow"
        value={value}
        asSingle
        useRange={false}
        onChange={handleValueChange}
        inputClassName="bg-base-100 focus:outline-none focus:ring-0 active:ring-0 border-b border-r-0 border-neutral-content rounded-sm p-1 placeholder:text-slate-400 placeholder:italic text-base-content"
        toggleClassName="absolute bg-base-100 text-base-content h-full border-b border-l-0 border-neutral-content rounded-sm p-1 -ml-2"
        inputName="startDate"
      />
    </>
  );
}
