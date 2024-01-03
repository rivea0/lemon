'use client';

import { useFormStatus } from 'react-dom';

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <>
      <button
        type="submit"
        className="border bg-base-100 py-2 px-4 rounded-md mt-8 hover:bg-base-300 active:bg-base-300 focus:outline-none focus:ring focus:ring-yellow-400 text-primary"
        aria-disabled={pending}
      >
        Add challenge
      </button>
    </>
  );
}
