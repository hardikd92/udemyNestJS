import { messagesRepository } from "./messages.repository";
import { Injectable } from "@nestjs/common";
@Injectable()
export class MessagesService{
    constructor(public messagesRepo: messagesRepository){
    }

    findOne(id: string){
        return this.messagesRepo.findOne(id);
    }

    findAll(){
        return this.messagesRepo.findAll();
    }

    create(content: string){
        return this.messagesRepo.create(content);
    }
}