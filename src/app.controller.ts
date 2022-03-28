import { Controller, Get, Query, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

// Ejercicio 1
  @Get('getConvertedAmount')
  getConvertedAmount(@Query('from') actmoneda: string, @Query('to') amoneda: string, @Query('amount',ParseIntPipe) cantidad: number):Promise<string> {
    return this.appService.getConvertedAmount(actmoneda, amoneda,cantidad);
  }
  
// Ejercicio 2
  @Get('getDaysUntilMyBirthday')
  getDaysUntilMyBirthday(@Query('birthdate') bDate: string): string {  
    return this.appService.getDaysUntilMyBirthday(bDate);
  }
  
// Ejercicio 3
  @Get('getTheNumber')
  getTheNumber(@Query('first',ParseIntPipe) num1: number, @Query('second',ParseIntPipe) num2: number): string {
    return this.appService.getTheNumber(num1,num2);
  }
  

}
