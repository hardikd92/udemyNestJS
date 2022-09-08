import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { messagesRepository } from './messages.repository';
import { MessagesService } from './messages.service';

@Module({
  controllers: [MessagesController],
  providers: [messagesRepository, MessagesService]
})
export class MessagesModule {}
