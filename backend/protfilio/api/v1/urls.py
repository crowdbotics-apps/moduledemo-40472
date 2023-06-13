
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import ContactusViewSet
router = DefaultRouter()
router.register('contactus', ContactusViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
