
const currency = "EUR";
const exact_date = "02.03.2020";

let url = new URL("https://bank.gov.ua/");


const params = new URLSearchParams(url.search);


params.append("currency", currency);
params.append("exact_date", exact_date);

url.search = params.toString();


console.log(url.toString());
