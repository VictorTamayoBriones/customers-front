import MainCustomers from "./MainCustomers"
import { CustomerProvider } from "./context/customers.provider"
import { CustomersContainer } from "./customers.style"

function Customers() {

  return (
    <CustomerProvider>
      <CustomersContainer>
        <MainCustomers/>
      </CustomersContainer>
    </CustomerProvider>
  )
}

export default Customers