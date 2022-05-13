import { Component, OnInit } from '@angular/core';
import { AudioRecordingService } from '../audio-recording.service';
import { Employee } from '../global-types.service';
import { PronunciationAPIService } from '../pronunciation-api.service';


@Component({
  selector: 'app-record-name',
  templateUrl: './record-name.component.html',
  styleUrls: ['./record-name.component.css']
})
export class RecordNameComponent implements OnInit {
  
  email!: string;
  uid!: string;
  name!: string;
  audioRecording: AudioRecordingService;
  blobOutgoing!: FormData;
  employee!: Employee;

  constructor(audioRecording: AudioRecordingService,
    private pronunciationAPIService: PronunciationAPIService) 
    {this.audioRecording = audioRecording; }

  initiateRecording(){
      this.audioRecording.startRecording();
  }

  stopRecording(){
    this.audioRecording.stopRecording();
  }

  method(){
    console.log("test");
  }

  submit(){
        const blob = this.audioRecording.getblob();
        const typeBlob = blob as Blob;
        console.log(typeBlob);
        this.blobOutgoing = new FormData(); 
        this.blobOutgoing.append('file', blob);
        this.blobOutgoing.append('name', this.name);
        this.blobOutgoing.append('email', this.email);
        this.blobOutgoing.append('uid', this.uid);
        this.pronunciationAPIService.saveEmployeeNameAlternate(this.blobOutgoing)
        .subscribe((response: any) => {
               console.log(response);
        })

  }

  play(){
    const blob = this.audioRecording.getblob();
    const audioURL = URL.createObjectURL(blob);
    const audio = new Audio(audioURL);
    audio.play();
    
  }

  ngOnInit(): void {
  }

}
