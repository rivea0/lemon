import { Colors } from '../lib/types';

export default function ProgressBar({
  value,
  color,
}: {
  value: number;
  color: Colors;
}) {
  const progressColors = {
    red: '[&::-webkit-progress-value]:bg-gradient-to-b [&::-webkit-progress-value]:from-red-300 [&::-webkit-progress-value]:to-red-400 [&::-moz-progress-bar]:bg-gradient-to-b [&::-moz-progress-bar]:from-red-300 [&::-moz-progress-bar]:to-red-400',
    orange:
      '[&::-webkit-progress-value]:bg-gradient-to-b [&::-webkit-progress-value]:from-orange-300 [&::-webkit-progress-value]:to-orange-400 [&::-moz-progress-bar]:bg-gradient-to-b [&::-moz-progress-bar]:from-orange-300 [&::-moz-progress-bar]:to-orange-400',
    amber:
      '[&::-webkit-progress-value]:bg-gradient-to-b [&::-webkit-progress-value]:from-amber-300 [&::-webkit-progress-value]:to-amber-400 [&::-moz-progress-bar]:bg-gradient-to-b [&::-moz-progress-bar]:from-amber-300 [&::-moz-progress-bar]:to-amber-400',
    yellow:
      '[&::-webkit-progress-value]:bg-gradient-to-b [&::-webkit-progress-value]:from-yellow-300 [&::-webkit-progress-value]:to-yellow-400 [&::-moz-progress-bar]:bg-gradient-to-b [&::-moz-progress-bar]:from-yellow-300 [&::-moz-progress-bar]:to-yellow-400',
    lime: '[&::-webkit-progress-value]:bg-gradient-to-b [&::-webkit-progress-value]:from-lime-300 [&::-webkit-progress-value]:to-lime-400 [&::-moz-progress-bar]:bg-gradient-to-b [&::-moz-progress-bar]:from-lime-300 [&::-moz-progress-bar]:to-lime-400',
    green:
      '[&::-webkit-progress-value]:bg-gradient-to-b [&::-webkit-progress-value]:from-green-300 [&::-webkit-progress-value]:to-green-400 [&::-moz-progress-bar]:bg-gradient-to-b [&::-moz-progress-bar]:from-green-300 [&::-moz-progress-bar]:to-green-400',
    emerald:
      '[&::-webkit-progress-value]:bg-gradient-to-b [&::-webkit-progress-value]:from-emerald-300 [&::-webkit-progress-value]:to-emerald-400 [&::-moz-progress-bar]:bg-gradient-to-b [&::-moz-progress-bar]:from-emerald-300 [&::-moz-progress-bar]:to-emerald-400',
    teal: '[&::-webkit-progress-value]:bg-gradient-to-b [&::-webkit-progress-value]:from-teal-300 [&::-webkit-progress-value]:to-teal-400 [&::-moz-progress-bar]:bg-gradient-to-b [&::-moz-progress-bar]:from-teal-300 [&::-moz-progress-bar]:to-teal-400',
    cyan: '[&::-webkit-progress-value]:bg-gradient-to-b [&::-webkit-progress-value]:from-cyan-300 [&::-webkit-progress-value]:to-cyan-400 [&::-moz-progress-bar]:bg-gradient-to-b [&::-moz-progress-bar]:from-cyan-300 [&::-moz-progress-bar]:to-cyan-400',
    sky: '[&::-webkit-progress-value]:bg-gradient-to-b [&::-webkit-progress-value]:from-sky-300 [&::-webkit-progress-value]:to-sky-400 [&::-moz-progress-bar]:bg-gradient-to-b [&::-moz-progress-bar]:from-sky-300 [&::-moz-progress-bar]:to-sky-400',
    blue: '[&::-webkit-progress-value]:bg-gradient-to-b [&::-webkit-progress-value]:from-blue-300 [&::-webkit-progress-value]:to-blue-400 [&::-moz-progress-bar]:bg-gradient-to-b [&::-moz-progress-bar]:from-blue-300 [&::-moz-progress-bar]:to-blue-400',
    indigo:
      '[&::-webkit-progress-value]:bg-gradient-to-b [&::-webkit-progress-value]:from-indigo-300 [&::-webkit-progress-value]:to-indigo-400 [&::-moz-progress-bar]:bg-gradient-to-b [&::-moz-progress-bar]:from-indigo-300 [&::-moz-progress-bar]:to-indigo-400',
    violet:
      '[&::-webkit-progress-value]:bg-gradient-to-b [&::-webkit-progress-value]:from-violet-300 [&::-webkit-progress-value]:to-violet-400 [&::-moz-progress-bar]:bg-gradient-to-b [&::-moz-progress-bar]:from-violet-300 [&::-moz-progress-bar]:to-violet-400',
    purple:
      '[&::-webkit-progress-value]:bg-gradient-to-b [&::-webkit-progress-value]:from-purple-300 [&::-webkit-progress-value]:to-purple-400 [&::-moz-progress-bar]:bg-gradient-to-b [&::-moz-progress-bar]:from-purple-300 [&::-moz-progress-bar]:to-purple-400',
    fuchsia:
      '[&::-webkit-progress-value]:bg-gradient-to-b [&::-webkit-progress-value]:from-fuchsia-300 [&::-webkit-progress-value]:to-fuchsia-400 [&::-moz-progress-bar]:bg-gradient-to-b [&::-moz-progress-bar]:from-fuchsia-300 [&::-moz-progress-bar]:to-fuchsia-400',
    pink: '[&::-webkit-progress-value]:bg-gradient-to-b [&::-webkit-progress-value]:from-pink-300 [&::-webkit-progress-value]:to-pink-400 [&::-moz-progress-bar]:bg-gradient-to-b [&::-moz-progress-bar]:from-pink-300 [&::-moz-progress-bar]:to-pink-400',
    rose: '[&::-webkit-progress-value]:bg-gradient-to-b [&::-webkit-progress-value]:from-rose-300 [&::-webkit-progress-value]:to-rose-400 [&::-moz-progress-bar]:bg-gradient-to-b [&::-moz-progress-bar]:from-rose-300 [&::-moz-progress-bar]:to-rose-400',
  };

  return (
    <progress
      className={`progress ${progressColors[color]} w-fit`}
      value={value.toString()}
      max="30"
    ></progress>
  );
}
