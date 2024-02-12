from rest_framework import generics
from .serializers import MailingSerializer
from .models import Mailing
from .permissions import IsSuperUserOrReadOnly


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
