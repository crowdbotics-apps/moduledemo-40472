from rest_framework import authentication
from protfilio.models import Contactus
from .serializers import ContactusSerializer
from rest_framework import viewsets

class ContactusViewSet(viewsets.ModelViewSet):
    serializer_class = ContactusSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Contactus.objects.all()