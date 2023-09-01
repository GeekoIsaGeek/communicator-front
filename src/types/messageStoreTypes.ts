export interface Message {
   id: string;
   receiver: string;
   sender: string;
   content: string;
}

export interface MessageStore {
   messages: Message[];
   addMessage: (message: Message) => void;
}
