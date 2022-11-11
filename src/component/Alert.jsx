import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const Alert = () => {



  return (
    <div>
      <div className="alert alert-success alert-dismissible fade show" role="alert">
  <strong><CheckCircleIcon
  className='text-success'/></strong>  has been added to your cart
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    </div>
  )
}

export default Alert
