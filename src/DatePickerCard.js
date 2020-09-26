
import React, { Component, useState } from "react";
import './DatePickerCard.css';
import DatePicker, {registerLocale} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import es from 'date-fns/locale/es';
registerLocale("es", es);

class DatePickerCard extends Component {
  
state={
  date: new Date()
  
}

onChange = date =>{
  this.setState({date: date});
}

showDate = date =>{
  const options = {weekday: 'long', year: 'numeric', month: 'long', day : 'numeric'};
  alert(date.toLocaleDateString('es-ES', options));
  // console.log(this.state);
  alert(this.date);
}

  render() {
    
    return (
      <>
        <div className="container">
          {/* <div className="center"> */}
           <DatePicker 
            selected={this.state.date} 
            onChange={this.onChange} 
            showTimeSelect

            timeFormat="HH:mm"
            timeIntervals={60}
            
            minDate={new Date()}
            // withPortal
            
            locale="es" 
            className="datePicker" 
            dateFormat="dd 'de' MMMM 'de' yyyy 'a las' h:mm aa"
           />
           
           <input type="text"  placeholder="Tu nombre" className="datePicker"></input>
           <input type="text"  placeholder="Tu email" className="datePicker"></input>
           <input type="button" value="Agendar Hora" className="input__date" onClick={()=>this.showDate(this.state.date)}/>
          {/* </div> */}
        </div>
      </>
    );
  }
}

export default DatePickerCard;




