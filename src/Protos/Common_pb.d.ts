import * as jspb from 'google-protobuf'



export class message extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): message;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): message.AsObject;
  static toObject(includeInstance: boolean, msg: message): message.AsObject;
  static serializeBinaryToWriter(message: message, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): message;
  static deserializeBinaryFromReader(message: message, reader: jspb.BinaryReader): message;
}

export namespace message {
  export type AsObject = {
    message: string,
  }
}

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

