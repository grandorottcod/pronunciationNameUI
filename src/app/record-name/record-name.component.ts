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
  success: boolean;

  constructor(audioRecording: AudioRecordingService,
    private pronunciationAPIService: PronunciationAPIService) 
    {this.audioRecording = audioRecording; this.success = false; }

  initiateRecording(){
      this.audioRecording.startRecording();
  }

  stopRecording(){
    this.audioRecording.stopRecording();
  }

  method(){
    console.log("test");
  }

  async submit(){
        const blob = this.audioRecording.getblob();
        this.blobOutgoing = new FormData(); 
        let blobString = await this.blobToBase64(blob);
        this.blobOutgoing.append('blob', blobString);
        this.blobOutgoing.append('name', this.name);
        this.blobOutgoing.append('email', this.email);
        this.blobOutgoing.append('uid', this.uid);
        this.pronunciationAPIService.saveEmployeeNameAlternate(this.blobOutgoing)
        .subscribe((response: any) => {
               if(response == "200"){
                 this.success = true;
               }
        })





  }

   play(){
    const blob = this.audioRecording.getblob();
    const audioURL = URL.createObjectURL(blob);
    const audio = new Audio(audioURL);
    audio.play();
  }

   

    blobToBase64(blob: any): Promise<any> {
    return new Promise((resolve, _) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  }

  ngOnInit(): void {
  }

}
