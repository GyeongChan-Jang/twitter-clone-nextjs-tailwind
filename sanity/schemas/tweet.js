export default {
  name: 'tweet',
  title: 'Tweet',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Text in tweet',
      type: 'string',
    },
    {
      name: 'blockTweet',
      title: 'Block tweet',
      description: 'ADMIN Controls: Toggle if Tweet is deemed inappropriate',
      type: 'boolean',
    },
    {
      name: 'username',
      title: 'Username',
      type: 'string',
    },
    {
      name: 'profileImg',
      title: 'Profile Image',
      type: 'image',
    },
    {
      name: 'image',
      title: 'Tweet image',
      type: 'string',
    },
  ],
}
