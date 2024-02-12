from rest_framework import generics, status
from rest_framework.response import Response
from .serializers import MailingSerializer
from .models import Mailing
from .permissions import IsSuperUserOrReadOnly

from enum import Enum


class MessageTypes(Enum):
    INFO = "info"
    WARNING = "warning"
    ERROR = "error"


# class MailerAPIList(generics.ListAPIView):
#     serializer_class = MailingSerializer

#     def get_queryset(self):
#         if self.request.user.is_superuser:
#             queryset = Mailing.objects.all()
#         else:
#             queryset = Mailing.objects.filter(author=self.request.user)

#         serialized_data = self.serializer_class(queryset, many=True).data

#         data = self.parse_data(serialized_data)
#         if not data:
#             return Response(status.HTTP_400_BAD_REQUEST)

#         return Response(data, status.HTTP_200_OK)

#     def parse_data(self, serialized_data):
#         print("--------------", serialized_data)
#         info_quantity = list(filter(lambda x: x.get(
#             "type") == MessageTypes.INFO, serialized_data))
#         warning_quantity = list(filter(lambda x: x.get(
#             "type") == MessageTypes.WARNING, serialized_data))
#         error_quantity = list(filter(lambda x: x.get(
#             "type") == MessageTypes.ERROR, serialized_data))

#         return {
#             "info_quantity": info_quantity,
#             "warning_quantity": warning_quantity,
#             "error_quantity": error_quantity,
#         }

class MailerAPIList(generics.ListAPIView):
    serializer_class = MailingSerializer

    def get_queryset(self):
        if self.request.user.is_superuser:
            return Mailing.objects.all()

        return Mailing.objects.filter(author=self.request.user)


class MailerAPICreate(generics.CreateAPIView):
    serializer_class = MailingSerializer
    queryset = Mailing.objects.all()
    permission_classes = [IsSuperUserOrReadOnly]
