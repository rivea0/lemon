'use server';

import updateRow, { updateIdColor } from '../db/updateData';
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
  challengeTitle: string | null,
  formData: FormData
) {
  'use server';

  const data = {
    status: formData.get('status'),
    activeDate: formData.get('activeDate'),
    challengeId: challengeTitle
      ? await getIdOfChallenge(challengeTitle)
      : formData.get('challengeId'),
  };

  await updateRow(data.status, data.challengeId, data.activeDate);

  revalidatePath('/challenges/[challenge]', 'page');
  revalidatePath('/postponed-challenges');
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

export async function changeIdColor(formData: FormData) {
  'use server';

  const data = {
    id_color: formData.get('id_color'),
    id: formData.get('id'),
  };

  await updateIdColor(data.id, data.id_color);
  revalidatePath('/');
}
