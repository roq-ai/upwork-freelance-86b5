interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Freelancer'],
  customerRoles: ['Guest'],
  tenantRoles: ['Freelancer', 'Client', 'Agency Owner', 'Agency Member', 'Guest'],
  tenantName: 'Company',
  applicationName: 'Upwork freelancer site',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read job postings', 'Read company information', 'Read user profiles', 'Read reviews'],
  ownerAbilities: [
    'Manage your user profile',
    'Apply to job postings',
    'Manage your skills',
    'Write and receive reviews',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/ea7c1226-95fa-4719-93cd-9da7f6354ceb',
};
