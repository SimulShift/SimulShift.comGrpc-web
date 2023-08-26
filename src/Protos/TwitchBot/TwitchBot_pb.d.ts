import * as jspb from 'google-protobuf'



export class CheckJoinedRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckJoinedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckJoinedRequest): CheckJoinedRequest.AsObject;
  static serializeBinaryToWriter(message: CheckJoinedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckJoinedRequest;
  static deserializeBinaryFromReader(message: CheckJoinedRequest, reader: jspb.BinaryReader): CheckJoinedRequest;
}

export namespace CheckJoinedRequest {
  export type AsObject = {
  }
}

export class CheckJoinedResponse extends jspb.Message {
  getJoined(): boolean;
  setJoined(value: boolean): CheckJoinedResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckJoinedResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckJoinedResponse): CheckJoinedResponse.AsObject;
  static serializeBinaryToWriter(message: CheckJoinedResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckJoinedResponse;
  static deserializeBinaryFromReader(message: CheckJoinedResponse, reader: jspb.BinaryReader): CheckJoinedResponse;
}

export namespace CheckJoinedResponse {
  export type AsObject = {
    joined: boolean,
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

export enum ReadyState { 
  CONNECTING = 0,
  OPEN = 1,
  CLOSING = 2,
  CLOSED = 3,
}
