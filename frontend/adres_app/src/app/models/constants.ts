import { AdminUnitService } from "../services/admin-unit.service"

export const DATE_REGEX = /\B(?=(\d{3})+(?!\d))/g

export const ACQUISITION_FIELDS_TABLE = [
    { attr: 'id', label: 'ID', type: 'number', filter: true },
    { attr: 'budget', label: 'Presupuesto', type: 'number', filter: true },
    { attr: 'unit_name', label: 'Unidad', type: 'text', filter: true },
    { attr: 'acquisition_type', label: 'Tipo de bien o servicio', type: 'text', filter: true },
    { attr: 'quantity', label: 'Cantidad', type: 'number', filter: true },
    { attr: 'unit_cost', label: 'Valor unitario', type: 'number', filter: true },
    { attr: 'total_cost', label: 'Total', type: 'number', filter: true },
    { attr: 'date', label: 'Fecha de adquisición', type: 'date', filter: false },
    { attr: 'supplier_name', label: 'Proveedor', type: 'text', filter: true },
    { attr: 'docs', label: 'Documentación', type: 'text', filter: true },
    { attr: 'status', label: 'Estado', type: 'select', filter: false },
]

export const ACQUISITION_FIELDS_FORM = [
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
            { attr: 'name', label: 'Nombre', type: 'text' }
        ]
    }
}