from rest_framework import serializers
from .models import Mailing

from enum import Enum


class MessageTypes(Enum):
    INFO = "info"
    WARNING = "warning"
    ERROR = "error"


class MailingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mailing
        fields = "__all__"
