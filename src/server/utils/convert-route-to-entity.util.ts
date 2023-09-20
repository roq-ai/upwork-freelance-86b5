const mapping: Record<string, string> = {
  applications: 'application',
  companies: 'company',
  'job-postings': 'job_posting',
  reviews: 'review',
  skills: 'skill',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
