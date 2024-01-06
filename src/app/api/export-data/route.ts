import JSZip from 'jszip';
import { createWriteStream, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // TODO: Delete the file after sending the response

  const requestHeaders = new Headers(request.headers);
  await generateFile();

  const filePath = resolve('out.zip');
  const result = readFileSync(filePath);

  return new NextResponse(result, {
    headers: {
      ...requestHeaders,
      'Content-Type': 'application/zip',
      'content-disposition': `attachment; filename="out.zip"`,
    },
  });
}

async function generateFile() {
  const zip = new JSZip();
  const test = zip.folder('test');
  const challenges = await fetch(`${process.env.URL}/api/challenges/`);
  const challengesJSON = await challenges.json();
  const datesEntries = await fetch(`${process.env.URL}/api/dates/`);
  const datesEntriesJSON = await datesEntries.json();

  test?.file('challenges.json', JSON.stringify(challengesJSON));
  test?.file('dates-entries.json', JSON.stringify(datesEntriesJSON));

  test
    ?.generateAsync({ type: 'uint8array' })
    .then(async function (content) {
      const result = createWriteStream('out.zip');
      result.write(content);
      return result;
    })
    .then((res) => res.on('close', () => console.log('closed')));
}
