'use strict';

$(()=>{
  const $back=$(".back");
  const $next=$(".next");

  let step=0;
  function updateStepVisilibity(){
    const stepBoxList=$(".stepBox").toArray();
    for(let stepBox of stepBoxList){
      const $stepBox=$(stepBox)
      if($stepBox.data("step")==step){
        $stepBox.show();
      }else{
        $stepBox.hide();
      }
    }
  }
  window.addEventListener("popstate",(e)=>{
    console.log(e.state);
    if(e.state){
      step=e.state.step;
    }else{
      step=0;
    }
    updateStepVisilibity();
  });
  

  $next.on("click",()=>{
    step=step+1;
    history.pushState({step},"");
    updateStepVisilibity();
  });
  $back.on("click",()=>{
    history.back();
  });
  updateStepVisilibity();


  
});



