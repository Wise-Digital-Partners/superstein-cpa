export default {
  title: 'Featured Blogs Section',
  name: 'featuredBlogsSection',
  type: 'document',
  fields: [
    {
      title: 'Identifier',
      name: 'identifier',
      type: 'string',
      initialValue: 'Featured Blogs Section',
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      initialValue: 'Featured Blogs Section',
    },
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'identifier',
    },
    prepare({title = 'No title'}) {
      return {
        title,
      }
    },
  },
}
