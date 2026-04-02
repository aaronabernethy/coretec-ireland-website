import { defineField, defineType } from 'sanity'

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'customer',
      title: 'Customer / Client',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      placeholder: 'e.g. Belfast, Northern Ireland',
    }),
    defineField({
      name: 'date',
      title: 'Date / Period',
      type: 'string',
      placeholder: 'e.g. January 2009 or 2000 – Present',
    }),
    defineField({
      name: 'industry',
      title: 'Industry',
      type: 'string',
      options: {
        list: [
          'Automotive',
          'Marine / Heavy Industry',
          'Oil & Gas',
          'Aerospace / Precision Manufacturing',
          'Electronics / Utilities',
          'Construction',
          'Pharmaceutical / Medical',
          'Agri-Food',
          'Utilities / Electrical',
          'Other',
        ],
      },
    }),
    defineField({
      name: 'products',
      title: 'Cortec® Products Used',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'e.g. VpCI®-111, VpCI®-126 Blue Film',
    }),
    defineField({
      name: 'problem',
      title: 'Problem',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'solution',
      title: 'Solution',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'result',
      title: 'Result',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pdf',
      title: 'Case History PDF',
      type: 'file',
      options: { accept: '.pdf' },
    }),
    defineField({
      name: 'highlight',
      title: 'Highlight as featured case study?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order (lower = appears first)',
      type: 'number',
      initialValue: 99,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'customer',
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
