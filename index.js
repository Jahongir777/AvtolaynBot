// const { Telegraf } = require('telegraf');
const { Composer } = require('micro-bot')

const { Markup } = require('telegraf');


// const token = "1909697460:AAFzn_C9FnovfxTZKpmSBlMzGO0SeIQXXQ0";
const bot = new Composer()

//const bot = new Telegraf(token);


bot.command('start', async (ctx) => {
    return await ctx.reply(`Assalom alaykum ${ctx.message.from.first_name}!  Pastdan kerakli b\'limni tanlang! `, Markup
      .keyboard([
        ['🚘 Avtolayn haqida', '🚙 Avtomabillar'],
        ['👩‍💻 Online avtomabil harid qilish'],
        ['♻️ Trade-In','🚖 1080 Avtolayn', '🔧 Servis hizmatlari'],
         ['☎️ Aloqa', '📍 Location']
      ])
      .resize()
    )
  });

  bot.hears('📍 Location', async (ctx) => {
    ctx.telegram.sendLocation(ctx.chat.id, 41.56044515274724, 60.607803062078204)
  })

  bot.hears('🚖 1080 Avtolayn', async (ctx) => {
    return await ctx.replyWithPhoto({source: `./img/1080.jpg`}, {caption: `🏁🏁🏁 1080 qisqa raqamini tering yoki ilova orqali taksi buyurtma qiling!!!
    
    📲 Ilovani yuklab olish uchun pastdagi yuklab olish tugmasini bosing
    
    👇👇👇 Bizni quyidagi ijtimoiy tarmoqlar orqali kuzatib boring 

    <a href="https://t.me/Avtolayn">Telegram</a> | <a href="https://www.youtube.com/channel/UCUAa-UaZzIeOOPOBi7xk_6Q">YouTube</a> | <a href="https://instagram.com/avtolaynuz">Instagram</a>
      `,
     
     parse_mode: 'html', 
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [ 
      [{text: `📲 Ilovani yuklab olish`, url: 'https://play.google.com/store/apps/details?id=uz.avtolayn.taxi.client'}]
    ]
  }})})


  bot.hears('☎️ Aloqa', async (ctx) => {
    return await ctx.replyWithPhoto(
      {source: './img/contact3.jpg'}, 
      {caption: `📞📞📞 O'zingizni qiziqtirgan barcha savollar bo'yicha biz bilan bog'lanib ma'lumot olishingiz mumkin.
      
      Biz bilan aloqa uchun:

    <b>📞 Telefon:</b> +998 62 226 03 33
    <b>📞 Telefon:</b> +998 97 123 45 67
    <b>🌐 Telegram:</b> <a href="https://t.me/Avtolayn">Adminstrator</a>
    <b>🌐 Instagram:</b> <a href="https://instagram.com/avtolaynuz">Adminstrator</a>

    <b>🚩 Manzil:</b> O'zbekiston, 220100, Urganch sh, Sanoatchilar ko'chasi, 201
    

   👇👇👇 Bizni quyidagi ijtimoiy tarmoqlar orqali kuzatib boring 

    <a href="https://t.me/Avtolayn">Telegram</a> | <a href="https://www.youtube.com/channel/UCUAa-UaZzIeOOPOBi7xk_6Q">YouTube</a> | <a href="https://instagram.com/avtolaynuz">Instagram</a>
      `, parse_mode: 'html' })
  })



  bot.hears('🔧 Servis hizmatlari', async (ctx) => {
    return await ctx.replyWithPhoto(
      {source: './img/autoservise.png'}, 
      {caption: `⚒⚒⚒⚙️⚙️⚙️🔧🔧🔧 Bizning markazimiz orqali siz quyidagi hizmatlardan foydalanishingiz mumkin.

      🔹 Motor va hodovoy
      🔹 Elektrik
      🔹 Gaz ustanovka
      🔹 Kuzov remont
      🔹 Hamda eng asosiysi avtomabilingizni texnik ko'rikdan o'tkazishingiz mumkin bo'ladi.

    <b>📞 Tel:</b> +998971234567
    <b>🚩 Manzil:</b> O'zbekiston, 220100, Urganch sh, Sanoatchilar ko'chasi, 201
    <b>🚩 Mo\'ljal:</b> Xiva krug.

    

   👇👇👇 Bizni quyidagi ijtimoiy tarmoqlar orqali kuzatib boring 

    <a href="https://t.me/Avtolayn">Telegram</a> | <a href="https://www.youtube.com/channel/UCUAa-UaZzIeOOPOBi7xk_6Q">YouTube</a> | <a href="https://instagram.com/avtolaynuz">Instagram</a>
      `, parse_mode: 'html' })
  })


  bot.hears('♻️ Trade-In', async (ctx) => {
    return await ctx.replyWithPhoto(
      {source: './img/trade-in.jpg'}, 
      {caption: `
      
      "TRADE-IN nima?"

Trade-In sizga o'zingizni avtomabilingizni rasmiy dilerga topshirib yangi avtomabil sohibi bo'lish imkoniyatini beradi.

<b>Avtomabilingizni yangisiga almashtirish tartibi:</b>

1. Siz avtosalonda yangi avtomabilni tanlaysiz.
2. Avtosalon mutaxasisi sizning avtomabilingizni texnik holati va ishlab chiqarilgan yili bo'yicha baholaydi.
3. Siz avtomabilingizni yangisizga almashtirish shartomasini imzolaysiz, bunda bitimni notarial tasdiqlashning hojati yo'q.
4. Siz yangi moshina narxi bilan eskisining narxi o'rtasidagi farqni to'laysiz.
5. Siz yangi avtomabil sohibiga aylanasiz.

Trade-In datsurida ikkita kelishuv amalga oshiriladi: 

🔶 Yangi avtomabilni sotib olish.
🔶 Foydalanilgan avtomabilni sotish.


    <b>📞 Tel:</b> +998971234567
    <b>🚩 Manzil:</b> O'zbekiston, 220100, Urganch sh, Sanoatchilar ko'chasi, 201
    

   👇👇👇 Bizni quyidagi ijtimoiy tarmoqlar orqali kuzatib boring 

    <a href="https://t.me/Avtolayn">Telegram</a> | <a href="https://www.youtube.com/channel/UCUAa-UaZzIeOOPOBi7xk_6Q">YouTube</a> | <a href="https://instagram.com/avtolaynuz">Instagram</a>
      `, parse_mode: 'html' })
  })


  bot.hears('🚘 Avtolayn haqida', async (ctx) => {
    return await ctx.replyWithPhoto({source: './img/avtolayn.jpg'}, 
    {caption:  `
    📣📣📣 <b>"Avtolayn"</b>  Xorazm viloyatida yagona bo'lgan ko'p tarmoqli avto markaz hisoblanadi. Markazimizda siz avtombil sotib olishingiz, avto raqam, sug'urta, avtoservis hizmatlari kabi hizmatlardan bir joyning o'zida foydalana olashingiz mumkin.

    <b>Markazimizda quyidagilarga ega bo'lasiz:</b>

    🟢 Avtomabil harid qilish
    🟢 Avtosug'urta
    🟢 Avtoraqam harid qilish
    🟢 Avtoservis hizmatlaridan foydalanish

    <b>📞 Tel:</b> +998971234567
    <b>🚩 Manzil:</b> O'zbekiston, 220100, Urganch sh, Sanoatchilar ko'chasi, 201

    👇👇👇 Bizni quyidagi ijtimoiy tarmoqlar orqali kuzatib boring 

    <a href="https://t.me/Avtolayn">Telegram</a> | <a href="https://www.youtube.com/channel/UCUAa-UaZzIeOOPOBi7xk_6Q">YouTube</a> | <a href="https://instagram.com/avtolaynuz">Instagram</a>
    `, parse_mode: 'html'},
    {
    parse_mode: 'html', 
    disable_web_page_preview: true
    });
  });

  bot.hears('👩‍💻 Online avtomabil harid qilish', async (ctx) => {
    return await ctx.reply(`📌📌📌 Endi harid qilish yanda oson, siz bizning web saytimiz orqali  avtomabil sotib olish uchun online ariza qoldirishingiz mumkin.
   Bunda esa siz:

    🔵 <b>Professional
    🔵 Tez
    🔵 Qulay
    🔵 Optimal ravishda</b>

      haridngizni amalga oshirishingiz mumkin bo'ladi.

    Hamda web saytimiz sizga sovuq va issiq havoda uydan chiqmasdan va navbat kutib qimmatli vaqtingizni sarflamasdan tez va qulay ariza qoldirish imkonini beradi. Web saytimizga o'tish uchun pastdagi <b>"Web saytga o'tish"</b> tugmasini bosing va saytimiz orqali ariza qoldiring va tez orada biz siz bilan bog'lanamiz.
    

    👇👇👇 Bizni quyidagi ijtimoiy tarmoqlar orqali kuzatib boring 

    <a href="https://t.me/Avtolayn">Telegram</a> | <a href="https://www.youtube.com/channel/UCUAa-UaZzIeOOPOBi7xk_6Q">YouTube</a> | <a href="https://instagram.com/avtolaynuz">Instagram</a>
    `,
     
     {parse_mode: 'html', 
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [ 
      [{text: `Web saytga o'tish`, url: 'https://avtolayn.uz/ru/cars'}]
    ]
  }})})

  
  bot.hears('🚙 Avtomabillar', async (ctx) => {
    return await ctx.reply('🚙 Avtomabillar', Markup.keyboard([
        ['TRAILBLAZER', 'MALIBU - 2', 'TAHOE'],
        ['TRAVERSE', 'EQUINOX'],
        ['TRACKER - 2', 'TRACKER', 'LACETTI'],
        ['COBALT', 'NEXIA - 3', 'SPARK', 'DAMAS - 2'],
        ['🔝 BOSH MENUGA QAYTISH']
      ])
      .resize()
    )
  })

  //spark

  bot.hears('SPARK', async (ctx) => {
    return await ctx.reply(`O'zingiz hohlagan rangdagi avtomabilni tanlang`, Markup.keyboard([
        ['⚪️ Spark Oq', '⚫️ Spark Qora', '🔵 Spark Ko\'k'],
        ['🔝 ORQAGA QAYTISH']
      ])
      .resize()
    )
  })

  bot.hears('⚪️ Spark Oq', async (ctx) => {
    return await ctx.replyWithPhoto(
      {source: './img/spark/oqspark.png'}, 
      {caption: `
      
    <b>SPARK</b>

   🔹 <b>Shahar:</b> Urganch
   🔹 <b>Yukxona sig'imi (L):</b> 170 / 568 L
   🔹 <b>Uzatish qutisi:</b> MT5 / AT4
   🔹 <b>Xavfsizlik:</b> ABS
   🔹 <b>Yonilg'i iste'moli:</b> 6,2 / 8,2 L
   🔹 <b>Xavfsizlik yostiqchalari:</b> 1

   <a href="https://avtolayn.uz/ru/cars/52">Batafsil ma'lumot uchun...</a>

   👇👇👇 Bizni quyidagi ijtimoiy tarmoqlar orqali kuzatib boring 

    <a href="https://t.me/Avtolayn">Telegram</a> | <a href="https://www.youtube.com/channel/UCUAa-UaZzIeOOPOBi7xk_6Q">YouTube</a> | <a href="https://instagram.com/avtolaynuz">Instagram</a>
      `, parse_mode: 'html' })
  })

  bot.hears('⚫️ Spark Qora', async (ctx) => {
    return await ctx.replyWithPhoto(
      {source: './img/spark/sparkqora.png'}, 
      {caption: `
      
    <b>SPARK</b>

   🔹 <b>Shahar:</b> Urganch
   🔹 <b>Yukxona sig'imi (L):</b> 170 / 568 L
   🔹 <b>Uzatish qutisi:</b> MT5 / AT4
   🔹 <b>Xavfsizlik:</b> ABS
   🔹 <b>Yonilg'i iste'moli:</b> 6,2 / 8,2 L
   🔹 <b>Xavfsizlik yostiqchalari:</b> 1

   <a href="https://avtolayn.uz/ru/cars/52">Batafsil ma'lumot uchun...</a>

   👇👇👇 Bizni quyidagi ijtimoiy tarmoqlar orqali kuzatib boring 

    <a href="https://t.me/Avtolayn">Telegram</a> | <a href="https://www.youtube.com/channel/UCUAa-UaZzIeOOPOBi7xk_6Q">YouTube</a> | <a href="https://instagram.com/avtolaynuz">Instagram</a>
      `, parse_mode: 'html' })
  })

  bot.hears('🔵 Spark Ko\'k', async (ctx) => {
    return await ctx.replyWithPhoto(
      {source: './img/spark/sparkko\'k.png'}, 
      {caption: `
      
    <b>SPARK</b>

   🔹 <b>Shahar:</b> Urganch
   🔹 <b>Yukxona sig'imi (L):</b> 170 / 568 L
   🔹 <b>Uzatish qutisi:</b> MT5 / AT4
   🔹 <b>Xavfsizlik:</b> ABS
   🔹 <b>Yonilg'i iste'moli:</b> 6,2 / 8,2 L
   🔹 <b>Xavfsizlik yostiqchalari:</b> 1

   <a href="https://avtolayn.uz/ru/cars/52">Batafsil ma'lumot uchun...</a>

   👇👇👇 Bizni quyidagi ijtimoiy tarmoqlar orqali kuzatib boring 

    <a href="https://t.me/Avtolayn">Telegram</a> | <a href="https://www.youtube.com/channel/UCUAa-UaZzIeOOPOBi7xk_6Q">YouTube</a> | <a href="https://instagram.com/avtolaynuz">Instagram</a>
      `, parse_mode: 'html' })
  })
  //spark

//damas
bot.hears('DAMAS - 2', async (ctx) => {
  return await ctx.reply(`O'zingiz hohlagan rangdagi avtomabilni tanlang`, Markup.keyboard([
      ['⚪️ Damas-2 Oq'],
      ['🔝 ORQAGA QAYTISH']
    ])
    .resize()
  )
})


bot.hears('⚪️ Damas-2 Oq', async (ctx) => {
  return await ctx.replyWithPhoto(
    {source: './img/damas-2/oqdamas-2.png'}, 
    {caption: `
    
  <b>DAMAS - 2</b>

 🔹 <b>Shahar:</b> Urganch
 🔹 <b>Yukxona sig'imi (L):</b> 450 L
 🔹 <b>Uzatish qutisi:</b> MT5
 🔹 <b>Xavfsizlik:</b> -
 🔹 <b>Yonilg'i iste'moli:</b> 7,8 / 8,6 L
 🔹 <b>Xavfsizlik yostiqchalari:</b> -

 <a href="https://avtolayn.uz/ru/cars/43">Batafsil ma'lumot uchun...</a>

 👇👇👇 Bizni quyidagi ijtimoiy tarmoqlar orqali kuzatib boring 

  <a href="https://t.me/Avtolayn">Telegram</a> | <a href="https://www.youtube.com/channel/UCUAa-UaZzIeOOPOBi7xk_6Q">YouTube</a> | <a href="https://instagram.com/avtolaynuz">Instagram</a>
    `, parse_mode: 'html' })
})

//damas

  //nexia-3
  bot.hears('NEXIA - 3', async (ctx) => {
    return await ctx.reply(`O'zingiz hohlagan rangdagi avtomabilni tanlang`, Markup.keyboard([
        ['⚪️ Nexia-3 Oq', '🟤 Nexia-3 Jigarrang', '🔵 Nexia-3 Ko\'k'],
        ['🔝 ORQAGA QAYTISH']
      ])
      .resize()
    )
  })


  bot.hears('⚪️ Nexia-3 Oq', async (ctx) => {
    return await ctx.replyWithPhoto(
      {source: './img/nexia-3/oqnexia-3.png'}, 
      {caption: `
      
    <b>NEXIA - 3</b>

   🔹 <b>Shahar:</b> Urganch
   🔹 <b>Yukxona sig'imi (L):</b> 400 L
   🔹 <b>Uzatish qutisi:</b> MT5 / AT6
   🔹 <b>Xavfsizlik:</b> ABS
   🔹 <b>Yonilg'i iste'moli:</b> 8 / 9,3 L
   🔹 <b>Xavfsizlik yostiqchalari:</b> 2

   <a href="https://avtolayn.uz/ru/cars/50">Batafsil ma'lumot uchun...</a>

   👇👇👇 Bizni quyidagi ijtimoiy tarmoqlar orqali kuzatib boring 

    <a href="https://t.me/Avtolayn">Telegram</a> | <a href="https://www.youtube.com/channel/UCUAa-UaZzIeOOPOBi7xk_6Q">YouTube</a> | <a href="https://instagram.com/avtolaynuz">Instagram</a>
      `, parse_mode: 'html' })
  })

  bot.hears('🟤 Nexia-3 Jigarrang', async (ctx) => {
    return await ctx.replyWithPhoto(
      {source: './img/nexia-3/jigarrangnexia-3.jpg'}, 
      {caption: `
      
    <b>NEXIA - 3</b>

   🔹 <b>Shahar:</b> Urganch
   🔹 <b>Yukxona sig'imi (L):</b> 400 L
   🔹 <b>Uzatish qutisi:</b> MT5 / AT6
   🔹 <b>Xavfsizlik:</b> ABS
   🔹 <b>Yonilg'i iste'moli:</b> 8 / 9,3 L
   🔹 <b>Xavfsizlik yostiqchalari:</b> 2

   <a href="https://avtolayn.uz/ru/cars/50">Batafsil ma'lumot uchun...</a>

   👇👇👇 Bizni quyidagi ijtimoiy tarmoqlar orqali kuzatib boring 

    <a href="https://t.me/Avtolayn">Telegram</a> | <a href="https://www.youtube.com/channel/UCUAa-UaZzIeOOPOBi7xk_6Q">YouTube</a> | <a href="https://instagram.com/avtolaynuz">Instagram</a>
      `, parse_mode: 'html' })
  })

  bot.hears('🔵 Nexia-3 Ko\'k', async (ctx) => {
    return await ctx.replyWithPhoto(
      {source: './img/nexia-3/ko\'knexia-3.png'}, 
      {caption: `
      
    <b>NEXIA - 3</b>

   🔹 <b>Shahar:</b> Urganch
   🔹 <b>Yukxona sig'imi (L):</b> 400 L
   🔹 <b>Uzatish qutisi:</b> MT5 / AT6
   🔹 <b>Xavfsizlik:</b> ABS
   🔹 <b>Yonilg'i iste'moli:</b> 8 / 9,3 L
   🔹 <b>Xavfsizlik yostiqchalari:</b> 2

   <a href="https://avtolayn.uz/ru/cars/50">Batafsil ma'lumot uchun...</a>

   👇👇👇 Bizni quyidagi ijtimoiy tarmoqlar orqali kuzatib boring 

    <a href="https://t.me/Avtolayn">Telegram</a> | <a href="https://www.youtube.com/channel/UCUAa-UaZzIeOOPOBi7xk_6Q">YouTube</a> | <a href="https://instagram.com/avtolaynuz">Instagram</a>
      `, parse_mode: 'html' })
  })
//nexia-3


//cobolt

bot.hears('COBALT', async (ctx) => {
  return await ctx.reply(`O'zingiz hohlagan rangdagi avtomabilni tanlang`, Markup.keyboard([
      ['⚪️ Cobalt Oq', '🔴 Cobalt Qizil', '🔵 Cobalt Ko\'k'],
      ['🔝 ORQAGA QAYTISH']
    ])
    .resize()
  )
})


bot.hears('⚪️ Cobalt Oq', async (ctx) => {
  return await ctx.replyWithPhoto(
    {source: './img/cobolt/oqcobolt.png'}, 
    {caption: `
    
  <b>COBALT</b>

 🔹 <b>Shahar:</b> Urganch
 🔹 <b>Yukxona sig'imi (L):</b> 563 L
 🔹 <b>Uzatish qutisi:</b> MT5 / AT6
 🔹 <b>Xavfsizlik:</b> ABS
 🔹 <b>Yonilg'i iste'moli:</b> 8,5 / 9 L
 🔹 <b>Xavfsizlik yostiqchalari:</b> 2

 <a href="https://avtolayn.uz/ru/cars/42">Batafsil ma'lumot uchun...</a>

 👇👇👇 Bizni quyidagi ijtimoiy tarmoqlar orqali kuzatib boring 

  <a href="https://t.me/Avtolayn">Telegram</a> | <a href="https://www.youtube.com/channel/UCUAa-UaZzIeOOPOBi7xk_6Q">YouTube</a> | <a href="https://instagram.com/avtolaynuz">Instagram</a>
    `, parse_mode: 'html' })
})


bot.hears('🔴 Cobalt Qizil', async (ctx) => {
  return await ctx.replyWithPhoto(
    {source: './img/cobolt/qizilcobalt.png'}, 
    {caption: `
    
  <b>COBALT</b>

 🔹 <b>Shahar:</b> Urganch
 🔹 <b>Yukxona sig'imi (L):</b> 563 L
 🔹 <b>Uzatish qutisi:</b> MT5 / AT6
 🔹 <b>Xavfsizlik:</b> ABS
 🔹 <b>Yonilg'i iste'moli:</b> 8,5 / 9 L
 🔹 <b>Xavfsizlik yostiqchalari:</b> 2

 <a href="https://avtolayn.uz/ru/cars/42">Batafsil ma'lumot uchun...</a>

 👇👇👇 Bizni quyidagi ijtimoiy tarmoqlar orqali kuzatib boring 

  <a href="https://t.me/Avtolayn">Telegram</a> | <a href="https://www.youtube.com/channel/UCUAa-UaZzIeOOPOBi7xk_6Q">YouTube</a> | <a href="https://instagram.com/avtolaynuz">Instagram</a>
    `, parse_mode: 'html' })
})


bot.hears('🔵 Cobalt Ko\'k', async (ctx) => {
  return await ctx.replyWithPhoto(
    {source: './img/cobolt/ko\'kcobolt.png'}, 
    {caption: `
    
  <b>COBALT</b>

 🔹 <b>Shahar:</b> Urganch
 🔹 <b>Yukxona sig'imi (L):</b> 563 L
 🔹 <b>Uzatish qutisi:</b> MT5 / AT6
 🔹 <b>Xavfsizlik:</b> ABS
 🔹 <b>Yonilg'i iste'moli:</b> 8,5 / 9 L
 🔹 <b>Xavfsizlik yostiqchalari:</b> 2

 <a href="https://avtolayn.uz/ru/cars/42">Batafsil ma'lumot uchun...</a>

 👇👇👇 Bizni quyidagi ijtimoiy tarmoqlar orqali kuzatib boring 

  <a href="https://t.me/Avtolayn">Telegram</a> | <a href="https://www.youtube.com/channel/UCUAa-UaZzIeOOPOBi7xk_6Q">YouTube</a> | <a href="https://instagram.com/avtolaynuz">Instagram</a>
    `, parse_mode: 'html' })
})

//cobolt



//lacetti

bot.hears('LACETTI', async (ctx) => {
  return await ctx.reply(`O'zingiz hohlagan rangdagi avtomabilni tanlang`, Markup.keyboard([
      ['⚪️ Lacetti Oq', '⚫️ Lacetti Qora', '🔴 Lacetti Qizil'],
      ['🔝 ORQAGA QAYTISH']
    ])
    .resize()
  )
})

bot.hears('⚪️ Lacetti Oq', async (ctx) => {
  return await ctx.replyWithPhoto(
    {source: './img/lacetti/oqlacetti.png'}, 
    {caption: `
    
  <b>LACETTI</b>

 🔹 <b>Shahar:</b> Urganch
 🔹 <b>Yukxona sig'imi (L):</b> 405 L
 🔹 <b>Uzatish qutisi:</b> MT5 / AT6
 🔹 <b>Xavfsizlik:</b> ABS
 🔹 <b>Yonilg'i iste'moli:</b> 8,5 / 9,5 L
 🔹 <b>Xavfsizlik yostiqchalari:</b> 2

 <a href="https://avtolayn.uz/ru/cars/45">Batafsil ma'lumot uchun...</a>

 👇👇👇 Bizni quyidagi ijtimoiy tarmoqlar orqali kuzatib boring 

  <a href="https://t.me/Avtolayn">Telegram</a> | <a href="https://www.youtube.com/channel/UCUAa-UaZzIeOOPOBi7xk_6Q">YouTube</a> | <a href="https://instagram.com/avtolaynuz">Instagram</a>
    `, parse_mode: 'html' })
})

bot.hears('⚫️ Lacetti Qora', async (ctx) => {
  return await ctx.replyWithPhoto(
    {source: './img/lacetti/qoralacetti.png'}, 
    {caption: `
    
  <b>LACETTI</b>

 🔹 <b>Shahar:</b> Urganch
 🔹 <b>Yukxona sig'imi (L):</b> 405 L
 🔹 <b>Uzatish qutisi:</b> MT5 / AT6
 🔹 <b>Xavfsizlik:</b> ABS
 🔹 <b>Yonilg'i iste'moli:</b> 8,5 / 9,5 L
 🔹 <b>Xavfsizlik yostiqchalari:</b> 2

 <a href="https://avtolayn.uz/ru/cars/45">Batafsil ma'lumot uchun...</a>

 👇👇👇 Bizni quyidagi ijtimoiy tarmoqlar orqali kuzatib boring 

  <a href="https://t.me/Avtolayn">Telegram</a> | <a href="https://www.youtube.com/channel/UCUAa-UaZzIeOOPOBi7xk_6Q">YouTube</a> | <a href="https://instagram.com/avtolaynuz">Instagram</a>
    `, parse_mode: 'html' })
})

bot.hears('🔴 Lacetti Qizil', async (ctx) => {
  return await ctx.replyWithPhoto(
    {source: './img/lacetti/qizillacetti.jpg'}, 
    {caption: `
    
  <b>LACETTI</b>

 🔹 <b>Shahar:</b> Urganch
 🔹 <b>Yukxona sig'imi (L):</b> 405 L
 🔹 <b>Uzatish qutisi:</b> MT5 / AT6
 🔹 <b>Xavfsizlik:</b> ABS
 🔹 <b>Yonilg'i iste'moli:</b> 8,5 / 9,5 L
 🔹 <b>Xavfsizlik yostiqchalari:</b> 2

 <a href="https://avtolayn.uz/ru/cars/45">Batafsil ma'lumot uchun...</a>

 👇👇👇 Bizni quyidagi ijtimoiy tarmoqlar orqali kuzatib boring 

  <a href="https://t.me/Avtolayn">Telegram</a> | <a href="https://www.youtube.com/channel/UCUAa-UaZzIeOOPOBi7xk_6Q">YouTube</a> | <a href="https://instagram.com/avtolaynuz">Instagram</a>
    `, parse_mode: 'html' })
})

//lacetti

//tracer-2

bot.hears('TRACKER - 2', async (ctx) => {
  return await ctx.reply(`O'zingiz hohlagan rangdagi avtomabilni tanlang`, Markup.keyboard([
      ['⚪️ Tracker-2 Oq', '🔴 Tracker-2 Qizil', '🔵 Tracker-2 Ko\'k'],
      ['🔝 ORQAGA QAYTISH']
    ])
    .resize()
  )
})

bot.hears('⚪️ Tracker-2 Oq', async (ctx) => {
  return await ctx.replyWithPhoto(
    {source: './img/trekker-2/oqtrekker-2.jpg'}, 
    {caption: `
    
  <b>TRACKER - 2</b>

 🔹 <b>Shahar:</b> Urganch
 🔹 <b>Yukxona sig'imi (L):</b> 2781 L
 🔹 <b>Uzatish qutisi:</b> AT9
 🔹 <b>Xavfsizlik:</b> ABS
 🔹 <b>Yonilg'i iste'moli:</b> 10 L
 🔹 <b>Xavfsizlik yostiqchalari:</b> 12

 <a href="https://avtolayn.uz/ru/cars/117">Batafsil ma'lumot uchun...</a>

 👇👇👇 Bizni quyidagi ijtimoiy tarmoqlar orqali kuzatib boring 

  <a href="https://t.me/Avtolayn">Telegram</a> | <a href="https://www.youtube.com/channel/UCUAa-UaZzIeOOPOBi7xk_6Q">YouTube</a> | <a href="https://instagram.com/avtolaynuz">Instagram</a>
    `, parse_mode: 'html' })
})


bot.hears('🔴 Tracker-2 Qizil', async (ctx) => {
  return await ctx.replyWithPhoto(
    {source: './img/trekker-2/qiziltrekker-2.png'}, 
    {caption: `
    
  <b>TRACKER - 2</b>

 🔹 <b>Shahar:</b> Urganch
 🔹 <b>Yukxona sig'imi (L):</b> 2781 L
 🔹 <b>Uzatish qutisi:</b> AT9
 🔹 <b>Xavfsizlik:</b> ABS
 🔹 <b>Yonilg'i iste'moli:</b> 10 L
 🔹 <b>Xavfsizlik yostiqchalari:</b> 12

 <a href="https://avtolayn.uz/ru/cars/117">Batafsil ma'lumot uchun...</a>

 👇👇👇 Bizni quyidagi ijtimoiy tarmoqlar orqali kuzatib boring 

  <a href="https://t.me/Avtolayn">Telegram</a> | <a href="https://www.youtube.com/channel/UCUAa-UaZzIeOOPOBi7xk_6Q">YouTube</a> | <a href="https://instagram.com/avtolaynuz">Instagram</a>
    `, parse_mode: 'html' })
})

bot.hears('🔵 Tracker-2 Ko\'k', async (ctx) => {
  return await ctx.replyWithPhoto(
    {source: './img/trekker-2/ko\'ktrekker-2.jpg'}, 
    {caption: `
    
  <b>TRACKER - 2</b>

 🔹 <b>Shahar:</b> Urganch
 🔹 <b>Yukxona sig'imi (L):</b> 2781 L
 🔹 <b>Uzatish qutisi:</b> AT9
 🔹 <b>Xavfsizlik:</b> ABS
 🔹 <b>Yonilg'i iste'moli:</b> 10 L
 🔹 <b>Xavfsizlik yostiqchalari:</b> 12

 <a href="https://avtolayn.uz/ru/cars/117">Batafsil ma'lumot uchun...</a>

 👇👇👇 Bizni quyidagi ijtimoiy tarmoqlar orqali kuzatib boring 

  <a href="https://t.me/Avtolayn">Telegram</a> | <a href="https://www.youtube.com/channel/UCUAa-UaZzIeOOPOBi7xk_6Q">YouTube</a> | <a href="https://instagram.com/avtolaynuz">Instagram</a>
    `, parse_mode: 'html' })
})
//tracer-2


//tracer

bot.hears('TRACKER', async (ctx) => {
  return await ctx.reply(`O'zingiz hohlagan rangdagi avtomabilni tanlang`, Markup.keyboard([
      ['⚪️ Tracker Oq', '🟤 Tracker Jigarrang', '⚫️ Tracker Qora'],
      ['🔝 ORQAGA QAYTISH']
    ])
    .resize()
  )
})


bot.hears('⚪️ Tracker Oq', async (ctx) => {
  return await ctx.replyWithPhoto(
    {source: './img/trekker/oqtrakker.png'}, 
    {caption: `
    
  <b>TRACKER</b>

 🔹 <b>Shahar:</b> Urganch
 🔹 <b>Yukxona sig'imi (L):</b> 356 / 1370 L
 🔹 <b>Uzatish qutisi:</b> MT5 / AT6
 🔹 <b>Xavfsizlik:</b> ABS
 🔹 <b>Yonilg'i iste'moli:</b> 7.9 L
 🔹 <b>Xavfsizlik yostiqchalari:</b> 4 / 6

 <a href="https://avtolayn.uz/ru/cars/95">Batafsil ma'lumot uchun...</a>

 👇👇👇 Bizni quyidagi ijtimoiy tarmoqlar orqali kuzatib boring 

  <a href="https://t.me/Avtolayn">Telegram</a> | <a href="https://www.youtube.com/channel/UCUAa-UaZzIeOOPOBi7xk_6Q">YouTube</a> | <a href="https://instagram.com/avtolaynuz">Instagram</a>
    `, parse_mode: 'html' })
})


bot.hears('🟤 Tracker Jigarrang', async (ctx) => {
  return await ctx.replyWithPhoto(
    {source: './img/trekker-2/jigarrangtrekker.jpg'}, 
    {caption: `
    
  <b>TRACKER</b>

 🔹 <b>Shahar:</b> Urganch
 🔹 <b>Yukxona sig'imi (L):</b> 356 / 1370 L
 🔹 <b>Uzatish qutisi:</b> MT5 / AT6
 🔹 <b>Xavfsizlik:</b> ABS
 🔹 <b>Yonilg'i iste'moli:</b> 7.9 L
 🔹 <b>Xavfsizlik yostiqchalari:</b> 4 / 6

 <a href="https://avtolayn.uz/ru/cars/95">Batafsil ma'lumot uchun...</a>

 👇👇👇 Bizni quyidagi ijtimoiy tarmoqlar orqali kuzatib boring 

  <a href="https://t.me/Avtolayn">Telegram</a> | <a href="https://www.youtube.com/channel/UCUAa-UaZzIeOOPOBi7xk_6Q">YouTube</a> | <a href="https://instagram.com/avtolaynuz">Instagram</a>
    `, parse_mode: 'html' })
})

bot.hears('⚫️ Tracker Qora', async (ctx) => {
  return await ctx.replyWithPhoto(
    {source: './img/trekker/qoratrekker.jpg'}, 
    {caption: `
    
  <b>TRACKER</b>

 🔹 <b>Shahar:</b> Urganch
 🔹 <b>Yukxona sig'imi (L):</b> 356 / 1370 L
 🔹 <b>Uzatish qutisi:</b> MT5 / AT6
 🔹 <b>Xavfsizlik:</b> ABS
 🔹 <b>Yonilg'i iste'moli:</b> 7.9 L
 🔹 <b>Xavfsizlik yostiqchalari:</b> 4 / 6

 <a href="https://avtolayn.uz/ru/cars/95">Batafsil ma'lumot uchun...</a>

 👇👇👇 Bizni quyidagi ijtimoiy tarmoqlar orqali kuzatib boring 

  <a href="https://t.me/Avtolayn">Telegram</a> | <a href="https://www.youtube.com/channel/UCUAa-UaZzIeOOPOBi7xk_6Q">YouTube</a> | <a href="https://instagram.com/avtolaynuz">Instagram</a>
    `, parse_mode: 'html' })
})
//tracer

//equinox
bot.hears('EQUINOX', async (ctx) => {
  return await ctx.reply(`O'zingiz hohlagan rangdagi avtomabilni tanlang`, Markup.keyboard([
      ['⚪️ Equinox Oq', '⚫️ Equinox Qora', '🔴 Equinox Qizil'],
      ['🔝 ORQAGA QAYTISH']
    ])
    .resize()
  )
})

bot.hears('⚪️ Equinox Oq', async (ctx) => {
  return await ctx.replyWithPhoto(
    {source: './img/equinox/oqequinox.png'}, 
    {caption: `
    
  <b>EQUINOX</b>

 🔹 <b>Shahar:</b> Urganch
 🔹 <b>Yukxona sig'imi (L):</b> 1627 L
 🔹 <b>Uzatish qutisi:</b> AT9
 🔹 <b>Xavfsizlik:</b> ABS
 🔹 <b>Yonilg'i iste'moli:</b> 8,2 L
 🔹 <b>Xavfsizlik yostiqchalari:</b> 6

 <a href="https://avtolayn.uz/ru/cars/119">Batafsil ma'lumot uchun...</a>

 👇👇👇 Bizni quyidagi ijtimoiy tarmoqlar orqali kuzatib boring 

  <a href="https://t.me/Avtolayn">Telegram</a> | <a href="https://www.youtube.com/channel/UCUAa-UaZzIeOOPOBi7xk_6Q">YouTube</a> | <a href="https://instagram.com/avtolaynuz">Instagram</a>
    `, parse_mode: 'html' })
})


bot.hears('🔴 Equinox Qizil', async (ctx) => {
  return await ctx.replyWithPhoto(
    {source: './img/equinox/qizilequinox.jpeg'}, 
    {caption: `
    
  <b>EQUINOX</b>

 🔹 <b>Shahar:</b> Urganch
 🔹 <b>Yukxona sig'imi (L):</b> 1627 L
 🔹 <b>Uzatish qutisi:</b> AT9
 🔹 <b>Xavfsizlik:</b> ABS
 🔹 <b>Yonilg'i iste'moli:</b> 8,2 L
 🔹 <b>Xavfsizlik yostiqchalari:</b> 6

 <a href="https://avtolayn.uz/ru/cars/119">Batafsil ma'lumot uchun...</a>

 👇👇👇 Bizni quyidagi ijtimoiy tarmoqlar orqali kuzatib boring 

  <a href="https://t.me/Avtolayn">Telegram</a> | <a href="https://www.youtube.com/channel/UCUAa-UaZzIeOOPOBi7xk_6Q">YouTube</a> | <a href="https://instagram.com/avtolaynuz">Instagram</a>
    `, parse_mode: 'html' })
})

bot.hears('⚫️ Equinox Qora', async (ctx) => {
  return await ctx.replyWithPhoto(
    {source: './img/equinox/qoraequinox.jpg'}, 
    {caption: `
    
  <b>EQUINOX</b>

 🔹 <b>Shahar:</b> Urganch
 🔹 <b>Yukxona sig'imi (L):</b> 1627 L
 🔹 <b>Uzatish qutisi:</b> AT9
 🔹 <b>Xavfsizlik:</b> ABS
 🔹 <b>Yonilg'i iste'moli:</b> 8,2 L
 🔹 <b>Xavfsizlik yostiqchalari:</b> 6

 <a href="https://avtolayn.uz/ru/cars/119">Batafsil ma'lumot uchun...</a>

 👇👇👇 Bizni quyidagi ijtimoiy tarmoqlar orqali kuzatib boring 

  <a href="https://t.me/Avtolayn">Telegram</a> | <a href="https://www.youtube.com/channel/UCUAa-UaZzIeOOPOBi7xk_6Q">YouTube</a> | <a href="https://instagram.com/avtolaynuz">Instagram</a>
    `, parse_mode: 'html' })
})


//equinox

//traverse
bot.hears('TRAVERSE', async (ctx) => {
  return await ctx.reply(`O'zingiz hohlagan rangdagi avtomabilni tanlang`, Markup.keyboard([
      ['⚪️ Traverse Oq', '⚫️ Traverse Qora', '🔴 Traverse Qizil'],
      ['🔝 ORQAGA QAYTISH']
    ])
    .resize()
  )
})


bot.hears('⚪️ Traverse Oq', async (ctx) => {
    return await ctx.replyWithPhoto(
      {source: './img/traverse/oqtraverse.png'}, 
      {caption: `
      
    <b>TRAVERSE</b>

   🔹 <b>Shahar:</b> Urganch
   🔹 <b>Yukxona sig'imi (L):</b> 2781 L
   🔹 <b>Uzatish qutisi:</b> AT9
   🔹 <b>Xavfsizlik:</b> ABS
   🔹 <b>Yonilg'i iste'moli:</b> 10 L
   🔹 <b>Xavfsizlik yostiqchalari:</b> 12

   <a href="https://avtolayn.uz/ru/cars/117">Batafsil ma'lumot uchun...</a>

   👇👇👇 Bizni quyidagi ijtimoiy tarmoqlar orqali kuzatib boring 

    <a href="https://t.me/Avtolayn">Telegram</a> | <a href="https://www.youtube.com/channel/UCUAa-UaZzIeOOPOBi7xk_6Q">YouTube</a> | <a href="https://instagram.com/avtolaynuz">Instagram</a>
      `, parse_mode: 'html' })
  })


  bot.hears('⚫️ Traverse Qora', async (ctx) => {
    return await ctx.replyWithPhoto(
      {source: './img/traverse/qoratraverse.png'}, 
      {caption: `
      
    <b>TRAVERSE</b>

   🔹 <b>Shahar:</b> Urganch
   🔹 <b>Yukxona sig'imi (L):</b> 2781 L
   🔹 <b>Uzatish qutisi:</b> AT9
   🔹 <b>Xavfsizlik:</b> ABS
   🔹 <b>Yonilg'i iste'moli:</b> 10 L
   🔹 <b>Xavfsizlik yostiqchalari:</b> 12

   <a href="https://avtolayn.uz/ru/cars/117">Batafsil ma'lumot uchun...</a>

   👇👇👇 Bizni quyidagi ijtimoiy tarmoqlar orqali kuzatib boring 

    <a href="https://t.me/Avtolayn">Telegram</a> | <a href="https://www.youtube.com/channel/UCUAa-UaZzIeOOPOBi7xk_6Q">YouTube</a> | <a href="https://instagram.com/avtolaynuz">Instagram</a>
      `, parse_mode: 'html' })
  })

  bot.hears('🔴 Traverse Qizil', async (ctx) => {
    return await ctx.replyWithPhoto(
      {source: './img/traverse/qiziltraverse.png'}, 
      {caption: `
      
    <b>TRAVERSE</b>

   🔹 <b>Shahar:</b> Urganch
   🔹 <b>Yukxona sig'imi (L):</b> 2781 L
   🔹 <b>Uzatish qutisi:</b> AT9
   🔹 <b>Xavfsizlik:</b> ABS
   🔹 <b>Yonilg'i iste'moli:</b> 10 L
   🔹 <b>Xavfsizlik yostiqchalari:</b> 12

   <a href="https://avtolayn.uz/ru/cars/117">Batafsil ma'lumot uchun...</a>

   👇👇👇 Bizni quyidagi ijtimoiy tarmoqlar orqali kuzatib boring 

    <a href="https://t.me/Avtolayn">Telegram</a> | <a href="https://www.youtube.com/channel/UCUAa-UaZzIeOOPOBi7xk_6Q">YouTube</a> | <a href="https://instagram.com/avtolaynuz">Instagram</a>
      `, parse_mode: 'html' })
  })

//traverse


//Tahoe
  bot.hears('TAHOE', async (ctx) => {
    return await ctx.reply(`O'zingiz hohlagan rangdagi avtomabilni tanlang`, Markup.keyboard([
        ['⚪️ Tahoe Oq', '⚫️ Tahoe Qora', '🔵 Tahoe Ko\'k'],
        ['🔝 ORQAGA QAYTISH']
      ])
      .resize()
    )
  })

  bot.hears('⚫️ Tahoe Qora', async (ctx) => {
    return await ctx.replyWithPhoto(
      {source: './img/tahoe/qora.png'}, 
      {caption: `
      
    <b>TAHOE</b>

   🔹 <b>Shahar:</b> Urganch
   🔹 <b>Yukxona sig'imi (L):</b> 2682 L
   🔹 <b>Uzatish qutisi:</b> AT8
   🔹 <b>Xavfsizlik:</b> ABS
   🔹 <b>Yonilg'i iste'moli:</b> 13 L
   🔹 <b>Xavfsizlik yostiqchalari:</b> 12

   <a href="https://avtolayn.uz/ru/cars/115">Batafsil ma'lumot uchun...</a>

   👇👇👇 Bizni quyidagi ijtimoiy tarmoqlar orqali kuzatib boring 

    <a href="https://t.me/Avtolayn">Telegram</a> | <a href="https://www.youtube.com/channel/UCUAa-UaZzIeOOPOBi7xk_6Q">YouTube</a> | <a href="https://instagram.com/avtolaynuz">Instagram</a>
      `, parse_mode: 'html' })
  })

  bot.hears('⚪️ Tahoe Oq', async (ctx) => {
    return await ctx.replyWithPhoto(
      {source: './img/tahoe/oq.png'}, 
      {caption: `
      
    <b>TAHOE</b>

   🔹 <b>Shahar:</b> Urganch
   🔹 <b>Yukxona sig'imi (L):</b> 2682 L
   🔹 <b>Uzatish qutisi:</b> AT8
   🔹 <b>Xavfsizlik:</b> ABS
   🔹 <b>Yonilg'i iste'moli:</b> 13 L
   🔹 <b>Xavfsizlik yostiqchalari:</b> 12

   <a href="https://avtolayn.uz/ru/cars/115">Batafsil ma'lumot uchun...</a>

   👇👇👇 Bizni quyidagi ijtimoiy tarmoqlar orqali kuzatib boring 

    <a href="https://t.me/Avtolayn">Telegram</a> | <a href="https://www.youtube.com/channel/UCUAa-UaZzIeOOPOBi7xk_6Q">YouTube</a> | <a href="https://instagram.com/avtolaynuz">Instagram</a>
      `, parse_mode: 'html' })
  })

  bot.hears('🔵 Tahoe Ko\'k', async (ctx) => {
    return await ctx.replyWithPhoto(
      {source: './img/tahoe/kulrang.png'}, 
      {caption: `
      
    <b>TAHOE</b>

   🔹 <b>Shahar:</b> Urganch
   🔹 <b>Yukxona sig'imi (L):</b> 2682 L
   🔹 <b>Uzatish qutisi:</b> AT8
   🔹 <b>Xavfsizlik:</b> ABS
   🔹 <b>Yonilg'i iste'moli:</b> 13 L
   🔹 <b>Xavfsizlik yostiqchalari:</b> 12

   <a href="https://avtolayn.uz/ru/cars/115">Batafsil ma'lumot uchun...</a>

   👇👇👇 Bizni quyidagi ijtimoiy tarmoqlar orqali kuzatib boring 

    <a href="https://t.me/Avtolayn">Telegram</a> | <a href="https://www.youtube.com/channel/UCUAa-UaZzIeOOPOBi7xk_6Q">YouTube</a> | <a href="https://instagram.com/avtolaynuz">Instagram</a>
      `, parse_mode: 'html' })
  })

//Tahoe

//Malibu

  bot.hears('MALIBU - 2', async (ctx) => {
    return await ctx.reply(`O'zingiz hohlagan rangni tanlang`, Markup.keyboard([
        ['⚪️ Malibu Oq', '⚫️ Malibu Qora', '🔵 Malibu Ko\'k', '🔴 Malibu Qizil'],
        ['🔝 ORQAGA QAYTISH']
      ])
      .resize()
    )
  })

  
  bot.hears('⚪️ Malibu Oq', async (ctx) => {
    return await ctx.replyWithPhoto(
      {source: './img/malibu/oq.png'}, 
      {caption: `
      
    <b>MALIBU - 2</b>

   🔹 <b>Shahar:</b> Urganch
   🔹 <b>Yukxona sig'imi (L):</b> 447 L
   🔹 <b>Uzatish qutisi:</b> AT6
   🔹 <b>Xavfsizlik:</b> ABS
   🔹 <b>Yonilg'i iste'moli:</b> T 8,5/8,1 L
   🔹 <b>Xavfsizlik yostiqchalari:</b> 8

   <a href="https://avtolayn.uz/ru/cars/47">Batafsil ma'lumot uchun...</a>

   👇👇👇 Bizni quyidagi ijtimoiy tarmoqlar orqali kuzatib boring 

    <a href="https://t.me/Avtolayn">Telegram</a> | <a href="https://www.youtube.com/channel/UCUAa-UaZzIeOOPOBi7xk_6Q">YouTube</a> | <a href="https://instagram.com/avtolaynuz">Instagram</a>
      `, parse_mode: 'html' })
  })

  bot.hears('⚫️ Malibu Qora', async (ctx) => {
    return await ctx.replyWithPhoto(
      {source: './img/malibu/qora.png'}, 
      {caption: `
      
    <b>MALIBU - 2</b>

   🔹 <b>Shahar:</b> Urganch
   🔹 <b>Yukxona sig'imi (L):</b> 447 L
   🔹 <b>Uzatish qutisi:</b> AT6
   🔹 <b>Xavfsizlik:</b> ABS
   🔹 <b>Yonilg'i iste'moli:</b> T 8,5/8,1 L
   🔹 <b>Xavfsizlik yostiqchalari:</b> 8

   <a href="https://avtolayn.uz/ru/cars/47">Batafsil ma'lumot uchun...</a>

   👇👇👇 Bizni quyidagi ijtimoiy tarmoqlar orqali kuzatib boring 

    <a href="https://t.me/Avtolayn">Telegram</a> | <a href="https://www.youtube.com/channel/UCUAa-UaZzIeOOPOBi7xk_6Q">YouTube</a> | <a href="https://instagram.com/avtolaynuz">Instagram</a>
      `, parse_mode: 'html' })
  })

  bot.hears('🔵 Malibu Ko\'k', async (ctx) => {
    return await ctx.replyWithPhoto(
      {source: './img/malibu/ko\'k.png'}, 
      {caption: `
      
    <b>MALIBU - 2</b>

   🔹 <b>Shahar:</b> Urganch
   🔹 <b>Yukxona sig'imi (L):</b> 447 L
   🔹 <b>Uzatish qutisi:</b> AT6
   🔹 <b>Xavfsizlik:</b> ABS
   🔹 <b>Yonilg'i iste'moli:</b> T 8,5/8,1 L
   🔹 <b>Xavfsizlik yostiqchalari:</b> 8

   <a href="https://avtolayn.uz/ru/cars/47">Batafsil ma'lumot uchun...</a>

   👇👇👇 Bizni quyidagi ijtimoiy tarmoqlar orqali kuzatib boring 

    <a href="https://t.me/Avtolayn">Telegram</a> | <a href="https://www.youtube.com/channel/UCUAa-UaZzIeOOPOBi7xk_6Q">YouTube</a> | <a href="https://instagram.com/avtolaynuz">Instagram</a>
      `, parse_mode: 'html' })
  })

  bot.hears('🔴 Malibu Qizil', async (ctx) => {
    return await ctx.replyWithPhoto(
      {source: './img/malibu/qizil.png'}, 
      {caption: `
      
    <b>MALIBU - 2</b>

   🔹 <b>Shahar:</b> Urganch
   🔹 <b>Yukxona sig'imi (L):</b> 447 L
   🔹 <b>Uzatish qutisi:</b> AT6
   🔹 <b>Xavfsizlik:</b> ABS
   🔹 <b>Yonilg'i iste'moli:</b> T 8,5/8,1 L
   🔹 <b>Xavfsizlik yostiqchalari:</b> 8

   <a href="https://avtolayn.uz/ru/cars/47">Batafsil ma'lumot uchun...</a>

   👇👇👇 Bizni quyidagi ijtimoiy tarmoqlar orqali kuzatib boring 

    <a href="https://t.me/Avtolayn">Telegram</a> | <a href="https://www.youtube.com/channel/UCUAa-UaZzIeOOPOBi7xk_6Q">YouTube</a> | <a href="https://instagram.com/avtolaynuz">Instagram</a>
      `, parse_mode: 'html' })
  })

//Malibu


//Trailblazer

  bot.hears('TRAILBLAZER', async (ctx) => {
    return await ctx.reply(`O'zingiz hohlagan rangni tanlang`, Markup.keyboard([
        ['⚪️ Oq TrailBlazer', '⚫️ Qora TrailBlazer', '🔵 Ko\'k TrailBlazer', '🟤 Jigarrang TrailBlazer'],
        ['🔝 ORQAGA QAYTISH']
      ])
      .resize()
    )
  })

  bot.hears('🔝 ORQAGA QAYTISH', async (ctx) => {
    return await ctx.reply('🚙 Avtomabillar', Markup.keyboard([
        ['TRAILBLAZER', 'MALIBU - 2', 'TAHOE'],
        ['TRAVERSE', 'EQUINOX'],
        ['TRACKER - 2', 'TRACKER', 'LACETTI'],
        ['COBALT', 'NEXIA - 3', 'SPARK', 'DAMAS - 2'],
        ['🔝 BOSH MENUGA QAYTISH']
      ])
      .resize()
    )
  })


  bot.hears('⚪️ Oq TrailBlazer', async (ctx) => {
    return await ctx.replyWithPhoto(
      {source: './img/trablaizer/oq.png'}, 
      {caption: `
      
    <b>TRABLAIZER</b>

   🔹 <b>Shahar:</b> Urganch
   🔹 <b>Dvigatel hajmi, (l) :</b> 3.6 (Benzin)
   🔹 <b>Kuzov:</b> Vnedorojnik
   🔹 <b>Rangi:</b> Oq
   🔹 <b>Uzatish qutisi:</b> Avtomat
   🔹 <b>Drayv birligi:</b> Old tortish

   👇👇👇 Bizni quyidagi ijtimoiy tarmoqlar orqali kuzatib boring 

    <a href="https://t.me/Avtolayn">Telegram</a> | <a href="https://www.youtube.com/channel/UCUAa-UaZzIeOOPOBi7xk_6Q">YouTube</a> | <a href="https://instagram.com/avtolaynuz">Instagram</a>
      `, parse_mode: 'html'},  
      
      Markup.keyboard([
        ['oqdsdsds', 'MAsdsdsd', 'TsdsdsdsA'],
        ['🔝 BOSH MENUGA QAYTISH']
      ])
      .resize() 
     
      )
  })

  bot.hears('⚫️ Qora TrailBlazer', async (ctx) => {
    return await ctx.replyWithPhoto(
      {source: './img/trablaizer/qora.png'}, 
      {caption: `
      
    <b>TRABLAIZER</b>

   🔹 <b>Shahar:</b> Urganch
   🔹 <b>Dvigatel hajmi, (l) :</b> 3.6 (Benzin)
   🔹 <b>Kuzov:</b> Vnedorojnik
   🔹 <b>Rangi:</b> Oq
   🔹 <b>Uzatish qutisi:</b> Avtomat
   🔹 <b>Drayv birligi:</b> Old tortish

   👇👇👇 Bizni quyidagi ijtimoiy tarmoqlar orqali kuzatib boring 

    <a href="https://t.me/Avtolayn">Telegram</a> | <a href="https://www.youtube.com/channel/UCUAa-UaZzIeOOPOBi7xk_6Q">YouTube</a> | <a href="https://instagram.com/avtolaynuz">Instagram</a>
      `, parse_mode: 'html'},  
      
      Markup.keyboard([
        ['oqdsdsds', 'MAsdsdsd', 'TsdsdsdsA'],
        ['🔝 BOSH MENUGA QAYTISH']
      ])
      .resize() 
     
      )
  })

  bot.hears('🔵 Ko\'k TrailBlazer', async (ctx) => {
    return await ctx.replyWithPhoto(
      {source: './img/trablaizer/ko\'k.png'}, 
      {caption: `
      
    <b>TRABLAIZER</b>

   🔹 <b>Shahar:</b> Urganch
   🔹 <b>Dvigatel hajmi, (l) :</b> 3.6 (Benzin)
   🔹 <b>Kuzov:</b> Vnedorojnik
   🔹 <b>Rangi:</b> Oq
   🔹 <b>Uzatish qutisi:</b> Avtomat
   🔹 <b>Drayv birligi:</b> Old tortish

   👇👇👇 Bizni quyidagi ijtimoiy tarmoqlar orqali kuzatib boring 

    <a href="https://t.me/Avtolayn">Telegram</a> | <a href="https://www.youtube.com/channel/UCUAa-UaZzIeOOPOBi7xk_6Q">YouTube</a> | <a href="https://instagram.com/avtolaynuz">Instagram</a>
      `, parse_mode: 'html'},  
      
      Markup.keyboard([
        ['oqdsdsds', 'MAsdsdsd', 'TsdsdsdsA'],
        ['🔝 BOSH MENUGA QAYTISH']
      ])
      .resize() 
     
      )
  })

  bot.hears('🟤 Jigarrang TrailBlazer', async (ctx) => {
    return await ctx.replyWithPhoto(
      {source: './img/trablaizer/jigarrang.png'}, 
      {caption: `
      
    <b>TRABLAIZER</b>

   🔹 <b>Shahar:</b> Urganch
   🔹 <b>Dvigatel hajmi, (l) :</b> 3.6 (Benzin)
   🔹 <b>Kuzov:</b> Vnedorojnik
   🔹 <b>Rangi:</b> Oq
   🔹 <b>Uzatish qutisi:</b> Avtomat
   🔹 <b>Drayv birligi:</b> Old tortish

   👇👇👇 Bizni quyidagi ijtimoiy tarmoqlar orqali kuzatib boring 

    <a href="https://t.me/Avtolayn">Telegram</a> | <a href="https://www.youtube.com/channel/UCUAa-UaZzIeOOPOBi7xk_6Q">YouTube</a> | <a href="https://instagram.com/avtolaynuz">Instagram</a>
      `, parse_mode: 'html'},  
      
      Markup.keyboard([
        ['oqdsdsds', 'MAsdsdsd', 'TsdsdsdsA'],
        ['🔝 BOSH MENUGA QAYTISH']
      ])
      .resize() 
     
      )
  })
//Trailblazer

  bot.hears('🔝 BOSH MENUGA QAYTISH', async (ctx) => {
    return await ctx.reply('🔝 BOSH MENUGA QAYTISH', Markup
      .keyboard([
        ['🚘 Avtolayn haqida', '🚙 Avtomabillar'],
        ['👩‍💻 Online avtomabil harid qilish'],
        ['♻️ Trade-In', '🚖 1080 Avtolayn', '🔧 Servis hizmatlari'],
        ['☎️ Aloqa']
      ])
      .resize()
    )
  })


// bot.launch();
module.exports = bot

//safe-savannah-57575
//https://safe-savannah-57575.herokuapp.com/
