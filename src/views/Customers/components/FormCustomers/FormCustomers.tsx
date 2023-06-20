import Button from '@/components/Button/Button'
import { Input } from '@/components/Input/Input'
import { FormCustomersContainer } from './formCustomers.style'
import { useContext } from 'react';
import { CustomerContext } from '../../context/customers.context';

export const  FormCustomers = ()=> {

  const { handleFormVisible, formCustomerData, handleSubmit, handleDataForm, formConfig } = useContext(CustomerContext)

  return (
    <FormCustomersContainer>
      <form onSubmit={(e)=>handleSubmit(e)} >
        <h2>{formConfig.title}</h2>
        <Input type="text" label="Full name" name="full_name" value={formCustomerData.full_name} onChange={(e)=>{handleDataForm(e)}} min={3} max={50}/>
        <Input type="number" label="NSS" name="nss" value={formCustomerData.nss} onChange={(e)=>{handleDataForm(e)}} min={3} max={50}/>
        <Input type="text" label="RFC" name="rfc" value={formCustomerData.rfc} onChange={(e)=>{handleDataForm(e)}} min={3} max={50}/>
        <Input type="number" label="Phone" name="phone" value={formCustomerData.phone} onChange={(e)=>{handleDataForm(e)}} min={3} max={50}/>
        <footer>
          <Button type="submit" >Create</Button>
          <div className='btn-cancel'  onClick={()=>handleFormVisible(false)} >
            <Button type="button">Cancel</Button>
          </div>
        </footer>
      </form>
    </FormCustomersContainer>
  )
}