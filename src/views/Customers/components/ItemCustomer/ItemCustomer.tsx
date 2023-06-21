import { ICustomer } from "@/models/customer.models"
import { IVersions } from '../../../../models/customer.models';
import { ItemCustomerContainer } from "./itemCustomer.style";
import Button from "@/components/Button/Button";
import { Icons } from "@/assets/icons/Icons";
import { useContext } from 'react';
import { CustomerContext } from "../../context/customers.context";

function ItemCustomer({ id, full_name, nss, rfc, phone, versions, indexRecord }:ICustomer) {
    const INDEX = indexRecord != null ? indexRecord + 1 : '';
    const { deleteCustomerByid, updateCustomerById } = useContext(CustomerContext);

  return (
    <ItemCustomerContainer>
        <div className="main-record">
            <div ><p>{ INDEX }</p></div>
            <div><p>{full_name}</p></div>
            <div><p>{nss}</p></div>
            <div><p>{rfc}</p></div>
            <div><p>{phone}</p></div>
            <div>
                <div className="btn-edit" onClick={()=>updateCustomerById({full_name, nss:Number(nss), rfc, phone},id)} ><Button type="button">{<Icons.edit/>}</Button></div>
                <div className="btn-delete" onClick={()=>deleteCustomerByid(id)} ><Button type="button">{<Icons.delete/>}</Button></div>
            </div>
        </div>
        <div className="versions">
            {
                versions.map((version:IVersions)=>{
                    return(
                        <div className="version">
                            <div><p>-</p></div>
                            <div><p>{version.full_name}</p></div>
                            <div><p>{version.nss}</p></div>
                            <div><p>{version.rfc}</p></div>
                            <div><p>{version.phone}</p></div>
                            <div className="button" >
                                <Button type="button" >Use this version</Button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </ItemCustomerContainer>
  )
}

export default ItemCustomer