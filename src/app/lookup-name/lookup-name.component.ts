import { Component, OnInit } from '@angular/core';
import { Employee} from '../global-types.service';
import { PronunciationAPIService } from '../pronunciation-api.service';

@Component({
  selector: 'app-lookup-name',
  templateUrl: './lookup-name.component.html',
  styleUrls: ['./lookup-name.component.css']
})
export class LookupNameComponent implements OnInit {

  name: string;

  employee!: Employee;

  constructor(private pronunciationAPIService: PronunciationAPIService) { this.name = "" }

  ngOnInit(): void {
  }

  search(){
    const hasNumber = /\d/;
    if(this.name.includes('@')){
      this.employee = {name: "", email: this.name, uid: "", blob: "", blobOutgoing: null, blobByte: new Array()}
      this.playAudioFromBlob();
    }
    else if(hasNumber.test(this.name)){
      this.employee = {name: "", email: "", uid: this.name, blob: "", blobOutgoing: null, blobByte: new Array()}
      this.playAudioFromBlob();
    }
    else{
      this.employee = {name: this.name, email: "", uid: "", blob: "", blobOutgoing: null, blobByte: new Array}
      this.playAudioFromAzure();
     }
     
  }

  playAudioFromAzure(){
    this.pronunciationAPIService
     .pronounceName(this.employee)
      .subscribe((response: Array<Employee>) => {
      console.log(response);
      response.forEach( (employee) => {
      let wavString =  employee.blob;
      let len = wavString.length;
      let buf = new ArrayBuffer(len);
      let view = new Uint8Array(buf);
       for (var i = 0; i < len; i++) {
       view[i] = wavString.charCodeAt(i) & 0xff;
       }
       let blob = new Blob([view], {type: "audio/x-wav"});

     console.log(employee.blob);
     const audioURL = URL.createObjectURL(blob);
     let audio = new Audio(audioURL)
     audio.controls = true;
      audio.play();
     })
    });
  }

  playAudioFromBlob(){
    this.pronunciationAPIService
    .pronounceName(this.employee)
     .subscribe((response: Array<Employee>) => {
     console.log(response);
   response.forEach( (employee) => {/*
     let wavString =  employee.blobByte;
     let len = wavString.length;
     let buf = new ArrayBuffer(len);
     let view = new Uint8Array(buf);
      for (var i = 0; i < len; i++) {
      view[i] = wavString.charCodeAt(i) & 0xff;
      }*/
      let blob = new Blob(employee.blobByte, {type: "audio/webm"});

    console.log(employee.blob);
    const audioURL = URL.createObjectURL(blob);
    let audio = new Audio(audioURL)
    audio.controls = true;
     audio.play();
    })
   });
  }

}
