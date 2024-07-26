---
title: Ticket Gretchen
image: ~/assets/images/project/cloud/Mobile-Ticketing.jpg
category: mobile
tags:
  - JavaEE6
  - AWS
  - DynamoDB
  - JPA
  - EJB3
  - Cordova
---

*Технології:* JavaEE6, заснований на хмарних технологіях (AWS, EC2, DynamoDB, S3, CloudFront) для масштабованості та відмовостійкості, а також набір сучасних JavaEE API - JPA для зберігання даних, EJB3 для бізнес-логіки, CDI для впровадження залежностей, JAX-RS для RESTful API, JCA конектори для інтеграції з системами продажу квитків третіх сторін. Використовується JBoss AS 6 Appserver та база даних MySQL для зберігання даних.

Мета застосунку Ticket Gretchen - дозволити європейським користувачам купувати квитки на різноманітні заходи, музеї тощо через один єдиний мобільний інтерфейс. Ticket Gretchen тепер доступний "тут":http://ticketgretchen.com/.

Додаток має три основні функціональні вимоги:

* Комплексна інформація про культурні пропозиції в місті
* Узгоджений і простий магазин квитків, незалежно від того, звідки походить квиток 
* Управління купленими квитками, резервуваннями (майбутніми та минулими)

Серверна частина застосунку базується на JavaEE6 і використовує технології хмари (AWS, EC2, DynamoDB, S3, CloudFront) для масштабованості та відмовостійкості, а також набір сучасних JavaEE API - JPA для зберігання даних, EJB3 для бізнес-логіки, CDI для впровадження залежностей, JAX-RS для RESTful API, JCA конектори для інтеграції з системами продажу квитків третіх сторін. Використовується JBoss AS 6 Appserver та база даних MySQL для зберігання даних.

Клієнтська частина реалізована як клієнти Apache Cordova/PhoneGap для Android та iOS, з використанням jQuery Mobile та Backbone.js як UI та MVC фреймворків. Особлива увага була приділена підтримці кількох мов і безпеці. OAuth2 був використаний для спрощення аутентифікації користувачів.

![Ticket Gretchen](~/assets/images/project/cloud/mtp-1.jpg)
![Ticket Gretchen](~/assets/images/project/cloud/mtp-2.jpg)
![Ticket Gretchen](~/assets/images/project/cloud/mtp-3.jpg)
![Ticket Gretchen](~/assets/images/project/cloud/mtp-4.jpg)
![Ticket Gretchen](~/assets/images/project/cloud/mtp-5.jpg)
