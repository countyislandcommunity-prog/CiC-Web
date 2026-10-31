// Site-wide settings. Fill in bracketed placeholders before launch.
export const SITE = {
  name: 'County Island Community',
  short: 'CIC',
  domain: 'countyislandcommunity.com',
  email: 'countyislandcommunity@gmail.com',
  phone: '[CONTACT PHONE]',
  mail: '[MAILING ADDRESS]',
  social: [] as { label: string; href: string }[], // [SOCIAL LINKS]
  // Google Apps Script web app URL that writes form submissions to the CIC Google Sheet
  // (docs/forms-setup.md). Set PUBLIC_FORM_ENDPOINT in Vercel, or paste the URL in place of ''.
  // Empty = preview mode: forms show the thank-you message but send nothing.
  formHandler: (import.meta.env.PUBLIC_FORM_ENDPOINT as string | undefined) || '',
  privacyPolicy: '[PRIVACY POLICY LINK]',
  dues: '[DUES OR FEE INFO]',
  newsletterFrequency: '[NEWSLETTER FREQUENCY]',
  meeting: {
    date: '[NEXT MEETING DATE]',
    time: '[MEETING TIME]',
    location: '[MEETING LOCATION]',
  },
};

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'The Islands', href: '/islands/' },
  { label: 'Issues', href: '/issues/' },
  { label: 'News', href: '/news/' },
  { label: 'FAQ', href: '/faq/' },
  { label: 'Contact', href: '/contact/' },
];

export const ISSUES = [
  { slug: 'health-safety', title: 'Health & Safety', blurb: 'Reliable fire and EMS coverage for every home.' },
  { slug: 'tax-reform', title: 'Tax Reform', blurb: 'Clear answers about city sales tax charged to island residents.' },
  { slug: 'water', title: 'Water', blurb: 'Dependable, fair water service.' },
  { slug: 'staying-a-county-island', title: 'Staying a County Island', blurb: 'Our choice, our voice.' },
];

export const TAGS = ['Health & Safety', 'Tax Reform', 'Water', 'Annexation', 'Events', 'Community'];

export const ISLANDS = Array.from({ length: 13 }, (_, i) => `Island ${i + 1}`);

export const tagSlug = (t: string) => t.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
