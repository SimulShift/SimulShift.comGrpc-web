import * as grpcWeb from 'grpc-web';

import * as TwitchBot_pb from './TwitchBot_pb'; // proto import: "TwitchBot.proto"
import * as Common_pb from './Common_pb'; // proto import: "Common.proto"


export class TwitchBotServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getPersonaDataForUser(
    request: Common_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: TwitchBot_pb.GetPersonaDataForUserResponse) => void
  ): grpcWeb.ClientReadableStream<TwitchBot_pb.GetPersonaDataForUserResponse>;

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
               response: Common_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<Common_pb.Empty>;

  setReplyToAll(
    request: TwitchBot_pb.SetReplyToAllRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: Common_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<Common_pb.Empty>;

  createPersona(
    request: TwitchBot_pb.CreatePersonaRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: TwitchBot_pb.Persona) => void
  ): grpcWeb.ClientReadableStream<TwitchBot_pb.Persona>;

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

  getPersonaDataForUser(
    request: Common_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<TwitchBot_pb.GetPersonaDataForUserResponse>;

  joinChannel(
    request: TwitchBot_pb.JoinChannelRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<TwitchBot_pb.JoinChannelResponse>;

  leaveChannel(
    request: TwitchBot_pb.LeaveChannelRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<Common_pb.Empty>;

  setReplyToAll(
    request: TwitchBot_pb.SetReplyToAllRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<Common_pb.Empty>;

  createPersona(
    request: TwitchBot_pb.CreatePersonaRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<TwitchBot_pb.Persona>;

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

