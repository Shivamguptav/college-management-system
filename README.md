﻿# college-management-system
✅ Step-by-Step Guide to Run Django Project

📍 Step 1: Open CMD and Navigate to the Project Directory
In your CMD:
cd C:\PROJECTS\college-management-system

📍 Step 2: Create a Virtual Environment
python -m venv venv

📍 Step 3: Activate the Virtual Environment
venv\Scripts\activate

📍 Step 4: Install Required Packages
If you have a requirements.txt:
pip install -r requirements.txt

Or install Django manually:
pip install Django

pip install djangorestframework
pip install pillow
pip install django-crispy-forms

python manage.py makemigrations
python manage.py migrate
python manage.py runserver


📍 Step 5: Run Migrations
python manage.py makemigrations
python manage.py migrate

📍 Step 6: Create Superuser (Optional for Admin Login)
python manage.py createsuperuser


📍 Step 7: Run the Development Server
python manage.py runserver

Now open your browser and go to:
http://127.0.0.1:8000/

![Screenshot 2025-05-12 151543](https://github.com/user-attachments/assets/46dca9ea-9d14-4187-852b-db5113aa672a)
![Screenshot 2025-05-12 151555](https://github.com/user-attachments/assets/15dc8c53-ad77-4a27-ba0b-1d0ec8cef3e1)
![Screenshot 2025-05-12 151753](https://github.com/user-attachments/assets/d9d0a89d-57c1-4ed5-af79-eb88ebced917)


