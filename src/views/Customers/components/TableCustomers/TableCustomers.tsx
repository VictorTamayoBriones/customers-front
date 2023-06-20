import { getCustomers } from '@/api/services/customers/getCustomers.service';
import { ICustomer } from '@/models/customer.models';
import { useEffect, useState } from 'react';
import ItemCustomer from '../ItemCustomer/ItemCustomer';
import { TableContainer } from './tableCustomer.style';


function TableCustomers() {

  const [customersList, setCustomersList]=useState<ICustomer[]>([])

  useEffect(()=>{
    (async()=>{
      const res = await getCustomers()
      setCustomersList(res.data);
    })();
  },[])

  return (
    <TableContainer>
      {
        customersList.map((customer:ICustomer, i:number)=>{
          return(
            <ItemCustomer key={customer.id} {...{...customer, indexRecord: i}} />
          )
        })
      }
    </TableContainer>
  )
}

export default TableCustomers