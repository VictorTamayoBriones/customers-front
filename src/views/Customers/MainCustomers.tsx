import BtnCreateCustoner from './components/BtnCreateCustomer/BtnCreateCustoner'
import TableCustomers from './components/TableCustomers/TableCustomers'
import { FormCustomers } from './components/FormCustomers/FormCustomers'
import { useContext } from 'react';
import { CustomerContext } from './context/customers.context';

function MainCustomers() {
    const { formIsVisible } = useContext(CustomerContext)

  return (
    <>
      <BtnCreateCustoner/>
      <TableCustomers/>
      { formIsVisible &&  <FormCustomers/>}
    </>
  )
}

export default MainCustomers