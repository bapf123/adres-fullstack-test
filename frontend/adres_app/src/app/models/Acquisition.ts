interface IObjectKeys {
    [key: string]: string | number;
}

export interface Acquisition extends IObjectKeys {
    id: number
    budget: number
    acquisition_type: string
    quantity: number
    unit_cost: number
    total_cost: number
    date: string
    docs: string
    status: string
    unit: number
    supplier: number
}