import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MembersModule } from './members/members.module';
import { PlansModule } from './plans/plans.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [UsersModule, MembersModule, PlansModule, SubscriptionModule, PaymentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


