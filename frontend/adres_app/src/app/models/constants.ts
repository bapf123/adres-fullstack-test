import { AdminUnitService } from "../services/admin-unit.service"

export const DATE_REGEX = /\B(?=(\d{3})+(?!\d))/g

export const ACQUISITION_FIELDS = [
    { attr: 'id', label: 'ID', type: 'number' },
    { attr: 'budget', label: 'Presupuesto', type: 'number' },
    { attr: 'unit', label: 'Unidad', type: 'select' },
    { attr: 'acquisition_type', label: 'Tipo de bien o servicio', type: 'text' },
    { attr: 'quantity', label: 'Cantidad', type: 'number' },
    { attr: 'unit_cost', label: 'Valor unitario', type: 'number' },
    { attr: 'total_cost', label: 'Total', type: 'number' },
    { attr: 'date', label: 'Fecha de adquisición', type: 'date' },
    { attr: 'supplier', label: 'Proveedor', type: 'select' },
    { attr: 'docs', label: 'Documentación', type: 'text' },
    { attr: 'status', label: 'Estado', type: 'select' },
]

export const TRANSACTION_FIELDS = [
    { attr: 'id', label: 'ID Transacción', type: 'number' },
    // { attr: 'acquisition', label: 'ID Adquisición', type: 'number' },
    { attr: 'transaction_type', label: 'Tipo', type: 'text' },
    { attr: 'date', label: 'Fecha', type: 'date' }
]

export const ENTITIES_MAP: any = {
    supplier: {
        label: 'Proveedor', 
        fields: [
            { attr: 'id', label: 'ID', type: 'number' },
            { attr: 'name', label: 'Nombre', type: 'text' }
        ]
    },
    adminUnit: {
        label: 'Unidad administradora', 
        fields: [
            { attr: 'id', label: 'ID', type: 'number' },
            { attr: 'name', label: 'ID', type: 'text' }
        ]
    }
}