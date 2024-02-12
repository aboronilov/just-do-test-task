# Тестовое задание на должность Fullstack разработчика 

## Технололгии

### Backend
* [Django](https://www.djangoproject.com/)
* [DRF](https://www.django-rest-framework.org/)
* [PostgreSQL](https://www.postgresql.org/)
* [Djoser](https://djoser.readthedocs.io/en/latest/getting_started.html)

### Frontend
* [NextJS](https://nextjs.org/)
* [TailwindCSS](https://tailwindcss.com/)
* [ShadCN UI](https://ui.shadcn.com/)
* [React Hook Froms](https://react-hook-form.com/)
* [Zod](https://github.com/colinhacks/zod)
* [Redux and RTQ](https://redux-toolkit.js.org/)

## План развития приложения
* Покрыть код тестами (Frontend + Backend)
* Добавить форму на Frontend для добавления сущности Рассылка, на Backend для этого уже все готово
* Возможно продумать более сложную и разветвленную систему ролевого доступа
* Автоматизация деплоя:
    - Запаковать приложение в [docker](https://www.docker.com/) контейнеры
    - Поднять кластер [k8s](https://kubernetes.io/) либо довести до ума docker-compose (он пока готов процентов на 90)
    - Настроить СI/CD pipleines (либо GitHub actions, либо GitLab CI/CD) - добавить задания по прогону тестов и линтеров

# Описание работы приложения

## Регистрация

1) Если Вы не авторизованы, то при запуске вас перенаправит на страницу авторизации, снизу активная ссылка - позволяет переключаться между регистрацией и авторизацией. Дополнительно реализована авторизация через Goggle аккаунт

![Landing page](https://raw.githubusercontent.com/aboronilov/just-do-test-task/main/client/public/screenshots/register/register.png)

Валидация отрабоает, если:

- не корректно заполнено одно или несколько полей

![Landing page](https://raw.githubusercontent.com/aboronilov/just-do-test-task/main/client/public/screenshots/register/register-val-1.png)

- пользователь с данным email уже есть в базе

![Landing page](https://raw.githubusercontent.com/aboronilov/just-do-test-task/main/client/public/screenshots/register/register-val-2.png)

- пароль и повторение пароля не совпадают 

![Landing page](https://raw.githubusercontent.com/aboronilov/just-do-test-task/main/client/public/screenshots/register/register-val-3.png)

- пароль слишком простой или состоит только из цифр

![Landing page](https://raw.githubusercontent.com/aboronilov/just-do-test-task/main/client/public/screenshots/register/register-val-4.png)

2) Если все поля заполнены корректно, Вы получите сообщение о проверке указанного ящика

![Landing page](https://raw.githubusercontent.com/aboronilov/just-do-test-task/main/client/public/screenshots/register/register-success-1.png)

При открытии письма Вы получите ссылку для активации учетной записи

![Landing page](https://raw.githubusercontent.com/aboronilov/just-do-test-task/main/client/public/screenshots/register/register-success-2.png)

При переходе по ссылке Вас перенаправит на страницу сайта, если все прошло успешно, вы получите сообщение


![Landing page](https://raw.githubusercontent.com/aboronilov/just-do-test-task/main/client/public/screenshots/register/register-success-3.png)

## Авторизация

1) На странице авторизации введите учетные данные. Авторизация происхоит через cookies согласно ТЗ. Клиент так же "на лету" производит обновления access токена в случае, если его срок действия закончился.

![Landing page](https://raw.githubusercontent.com/aboronilov/just-do-test-task/main/client/public/screenshots/login/login.png)

Валидация отработает если:

* не заполнить поля

![Landing page](https://raw.githubusercontent.com/aboronilov/just-do-test-task/main/client/public/screenshots/login/login-val-1.png)

* ввести неверные значения

![Landing page](https://raw.githubusercontent.com/aboronilov/just-do-test-task/main/client/public/screenshots/login/login-val-2.png)

2) Дополнительно сверх ТЗ реализована авторизация через Google по протоколу Oauth2

![Landing page](https://raw.githubusercontent.com/aboronilov/just-do-test-task/main/client/public/screenshots/login/login-google.png)

## Дашборд

1) Дашборд - защищенный марщрут. Если Вы не авторизованы, вы не сможете на него зайти. После успешной авторизации им можно пользоваться.

Ролевой доступ в приложении работает следующим образом - если зайти под учеткой суперпользователя, то Вы получите доступ ко всем записям. Информация о текущй роли видна на странице.

![Landing page](https://raw.githubusercontent.com/aboronilov/just-do-test-task/main/client/public/screenshots/dashboard/dashboard-admin-1.png)

2) При выборе поля с датой обновляется статистика сообщений на основе данных из БД. При этом страница не перезагружается. Если приод не указать - данные берутся за все время.

![Landing page](https://raw.githubusercontent.com/aboronilov/just-do-test-task/main/client/public/screenshots/dashboard/dashboard-admin-2.png)

3) Если зайти под обычным пользователем - получите доступ только к собственным записям (согласно ТЗ). 

![Landing page](https://raw.githubusercontent.com/aboronilov/just-do-test-task/main/client/public/screenshots/dashboard/dashboard-user.png)

## Рассылки

Backend для рассылок готов.

![Landing page](https://raw.githubusercontent.com/aboronilov/just-do-test-task/main/client/public/screenshots/notification/notification-1.png)

При создании новой сущности в БД соотвтетствующее письмо уходит пользователю. Данные для письма берутся динамически

![Landing page](https://raw.githubusercontent.com/aboronilov/just-do-test-task/main/client/public/screenshots/notification/notification-2.png)