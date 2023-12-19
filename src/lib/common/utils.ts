import { AuthenticationType, httpClient, HttpHeader, HttpMethod, HttpRequest } from "@activepieces/pieces-common";

export const lineSendMessage = async ({ text, token }: LineSendMessageParams) => {
  const body: LineSendMessageRequestBody = {
    message: text,
  }
  
  const request: HttpRequest<LineSendMessageRequestBody> = {
    method: HttpMethod.POST,
    url: 'https://notify-api.line.me/api/notify',
    headers: {
      [HttpHeader.CONTENT_TYPE]: 'application/x-www-form-urlencoded'
    },
    body,
    authentication: {
      type: AuthenticationType.BEARER_TOKEN,
      token,
    },
  }

  const response = await httpClient.sendRequest(request)

  return {
    success: true,
    request_body: request.body,
    response_body: response.body,
  }
}

type LineSendMessageRequestBody = {
  message: string
}

type LineSendMessageParams = {
  token: string
  text: string
}
