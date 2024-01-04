import Link from 'next/link';
import AddForm from '../components/AddForm';
import GoBackLink from '../components/GoBackLink';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <AddForm />
      <GoBackLink />
    </div>
  );
}
