import app from "../../../utils/axios";
import React, { Fragment } from 'react';
import { useState, useEffect} from 'react';
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import MUIDataTable from "mui-datatables";
import { useUser } from "../../context/user";
import Loader from '../../components/Layout/Loader';

import { BsTrash } from "react-icons/bs";
const AdminLayout = () => {
  const router = useRouter();
  const { user,setUser } = useUser({});
  const [adminUser, setAdminUser] = useState([]);


const columns = [
  {
    name: "id",
    label: "S.No",
      options: {filter: false,
        customBodyRender : (value, tableMeta, update) => {
            let rowIndex = Number(tableMeta.rowIndex) + 1;
            return ( <span>{rowIndex}</span> )
        }
    },
   },
  {
   name: "first_name",
   label: "First Name",
   options: {
    filter: true,
    sort: true,
   }
  },
  {
   name: "email",
   label: "Email",
   options: {
    filter: true,
    sort: false,
   }
  },{
    name: "mobile",
    label: "Mobile",
    options: {
     filter: true,
     sort: true,
    }
   },
   {
    name: "company_name",
    label: "Company Name",
    options: {
     filter: true,
     sort: false,
    }
   },
   {
    name: "id",
    label:"Action",
    options: {
      filter: false,
      customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                    
                           <BsTrash size={20} style={{ color: "#f44336",cursor:"pointer" }} className="" onClick={() => deleteConfirmation(value) }></BsTrash>
                      
                    )
                }
    }
  },
];

  const data = adminUser;
    


    const getAdminUser = async () => {
      try {
        app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        const response = await app.get("/admin/getUser");
        setAdminUser(response.data.users)
      } catch (error) {
       
      }
    };

    function deleteConfirmation(id) {
      let text = "Are you sure delete this user.";
      if (confirm(text) == true) {
        UserDelete(id);
      }
    }


    const UserDelete= async (id) => {

      try {
        app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        const response = await app.get("/admin/deleteUser/"+id);
        setAdminUser(response.data.users)
        toast.success('User has been deleted');
      } catch (error) {
       
      }
    };




    
    useEffect(() => {
     
      if(localStorage.token){
        if (user && !user.type == 'admin') {
          localStorage.clear();
          router.push("/login");
        }else{
          getAdminUser();
        }
      }else{
        router.push("/login");
      }
    
  
    },[]);

   

  return (
    <Fragment>
      <Loader/>
          <div className="container-fluid">
            <div className="row mt-2 mb-2">
                <div className="col-sm-12 col-xl-12 col-xxl-8 box-col-8 my-auto">
                    <div className="mt-3">
                        <MUIDataTable 
                            title={"User List"} 
                            data={data} 
                            columns={columns} 
                            options={{
                              selectableRows: false // <===== will turn off checkboxes in rows
                            }}
                          />
                    </div>
                </div>
            </div>
          </div> 
    </Fragment>
  );
};
export default AdminLayout;