import {
  createAction,
} from '@activepieces/pieces-framework'
import { lineSendMessage } from '../common/utils'
import { lineAuth } from "../../";
import { assertNotNullOrUndefined } from '@activepieces/shared';
import { text } from '../common/props';

export const lineSendDirectMessageAction = createAction({
  auth: lineAuth,
    name: 'send_direct_message',
    displayName: 'Send Message To A User',
    description: 'Send message to a user',
    props: {
      text,
    },
    async run(context) {
      const token = context.auth
      const { text } = context.propsValue

      assertNotNullOrUndefined(token, 'token')
      assertNotNullOrUndefined(text, 'text')

      return lineSendMessage({
        token,
        text,
      })
    },
})
