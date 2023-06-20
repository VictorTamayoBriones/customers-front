export interface ICustomer {
    id: string,
    full_name: string,
    nss: string,
    rfc: string,
    phone: number,
    address: string,
    versions: IVersions[] | [],
    indexRecord: number | null
}

export type IVersions = {
    id: string,
    id_customer: string
    full_name: string,
    nss: string,
    rfc: string,
    phone: number,
    address: string,
    contrac: string
}

export type requestCustomer = Omit<ICustomer, 'id'>