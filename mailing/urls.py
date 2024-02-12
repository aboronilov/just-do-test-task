from django.urls import path, include
from rest_framework import routers

from .views import MailerAPIList, MailerAPICreate

# router = routers.DefaultRouter()
# router.register('mailing', MailerViewSet, basename="mailing")

# app_name = "mailing"
urlpatterns = [
    path('mailing/', MailerAPIList.as_view()),
    path('mailing/create/', MailerAPICreate.as_view()),
]
