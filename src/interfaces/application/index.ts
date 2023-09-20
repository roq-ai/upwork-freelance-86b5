import { UserInterface } from 'interfaces/user';
import { JobPostingInterface } from 'interfaces/job-posting';
import { GetQueryInterface } from 'interfaces';

export interface ApplicationInterface {
  id?: string;
  status: string;
  user_id: string;
  job_posting_id: string;
  cover_letter: string;
  resume: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  job_posting?: JobPostingInterface;
  _count?: {};
}

export interface ApplicationGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  user_id?: string;
  job_posting_id?: string;
  cover_letter?: string;
  resume?: string;
}
