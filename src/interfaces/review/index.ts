import { UserInterface } from 'interfaces/user';
import { JobPostingInterface } from 'interfaces/job-posting';
import { GetQueryInterface } from 'interfaces';

export interface ReviewInterface {
  id?: string;
  rating: number;
  comment: string;
  reviewer_id: string;
  reviewee_id: string;
  job_posting_id: string;
  created_at?: any;
  updated_at?: any;

  user_review_reviewer_idTouser?: UserInterface;
  user_review_reviewee_idTouser?: UserInterface;
  job_posting?: JobPostingInterface;
  _count?: {};
}

export interface ReviewGetQueryInterface extends GetQueryInterface {
  id?: string;
  comment?: string;
  reviewer_id?: string;
  reviewee_id?: string;
  job_posting_id?: string;
}
