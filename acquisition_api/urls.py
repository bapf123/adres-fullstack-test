from rest_framework import routers

from acquisition_api.api import AdminUnitViewSet

router = routers.DefaultRouter()

router.register('admin-unit', AdminUnitViewSet, 'admin-unit')

urlpatterns = router.urls