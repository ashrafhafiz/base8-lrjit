## Installation Steps

```shell
git clone https://github.com/raynirola/jetstream-react.git jetstream
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
