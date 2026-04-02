import { defineField, defineType } from 'sanity'

export const about = defineType({
  name: 'about',
  title: 'About / Mary\'s Bio',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      initialValue: 'Mary McCrum',
    }),
    defineField({
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
      initialValue: 'Managing Director',
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
      description: 'Professional headshot or work photo of Mary.',
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Mary\'s full biography — shown on the About page. Write in paragraphs.',
    }),
    defineField({
      name: 'shortBio',
      title: 'Short Bio (1–2 sentences)',
      type: 'text',
      rows: 3,
      description: 'Used in summary sections and cards.',
    }),
    defineField({
      name: 'companyHistory',
      title: 'Company History',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'The story of how Corrosion Engineering – Cortec Ireland Ltd was established.',
    }),
    defineField({
      name: 'environmentalCommitment',
      title: 'Environmental Commitment (optional)',
      type: 'text',
      rows: 4,
    }),
  ],
  preview: {
    select: { title: 'name' },
    prepare({ title }) {
      return { title: title || 'About / Mary\'s Bio' }
    },
  },
})
