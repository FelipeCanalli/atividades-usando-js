function Consulta() {
  var placa = prompt("Digite a placa completa do seu carro.", "AAA0000");
  console.log(Consulta);

  placa = placa.toUpperCase();

  if (placa.length < 7 || placa.length > 7) {
    alert(
      "Atenção! Digite os numeros e letras corretamente. \n Exemplo : DVD2020"
    );
  } else {
    var rodizio = placa.substring(6, 7);

    switch (rodizio) {
      case "1":
      case "2":
        rodizio = "Não pode rodar nas segundas";
        break;

      case "3":
      case "4":
        rodizio = "Não pode rodar nas terças";
        break;

      case "5":
      case "6":
        rodizio = "Não pode rodar nas quartas";
        break;

      case "7":
      case "8":
        rodizio = "Não pode rodar nas quintas";
        break;

      case "9":
      case "0":
        rodizio = "Não pode rodar nas sextas";
        break;

      default:
        rodizio = "inexistente";
        break;
    }
    alert("Esse é o seu rodizio: " + rodizio);
  }
}
