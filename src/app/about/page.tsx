import Link from 'next/link';

export default function About() {
  return (
    <div className="flex flex-col justify-center mt-8 px-64 portrait:px-4">
      <h1 className="text-3xl">About</h1>
      <p className="mt-4">
        Lemon is a simple &quot;habit tracker&quot; for{' '}
        <Link
          href="https://www.verywellmind.com/do-thirty-day-challenges-work-4164524"
          className="text-primary hover:underline"
        >
          30-day challenges
        </Link>
        . You can color-code each challenge, mark its status daily, and watch
        your progress.
      </p>
      <h4 className="text-lg mt-6">Adding a challenge</h4>
      <p className="mt-4">
        You can add a new challenge by going to the <code>/add-challenge</code>{' '}
        route, providing a title and choosing a color for the challenge (it
        defaults to yellow if you don&apos;t pick any). You can also provide a
        description, which is shown on the homepage underneath the challenge
        title, and you can also select a starting date of your own choosing. It
        defaults to today&apos;s date if you don&apos;t specifically provide
        one.
      </p>
      <h4 className="text-lg mt-6">Homepage</h4>
      <p className="mt-4">
        On the homepage, you can see all your challenges and &quot;tracker
        grids&quot; for each challenge, which makes it easier to see your
        progress visually. You can also see challenges yet to be completed for
        that day, so it&apos;s easier to see them at a glance.
      </p>
      <h4 className="text-lg mt-6">Challenge page</h4>
      <p className="mt-4">
        Each challenge has its own specific route. For example, if the title of
        the challenge is &quot;push-ups,&quot; then the <code>/push-ups</code>{' '}
        route has everything specific to that challenge. (You can go to a
        challenge&apos;s page by clicking on it from the carousel on the
        homepage.) You can choose a date to change its status: not-completed,
        completed, or postponed. The page also has progress indicators: a
        tracker grid that is colored for each day with the identity color of the
        challenge if it&apos;s completed, a progress bar, and a radial progress
        showing the percentage for the completed days. There is also a table
        showing the status for each day.
      </p>
      <h4 className="text-lg mt-6">Removing a challenge</h4>
      <p className="mt-4">
        Each challenge page has a &quot;remove this challenge&quot; button at
        the bottom, so you can easily mark it as removed. To delete a challenge
        permanently, you can go to the <code>/removed-challenges</code> route by
        selecting it from the menu and clicking the &quot;delete this challenge
        permanently&quot; button.
      </p>
      <h4 className="text-lg mt-6">Completed challenges</h4>
      <p className="mt-4">
        You can select the completed challenges from the menu to see all your
        completed challenges. Each one also has a &quot;delete this challenge
        permanently&quot; button if you wish to completely delete it from the
        database.
      </p>
      <h4 className="text-lg mt-6">Exporting your data</h4>
      <p className="mt-4">
        You can choose the &quot;export your data&quot; option from the menu,
        which downloads an <code>out.zip</code> file that includes two JSON
        files: <code>challenges.json</code>, and <code>dates-entries.json</code>
        .
      </p>
      <p className="">
        <code>challenges.json</code> includes the fields:
      </p>
      <ul className="mt-2 ml-2">
        <li>
          <code>id</code>
        </li>
        <li>
          <code>title</code>
        </li>
        <li>
          <code>id_color</code>
        </li>
        <li>
          <code>description</code>
        </li>
        <li>
          <code>start_date</code>
        </li>
        <li>
          <code>deleted</code> (<code>0</code> if marked as deleted,{' '}
          <code>1</code> otherwise)
        </li>
      </ul>
      <p className="mt-4">
        <code>dates-entries.json</code> includes the fields:
      </p>
      <ul className="mt-2 ml-2">
        <li>
          <code>date</code>
        </li>
        <li>
          <code>challengeId</code>
        </li>
        <li>
          <code>status</code>
        </li>
      </ul>
      <h4 className="text-lg mt-6">Inspiration</h4>
      <p className="mt-4">
        This project was started initially to track{' '}
        <Link
          href="https://darebee.com/challenges"
          className="text-primary hover:underline"
        >
          DAREBEE Workout Challenges
        </Link>
        . You can go to the <code>/inspiration</code> route by selecting the
        &quot;inspiration&quot; option from the menu to see some examples.
      </p>
      <p className="mt-8 text-center">
        This project is{' '}
        <Link
          href="https://github.com/rivea0/lemon"
          className="text-primary hover:underline"
        >
          open source
        </Link>{' '}
        and licensed under{' '}
        <Link
          href="https://choosealicense.com/licenses/gpl-3.0"
          className="text-primary hover:underline"
        >
          GPLv3
        </Link>
        .
      </p>
    </div>
  );
}
