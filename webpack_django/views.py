from django.shortcuts import render


def showIndex(request):
    return render(request, 'webpack_django/index.html')
