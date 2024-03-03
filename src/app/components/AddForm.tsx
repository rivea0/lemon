'use client';

// import { FormEvent } from 'react'
// import { useRouter } from 'next/navigation'
import { useFormState } from 'react-dom';
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

  const initialState = {
    message: '',
  };

  const [state, formAction] = useFormState(createChallenge, initialState);
  return (
    <>
      {state.message && (
        <div
          role="alert"
          className="alert alert-error w-max bg-red-400 text-white mb-4 rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{state.message}</span>
        </div>
      )}
      <form
        action={formAction}
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
          <ColorDropdown title="Pick identifying color" />
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
    </>
  );
}
