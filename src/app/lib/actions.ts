'use server';

import updateRow from '../db/updateData';
import insertInto from '../db/addData';
import { removeFrom, deleteFrom } from '../db/deleteData';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { getIdOfChallenge } from './readUtils';

export async function createChallenge(prevState: any, formData: FormData) {
  'use server';

  const data = {
    title: formData.get('title'),
    id_color: formData.get('id_color'),
    description: formData.get('description'),
    startDate: formData.get('startDate'),
  };

  try {
    await insertInto(data);
  } catch (error) {
    return { message: `Failed to create challenge ${data.title}` };
  }
  revalidatePath('/');
  redirect('/');
}

export async function setChallengeStatus(
  challengeTitle: string,
  formData: FormData
) {
  'use server';

  const data = {
    status: formData.get('status'),
    activeDate: formData.get('activeDate'),
  };

  const challengeId = await getIdOfChallenge(challengeTitle);

  await updateRow(data.status, challengeId, data.activeDate);

  revalidatePath('/challenges/[challenge]', 'page');
}

export async function removeChallenge(formData: FormData) {
  'use server';

  const data = {
    challengeId: formData.get('challengeId'),
  };

  await removeFrom(data.challengeId);

  revalidatePath('/');
  redirect('/');
}

export async function deleteChallenge(formData: FormData) {
  'use server';

  const data = {
    challengeId: formData.get('challengeId'),
  };

  await deleteFrom(data.challengeId);

  revalidatePath('/removed-challenges/');
}
