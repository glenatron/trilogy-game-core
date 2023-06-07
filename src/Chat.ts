export enum MessageType {
    Chat = "chat",
    Roll = "roll",
    System = "system"
}

export interface IChat {

    playerName: string;

    message: string;

    messageType: MessageType;

}
