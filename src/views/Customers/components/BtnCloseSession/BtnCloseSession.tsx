import Button from "@/components/Button/Button"
import { PRIVATE_ROUTES } from "@/models/routes.model";
import { logout } from "@/redux/states/userSlice";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function BtnCloseSession() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = ()=>{
    dispatch(logout());
    navigate(PRIVATE_ROUTES.CUSTOMERS);
  }

  return (
    <div className="btnCloseSession" onClick={()=>handleClick()}>
      <Button type="button">
        Close session
      </Button>
    </div>
  )
}

export default BtnCloseSession