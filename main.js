const currency = "JPY";
const exact_date = "20240127"; 

let url = new URL("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange");

const params = new URLSearchParams();
params.append("valcode", currency);
params.append("date", exact_date);
params.append("json", ""); 

url.search = params.toString();

console.log(url.toString());

