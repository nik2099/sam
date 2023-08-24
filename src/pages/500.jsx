import Link from 'next/link';


  const Custom500 = () => {


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
                        <span className="display-1 d-block">500</span>
                        <div className="mb-4 lead">The page you are looking for was not found.</div>
                        <Link href="/">
                            <a className="btn btn-link">Back to Home</a>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
       </div>
    </>
  )
};

export default Custom500;


