function Converter(){
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmCelsiusNumerico = parseFloat(valor);
    
    var valorEmFahrenheit = (valorEmCelsiusNumerico * 9/5) + 32;
    console.log(valorEmFahrenheit);
    
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em Fahrenheit é: " + valorEmFahrenheit + "°F"
    
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  