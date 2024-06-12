from django.apps import AppConfig


class AcquisitionApiConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'acquisition_api'

    def ready(self):
        import acquisition_api.signals
