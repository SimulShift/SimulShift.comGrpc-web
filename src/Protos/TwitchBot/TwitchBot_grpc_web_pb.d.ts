import * as grpcWeb from 'grpc-web';

import * as TwitchBot_pb from './TwitchBot_pb'; // proto import: "TwitchBot.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"


export class TwitchBotServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  checkJoined(
    request: TwitchBot_pb.CheckJoinedRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: TwitchBot_pb.CheckJoinedResponse) => void
  ): grpcWeb.ClientReadableStream<TwitchBot_pb.CheckJoinedResponse>;

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

  setReplyToAll(
    request: TwitchBot_pb.SetReplyToAllRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

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

  getJoinedChannels(
    request: TwitchBot_pb.GetJoinedChannelsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: TwitchBot_pb.GetJoinedChannelsResponse) => void
  ): grpcWeb.ClientReadableStream<TwitchBot_pb.GetJoinedChannelsResponse>;

}

export class TwitchBotServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  checkJoined(
    request: TwitchBot_pb.CheckJoinedRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<TwitchBot_pb.CheckJoinedResponse>;

  joinChannel(
    request: TwitchBot_pb.JoinChannelRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<TwitchBot_pb.JoinChannelResponse>;

  leaveChannel(
    request: TwitchBot_pb.LeaveChannelRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<TwitchBot_pb.LeaveChannelResponse>;

  setReplyToAll(
    request: TwitchBot_pb.SetReplyToAllRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

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

  getJoinedChannels(
    request: TwitchBot_pb.GetJoinedChannelsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<TwitchBot_pb.GetJoinedChannelsResponse>;

}

