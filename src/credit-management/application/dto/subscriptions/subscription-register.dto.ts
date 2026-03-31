import { IsDateString, IsNotEmpty, IsNumber, IsPositive, IsString, MaxLength, MinLength } from 'class-validator';

class SubscriptionRegisterDTO {
  @IsString({
    message: 'O Campo "name" deve ser String',
  })
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(30)
  readonly name!: string;

  @IsNumber()
  @IsPositive()
  readonly accountId!: number;

  @IsNumber()
  @IsPositive()
  readonly value!: number;

  @IsDateString()
  @IsNotEmpty()
  readonly date!: string;
}

export default SubscriptionRegisterDTO;
