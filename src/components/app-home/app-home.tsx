import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  handleMatch(ev){
    if(ev.detail){
      console.log("It's a match!")
    } else {
      console.log("Maybe next time");
    }
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Chicken Tander</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <h2>Swipe right on restaurants you like</h2>
        <div class="tinder-container">
          <app-tinder-card name="Dairy Queen" description="This is a sample description." imgURL="https://lh5.googleusercontent.com/p/AF1QipMHyPJLFZRByR8V8fRNUsxHjtcTeqPD_-Dthmpo=w203-h152-k-no" onMatch={(ev) => {this.handleMatch(ev)}} />
          <app-tinder-card name="Fox City" description="This is a sample description." imgURL="https://lh5.googleusercontent.com/p/AF1QipO7-WEnxLFYSkmkYHMN6EUvDtAHDmQ9j8fpLW6i=w203-h152-k-no" onMatch={(ev) => {this.handleMatch(ev)}} />
          <app-tinder-card name="Grits Cafe" description="This is a sample description." imgURL="https://lh5.googleusercontent.com/p/AF1QipN6ReTo1Bvpr86ld6B2HXJIGzKBsuBFPwLwqztp=w203-h152-k-no" onMatch={(ev) => {this.handleMatch(ev)}} />
          <app-tinder-card name="El Tejado" description="This is a sample description." imgURL="https://lh5.googleusercontent.com/p/AF1QipNAAPtNzdR-G_oAW2vJ9_yjEctILnThJOCtEe3O=w203-h360-k-no" onMatch={(ev) => {this.handleMatch(ev)}} />
          <app-tinder-card name="Pickled Okra" description="This is a sample description." imgURL="https://lh5.googleusercontent.com/p/AF1QipPosDGmatG7ALV6JH2lnNxqNGalh-pgboJ-M69q=w203-h152-k-no" onMatch={(ev) => {this.handleMatch(ev)}} />
          <app-tinder-card name="Lucky Cafe" description="This is a sample description." imgURL="https://lh5.googleusercontent.com/p/AF1QipMZwHVpETUOLBCVc0uuTzkbEskXPp4rwv9g_zQz=w203-h114-k-no" onMatch={(ev) => {this.handleMatch(ev)}} />
          <app-tinder-card name="Shoney's" description="This is a sample description." imgURL="https://lh5.googleusercontent.com/p/AF1QipP49QMtNqJxGu-4BIF-Xvz1Eutl_aVE5khpM-YS=w203-h270-k-no" onMatch={(ev) => {this.handleMatch(ev)}} />
          <app-tinder-card name="Jonah's Pizza" description="This is a sample description." imgURL="https://lh5.googleusercontent.com/p/AF1QipMu5H6Z1AvN39S3MB33iXRuNoBueh3c-1Pe17Dm=w203-h203-k-no" onMatch={(ev) => {this.handleMatch(ev)}} />
          <app-tinder-card name="Del Sol" description="This is a sample description." imgURL="https://lh5.googleusercontent.com/p/AF1QipO03lpsLAhY6LPSgAzDGKMpsJz7OQoGDHGMYiXw=w203-h270-k-no" onMatch={(ev) => {this.handleMatch(ev)}} />
          <app-tinder-card name="Scoops" description="This is a sample description." imgURL="https://lh5.googleusercontent.com/p/AF1QipOQTJBSl3Hqyb30hAmn8K27vMRT5MK1uvfZK70S=w203-h203-k-no" onMatch={(ev) => {this.handleMatch(ev)}} />
        </div>
      </ion-content>
    ];
  }
}
