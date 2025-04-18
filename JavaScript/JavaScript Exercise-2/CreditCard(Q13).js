function validateCreditCard(number) {
    let clean = number.replace(/-/g, '');
    if (!/^\d{16}$/.test(clean)) return { valid: false, number, error: 'wrong_length_or_not_digits' };
  
    let digits = clean.split('').map(Number);
    let uniqueDigits = new Set(digits);
    if (uniqueDigits.size < 2) return { valid: false, number, error: 'only_one_type_of_digit' };
  
    if (digits[15] % 2 !== 0) return { valid: false, number, error: 'last_digit_not_even' };
  
    let sum = digits.reduce((a, b) => a + b, 0);
    if (sum <= 16) return { valid: false, number, error: 'sum_less_than_16' };
  
    return { valid: true, number };
  }
  console.log("Output for Validating Credit Card Numbers:")
  console.log(validateCreditCard("9999-9999-8888-0000")); 
  console.log(validateCreditCard("a923-3211-9c01-1112")); 
  console.log(validateCreditCard("4444-4444-4444-4444"));
  console.log(validateCreditCard("1111-1111-1111-1110")); 
  console.log(validateCreditCard("6666-6666-6666-6661")); 
  
 /* OUTPUT
 Output for Validating Credit Card Numbers:
{ valid: true, number: '9999-9999-8888-0000' }
{
  valid: false,
  number: 'a923-3211-9c01-1112',
  error: 'wrong_length_or_not_digits'
}
{
  valid: false,
  number: '4444-4444-4444-4444',
  error: 'only_one_type_of_digit'
}
{
  valid: false,
  number: '1111-1111-1111-1110',
  error: 'sum_less_than_16'
}
{
  valid: false,
  number: '6666-6666-6666-6661',
  error: 'last_digit_not_even'
}*/ 