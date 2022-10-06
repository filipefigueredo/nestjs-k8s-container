import { IMessage } from "./message.interface";

export interface IListBreedsRequest {
  
    /**
   * Message containing A name
   */
  message: IMessage;

  /**
   * Request status
   */
  status: string;
}
