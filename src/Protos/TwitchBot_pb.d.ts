import * as jspb from 'google-protobuf'

import * as Common_pb from './Common_pb'; // proto import: "Common.proto"


export class Persona extends jspb.Message {
  getId(): number;
  setId(value: number): Persona;

  getTwitchId(): number;
  setTwitchId(value: number): Persona;

  getOnline(): boolean;
  setOnline(value: boolean): Persona;

  getCommandsList(): Array<string>;
  setCommandsList(value: Array<string>): Persona;
  clearCommandsList(): Persona;
  addCommands(value: string, index?: number): Persona;

  getPersonality(): number;
  setPersonality(value: number): Persona;

  getReplyToAll(): boolean;
  setReplyToAll(value: boolean): Persona;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Persona.AsObject;
  static toObject(includeInstance: boolean, msg: Persona): Persona.AsObject;
  static serializeBinaryToWriter(message: Persona, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Persona;
  static deserializeBinaryFromReader(message: Persona, reader: jspb.BinaryReader): Persona;
}

export namespace Persona {
  export type AsObject = {
    id: number,
    twitchId: number,
    online: boolean,
    commandsList: Array<string>,
    personality: number,
    replyToAll: boolean,
  }
}

export class GetPersonaDataForUserResponse extends jspb.Message {
  getPersonasList(): Array<Persona>;
  setPersonasList(value: Array<Persona>): GetPersonaDataForUserResponse;
  clearPersonasList(): GetPersonaDataForUserResponse;
  addPersonas(value?: Persona, index?: number): Persona;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPersonaDataForUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPersonaDataForUserResponse): GetPersonaDataForUserResponse.AsObject;
  static serializeBinaryToWriter(message: GetPersonaDataForUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPersonaDataForUserResponse;
  static deserializeBinaryFromReader(message: GetPersonaDataForUserResponse, reader: jspb.BinaryReader): GetPersonaDataForUserResponse;
}

export namespace GetPersonaDataForUserResponse {
  export type AsObject = {
    personasList: Array<Persona.AsObject>,
  }
}

export class JoinChannelRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinChannelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: JoinChannelRequest): JoinChannelRequest.AsObject;
  static serializeBinaryToWriter(message: JoinChannelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinChannelRequest;
  static deserializeBinaryFromReader(message: JoinChannelRequest, reader: jspb.BinaryReader): JoinChannelRequest;
}

export namespace JoinChannelRequest {
  export type AsObject = {
  }
}

export class JoinChannelResponse extends jspb.Message {
  getReadystate(): ReadyState;
  setReadystate(value: ReadyState): JoinChannelResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinChannelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: JoinChannelResponse): JoinChannelResponse.AsObject;
  static serializeBinaryToWriter(message: JoinChannelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinChannelResponse;
  static deserializeBinaryFromReader(message: JoinChannelResponse, reader: jspb.BinaryReader): JoinChannelResponse;
}

export namespace JoinChannelResponse {
  export type AsObject = {
    readystate: ReadyState,
  }
}

export class LeaveChannelRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LeaveChannelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LeaveChannelRequest): LeaveChannelRequest.AsObject;
  static serializeBinaryToWriter(message: LeaveChannelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LeaveChannelRequest;
  static deserializeBinaryFromReader(message: LeaveChannelRequest, reader: jspb.BinaryReader): LeaveChannelRequest;
}

export namespace LeaveChannelRequest {
  export type AsObject = {
  }
}

export class LeaveChannelResponse extends jspb.Message {
  getReadystate(): ReadyState;
  setReadystate(value: ReadyState): LeaveChannelResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LeaveChannelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LeaveChannelResponse): LeaveChannelResponse.AsObject;
  static serializeBinaryToWriter(message: LeaveChannelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LeaveChannelResponse;
  static deserializeBinaryFromReader(message: LeaveChannelResponse, reader: jspb.BinaryReader): LeaveChannelResponse;
}

export namespace LeaveChannelResponse {
  export type AsObject = {
    readystate: ReadyState,
  }
}

export class SetReplyToAllRequest extends jspb.Message {
  getReplytoall(): boolean;
  setReplytoall(value: boolean): SetReplyToAllRequest;

  getPersonality(): Personality;
  setPersonality(value: Personality): SetReplyToAllRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetReplyToAllRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetReplyToAllRequest): SetReplyToAllRequest.AsObject;
  static serializeBinaryToWriter(message: SetReplyToAllRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetReplyToAllRequest;
  static deserializeBinaryFromReader(message: SetReplyToAllRequest, reader: jspb.BinaryReader): SetReplyToAllRequest;
}

export namespace SetReplyToAllRequest {
  export type AsObject = {
    replytoall: boolean,
    personality: Personality,
  }
}

export class TmiStatusRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TmiStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TmiStatusRequest): TmiStatusRequest.AsObject;
  static serializeBinaryToWriter(message: TmiStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TmiStatusRequest;
  static deserializeBinaryFromReader(message: TmiStatusRequest, reader: jspb.BinaryReader): TmiStatusRequest;
}

export namespace TmiStatusRequest {
  export type AsObject = {
  }
}

export class TmiStatusResponse extends jspb.Message {
  getReadystate(): ReadyState;
  setReadystate(value: ReadyState): TmiStatusResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TmiStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TmiStatusResponse): TmiStatusResponse.AsObject;
  static serializeBinaryToWriter(message: TmiStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TmiStatusResponse;
  static deserializeBinaryFromReader(message: TmiStatusResponse, reader: jspb.BinaryReader): TmiStatusResponse;
}

export namespace TmiStatusResponse {
  export type AsObject = {
    readystate: ReadyState,
  }
}

export class StartTmiRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartTmiRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartTmiRequest): StartTmiRequest.AsObject;
  static serializeBinaryToWriter(message: StartTmiRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartTmiRequest;
  static deserializeBinaryFromReader(message: StartTmiRequest, reader: jspb.BinaryReader): StartTmiRequest;
}

export namespace StartTmiRequest {
  export type AsObject = {
  }
}

export class StartTmiResponse extends jspb.Message {
  getReadystate(): ReadyState;
  setReadystate(value: ReadyState): StartTmiResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartTmiResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StartTmiResponse): StartTmiResponse.AsObject;
  static serializeBinaryToWriter(message: StartTmiResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartTmiResponse;
  static deserializeBinaryFromReader(message: StartTmiResponse, reader: jspb.BinaryReader): StartTmiResponse;
}

export namespace StartTmiResponse {
  export type AsObject = {
    readystate: ReadyState,
  }
}

export class StopTmiRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopTmiRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StopTmiRequest): StopTmiRequest.AsObject;
  static serializeBinaryToWriter(message: StopTmiRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopTmiRequest;
  static deserializeBinaryFromReader(message: StopTmiRequest, reader: jspb.BinaryReader): StopTmiRequest;
}

export namespace StopTmiRequest {
  export type AsObject = {
  }
}

export class StopTmiResponse extends jspb.Message {
  getReadystate(): ReadyState;
  setReadystate(value: ReadyState): StopTmiResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopTmiResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StopTmiResponse): StopTmiResponse.AsObject;
  static serializeBinaryToWriter(message: StopTmiResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopTmiResponse;
  static deserializeBinaryFromReader(message: StopTmiResponse, reader: jspb.BinaryReader): StopTmiResponse;
}

export namespace StopTmiResponse {
  export type AsObject = {
    readystate: ReadyState,
  }
}

export class GetJoinedChannelsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJoinedChannelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetJoinedChannelsRequest): GetJoinedChannelsRequest.AsObject;
  static serializeBinaryToWriter(message: GetJoinedChannelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetJoinedChannelsRequest;
  static deserializeBinaryFromReader(message: GetJoinedChannelsRequest, reader: jspb.BinaryReader): GetJoinedChannelsRequest;
}

export namespace GetJoinedChannelsRequest {
  export type AsObject = {
  }
}

export class GetJoinedChannelsResponse extends jspb.Message {
  getChannelsList(): Array<string>;
  setChannelsList(value: Array<string>): GetJoinedChannelsResponse;
  clearChannelsList(): GetJoinedChannelsResponse;
  addChannels(value: string, index?: number): GetJoinedChannelsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJoinedChannelsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetJoinedChannelsResponse): GetJoinedChannelsResponse.AsObject;
  static serializeBinaryToWriter(message: GetJoinedChannelsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetJoinedChannelsResponse;
  static deserializeBinaryFromReader(message: GetJoinedChannelsResponse, reader: jspb.BinaryReader): GetJoinedChannelsResponse;
}

export namespace GetJoinedChannelsResponse {
  export type AsObject = {
    channelsList: Array<string>,
  }
}

export enum Personality { 
  UNKNOWN = 0,
  CHAD = 1,
  HELPFUL = 2,
  SHY = 3,
  UWU = 4,
}
export enum ReadyState { 
  CONNECTING = 0,
  OPEN = 1,
  CLOSING = 2,
  CLOSED = 3,
}
