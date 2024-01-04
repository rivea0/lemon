// 'use client'

// import { FormEvent } from 'react'
// import { useRouter } from 'next/navigation'

import Link from 'next/link';
import { createChallenge } from '../lib/actions';
import ColorDropdown from './ColorDropdown';
import SubmitButton from './SubmitButton';
import DatePick from './DatePick';

export default function AddForm() {
  // const router = useRouter()

  // async function handleSubmit(e: FormEvent<HTMLFormElement>) {
  //   e.preventDefault()

  //   const formData = new FormData(e.currentTarget)
  //   const response = await fetch('/api/submit', {
  //     method: 'POST',
  //     body: formData
  //   })

  //   router.push('/')
  // }

  // async function createChallenge(formData: FormData) {
  //   'use server';

  //   const data = {
  //     title: formData.get('title'),
  //     id_color: formData.get('id_color'),
  //     description: formData.get('description'),
  //     startDate: formData.get('startDate'),
  //   };

  //   await insertInto(data);

  //   revalidatePath('/');
  //   redirect('/');
  // }

  return (
      <form
        action={createChallenge}
        className="flex flex-col justify-center items-center gap-24"
      >
        <fieldset
          className="border border-solid border-gray-300 p-8"
          tabIndex={0}
        >
          <legend className="px-2">Add new challenge</legend>
          <div className="flex flex-col mb-6">
            <label htmlFor="title">Title*</label>
            <input
              type="text"
              name="title"
              id="title"
              className="border-b p-2 rounded-sm focus:outline-none placeholder:italic placeholder:text-slate-400 bg-base-100 focus:border-yellow-400"
              placeholder="Enter title"
              required
            />
          </div>
          <ColorDropdown />
          <div className="flex flex-col mb-6" tabIndex={0}>
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              id="description"
              className="border-b p-2 rounded-sm focus:outline-none placeholder:italic placeholder:text-slate-400 bg-base-100 focus:border-yellow-400"
              placeholder="Enter description"
            />
          </div>
          <div>
            <DatePick />
          </div>
          <div className="text-center">
            <SubmitButton />
          </div>
        </fieldset>
      </form>
  );
}
