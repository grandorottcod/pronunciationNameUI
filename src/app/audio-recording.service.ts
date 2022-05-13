import { Injectable } from '@angular/core';
import { NgAudioRecorderService, OutputFormat } from 'ng-audio-recorder';

@Injectable({
  providedIn: 'root'
})
export class AudioRecordingService {

  blob: any;

  constructor(private audioRecorderService: NgAudioRecorderService) {
    
    this.audioRecorderService.recorderError.subscribe(recorderErrorCase => {
        // Handle Error
    })
}

  startRecording() {
    this.audioRecorderService.startRecording();
  }

  stopRecording() {
     this.audioRecorderService.stopRecording(OutputFormat.WEBM_BLOB).then((output) => {
       this.blob = output;
     }).catch(errrorCase => {
         // Handle Error
     });
  }

  getblob(){
    return this.blob;
  }
}
