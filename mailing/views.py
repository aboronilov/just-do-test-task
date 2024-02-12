from rest_framework import generics
from .serializers import MailingSerializer
from .models import Mailing
from .permissions import IsSuperUserOrReadOnly
from datetime import datetime, timedelta, date

from enum import Enum


class MessageTypes(Enum):
    INFO = "info"
    WARNING = "warning"
    ERROR = "error"


class QueryParams(Enum):
    HOUR = "hour"
    TODAY = "today"
    YESTERDAY = "yesterday"
    WEEK = "week"
    MONTH = "month"


class MailerAPIList(generics.ListAPIView):
    serializer_class = MailingSerializer

    def get_queryset(self):
        queryset = Mailing.objects.all()
        if not self.request.user.is_superuser:
            queryset = Mailing.objects.filter(author=self.request.user)

        if self.request.query_params.get("period"):
            period = self.request.query_params.get("period")
            current_time = datetime.now()
            today = date.today()

            if period == QueryParams.HOUR.value:
                one_hour_ago = current_time - timedelta(hours=1)
                queryset = queryset.filter(created_at__gte=one_hour_ago)

            if period == QueryParams.TODAY.value:
                queryset = queryset.filter(created_at__gte=today)

            if period == QueryParams.YESTERDAY.value:
                yesterday = today - timedelta(days=1)
                queryset = queryset.filter(created_at__gte=yesterday)

            if period == QueryParams.WEEK.value:
                one_week_ago = current_time - timedelta(days=7)
                queryset = queryset.filter(created_at__gte=one_week_ago)

            if period == QueryParams.MONTH.value:
                one_month_ago = current_time - timedelta(days=30)
                queryset = queryset.filter(created_at__gte=one_month_ago)

        return queryset


class MailerAPICreate(generics.CreateAPIView):
    serializer_class = MailingSerializer
    queryset = Mailing.objects.all()
    permission_classes = [IsSuperUserOrReadOnly]
