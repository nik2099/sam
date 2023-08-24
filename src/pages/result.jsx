import { useState, useEffect } from "react";
import app from "../../utils/axios";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { useExcelDownloder } from 'react-xls';
import Chart from 'chart.js/auto';
import {Bar} from 'react-chartjs-2';
import { useUser } from "../context/user";
import {CategoryScale} from 'chart.js'; 
import { timestampToDate } from "../../utils/helpers";
import Moment from 'moment';
import DatePicker from "react-datepicker";
import { allResults, Downloads,totals,Name,campaign,subUser,question,dates,Email} from '../Constant';
import "react-datepicker/dist/react-datepicker.css";
import Loader from '../components/Layout/Loader';
Chart.register(CategoryScale);


const Result = ({ children}) => {
   
    const router = useRouter();
    const [subscription, setCampaignSubscription] = useState([]);
    const [total, setTotalSubscription] = useState([]);
    const [lable, setLable] = useState([]);
    const [device_data, setData] = useState([]);
    const { ExcelDownloder, Type } = useExcelDownloder();
    
   
   
    const excel_data = {
        subscription: subscription,
    };

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const handleCalendarClose = () =>{
      let flag = true
      let stdate = Moment(startDate).format("DD-MM-YYYY")
      let eddate = Moment(endDate).format("DD-MM-YYYY")
      if (stdate == 'Invalid date') {
        stdate=null;
      }
      if (eddate == 'Invalid date') {
        eddate=null;
      }
      
      getDeviceRecords([stdate,eddate]);
    } 

    const onChange = (dates) => {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
    };
   

   
    
    const data = {
        labels: lable,
        datasets: [{
            label: 'Hours Spend On App by User',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: device_data
            }]
    };



      const getDeviceRecords = async (dates=null) => {
        console.log("dt",dates)
        try {
          if(dates==null){
            var body={}
          }else{
            var body = {'date': dates};
          }
          app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
          const response = await app.post("/getResult",body);
        
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
            <div className="col-sm-12 col-md-8 col-xl-9 col-xxl-10 box-col-10 my-auto">
              <ul className="nav-steps">
                <li><b>{allResults}</b></li>
              </ul>
            </div>
            
            <div className="col-sm-12 col-md-4 col-xl-3 col-xxl-2 box-col-2 my-auto text-right">
                <DatePicker
                  selectsRange={true}
                  startDate={startDate}
                  endDate={endDate}
                  dateFormat="MMMM d, yyyy"
                  onChange={onChange}
                  onCalendarClose={handleCalendarClose}
                  withPortal
                />
            </div>
          </div>
        </div>


      <div className="container-fluid">
        <div className="row mt-2 mb-2">
          <div className="">
            <div className="row">
            <div className="col-md-12">
          
            <table className="table table-bordered table-primary">
            <thead>
            <tr>
              
                <th scope="col">{Name}</th>
                <th scope="col">{Email}</th>
                <th scope="col">{campaign}</th>
                <th scope="col">{subUser}</th>
                <th scope="col">{question}1</th>
                <th scope="col">{question}2</th>
                <th scope="col">{question}3</th>
                <th scope="col">{dates}</th>
            </tr>
            </thead>
            <tbody>

            {subscription.map((ele)=>
            <tr  key={ele.id}>
                <td>{ele.name}</td>
                <td>{ele.email}</td>
                <td>{ele.campaign.name}</td>
                <td>{ele.user.name}</td>
                <td>{ele.question1}</td>
                <td>{ele.question2}</td>
                <td>{ele.question3}</td>
              
                <td>{Moment(ele.created_at).format("DD-MM-YYYY h:mm:ss")}</td>
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
                        filename={'Campaign result'}
                        >
                        {Downloads}
                    </ExcelDownloder>
                </th>
            </tr>
            </thead>
            </table>

            </div>

          
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
