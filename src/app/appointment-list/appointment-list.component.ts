import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit{


  
  newAppointmentTitle : string = "";
  newAppointmentDate : Date = new Date();

  appointments: Appointment[] = []

//the life cycle hook very important
  ngOnInit(): void {
       let savedAppointment  = localStorage.getItem('appointments');
       this.appointments = savedAppointment ? JSON.parse(savedAppointment) : []
    //this.addAppointment();
    //this.deleteAppointment()
  }
  
  
  addAppointment(){

    if(this.newAppointmentTitle.trim().length &&  this.newAppointmentDate){
      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }

      this.appointments.push(newAppointment);
      this.newAppointmentTitle = '';
      this.newAppointmentDate = new Date();

      localStorage.setItem('appointments', JSON.stringify( this.appointments))
    }
    //alert(this.appointments);
  }

  deleteAppointment(index: number){
     this.appointments.splice(index, 1);
     localStorage.setItem('appointments', JSON.stringify( this.appointments))

  }



}
