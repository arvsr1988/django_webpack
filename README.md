# React Redux and Webpack wired with a Django backend
This codebase is a result of a combination of two tutorials.

1. [youtube series on react, redux and webpack using a nodejs backend](https://www.youtube.com/playlist?list=PLQDnxXqV213JJFtDaG0aE9vqvp6Wm7nBg)
2. [using webpack with django](http://owaislone.org/blog/webpack-plus-reactjs-and-django/)

## How to get started
1. clone the repo
2. [create a virtual environment in python](https://virtualenv.pypa.io/en/latest/) and install the dependencies (`pip install -r requirements.txt`
3. install the python dependencies and node modules
4. start both the python server `python manage.py runserver` and the node server `npm run serve`
5. in your browser open http://localhost:8000. you should see the page with the react components (a todo list).
6. Change something in your react components (say app.js) and you should see the hot reloading work.
