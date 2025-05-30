Bin information used to find a bank card
### Install
```
yarn add sobin
//or
npm install sobin
```
### Use
```
const sobin=require("./index")
//use local db
console.log(sobin.FindBin("440393"))
//
{
  bin: '440393',
  card_brand: 'VISA',
  card_type: 'DEBIT',
  card_level: 'PREPAID CLASSIC',
  bank_name: 'SUTTON BANK',
  bank_website: '',
  bank_phone: '+18004223641',
  country_name: 'UNITED STATES',
  country_code: 'US',
  country_iso3: 'USA',
  currency: 'USD'
}
```
