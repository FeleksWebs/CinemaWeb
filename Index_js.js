var DisplayTime = 3000;
var SwitchToRight = DisplayTime+1000;

function startAnim(){
  setTimeout(function(){
      
      function FirstAnim(){
      setTimeout (function(){$('.First-Image').animate({width: '0px'},'slow','linear')},DisplayTime);
      setTimeout (function(){$('.First-Image').css('right','0')},SwitchToRight);

      setTimeout (function(){$('.Second-Image').animate({width: '100%'},'slow','linear')},DisplayTime-5);
      setTimeout (function(){$('.Second-Image').css('left','0')},SwitchToRight);  

      setTimeout(function(){SecondAnim()},DisplayTime)
    }
      function SecondAnim(){    
      setTimeout (function(){$('.Second-Image').animate({width: '0px'},'slow','linear')},DisplayTime);
      setTimeout (function(){$('.Second-Image').css('left','')},SwitchToRight); 

      setTimeout (function(){$('.Third-Image').animate({width: '100%'},'slow','linear')},DisplayTime-5);
      setTimeout (function(){$('.Third-Image').css('left','0')},SwitchToRight);  

      setTimeout(function(){ThirdAnim()},SwitchToRight)
    }
    function ThirdAnim(){
      setTimeout (function(){$('.Third-Image').animate({width: '0px'},'slow','linear')},DisplayTime);
      setTimeout (function(){$('.Third-Image').css('left','')},SwitchToRight);  

      setTimeout (function(){$('.First-Image').animate({width: '100%'},'slow','linear')},DisplayTime-5);
      setTimeout (function(){$('.First-Image').css('right','')},SwitchToRight);

      setTimeout(function(){FirstAnim()},SwitchToRight)
    }

  FirstAnim()

  
  },1000)
}

startAnim()
