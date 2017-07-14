import { Message } from "./message.model";
import { Http } from "@angular/http";
import { Injectable} from "@angular/core";


@Injectable()
export class MessageService {
    private messages: Message [] = [];

    constructor(private http: Http) {}

    addMessage(message: Message) {
        this.messages.push(message);

    }

    getMessages() {
        return this.messages;
    }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}