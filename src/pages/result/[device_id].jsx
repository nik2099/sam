import { useState, useEffect } from "react";
import app from "../../../utils/axios";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { useExcelDownloder } from 'react-xls';
import Chart from 'chart.js/auto';
import {Bar} from 'react-chartjs-2';
import { useUser } from "../../context/user";
import {newSubscribe,Name,Email,Downloads,hourSpendByUser,totals,SessionDuration,last7Days} from '../../Constant';
import Loader from '../../components/Layout/Loader';
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);


const Result = ({ children , device_id}) => {
    const { user,setUser } = useUser({});
    const router = useRouter();
    const [subscription, setCampaignSubscription] = useState([]);
    const [total, setTotalSubscription] = useState([]);
    const [lable, setLable] = useState([]);
    const [device_data, setData] = useState([]);
    const { ExcelDownloder, Type } = useExcelDownloder();

    const excel_data = {
        subscription: subscription,
    };


    
    const data = {
        labels: lable,
        datasets: [{
            label: {hourSpendByUser},
            backgroundColor: 'rgb(84 193 219)',
            borderColor: 'rgb(84 193 219);',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: device_data
            }]
    };



      const getDeviceRecords = async () => {
        try {
          app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
          const response = await app.post("/getDeviceRecords",{'device_id': device_id});
          console.log(response);
          setCampaignSubscription(response.data.subscription);
          setTotalSubscription(response.data.total);
          setLable(response.data.date_label_list);
          setData(response.data.daywise_data);
         
        } catch (error) {
        }
      };
  
    useEffect(() => {
      getDeviceRecords();
    }, []);

  

  return (
    <>
     <Loader/>
      <div className="container-fluid">
        <div className="row mt-2 mb-2">
          <div className="">
            <div className="row">
            <div className="col-md-5">
            <h6>{newSubscribe}</h6>
            <table className="table table-bordered table-primary">
            <thead>
            <tr>
                <th scope="col">{Name}</th>
                <th scope="col">{Email}</th>
            </tr>
            </thead>
            <tbody>

            {subscription.map((ele)=>
            <tr  key={ele.id}>
                <td>{ele.name}</td>
                <td>{ele.email}</td>
            </tr>

            )}


            </tbody>
            </table>

            <table className="table table-bordered table-primary">
            <thead>
            <tr>
                <th scope="col">{totals}: {total}</th>
                <th scope="col">
                    <ExcelDownloder
                        data={excel_data}
                        filename={'Campaign'}
                        >
                        {Downloads}
                    </ExcelDownloder>
                </th>
            </tr>
            </thead>
            </table>

            </div>

            <div className="col-md-7">
            <div className="row">
            <div className="col-md-8">
                <div className="mb-3">
                    <h6>{SessionDuration}</h6>
                    <div className="card c-height">
                    
                        <div className="card-body text-center p-0">
                        <div>
                            <Bar
                                data={data}
                                width={400}
                                height={400}
                            />
                        </div>
                        </div>
                    
                        <div className="card-footer">
                          <span className="m-0">{last7Days}</span>
                        </div>
                    </div>
                
                </div>
            </div>

  

            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;

export const getServerSideProps = async (context) => {
    const { device_id } = context.params;
    const { user } = context.query;
      
    return {
      props: {
        device_id,
      },
    };
  };
