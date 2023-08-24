import '../styles/index.scss';
import '../../public/css/style_hw.css';
import '../../public/css/color-2.css';
import '../../public/assets/admin/color-2.css';
// import '../../public/css/style.css';
import Head from 'next/head';
import { useState, useEffect,Fragment } from "react";
import CustomizerProvider from '../_helper/Customizer/CustomizerProvider';
import AnimationThemeProvider from '../_helper/AnimationTheme/AnimationThemeProvider';
import AppLayout from '../components/Layout/Layout';
import AdminLayout from '../components/Layout/admin/Layout';
import UserProvider from "../context/user";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null)
  const router = useRouter();
  const adminPanel = router.route.startsWith('/admin') ? true : false
  
  const getLayout =  adminPanel ? ((page) => <AdminLayout children={page} />) : ((page) => <AppLayout children={page} />);

  return (
    <>

         <CustomizerProvider>
             <AnimationThemeProvider>
                 <UserProvider value={user}>
                    {getLayout(<Component {...pageProps} />, pageProps)}
                 </UserProvider>
             </AnimationThemeProvider>
         </CustomizerProvider>
       
    </>
  );
}

export default MyApp;
