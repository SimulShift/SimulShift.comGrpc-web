import * as grpcWeb from 'grpc-web';

import * as TwitchBot_pb from './TwitchBot_pb';


export class TwitchBotServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  checkJoined(
    request: TwitchBot_pb.CheckJoinedRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: TwitchBot_pb.CheckJoinedRequest) => void
  ): grpcWeb.ClientReadableStream<TwitchBot_pb.CheckJoinedRequest>;

  joinChannel(
    request: TwitchBot_pb.JoinChannelRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: TwitchBot_pb.JoinChannelResponse) => void
  ): grpcWeb.ClientReadableStream<TwitchBot_pb.JoinChannelResponse>;

  leaveChannel(
    request: TwitchBot_pb.LeaveChannelRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: TwitchBot_pb.LeaveChannelResponse) => void
  ): grpcWeb.ClientReadableStream<TwitchBot_pb.LeaveChannelResponse>;

}

export class TwitchBotAdminServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  tmiStatus(
    request: TwitchBot_pb.TmiStatusRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: TwitchBot_pb.TmiStatusResponse) => void
  ): grpcWeb.ClientReadableStream<TwitchBot_pb.TmiStatusResponse>;

  startTmi(
    request: TwitchBot_pb.StartTmiRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: TwitchBot_pb.StartTmiResponse) => void
  ): grpcWeb.ClientReadableStream<TwitchBot_pb.StartTmiResponse>;

  stopTmi(
    request: TwitchBot_pb.StopTmiRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: TwitchBot_pb.StopTmiResponse) => void
  ): grpcWeb.ClientReadableStream<TwitchBot_pb.StopTmiResponse>;

}

export class TwitchBotServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  checkJoined(
    request: TwitchBot_pb.CheckJoinedRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<TwitchBot_pb.CheckJoinedRequest>;

  joinChannel(
    request: TwitchBot_pb.JoinChannelRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<TwitchBot_pb.JoinChannelResponse>;

  leaveChannel(
    request: TwitchBot_pb.LeaveChannelRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<TwitchBot_pb.LeaveChannelResponse>;

}

export class TwitchBotAdminServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  tmiStatus(
    request: TwitchBot_pb.TmiStatusRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<TwitchBot_pb.TmiStatusResponse>;

  startTmi(
    request: TwitchBot_pb.StartTmiRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<TwitchBot_pb.StartTmiResponse>;

  stopTmi(
    request: TwitchBot_pb.StopTmiRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<TwitchBot_pb.StopTmiResponse>;

}

