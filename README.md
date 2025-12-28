CoinCap — SPA-приложение на React для просмотра криптовалют и их статистики. Пользователь может отслеживать историю цен и управлять портфелем криптовалют.

1.Основные возможности:
-Просмотр списка криптовалют с актуальными данными.
-Детальная информация о выбранной криптовалюте (объем торгов, средняя цена, изменение за 24ч и т.д.).
-История цен с графиком.
-Добавление криптовалют в персональный портфель.

2.Технологии:
-React 18
-Redux Toolkit
-React Router
-Ant Design
-Recharts
-CoinCap API

3.Структура проекта:
CoinCap/
├─ src/
│  ├─ api/          # запросы к CoinCap API
│  ├─ components/   # UI-компоненты (PriceChart, BuyForm и др.)
│  ├─ pages/        # страницы (AssetPage, MainPage)
│  ├─ RTK/          # Redux Toolkit (slices, selectors)
│  └─ shared/       # вспомогательные функции
├─ public/
├─ package.json
└─ README.md

4.Ресурсы:
-CoinCap API
-React
-Redux Toolkit
-Ant Design
-Recharts

5.Установка и запуск:
-Клонировать репозиторий:
  git clone -b coincap https://github.com/ViktoriaIvanova97/CoinCap.git
-Перейти в папку проекта:
  cd CoinCap
-Установить зависимости:
  npm install
-Запустить локально:
  npm start

Ant Design

Recharts
