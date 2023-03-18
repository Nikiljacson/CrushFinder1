var form1=document.getElementById('form1');
var u_name=document.getElementById('in-name');
var u_dob=document.getElementById('in-dob');
var sub= document.getElementById('submit');
var fname1=document.getElementById('in-name1');
var fname2=document.getElementById('in-name2');
var fname3=document.getElementById('in-name3');
var fname4=document.getElementById('in-name4');
var fdob1=document.getElementById('in-dob1');
var fdob2=document.getElementById('in-dob2');
var fdob3=document.getElementById('in-dob3');
var fdob4=document.getElementById('in-dob4');

const name_r1=document.getElementById('namr-res1');
const name_r2=document.getElementById('namr-res2');
const name_r3=document.getElementById('namr-res3');
const name_r4=document.getElementById('namr-res4');

const z_sign1=document.getElementById('z-sign1');
const z_sign2=document.getElementById('z-sign2');
const z_sign3=document.getElementById('z-sign3');
const z_sign4=document.getElementById('z-sign4');

const res=document.getElementById('result');
const uzodiac=document.getElementById('p3');

const reset=document.getElementById('rst');

init();
function init() { 
    sub.addEventListener('click',validation);
    reset.addEventListener('click',resetAll);
    
    //retForm.style.display = "none";
    
    
}

function validation() {
    if(u_name.value==""){
        alert("unnoda name eh podu");
        return;
    }
    else if(u_dob.value==""){
        alert("unnoda DOB eh podu");
        return;
    }
    else if(fname1.value=="" && fname2.value=="" && fname3.value=="" && fname4.value==""){
        alert("unnoda friends name atleast 1 aavadhu podu");
        return;
    }
    else if(fdob1.value=="" && fdob2.value=="" && fdob3.value=="" && fdob4.value==""){
        alert("DOB 1 kuda podalana onnu panna mudiyadhu..!");
        return;
    }
    result();

}

function resetAll() {
    u_name.value="";
    u_dob.value="";
    fname1.value="";
    fdob1.value="";
    fname2.value="";
    fdob2.value="";
    fname3.value="";
    fdob3.value="";
    fname4.value="";
    fdob4.value="";
    name_r1.innerHTML="";
    name_r2.innerHTML="";
    name_r3.innerHTML="";
    name_r4.innerHTML="";

    z_sign1.innerHTML="";
    z_sign2.innerHTML="";
    z_sign3.innerHTML="";
    z_sign4.innerHTML="";
    res.innerHTML="";
    uzodiac.innerHTML="";
}

function result() {
    window.scrollTo(0,900);
    var user_name=u_name.value;
    var user_dob=u_dob.value;
    var friend_name1=fname1.value;
    var friend1_dob=fdob1.value;
    var friend_name2=fname2.value;
    var friend2_dob=fdob2.value;
    var friend_name3=fname3.value;
    var friend3_dob=fdob3.value;
    var friend_name4=fname4.value;
    var friend4_dob=fdob4.value;
    

    var user_day=parseInt(user_dob.slice(0,2));
    var user_month=parseInt(user_dob.slice(3,5));

    var friend1_day=parseInt(friend1_dob.slice(0,2));
    var friend1_month=parseInt(friend1_dob.slice(3,5));

    var friend2_day=parseInt(friend2_dob.slice(0,2));
    var friend2_month=parseInt(friend2_dob.slice(3,5));

    var friend3_day=parseInt(friend3_dob.slice(0,2));
    var friend3_month=parseInt(friend3_dob.slice(3,5));

    var friend4_day=parseInt(friend4_dob.slice(0,2));
    var friend4_month=parseInt(friend4_dob.slice(3,5));
    var user_zodiacSign=zodiacSign(user_day,user_month);
    var friend1_zodiacSign=zodiacSign(friend1_day,friend1_month);
    var friend2_zodiacSign=zodiacSign(friend2_day,friend2_month);
    var friend3_zodiacSign=zodiacSign(friend3_day,friend3_month);
    var friend4_zodiacSign=zodiacSign(friend4_day,friend4_month);

    uzodiac.innerHTML=(typeof(user_zodiacSign)=="undefined")?"":user_zodiacSign;
    z_sign1.innerHTML=(typeof(friend1_zodiacSign)=="undefined")?"....":friend1_zodiacSign;
    z_sign2.innerHTML=(typeof(friend2_zodiacSign)=="undefined")?"....":friend2_zodiacSign;
    z_sign3.innerHTML=(typeof(friend3_zodiacSign)=="undefined")?"....":friend3_zodiacSign;
    z_sign4.innerHTML=(typeof(friend4_zodiacSign)=="undefined")?"....":friend4_zodiacSign;

    name_r1.innerHTML=(typeof(friend_name1)=="undefined")?"....":friend_name1;
    name_r2.innerHTML=(typeof(friend_name2)=="undefined")?"....":friend_name2;
    name_r3.innerHTML=(typeof(friend_name3)=="undefined")?"....":friend_name3;
    name_r4.innerHTML=(typeof(friend_name4)=="undefined")?"....":friend_name4;

    var fname=[friend_name1,friend_name2,friend_name3,friend_name4];
    var zSign=[friend1_zodiacSign,friend2_zodiacSign,friend3_zodiacSign,friend4_zodiacSign];
    var undef=0;
    for(var i=0;i<4;i++){
        
        match_found=bestMatch(user_name,user_zodiacSign,fname[i],zSign[i]);"<br>" 
        
        if(typeof(match_found)=="undefined"){
            undef++;
            continue;
        }        
            res.innerHTML=match_found;"<br>"
        }
        if(undef==4){
            res.innerHTML="Sorry..! No matches found for "+user_name;
        }       

}

function bestMatch(user_name,user_zodiacSign,friend_name,f_zodiacSign) {
   
    if((user_zodiacSign=="Aries" && f_zodiacSign=="Libra") || (user_zodiacSign=="Libra" && f_zodiacSign=="Aries")){
        return user_name+" "+"&"+" "+friend_name+" "+"makes best pair";
    }
    else if((user_zodiacSign=="Taurus" && f_zodiacSign=="Virgo") || (user_zodiacSign=="Virgo" && f_zodiacSign=="Taurus")){
        return user_name+" "+"&"+" "+friend_name+" "+"makes best pair";
    }
    else if( (user_zodiacSign=="Sagittarius" && f_zodiacSign=="Gemini")|| (user_zodiacSign=="Gemini" && f_zodiacSign=="Sagittarius")){
        return user_name+" "+"&"+" "+friend_name+" "+"makes best pair";
    }
    else if( (user_zodiacSign=="Cancer" && f_zodiacSign=="Taurus") || (user_zodiacSign=="Taurus" && f_zodiacSign=="Cancer")){
        return user_name+" "+"&"+" "+friend_name+" "+"makes best pair";
    }
    else if((user_zodiacSign=="Leo" && f_zodiacSign=="Aries") || (user_zodiacSign=="Aries" && f_zodiacSign=="Leo")){
        return user_name+" "+"&"+" "+friend_name+" "+"makes best pair";
    }
    else if((user_zodiacSign=="Virgo" && f_zodiacSign=="Scorpio") || (user_zodiacSign=="Scorpio" && f_zodiacSign=="Virgo")){
        return user_name+" "+"&"+" "+friend_name+" "+"makes best pair";
    }
    else if((user_zodiacSign=="Libra" && f_zodiacSign=="Gemini") || (user_zodiacSign=="Gemini" && f_zodiacSign=="Libra")){
        return user_name+" "+"&"+" "+friend_name+" "+"makes best pair";
    }
    else if((user_zodiacSign=="Scorpio" && f_zodiacSign=="Pisces") || (user_zodiacSign=="Pisces" && f_zodiacSign=="Scorpio")){
        return user_name+" "+"&"+" "+friend_name+" "+"makes best pair";
    }
    else{
        return;
    }
}


function zodiacSign(day,month){ 
    switch (true) {
        case (month==1 && day>=1 && day<=13) || (month==12 && day>=15 && day<=31):
            return "Sagittarius";
    
        case (month==2 && day>=1 && day<=11) || (month==1 && day>=14 && day<=31):
            return "Capricorn";
            
        case (month==3 && day>=1 && day<=12) || (month==2 && day>=12 && day<=29):
            return "Aquarius";
            
        case (month==4 && day>=1 && day<=12) || (month==3 && day>=13 && day<=31):
            return  "Pisces";
            break;    
        case (month==5 && day>=1 && day<=14) || (month==4 && day>=13 && day<=30): //
            return  "Aries";
                    
        case (month==6 && day>=1 && day<=14) || (month==5 && day>=15 && day<=31): //
            return"Taurus";
                
        case (month==7 && day>=1 && day<=14) || (month==6 && day>=15 && day<=30): //
            return"Gemini";
                
        case (month==8 && day>=1 && day<=14) || (month==7 && day>=15 && day<=31): //
            return"Cancer";
            
        case (month==9 && day>=1 && day<=15) || (month==8 && day>=15 && day<=31): //
            return"Leo";
                
        case (month==10 && day>=1 && day<=15) || (month==9 && day>=16 && day<=30): //
            return  "Virgo";
            
        case (month==11 && day>=1 && day<=14) || (month==10 && day>=16 && day<=31): //
            return "Libra";
            
        case (month==12 && day>=1 && day<=14) || (month==11 && day>=15 && day<=30):
            return "Scorpio";
                
        default:
            break;
    }
}