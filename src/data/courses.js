export const courses = [
  {
    _id: 'ca-foundation-accounting',
    slug: 'ca-foundation-accounting',
    title: 'CA Foundation: Principles and Practice of Accounting',
    description: 'Master the fundamentals of accounting for the CA Foundation exam with concept videos and exam-oriented problems.',
    price: 1499,
    thumbnail: '',
    lessons: [
      { title: 'Introduction to Accounting', durationMins: 25 },
      { title: 'Journal, Ledger and Trial Balance', durationMins: 40 },
      { title: 'Bank Reconciliation Statement', durationMins: 30 },
      { title: 'Depreciation Accounting', durationMins: 35 },
    ],
  },
  {
    _id: 'ca-foundation-law-bcr',
    slug: 'ca-foundation-law-bcr',
    title: 'CA Foundation: Business Laws & BCR',
    description: 'Understand key business laws and sharpen your Business Correspondence and Reporting skills.',
    price: 1299,
    thumbnail: '',
    lessons: [
      { title: 'Indian Contract Act, 1872', durationMins: 45 },
      { title: 'Sale of Goods Act, 1930', durationMins: 35 },
      { title: 'BCR: Formal Letters', durationMins: 28 },
    ],
  },
  {
    _id: 'ca-foundation-quantitative-aptitude',
    slug: 'ca-foundation-quantitative-aptitude',
    title: 'CA Foundation: Quantitative Aptitude',
    description: 'Maths, Statistics and Logical Reasoning structured for CA Foundation preparation.',
    price: 1199,
    thumbnail: '',
    lessons: [
      { title: 'Ratio and Proportion', durationMins: 30 },
      { title: 'Linear Equations', durationMins: 32 },
      { title: 'Measures of Central Tendency', durationMins: 38 },
    ],
  },
  {
    _id: 'ca-intermediate-accounting',
    slug: 'ca-intermediate-accounting',
    title: 'CA Intermediate: Accounting',
    description: 'In-depth coverage of Accounting standards and problem-solving for CA Inter.',
    price: 1999,
    thumbnail: '',
    lessons: [
      { title: 'Accounting Standards Overview', durationMins: 50 },
      { title: 'AS 10: PPE', durationMins: 42 },
      { title: 'AS 2: Valuation of Inventories', durationMins: 36 },
    ],
  },
  {
    _id: 'ca-final-financial-reporting',
    slug: 'ca-final-financial-reporting',
    title: 'CA Final: Financial Reporting',
    description: 'Comprehensive FR with IND AS coverage and exam-focused questions.',
    price: 2999,
    thumbnail: '',
    lessons: [
      { title: 'IND AS 1: Presentation of Financial Statements', durationMins: 48 },
      { title: 'IND AS 16: Property, Plant and Equipment', durationMins: 44 },
      { title: 'Consolidation Basics', durationMins: 52 },
    ],
  },
  {
    _id: 'ca-final-sfm',
    slug: 'ca-final-sfm',
    title: 'CA Final: Strategic Financial Management',
    description: 'High-yield SFM with theory + numericals and PYQs.',
    price: 2799,
    thumbnail: '',
    lessons: [
      { title: 'Time Value of Money', durationMins: 34 },
      { title: 'Portfolio Theory', durationMins: 41 },
      { title: 'Derivatives Basics', durationMins: 39 },
    ],
  },
];

export function getCourseByIdOrSlug(idOrSlug) {
  return courses.find((c) => c._id === idOrSlug || c.slug === idOrSlug) || null;
}

