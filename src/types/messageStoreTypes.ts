export interface Message {
   _id: string;
   receiver: string;
   sender: string;
   content: string;
   seen: boolean;
}

export interface MessageStore {
   messages: Message[];
   addMessage: (message: Message) => void;
   setMessages: (messages: Message[]) => void;
   isLoading: boolean;
   hasLoaded: boolean;
   fetchMessages: (receiver: string, sender: string) => void;
}
