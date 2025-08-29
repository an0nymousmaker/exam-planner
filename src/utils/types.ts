export type LevelsOfMastery = 1 | 2 | 3 | 4;

export interface TopicLevelStatus {
  level: LevelsOfMastery;
  completed: boolean;
}

export interface Exam {
  id: number;
  title: string;
  date: Date;
  time: number;
  overallReadiness: number;
  topics?: Topic[];
}

export interface Topic {
  id: number;
  title: string;
  completed: boolean;
  progress: TopicLevelStatus[];
}
