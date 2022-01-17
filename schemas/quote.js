export default {
    name: 'quote',
    title: 'Quote',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },

      {
        name: 'description',
        title: 'Quote',
        type: 'blockContent',
      },

      {
        name: 'tag',
        title: 'Tags',
        type: 'array',
        of: [{type: 'string'}]
      },
      
    ],
  
    preview: {
      select: {
        title: 'title',
      },

    },
  }
  