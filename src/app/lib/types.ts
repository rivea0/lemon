export type Colors =
  | 'red'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'lime'
  | 'green'
  | 'emerald'
  | 'teal'
  | 'cyan'
  | 'sky'
  | 'blue'
  | 'indigo'
  | 'violet'
  | 'purple'
  | 'fuchsia'
  | 'pink'
  | 'rose';

export type Box = {
  title: string;
  id_color: Colors;
};

export type Status = 'completed' | 'not-completed' | 'postponed';

export type DatesAndStatusObj = {
  date: string;
  challengeId: number;
  status: Status;
};

export type ChallengeObj = {
  id: number;
  title: string;
  id_color: Colors;
  description: string | null;
  start_date: string;
  deleted: 0 | 1;
};
