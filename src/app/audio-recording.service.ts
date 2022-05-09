import { Injectable } from '@angular/core';
import { NgAudioRecorderService, OutputFormat } from 'ng-audio-recorder';

@Injectable({
  providedIn: 'root'
})
export class AudioRecordingService {

  constructor(private audioRecorderService: NgAudioRecorderService) {
    
    this.audioRecorderService.recorderError.subscribe(recorderErrorCase => {
        // Handle Error
    })
}

  startRecording() {
    this.audioRecorderService.startRecording();
  }

  stopRecording() {
     this.audioRecorderService.stopRecording(OutputFormat.WEBM_BLOB_URL).then((output) => {
       let audio = new Audio(output as string)
       audio.play();
     }).catch(errrorCase => {
         // Handle Error
     });
  }
}
