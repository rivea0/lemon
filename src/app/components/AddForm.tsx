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
    <div className="flex flex-col items-center justify-center mt-8">
      {/* <form onSubmit={handleSubmit}> */}
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
      <Link href="/" className="mt-4 flex gap-1 items-center group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 256 256"
          className="group-hover:-translate-x-1"
        >
          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H107.31l18.35,18.34a8,8,0,0,1-11.32,11.32l-32-32a8,8,0,0,1,0-11.32l32-32a8,8,0,0,1,11.32,11.32L107.31,120H168A8,8,0,0,1,176,128Z"></path>
        </svg>
        <span className="">Go back</span>
      </Link>
    </div>
  );
}
