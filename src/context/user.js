import { createContext, useState, useEffect, useContext } from "react";
import app from "../../utils/axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const Context = createContext();

const Provider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState({});
  

  useEffect(() => {

    const fetchUser = async () => {
        try {
          app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
          const response = await app.get("/user");
          if(response.data.type == 'admin'){
            setUser(response.data);
            await router.push("/admin/users");
          }else if(response.data.type == 'user'){
            setUser(response.data);
            // await router.push("/campaigns");
          }
          
        } catch (error) {
  
        }
      };

      fetchUser();
  }, []);



  const exposed = {
    user,setUser
  };

  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export const useUser = () => useContext(Context);

export default Provider;