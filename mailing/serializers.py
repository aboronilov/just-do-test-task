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


class StatisticsSerializer(serializers.Serializer):
    info_quantity = serializers.SerializerMethodField()
    # warning_quantity = serializers.SerializerMethodField()
    # error_quantity = serializers.SerializerMethodField()
    # user_name = serializers.SerializerMethodField()

    # class Meta:
    #     model = Mailing
    #     fields = [
    #         'info_quantity',
    #         # 'warning_quantity',
    #         # 'error_quantity',
    #         # 'user_name'
    #     ]

    def get_items(self):
        if self.request.user.is_superuser:
            return Mailing.objects.all()
        return Mailing.objects.filter(author__id=self.request.user.id)

    def get_info_quantity(self, obj):
        print("OBJ ---------------- \n", obj)
        items = MailingSerializer(self.get_items()).data
        print("QS ---------------- \n", items)
        # value = MessageTypes.INFO.value
        # info = list(filter(lambda x: x.get("type") == value, queryset))
        return 1

    # def get_warning_quantity(self, obj):
    #     queryset = MailingSerializer(obj, many=True).data
    #     value = MessageTypes.WARNING.value
    #     warning = list(filter(lambda x: x.get("type") == value, queryset))
    #     return len(warning)

    # def get_warning_quantity(self, obj):
    #     queryset = MailingSerializer(obj, many=True).data
    #     value = MessageTypes.ERROR.value
    #     error = list(filter(lambda x: x.get("type") == value, queryset))
    #     return len(error)

    # def get_user_name(self, obj):
    #     return obj.author.first_name
