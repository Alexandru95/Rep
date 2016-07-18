from django.shortcuts import render


# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from Pentagram.models import Photo
from Pentagram.serializer import PhotoSerializer, UserSerializer

@api_view(['GET','POST'])
def photos(request):
    if request.method == 'GET':
        photos = Photo.objects.all()
        serializer = PhotoSerializer(photos, many = True)
        return  Response(status=status.HTTP_200_OK, data=serializer.data)
    if request.metod == 'POST':
        pass


@api_view(['POST'])
def users(request):
    if request.method =="POST":
        user_serializer = UserSerializer(data=request.data)
        if user_serializer.is_valid():
            user_serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST, data=user_serializer.errors)

@api_view(['GET','POST'])
def comments(request, id_photo):
    pass