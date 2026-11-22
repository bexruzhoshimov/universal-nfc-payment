# Universal NFC Payment v1.0

Ushbu loyiha iPhone va boshqa smartfonlarda NFC stiker orqali tezkor karta 
raqami va to‘lov summasini nusxalab, to‘lov ilovalariga o‘tish uchun 
mo‘ljallangan static veb-sahifa.

## Xususiyatlari
- Tashqi kutubxonalar va freymvorklarsiz (Sof HTML/CSS/JS).
- UZCARD va HUMO kartalarini qo‘llab-quvvatlash.
- Karta raqami hamda summani tezkor nusxalash.
- Qorong‘u va yorug‘ rejim (Dark/Light mode).
- Mobil Safari va barcha brauzerlar uchun moslashtirilgan design.

## Sozlamalar (config.js)
`config.js` faylini ochib, o‘z ma’lumotlaringizni kiriting:
- `AMOUNT`: Sukut bo‘yicha to‘lov summasi (`50000`).
- `CURRENCY`: Valyuta nomi (`"so‘m"`).
- `CARDHOLDER`: Karta egasining ismi familyasi.
- `CARD_UZCARD`: Uzcard karta raqami (16 ta raqam).
- `CARD_HUMO`: Humo karta raqami (16 ta raqam).
- `APPS`: To‘lov ilovalari ro‘yxati (nomi va URL havolasi).

## GitHub Pages ga joylashtirish
1. GitHub-da yangi repository yarating.
2. Fayllarni repo-ning `main` tarmog‘iga yuklang.
3. Repozitoriy sozlamalariga o‘ting: **Settings** → **Pages**.
4. **Source** bo‘limida **Deploy from a branch** tanlang.
5. Tarmoq (Branch) sifatida **main** va papka sifatida **/(root)** ni tanlang, 
so‘ng **Save** tugmasini bosing.
6. Bir oz vaqtdan so‘ng sahifa URL manzili tayyor bo‘ladi.

## NFC stikerga yozish (NFC Tools)
1. Telefoningizga **NFC Tools** ilovasini yuklab oling.
2. **Write** → **Add a record** → **URL / URI** bo‘limiga kiring.
3. GitHub Pages taklif etgan sahifa URL manzilini kiriting.
4. **Write** tugmasini bosing va stikerni telefonga yaqinlashtirib yozing.

## Xavfsizlik eslatmasi
GitHub Pages ommaviy sayt: `config.js` ichidagi karta raqamlari hamma uchun
ko‘rinadi. Faqat qabul qiluvchi karta raqamini yozing.

Ushbu sahifa faqat ochiq karta raqami va belgilangan summani nusxalash uchun 
xizmat qiladi. Sahifa to‘lovni amalga oshirmaydi, tasdiqlamaydi va tekshirmaydi.
Hech qachon CVV/CVC kodlarini, PIN-kod yoki SMS orqali keladigan tasdiqlash 
kodlarini hech kimga bermang.
