
/* 
Банк ОТП пропонує на 4 місяці гривневий депозит із мінімальною сумою вкладу
20 000 грн за процентною ставкою 12 % річних. У разі оформлення такого депозиту
банк виплачує клієнту одноразовий бонус у розмірі 500 грн. Приватбанк пропонує інші умови:16 % річних
на строк 4 місяці без будь-яких бонусів із мінімальною сумою вкладу 1000 грн.
Є клієнт А, який хоче зробити вклад 20 000 грн, і клієнт Б, який хоче зробити вклад
30 000 грн. Обидва клієнти хочуть отримати максимальну вигоду від вкладів.
Допоможіть клієнту вибрати вигідніший для нього банк. 
*/

function bankDeposit(depositsAmout, banksPercent, monthAmount, bonusOtpBank) {
  if (!depositsAmout || !banksPercent || !monthAmount) {
    console.log(`Помилка: необхідно ввести всі валідні данні`)
    return;
  }

  for (let oneDeposit of depositsAmout) {
    let klient;
    for (const percent of banksPercent) {
      klient = oneDeposit;
      for (let month = 1; month <= monthAmount; month++) {
        klient += klient / 100 * percent / 12;
      }
    
      if(percent === 16) {
        console.log(`Із сумми ${oneDeposit}грн клиєнт ПриватБанку після ${monthAmount}місяців отримає 
        ${klient.toFixed()}грн`);
      }
      
      if(percent === 12) {
        klient += bonusOtpBank;
        console.log(`Із сумми ${oneDeposit}грн клиєнт ОТП банку після ${monthAmount}місяців отримає 
        ${klient.toFixed()}грн`);
      }
    }
  }
}

const otpBankPercent = 12; // 12% річних
const privatBankPercent = 16;// 16% річних

const bonusOtpBank = 50; // банк виплачує клієнту одноразовий бонус у розмірі 500 грн
const depositTerm = 4; // кількість місяців

const A = 20000; // розмір депозиту Кліента "А" в грн
const B = 30000; // розмір депозиту Кліента "Б" в грн

const banksPercent = [otpBankPercent, privatBankPercent]; 
const clients = [A, B];

console.log(bankDeposit(clients, banksPercent, depositTerm, bonusOtpBank));
