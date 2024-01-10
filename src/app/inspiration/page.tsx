import Link from 'next/link';
import InspirationList from '../components/InspirationList';

export default function Inspiration() {
  return (
    <div className="flex flex-col items-center mt-8 px-64 portrait:px-4">
      <h1 className="text-3xl">Inspiration &#10024;</h1>
      <p className="mt-4">
        Deciding what challenges to tackle for 30 days can be a challenge
        itself. They usually tend to be fitness-related, but you can track
        anything, <em>such as going to bed early</em>, <em>water intake</em>,{' '}
        <em>writing</em>,<em>reading</em>, <em>meditation</em>, or anything you
        want to keep track of for 30 days.
      </p>
      <p>
        That said, the main inspiration for creating this application was to
        keep track of personal{' '}
        <Link
          href="https://darebee.com/challenges.html"
          className="text-primary hover:underline"
        >
          DAREBEE challenges
        </Link>
        , so here are some interesting ones:
      </p>
      <InspirationList
        title="The easy trio"
        workouts={[
          {
            name: 'Easy Arms',
            link: 'https://darebee.com/challenges/easy-arms-challenge.html',
          },
          {
            name: 'Easy Core',
            link: 'https://darebee.com/challenges/easy-core-challenge.html',
          },
          {
            name: 'Easy Abs',
            link: 'https://darebee.com/challenges/easy-abs-challenge.html',
          },
        ]}
      />
      <InspirationList
        title="The epic trio"
        workouts={[
          {
            name: 'Epic Arms',
            link: 'https://darebee.com/challenges/epic-arms-challenge.html',
          },
          {
            name: 'Epic Core',
            link: 'https://darebee.com/challenges/epic-core-challenge.html',
          },
          {
            name: 'Epic Abs',
            link: 'https://darebee.com/challenges/epic-abs-challenge.html',
          },
        ]}
      />
      <InspirationList
        title="More activity"
        workouts={[
          {
            name: 'Power Squats',
            link: 'https://darebee.com/challenges/power-squats-challenge.html',
          },
          {
            name: 'Knee Push-ups',
            link: 'https://darebee.com/challenges/knee-pushups-challenge.html',
          },
          {
            name: 'Balance',
            link: 'https://darebee.com/challenges/balance-challenge.html',
          },
          {
            name: 'Walking',
            link: 'https://darebee.com/challenges/walkabout-challenge.html',
          },
          {
            name: 'Core Control',
            link: 'https://darebee.com/challenges/core-control-challenge.html',
          },
        ]}
      />
      <InspirationList
        title="Lighter"
        workouts={[
          {
            name: 'Posture',
            link: 'https://darebee.com/challenges/posture-challenge.html',
          },
          {
            name: 'Re-center',
            link: 'https://darebee.com/challenges/recenter-challenge.html',
          },
          {
            name: '1-minute yoga',
            link: 'https://darebee.com/challenges/1minute-yoga-challenge.html',
          },
        ]}
      />
      <InspirationList
        title="The usual"
        workouts={[
          {
            name: 'Squats',
            link: 'https://darebee.com/challenges/squats-challenge.html',
          },
          {
            name: 'Cardio',
            link: 'https://darebee.com/challenges/cardio-challenge.html',
          },
          {
            name: 'Abs',
            link: 'https://darebee.com/challenges/ab-challenge.html',
          },
        ]}
      />
      <InspirationList
        title="The usual (and slightly more intense) daily"
        workouts={[
          {
            name: 'Daily Squats',
            link: 'https://darebee.com/challenges/daily-squats-challenge.html',
          },
          {
            name: 'Daily Abs',
            link: 'https://darebee.com/challenges/daily-abs-challenge.html',
          },
          {
            name: 'Daily Cardio',
            link: 'https://darebee.com/challenges/daily-cardio-challenge.html',
          },
          {
            name: 'Daily Pushups',
            link: 'https://darebee.com/challenges/daily-pushups-challenge.html',
          },
          {
            name: 'Daily HIIT',
            link: 'https://darebee.com/challenges/daily-hiit-challenge.html',
          },
        ]}
      />
      <div className="mt-4 self-start">
        <h2 className="text-2xl">The fun stuff (RPG fitness!) &#10024;</h2>
        <p className="mt-2">
          One of the things that makes DAREBEE challenges special is their RGP
          fitness programs. They are immersive workout quests that are usually
          created as a 30-day program, and the workouts{' '}
          <em>reflect the activities of the central character</em>.
        </p>
        <p className="mt-2">
          You can check out all the programs (both RPG and non-RPG){' '}
          <Link href="https://darebee.com/programs.html">here</Link>, but here
          are some interesting immersive challenges:
        </p>
        <ul className="mt-2">
          <li>
            <Link
              href="https://darebee.com/programs/age-of-pandora.html"
              className="text-primary hover:underline"
            >
              The Age of Pandora
            </Link>
          </li>
          <li>
            <Link
              href="https://darebee.com/spellbound.html"
              className="text-primary hover:underline"
            >
              Spellbound
            </Link>
          </li>
          <li>
            <Link
              href="https://darebee.com/programs/hero-journey.html"
              className="text-primary hover:underline"
            >
              Hero&apos;s Journey
            </Link>{' '}
            (this one is for 60 days!)
          </li>
          <li>
            <Link
              href="https://darebee.com/programs/carbon-and-dust.html"
              className="text-primary hover:underline"
            >
              Carbon and Dust
            </Link>
          </li>
          <li>
            <Link
              href="https://darebee.com/pathfinder.html"
              className="text-primary hover:underline"
            >
              Pathfinder
            </Link>
          </li>
        </ul>
      </div>
      <div className="mt-4 self-start">
        <h2 className="text-2xl">Even more fitness challenges</h2>
        <p className="mt-2">
          There is also a book of a collection of 100 challenges,{' '}
          <Link
            href="https://darebee.com/100-fitness-challenges.html"
            className="text-primary hover:underline"
          >
            100 Fitness Challenges
          </Link>{' '}
          by DAREBEE you can check out.
        </p>
      </div>
      <div className="mt-4 self-start">
        <h2 className="text-2xl">Other</h2>
        <p className="mt-2">
          If you need more inspiration for challenges other than workout-related
          ones, here are{' '}
          <Link
            href="https://www.eatingwell.com/gallery/7832853/30-days-of-clean-eating-recipes/"
            className="text-primary hover:underline"
          >
            30 Days of Clean-Eating Recipes
          </Link>
          .
        </p>
        <p className="mt-2">
          And here is a{' '}
          <Link
            href="https://www.usa.canon.com/learning/training-articles/training-articles-list/30-day-photo-challenge"
            className="text-primary hover:underline"
          >
            30-Day Photography Challenge
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
