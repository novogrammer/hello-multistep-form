'use strict';

$(()=>{
  const form=document.querySelector("form");
  const submit=document.querySelector("input[type='submit']");
  const backList=document.querySelectorAll(".back");
  const nextList=document.querySelectorAll(".next");

  let step=0;
  function updateStepVisilibity(){
    const stepBoxList=document.querySelectorAll(".stepBox");
    for(let stepBox of stepBoxList){
      if(stepBox.dataset.step==step){
        $(stepBox).show();
      }else{
        $(stepBox).hide();
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
  
  submit.addEventListener("click",async (event)=>{
    event.preventDefault();
    submit.disabled=true;

    try{
      const result=await $.ajax({
        type:"POST",
        url:form.action,
        data:$(form).serialize(),
        dataType:"json",
      });
      console.log(result);
      document.querySelector(".resultArea").innerText=JSON.stringify(result);
      step=step+1;
      history.pushState({step},"");

      updateStepVisilibity();
    }catch(error){
      console.log(error);
    }
    submit.disabled=false;
  });

  for(let next of nextList){
    next.addEventListener("click",()=>{
      step=step+1;
      history.pushState({step},"");
      updateStepVisilibity();
    });
  }
  for(let back of backList){
    back.addEventListener("click",()=>{
      history.back();
    });
  }
  updateStepVisilibity();


  
});



