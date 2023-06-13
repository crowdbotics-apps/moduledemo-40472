from rest_framework import authentication
from users.models import Profile
from .serializers import ProfileSerializer
from rest_framework import viewsets

class ProfileViewSet(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Profile.objects.all()