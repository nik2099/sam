import Link from 'next/link';
import { backToHome,errormsg} from '../Constant';

  const Custom404 = () => {


  return (
    <>
       <div style={{
            display: 'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            paddingTop:'200px',
            height:'100%'
        }}>
         <div className="page-wrap d-flex flex-row align-items-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center">
                        <span className="display-1 d-block">404</span>
                        <div className="mb-4 lead">{errormsg}</div>
                        <Link href="/">
                            <a className="btn btn-link">{backToHome}</a>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
       </div>
    </>
  )
};

export default Custom404;


