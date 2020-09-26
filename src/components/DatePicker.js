import React, {useState, useEffect} from 'react'
import DateView from 'react-datepicker'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'
import 'react-datepicker/dist/react-datepicker.css'
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
// import subDays from "date-fns/subDays";

import db from '../firebase';
// import firebase from 'firebase';

function DatePicker (props) {

  
  // const [meses] = useState([]);
  const [dias] = useState([]);
  const [horas] = useState([]);
  const [minutos] = useState([]);
  const [dates] = useState([]);



  const { label, name, ...rest } = props

  const isWeekday = date => {

    const day = date.getDay();
    
    return day !== 0 && day !== 6 && day !== 5;

  
  };

  console.log(dates);
  


   
    useEffect( ()=>{

    db.collection("reservas").orderBy("date", "asc")
    .onSnapshot(function(querySnapshot) {
        
          querySnapshot.forEach(function(doc) {

          
          dias.push(new Date(doc.data().date * 1000).getDate());
          horas.push(new Date(doc.data().date * 1000).getHours());
          minutos.push(new Date(doc.data().date * 1000).getMinutes());
          dates.push((doc.data().date));
          
         
        });

       
       
        dias.forEach(function(dia) {
          console.log( `"dia:" ${dia}`);
        });
        horas.forEach(function(hora) {
          console.log(`"hora" ${hora}`);
        });
        dates.forEach(function(date) {
          console.log(`"date" ${date}`);
        });
      
        
      });
  },  
  
);



 
  return (
    <div className='form-control'>
      
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form
          const { value } = field

        
          return (
            <div>
            <div>
            <DateView
              id={name}
              {...field}
              {...rest}
             
              selected={value}
              dateFormat="dd 'de' MMMM 'de' yyyy"
              onChange={val => setFieldValue(name, val)}
              placeholderText="Día"
              filterDate={isWeekday}
       
            />
            </div>

            <DateView
              id={name}
              {...field}
              {...rest}
             
              selected={value}
              showTimeSelect
            
              dateFormat="  h:mm aa"
              onChange={val => setFieldValue(name, val)}
              placeholderText="Hora"
              showTimeSelectOnly
              timeIntervals={60}
                
              excludeTimes= {[
                setHours(setMinutes(new Date(1609452000*100), 0), 17)]}
              
              minTime={setHours(setMinutes(new Date(), 0), 10)}
              maxTime={setHours(setMinutes(new Date(), 30), 17)}
              
             
            />
            </div>
          )
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default DatePicker

