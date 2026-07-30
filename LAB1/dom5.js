import { EventEmitter } from "events";
class DomClass extends EventEmitter{
    addEventListener(eventNAME,callback){
        this.on(this.eventNames,callback);
    }
    removeEventListener(eventName ,callback){
        this.off(eventName , callback);
    }
    dispatchEvent(eventName ,eventData = {}){
        const event ={
            type : eventName,
            timespam: new Date(),
            ...eventData,
        };
        this.emit(eventName,event);
    }
}
const button = new DomClass();
const handleclick = (event)=>{
    console.log(`button clicked type : ${event.type} at ${event.timespam}`)
};
button.addEventListener("click",handleclick);
button.dispatchEvent("click ",{
    target : "submitbtn",
});
button.removeEventListener("click", handleclick);
button.dispatchEvent("click",{
  target:"resetbtn",
});