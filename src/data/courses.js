export const courses =[
  {
    "_id": "1",
    "title": "1040",
    "description": "Covers U.S. Individual Income Tax Return preparation including filing status, dependents, income types (W-2, 1099, interest, dividends, capital gains), adjustments, itemized deductions, credits, AMT, self-employment tax, and full Form 1040 + schedules preparation.",
    "price": 2999,
    "lessons": ["Beginner to advanced courses range 1–20 hours with 10–50 lessons"]
  },
  {
    "_id": "2",
    "title": "1041",
    "description": "Covers Trust & Estate Income Tax Return preparation including trust/estate types, filing requirements, distributable net income (DNI), fiduciary income, deductions, Schedule K-1 preparation, beneficiary distributions, capital gains allocation, and line-by-line Form 1041 review.",
    "price": 1399,
    "lessons":[ "Typical course length 2–12 hours with 5–20 lessons/modules"]
  }
]

export function getCourseByIdOrSlug(id) {
  return courses.find((c) => c._id === id) || null;
}

