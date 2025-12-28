# CoinCap

**CoinCap** — SPA-приложение на React для просмотра криптовалют и их статистики.  
Пользователь может отслеживать историю цен и управлять портфелем криптовалют.

---

##  Основные возможности

- Просмотр списка криптовалют с актуальными данными  
- Детальная информация о выбранной криптовалюте (объем торгов, средняя цена, изменение за 24ч и т.д.)  
- История цен с графиком  
- Добавление криптовалют в персональный портфель  

---

##  Технологии

- React 18  
- Redux Toolkit  
- React Router  
- Ant Design  
- Recharts  
- CoinCap API  

---
##  Структура проекта
```
CoinCap/
├── src/
│   ├── api/          # запросы к CoinCap API
│   ├── components/   # UI-компоненты (PriceChart, BuyForm и др.)
│       ├── pages/        # страницы (AssetPage, MainPage)
│       ├── shared/       # вспомогательные функции
│   ├── RTK/           # Redux Toolkit (slices, selectors)
├── public/
├── package.json
└── README.md
```



---

##  Установка и запуск

```
bash
git clone -b coincap https://github.com/Viktorialvanova97/CoinCap.git
cd CoinCap
npm install
npm start
```
---

##  Ресурсы  
- CoinCap API
- React
- Redux Toolkit
- Ant Design
- Recharts





