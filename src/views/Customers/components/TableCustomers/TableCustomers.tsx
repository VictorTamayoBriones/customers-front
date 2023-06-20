import { ICustomer } from '@/models/customer.models';
import { useContext } from 'react';
import ItemCustomer from '../ItemCustomer/ItemCustomer';
import { TableContainer } from './tableCustomer.style';
import { CustomerContext } from '../../context/customers.context';


function TableCustomers() {

  const { customersList } = useContext(CustomerContext)

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