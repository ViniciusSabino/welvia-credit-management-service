import { Module } from '@nestjs/common';

import { InstallmentsController } from '@presentation/controller/installments.controller';
import { InstallmentsService } from '@domain/services';

@Module({
  imports: [],
  controllers: [InstallmentsController],
  providers: [InstallmentsService],
})
export class CreditManagementModule {}
