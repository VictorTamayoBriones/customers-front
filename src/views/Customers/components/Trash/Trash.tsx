import { useContext } from 'react';
import { CustomerContext } from '../../context/customers.context';
import { ICustomer } from '@/models/customer.models';
import { TrashContainer } from './trash.style';
function Trash() {

    const { customersDeletedList, takeOutTrashById } = useContext(CustomerContext)
  return (
    <TrashContainer>
    {
        customersDeletedList.map((customer: ICustomer)=>{
            return(
                <div>
                    <p>Name: {customer.full_name}</p>
                    <p>NSS: {customer.nss}</p>
                    <p>RFC: {customer.rfc}</p>
                    <p>Phone: {customer.phone}</p>
                    <button onClick={()=>takeOutTrashById(customer.id)} >take out</button>
                </div>
            )
        })
    }
    </TrashContainer>
  )
}

export default Trash