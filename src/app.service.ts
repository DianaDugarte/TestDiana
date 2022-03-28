import { Injectable } from '@nestjs/common';
import Axios, { AxiosRequestConfig, AxiosResponse, AxiosError }  from 'axios';
import { response } from 'express';
import { map } from 'rxjs';

@Injectable()
export class AppService {
  
// Proceso para realizar la conversion monetaria - Ejercicio 1
    async getConvertedAmount(from,to,monto) {
	  const APP_ID ='ce82fd5fc28d467fa179c644bade085e'
	   var conversion;
	   
	   
	   var responseData = await Axios.get(
      	  'https://openexchangerates.org/api/latest.json?app_id=' + APP_ID,
		  ).then((response) => {
      return response.data.rates;
    });
	
	if (!responseData.hasOwnProperty(from) || !responseData.hasOwnProperty(to) ) {
		return 'Por favor revisar las monedas a convertir ';
				
	}
	else
	{
		conversion = monto * responseData[from] * responseData[to];
		return 'El Resultado de la conversion es ' + conversion;
	}
}

// Proceso para calcular los dias que faltan para tu cumpleaños - Ejericio 2
	getDaysUntilMyBirthday(bDate): string {
  			
	  var hoy = new Date();
	  var bday = new Date(bDate); 
	  var edad = hoy.getFullYear() - bday.getFullYear();
	  
	  var resultado;
	  
	  var sigCumple = new Date(hoy.getFullYear(), bday.getMonth(), bday.getDate());
	  
	  if(hoy > sigCumple) {
		sigCumple.setFullYear(hoy.getFullYear() + 1);
	  }
	  
	  var one_day = 24 * 60 * 60 * 1000;
	  
	  var diasFaltantes = Math.ceil((sigCumple.getTime() - hoy.getTime()) / (one_day));
	  
	  if (diasFaltantes) {
		resultado = 'Faltan ' + diasFaltantes + ' dia(s) para tu cumpleaños.'; 
	  } else {
		resultado = "Por favor ingresa una fecha valida en formato AAAA-MM-DD.";
	  }
	
	return resultado;
    }

// Proceso para calcular la secuencia de multiplicacion de un numero - Ejercicio 3
    getTheNumber(num1, num2): string {
	  
	  var resultado='';
	
	  for (var i=0; i <= num2; i++) {
	  
	    resultado = resultado + (num1 * i) ;
	  }
	resultado = "El resultado es: " + resultado.substr(1,9);
	
	return resultado; 
    }
}