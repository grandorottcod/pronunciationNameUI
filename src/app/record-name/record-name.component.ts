import { Component, OnInit } from '@angular/core';
import { AudioRecordingService } from '../audio-recording.service';


@Component({
  selector: 'app-record-name',
  templateUrl: './record-name.component.html',
  styleUrls: ['./record-name.component.css']
})
export class RecordNameComponent implements OnInit {
  
  email!: string;
  audioRecording: AudioRecordingService;

  constructor(audioRecording: AudioRecordingService) {this.audioRecording = audioRecording; }

  initiateRecording(){
      this.audioRecording.startRecording();
  }

  stopRecording(){
    this.audioRecording.stopRecording();
  }

  method(){
    console.log("test");
  }

  ngOnInit(): void {
  }

}
