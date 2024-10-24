document.getElementById('currency-form').addEventListener('submit', function(e) {
   e.preventDefault();
// Pega os valores inseridos pelo usuário
   const amount = parseFloat(document.getElementById('amount').value);
   const fromCurrency = document.getElementById('from-currency').value;
   const toCurrency = document.getElementById('to-currency').value;