import TableCustomers from "./components/TableCustomers/TableCustomers"
import { CustomersContainer } from "./customers.style"

function Customers() {

  return (
    <CustomersContainer>
      <TableCustomers/>
    </CustomersContainer>
  )
}

export default Customers