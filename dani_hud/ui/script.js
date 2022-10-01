var sec = 0;
let slowzoneInterval = null
let intervalShow = true 


function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));   
}
window.addEventListener("message",function(evt){ 
    var data = evt.data;
      
        if(data.updatehud){
            this.document.getElementById(data.cemodifica).innerHTML = data.valoare;
        }

        if(data.setSafeZone && data.zone != undefined){
            $("#safezone").fadeIn();
        }else if(data.zone){
            $("#safezone").fadeOut();
        }

        if(data.setSlowZone && data.zone != undefined){
            $("#slowzone").fadeIn();
            intervalShow = true
            slowzoneInterval = this.setInterval(() => {
      
                if (!intervalShow) return 
                $("#slowzone").fadeOut();
                $("#slowzone").fadeIn();
            },1000);
         
        }else if(data.zone){
            intervalShow = false
            this.clearInterval(slowzoneInterval)
            $("#slowzone").fadeOut();
        }

        if(data.togHud){
            $("#"+data.wy).fadeIn();
        }else{
            $("#"+data.wy).fadeOut();
        }

        if(data.setStaff){
            $("#staffZone").fadeIn();
        }

        if(data.action == "startGiftTimer"){
            var interval;
            var timeObj = document.getElementById('gift-count');
            var countDownDate = new Date().getTime() + parseInt(timeObj.innerHTML);
            interval = setInterval(() => {
              var now = new Date().getTime();
                
              var distance = countDownDate - now;
                
              var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
              var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
              if (hours > 0)
                timeObj.innerHTML = `${(hours <= 9 ? "0":"")}${hours}:${(minutes <= 9 ? "0":"")}${minutes}:${(seconds <= 9 ? "0":"")}${seconds}`;
              else if(minutes > 0)
                timeObj.innerHTML = `${(minutes <= 9 ? "0":"")}${minutes}:${(seconds <= 9 ? "0":"")}${seconds}`;
              else
                timeObj.innerHTML = `${seconds} secunde`;
                
              if (distance < 0) {
                clearInterval(interval);
                timeObj.innerHTML = "Gift Ready";
      
                var levelObj = document.getElementById("gift_level");
                levelObj.style.display = "none";
              }
            }, 1000);
          }      

        if(data.sendAdminAnnouncement){
            document.getElementById("adminAnnouncementContainer").style.display = "block";
            this.document.getElementById("admAnnName").innerHTML = data.admAnnName;
            this.document.getElementById("admAnnId").innerHTML = data.admAnnId;
            this.document.getElementById("admAnnMessage").innerHTML = data.admAnnMessage;
            setTimeout(function(){
                $("#adminAnnouncementContainer").fadeOut();
            }, 10000);
        }

        if(data.sendEventAnnouncement){
            document.getElementById("eventAnnouncementContainer").style.display = "block";
            this.document.getElementById("evtAnnName").innerHTML = data.evtAnnName;
            this.document.getElementById("evtAnnId").innerHTML = data.evtAnnId;
            this.document.getElementById("evtAnnMessage").innerHTML = data.evtAnnMessage;
            setTimeout(function(){
                $("#eventAnnouncementContainer").fadeOut();
            }, 10000);
        }
});