import {Request, UnaryInterceptor, UnaryResponse} from 'grpc-web'

export class HelloUnaryInterceptor<REQ, RES>
  implements UnaryInterceptor<Request<REQ, RES>, UnaryResponse<REQ, RES>>
{
  intercept(
    request: Request<Request<REQ, RES>, UnaryResponse<REQ, RES>>,
    invoker: (
      request: Request<Request<REQ, RES>, UnaryResponse<REQ, RES>>,
    ) => Promise<UnaryResponse<Request<REQ, RES>, UnaryResponse<REQ, RES>>>,
  ): Promise<any> {
    console.log('Inside interceptor')

    return invoker(request)
      .then(response => {
        console.log('response inside invoke', response.getStatus())
        return response
      })
      .catch(error => {
        console.log('error inside invoke', error)
      })
  }
}
