import { Priority } from './priority';

export interface Issue {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  resolved: boolean;
}
