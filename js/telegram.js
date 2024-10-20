function sendTelegramMessage() {
  // Inputlardan qiymatlarni olish
  const name = document.getElementById('nameInput').value;
  const phone = document.getElementById('phoneInput').value;
  const message = document.getElementById('messageInput').value;


  // const botToken = ' ';
  // const chatId = '';

  function _0x5ebf(_0x41f3a9,_0x421467){const _0x55cc5f=_0x55cc();return _0x5ebf=function(_0x5ebf74,_0x3dd1f5){_0x5ebf74=_0x5ebf74-0x6e;let _0x1956cb=_0x55cc5f[_0x5ebf74];return _0x1956cb;},_0x5ebf(_0x41f3a9,_0x421467);}const _0x176d34=_0x5ebf;(function(_0x3e19d2,_0x133721){const _0x2537b0=_0x5ebf,_0x176bf6=_0x3e19d2();while(!![]){try{const _0x1c01a7=parseInt(_0x2537b0(0x72))/0x1+-parseInt(_0x2537b0(0x73))/0x2*(-parseInt(_0x2537b0(0x6f))/0x3)+-parseInt(_0x2537b0(0x70))/0x4*(-parseInt(_0x2537b0(0x75))/0x5)+parseInt(_0x2537b0(0x74))/0x6+-parseInt(_0x2537b0(0x76))/0x7*(-parseInt(_0x2537b0(0x6e))/0x8)+-parseInt(_0x2537b0(0x77))/0x9+-parseInt(_0x2537b0(0x71))/0xa;if(_0x1c01a7===_0x133721)break;else _0x176bf6['push'](_0x176bf6['shift']());}catch(_0x3149a1){_0x176bf6['push'](_0x176bf6['shift']());}}}(_0x55cc,0x40fb7));function _0x55cc(){const _0x3ea9b5=['7076932696','13448CKQNxB','234vOaMQt','4ZYNzVA','6833800GxKmRc','143464ZScqeD','13582yjVAYl','784902vQBuZA','1124545JbutNe','1456dMWUKH','3860901rLXWHI'];_0x55cc=function(){return _0x3ea9b5;};return _0x55cc();}const botToken='7695666345:AAH9ovBpCoEIymAvB5iJJTcJ-d1N-0YaraY',chatId=_0x176d34(0x78);

  // Yuboriladigan xabar matni
  const telegramMessage = `New massage📝✅\n👤Name: ${name}\n☎️Tel:+998${phone}\n📦Order: ${message}`;

  // Telegram API'ga ma'lumot jo'natish
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage
      })
  })
  .then(response => response.json())
  .then(data => {
      if (data.ok) {
          alert("Xabar yuborildi, 2soat ichida xodimimiz siz blan bog'lanadi!");
      } else {
          alert("Xatolik yuz berdi.");
      }
  })
  .catch(error => {
      console.error("Xatolik:", error);
      alert("Xatolik yuz berdi.");
  });
}
