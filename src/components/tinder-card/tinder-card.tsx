import { Component, Host, Element, Event, EventEmitter, Prop, h } from '@stencil/core';
import { Gesture, GestureConfig, createGesture } from '@ionic/core';

@Component({
  tag: 'app-tinder-card',
  styleUrl: 'tinder-card.css'
})
export class TinderCard {
  @Prop()
  public name: string = "Restaurant Name";
  @Prop()
  public description: string = "This is a description";
  @Prop()
  public imgURL: string = "https://c8.alamy.com/comp/M6P68R/exterior-generic-restaurant-diner-establishing-photo-day-time-tight-M6P68R.jpg";

  @Element() hostElement: HTMLElement;
  @Event() match: EventEmitter;

  connectedCallback(){
    this.initGesture();
  }

  async initGesture(){

    const style = this.hostElement.style;
    const windowWidth = window.innerWidth;

    const options: GestureConfig = {
      el: this.hostElement,
      gestureName: 'tinder-swipe',
      onStart: () => {
        style.transition = "none";
      },
      onMove: (ev) => {
        style.transform = `translateX(${ev.deltaX}px) rotate(${ev.deltaX/20}deg)`
      },
      onEnd: (ev) => {

        style.transition = "0.3s ease-out";

        if(ev.deltaX > windowWidth/2){
          style.transform = `translateX(${windowWidth * 1.5}px)`;
          this.match.emit(true);
        } else if (ev.deltaX < -windowWidth/2){
          style.transform = `translateX(-${windowWidth * 1.5}px)`;
          this.match.emit(false);
        } else {
          style.transform = ''
        }

      }
    };

    const gesture: Gesture = await createGesture(options);

    gesture.enable();

  }

  render() {
    return (
      <Host>
        <div class="header">
          <img class="avatar" src={this.imgURL} />
        </div>
        <div class="detail">
          <h2>{this.name}</h2>
          <p>{this.description}</p>
        </div>
      </Host>
    );
  }

}
