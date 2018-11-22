class CountRegressive{
   
    constructor(initialize){
       
        this.dateNow = new Date(); 
        this._locale = initialize.locate;
        this._dateLaunch = new Date(initialize.dateLaunch);
        this._format =   { weekday: 'long', day:'numeric', month:'long', year:'numeric' };
        this.dateFormat = this.dateNow.toLocaleString( this.locale, this._format );
        this._regressiveDays;
        this._regressiveHours ;
        this._regressiveMinutes ;
        this._regressiveSeconds;
        this.regressive();
           
    }

    set locate(locate) {
        this._locale = locate; 
    } 
    
    get locate() {
        return this._locale; 
    }  

    set dateLaunch(date) {
        this._dateLaunch =  new Date(date.year, date.month-1, date.day);
    } 

    get dateLaunch() {
        return this._dateLaunch;
    }  


    get formatLaunch(){
        return this._format;
    }

    
    formatInfoDate(info){
        return (info < 10)? '0'+ info: info; 
    }

    regressive(){

        let elDays = document.querySelector("#days");
        let elHours  = document.querySelector("#hours");
        let elMinutes  = document.querySelector("#minutes");
        let elSeconds =  document.querySelector("#seconds");
        let elDateLaunch = document.querySelector("#launch");
        elDateLaunch.innerHTML = this.dateLaunch.toLocaleString( this.locale, this._format );;
       
        var looper = setInterval(
                (function(scope){
                    return function(){

                        let dayNow = new Date();
                        let distance =  scope.dateLaunch - dayNow;   
                        let second = 1000;
                        let minute = second * 60;
                        let hour = minute * 60;
                        let day = hour * 24;
               
                    elDays.innerHTML =  scope.formatInfoDate(  Math.floor(distance / day));
                    elHours.innerHTML =  scope.formatInfoDate(Math.floor((distance % day) / hour));
                    elMinutes.innerHTML = scope.formatInfoDate(Math.floor((distance % hour) / minute));
                    elSeconds.innerHTML =  scope.formatInfoDate(Math.floor((distance % minute) / second));
                    
                    };
                })(this),
                1000
            );
        
 
    }




}
