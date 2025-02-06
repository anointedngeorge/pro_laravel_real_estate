<!-- drop and re-create a fresh database -->

php artisan migrate:fresh

<!-- run -->

php artisan migrate

<!-- seeds don't switch the positions -->

php artisan db:seed --class=BranchSeeder
php artisan db:seed --class=RealtorsSeeder
php artisan db:seed --class=ClientSeeder
php artisan db:seed --class=PropertySeeder

<!-- create model -->

php artisan make:model Property -fcmrR
