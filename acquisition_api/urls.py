from rest_framework import routers

from acquisition_api.api import AdminUnitViewSet, SupplierViewSet, AcquisitionViewSet

router = routers.DefaultRouter()

router.register('admin-unit', AdminUnitViewSet, 'admin-unit')
router.register('supplier', SupplierViewSet, 'supplier')
router.register('acquisition', AcquisitionViewSet, 'acquisition')

urlpatterns = router.urls