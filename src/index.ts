import { PieceAuth, createPiece } from '@activepieces/pieces-framework'
import { lineSendDirectMessageAction } from './lib/actions/send-direct-message-action'

export const lineAuth = PieceAuth.SecretText({
  description: 'Access Token',
  displayName: 'Enter your access token',
  required: true,
});

export const line = createPiece({
  displayName: 'LINE',
  logoUrl: 'https://github.com/MrMYHuang/pieces-line/blob/main/LINE_Brand_icon.png?raw=true',
  auth: lineAuth,
  actions: [
    lineSendDirectMessageAction,
  ],
  triggers: [
  ]
})
