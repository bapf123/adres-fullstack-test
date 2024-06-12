export const DATE_REGEX = /\B(?=(\d{3})+(?!\d))/g

export const ACQUISITION_FIELDS = [
    { attr: 'id', label: 'ID', type: 'number' },
    { attr: 'budget', label: 'Presupuesto',  type: 'number' },
    { attr: 'unit', label: 'Unidad', type: 'number' },
    { attr: 'acquisition_type', label: 'Tipo de bien o servicio', type: 'text' },
    { attr: 'quantity', label: 'Cantidad', type: 'number' },
    { attr: 'unit_cost', label: 'Valor unitario', type: 'number' },
    { attr: 'total_cost', label: 'Total', type: 'number' },
    { attr: 'date', label: 'Fecha de adquisición', type: 'date' },
    { attr: 'supplier', label: 'Proveedor', type: 'number' },
    { attr: 'docs', label: 'Documentación', type: 'text' },
    { attr: 'status', label: 'Estado', type: 'text' },
]

export const TRANSACTION_FIELDS = [
    { attr: 'id', label: 'ID Transacción', type: 'number' },
    { attr: 'acquisition', label: 'ID Adquisición', type: 'number' },
    { attr: 'transaction_type', label: 'Tipo', type: 'text' },
    { attr: 'date', label: 'Fecha', type: 'date' }
]