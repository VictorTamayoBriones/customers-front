import Button from "@/components/Button/Button"
import { useContext } from 'react';
import { CustomerContext } from "../../context/customers.context";

function BtnCreateCustoner() {

  const { handleFormVisible, handleFormConfig } = useContext(CustomerContext);

  const handleClick = () =>{
    handleFormVisible(true);
    handleFormConfig({action: 'create', title:'Create Customer'})
  }

  return (
    <div className="btnCreateCustomer" onClick={()=>handleClick()}>
      <Button type="button">
        Create Customer
      </Button>
    </div>
  )
}

export default BtnCreateCustoner