import { Injectable } from "@angular/core";

@Injectable() 
export class CTMService {

    CTMENDPOINT_KEYWORD = 'ctmEndPoint';

    //CTM Endpoint URL
    //1. Check LocalStorage if none then dont enable the login button.
    ctmEndPoint: string = localStorage.getItem(this.CTMENDPOINT_KEYWORD) ? localStorage.getItem('ctmEndPoint') : '';

    constructor() {

    }

    //Getter for ctmEndPoint
    getCTMEndPoint() {
        return this.ctmEndPoint;
    }

    //Setter for ctmEndPoint
    setCTMEndPoint(endPoint) {
        this.ctmEndPoint = endPoint;
        localStorage.setItem(this.CTMENDPOINT_KEYWORD, endPoint);
    }

}