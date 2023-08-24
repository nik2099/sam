import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import app from "../../utils/axios";
import { toast } from "react-toastify";
import Loader from '../components/Layout/Loader';
const Home = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  
  const fetchUser = async () => {
    try {
      if(localStorage.getItem('token') !== 'undefined'){
          app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
          const response = await app.get("/user");
          if(response.data.type == 'admin'){
            await router.push("/admin/users");
          }else{
            router.push("/campaigns");
          }
        
      }else{
        router.push("/login");  
      }
    } catch (error) {
      if(error.response == null){
      
      }else{
        if(error.response.status == 401){
          router.push("/login");
          localStorage.clear();
        }
      }
    }
  };
  useEffect(() => {
    fetchUser();
  },[]);


  if(loading) {
    return <><p>Loading..</p></>
  }

};


export default Home;
