import { useContext, useState } from 'react';
import { CustomerContext } from '../../context/customers.context';
import { ICustomer } from '@/models/customer.models';
import { MainTrashContainer, TrashContainer } from './trash.style';
function Trash() {

    const { customersDeletedList, takeOutTrashById } = useContext(CustomerContext)

    const [trashIsOpen, setTrashIsOpen]=useState<boolean>(false);

  return (
    <MainTrashContainer>
        <button className='showTrash' onClick={()=>setTrashIsOpen(!trashIsOpen)} >Show trash</button>
        <TrashContainer status={trashIsOpen} >
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
    </MainTrashContainer>
  )
}

export default Trash