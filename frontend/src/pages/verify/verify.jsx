import React, { useContext, useEffect } from 'react'
import './verify.css'
const verify = () => {
  const [serchParams,setSearchParams]=useSearchParams();
  const success=setSearchParams.get("success")
  const orderId=setSearchParams.get("orderId")
  const {url} =useContext(StoreContext);
  const navigate=useNavigate();

  const verifyPayment=async()=>{
    const response=await axios.post(url+"/api/order/verify",{success,orderId});
    if(response.data.success){
      navigate("/myorders");
    }
    else{
      navigate("/");
    }
  }
  useEffect(()=>{
    verifyPayment();
  },[])
  return (
    <div className="verify">
      <div className="spinner">

      </div>
    </div>
  )
}

export default verify