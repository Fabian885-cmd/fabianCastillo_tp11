let pagoMes = 14000;
let consumoKWH = 250;

/*if(consumoKWH > 300){
    pagoMes *= 1.2;
    console.log(`Debido a que su hogar tuvo un consumo de ${consumoKWH}kWh, en base al ajuste tarifario (hogares con consumo mayor a 300kWh por mes tendrán un aumento del 20%), cumplimos con informarle que se ha ajustado el total a pagar, que será de ${pagoMes}.`);
}
else{
    console.log("Debido a que su consumo es menor a 300KWH mantiene un subsidio del 15%")
}*/

(consumoKWH > 300) ? (pagoMes *= 1.2, console.log(`Debido a que su hogar tuvo un consumo de ${consumoKWH}kWh, en base al ajuste tarifario (hogares con consumo mayor a 300kWh por mes tendrán un aumento del 20%), cumplimos con informarle que se ha ajustado el total a pagar, que será de ${pagoMes}.`)) : console.log("Debido a que su consumo es menor a 300KWH mantiene un subsidio del 15%") ;