# adres-fullstack-test
Technical test fullstack developer for ADRES - Bryan Pardo

# How to run the back-end
To run the back-end locally, execute the next script from the root path of the project:
```
cd backend
python manage.py runserver
```
By default it will run on port 8000, you have to run this first so the frontend can be used without any problem.

The backed is using SQLite, if migrations are needed, run the next scripts:
```
python manage.py makemigrations
python manage.py migrate
```


# How to run the front-end
To run the front-end locally, execute the next script from the root path of the project:
```
cd frontend_adres_app
ng s
```
By default it will run on port 4200 so you can go to the following link ```locahost:4200``.