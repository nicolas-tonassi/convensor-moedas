document.getElementById('currency-form').addEventListener('submit', function(e) {
   e.preventDefault();
// Pega os valores inseridos pelo usuário
   const amount = parseFloat(document.getElementById('amount').value);
   const fromCurrency = document.getElementById('from-currency').value;
   const toCurrency = document.getElementById('to-currency').value;
   // Taxas de câmbio fixas (predefinidas no código)
   const exchangeRates = {
      usd: { brl: 5.05, eur: 0.94 },
      eur: { usd: 0.07, brl: 5.40 },
      brl: { usd: 0.20, eur: 0.19 }
  };