export interface QuizCardCreateProps {
  title: string;
  user: IUser;
  questions: number;
  image: string;
}

export interface ICourse {
  id: string;
  title: string;
  user: IUser;
  score: string;
  image: string;
}
