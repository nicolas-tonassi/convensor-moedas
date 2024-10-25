document.getElementById('currency-form').addEventListener('submit', function(e) {
   e.preventDefault();
// Pega os valores inseridos pelo usuário
   const amount = parseFloat(document.getElementById('amount').value);
   const fromCurrency = document.getElementById('from-currency').value;
   const toCurrency = document.getElementById('to-currency').value;
   // Taxas de câmbio fixas (predefinidas no código)
   const exchangeRates = {
      usd: { brl: 5.67, eur: 0.92 },
      eur: { usd: 1.08, brl: 6.16 },
      brl: { usd: 0.18, eur: 0.16 }
  };
  // Verifica se o valor inserido é válido
  if (isNaN(amount) || amount <= 0) {
   document.getElementById('result').textContent = 'Por favor, insira um valor válido.';
   return;
}
// Conversão
let convertedAmount;
if (fromCurrency === toCurrency) {
    convertedAmount = amount;
} else {
    convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];
}
// Exibe o resultado
document.getElementById('result').textContent = `Resultado: ${convertedAmount.toFixed(2)}`;
});
// Função para resetar os campos
document.getElementById('reset-button').addEventListener('click', function() {
   document.getElementById('amount').value = '';
   document.getElementById('from-currency').selectedIndex = 0;
   document.getElementById('to-currency').selectedIndex = 0;
   document.getElementById('result').textContent = '';
});