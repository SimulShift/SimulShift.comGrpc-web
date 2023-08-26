import * as grpcWeb from 'grpc-web';

import * as PingPong_pb from './PingPong_pb';


export class PingPongServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  ping(
    request: PingPong_pb.PingRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: PingPong_pb.PongResponse) => void
  ): grpcWeb.ClientReadableStream<PingPong_pb.PongResponse>;

}

export class PingPongServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  ping(
    request: PingPong_pb.PingRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<PingPong_pb.PongResponse>;

}

