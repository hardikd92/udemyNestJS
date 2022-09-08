import { Body, Controller, Get, Param, Post, NotFoundException } from '@nestjs/common';
import { createMessageDto } from './dtos/create-message.dto';
import { messagesRepository } from './messages.repository';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    constructor(public messagesService : MessagesService){
    }

    @Get()
    listMessages(){
        return this.messagesService.findAll();
    }

    @Post()
    createMessage(@Body() body:createMessageDto){
     return this.messagesService.create(body.content);
    }

    @Get('/:id')
    async getMessage(@Param('id') id:string){
        const message = await this.messagesService.findOne(id);
        if(!message){
            throw new NotFoundException('Message not found');
        }
        return message;
    }
}
