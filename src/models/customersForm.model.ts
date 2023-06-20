export interface ICustomerForm {
    title: string,
    action: 'create' | 'update',
}

export interface ICustomerFormdata{
    full_name: string,
    nss: number,
    rfc: string,
    phone: number
}