## Stack Components:
1. Laravel 8
2. React
3. Jetstream
4. InertiaJS
5. TailwindCSS
6. spatie/laravel-permission

## Installation Steps

```shell
git clone https://github.com/ashrafhafiz/base8-lrjit.git lrjit8-example
```
```shell
cd jetstream
```
```shell
composer install
```
```shell
cp .env.example .env
```
```shell
php artisan key:generate
```
set up database and email*
```shell
php artisan migrate
```
```shell
php artisan storage:link
```
```shell
npm install && npm run dev
```
```shell
php artisan serve
```

## Additional Packages

### Installing Blueprint
_Blueprint_  is an open-source tool for  **rapidly generating multiple**  Laravel components from a  **single, human readable**  definition.

Blueprint has two driving principles:
1.  Increase development speed
2.  Promote Laravel conventions

You can install Blueprint via Composer with the following command:
```shell
composer require --dev laravel-shift/blueprint
```
Blueprint also _suggests_ installing the [Laravel Test Assertions package](https://github.com/jasonmccreary/laravel-test-assertions), as the generated tests may use some of the additional, helpful assertions provided by this package.
```shell
composer require --dev jasonmccreary/laravel-test-assertions
```

```shell
echo  '/draft.yaml' >> .gitignore
echo  '/.blueprint' >> .gitignore
```

Blueprint aims to provide sensible defaults which align nicely with Laravel's conventions. However, you are free to configure Blueprint to follow your own custom conventions.

To do so, you may publish the configuration file with the following command:
```shell
php artisan vendor:publish --tag=blueprint-config
```
# Mailhog
https://github.com/mailhog/MailHog

MAIL_MAILER=smtp
MAIL_HOST=localhost
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS="support@lrjit.test"
MAIL_FROM_NAME="{$APP_NAME}"
