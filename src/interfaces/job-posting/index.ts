import { ApplicationInterface } from 'interfaces/application';
import { ReviewInterface } from 'interfaces/review';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface JobPostingInterface {
  id?: string;
  title: string;
  description: string;
  company_id: string;
  location: string;
  salary: number;
  created_at?: any;
  updated_at?: any;
  application?: ApplicationInterface[];
  review?: ReviewInterface[];
  company?: CompanyInterface;
  _count?: {
    application?: number;
    review?: number;
  };
}

export interface JobPostingGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  company_id?: string;
  location?: string;
}
