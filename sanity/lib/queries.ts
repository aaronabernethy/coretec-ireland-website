import { groq } from 'next-sanity'

export const caseStudiesQuery = groq`
  *[_type == "caseStudy"] | order(order asc, _createdAt asc) {
    _id,
    title,
    customer,
    location,
    date,
    industry,
    products,
    problem,
    solution,
    result,
    highlight,
    "pdfUrl": pdf.asset->url,
  }
`

export const aboutQuery = groq`
  *[_type == "about"][0] {
    name,
    jobTitle,
    shortBio,
    "photoUrl": photo.asset->url,
    bio,
    companyHistory,
    environmentalCommitment,
  }
`
