from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    help = {'insert_me': "I am from index.html"}
    return render(request, 'ProTwo/index.html',context=help)
