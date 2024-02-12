from django.db import models
from django.contrib.auth import get_user_model
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.mail import send_mail


User = get_user_model()


class Mailing(models.Model):
    MESSAGE_TYPE_CHOICES = [
        ('info', 'Информационное'),
        ('warning', 'Предупреждающее'),
        ('error', 'Сообщение об ошибке'),
    ]

    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='mailing_from')
    recipient = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='mailing_to')
    message = models.TextField()
    type = models.CharField(max_length=10, choices=MESSAGE_TYPE_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-id']
        verbose_name = 'Рассылка'
        verbose_name_plural = "Рассылки"

    def __str__(self):
        return f"Mailing with id {self.id} from {self.created_at}"


@receiver(post_save, sender=Mailing, dispatch_uid="handle_mailer_create")
def handle_mailer_create(sender, instance, created, *args, **kwargs):
    if created:
        subject = "Notification from Just DO"

        recipient = instance.recipient.email
        type = instance.type
        name = instance.recipient.first_name
        message_text = instance.message

        message = f"Hello {name},\n\nWe have a {type} message for you:\n\n{message_text}"
        from_email = instance.author.email
        recipient_list = [recipient]

        send_mail(subject, message, from_email,
                  recipient_list, fail_silently=False)
