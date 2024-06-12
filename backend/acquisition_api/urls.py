from rest_framework import routers

from acquisition_api.api import AdminUnitViewSet, SupplierViewSet, AcquisitionViewSet, TransactionViewSet

router = routers.DefaultRouter()

router.register('admin-unit', AdminUnitViewSet, 'admin-unit')
router.register('supplier', SupplierViewSet, 'supplier')
router.register('acquisition', AcquisitionViewSet, 'acquisition')
router.register('transaction', TransactionViewSet, 'transaction')

urlpatterns = router.urls