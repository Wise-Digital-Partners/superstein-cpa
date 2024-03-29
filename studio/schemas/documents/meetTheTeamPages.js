export default {
  title: 'Meet The Team Pages',
  name: 'meetTheTeamPages',
  type: 'document',
  fields: [
    {
      title: 'SEO Title',
      name: 'seoTitle',
      type: 'string',
    },
    {
      title: 'Meta Description',
      name: 'metaDescription',
      type: 'text',
    },
    {
      title: 'Slug',
      description: 'Exclude leading and trailing backslashes',
      name: 'slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
      },
    },
    {
      title: 'Indexed',
      name: 'isIndexed',
      type: 'boolean',
      initialValue: true,
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'pageBuilder',
      type: 'array',
      title: 'Page Builder',
      of: [
        {
          title: 'Profile Section',
          name: 'profileSection',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'profileSection'}],
        },
        {
          title: 'CTA',
          name: 'cta',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'cta'}],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
    prepare({title = 'No title'}) {
      return {
        title,
      }
    },
  },
}
