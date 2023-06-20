import { ICustomer } from "@/models/customer.models"
import { IVersions } from '../../../../models/customer.models';
import { ItemCustomerContainer } from "./itemCustomer.style";
import Button from "@/components/Button/Button";
import { Icons } from "@/assets/icons/Icons";

function ItemCustomer({ id, full_name, nss, rfc, address, phone, versions, indexRecord }:ICustomer) {
    const INDEX = indexRecord != null ? indexRecord + 1 : '' 
  return (
    <ItemCustomerContainer id={id} >
        <div className="main-record">
            <div><p>{ INDEX }</p></div>
            <div><p>{full_name}</p></div>
            <div><p>{nss}</p></div>
            <div><p>{rfc}</p></div>
            <div><p>{address}</p></div>
            <div><p>{phone}</p></div>
            <div>
                <div className="btn-edit" ><Button type="button">{<Icons.edit/>}</Button></div>
                <div className="btn-delete" ><Button type="button">{<Icons.delete/>}</Button></div>
            </div>
        </div>
        <div className="versions">
            {
                versions.map((version:IVersions)=>{
                    return(
                        <div className="version">
                            <div><p>{version.full_name}</p></div>
                            <div><p>{version.nss}</p></div>
                            <div><p>{version.rfc}</p></div>
                            <div><p>{version.address}</p></div>
                            <div><p>{version.phone}</p></div>
                        </div>
                    )
                })
            }
        </div>
    </ItemCustomerContainer>
  )
}

export default ItemCustomer