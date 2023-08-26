import {Request, UnaryInterceptor, UnaryResponse} from 'grpc-web'

export class HelloUnaryInterceptor
  implements UnaryInterceptor<Request<any, any>, UnaryResponse<any, any>>
{
  intercept(
    request: Request<any, any>,
    invoker: (request: Request<any, any>) => Promise<any>,
  ): Promise<any> {
    // Assuming the Request has a setMessage and getMessage method.
    // If not, this needs adjustments.
    console.log('Inside interceptor')

    return invoker(request).then(response => {
      console.log('metaData', response.getMetadata())
      return response
    })
  }
}
