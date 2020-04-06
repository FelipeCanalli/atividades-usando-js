function Consulta() {
  var placa = prompt("Digite a placa completa do seu carro.", "AAA0000");
  console.log(Consulta);

  if (placa.length < 7 || placa.length > 7) {
    alert(
      "Atenção! Digite os numeros e letras corretamente. \n Exemplo : DVD2020"
    );
  } else {
    var rodizio = placa.substring(6, 7);

    if (rodizio == 1 || rodizio == 2)
      alert("você não pode rodar dia de segunda");

    if (rodizio == 3 || rodizio == 4) alert("você não pode rodar dia de terça");
    if (rodizio == 5 || rodizio == 6)
      alert("você não pode rodar dia de quarta");
    if (rodizio == 7 || rodizio == 8)
      alert("você não pode rodar dia de quinta");
    if (rodizio == 9 || rodizio == 0) alert("você não pode rodar dia de sexta");
  }
}
