import { Property } from '@activepieces/pieces-framework';

export const text = Property.LongText({
  displayName: 'Message',
  description: 'The text of your message',
  required: true,
});
