Bin information used to find a bank card
### Install
```
yarn add sbin
//or
npm install sbin
```
### Use
```
const lookupBin=require("./index")
//use local db
console.log(sbin.FindBin("440393"))
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
