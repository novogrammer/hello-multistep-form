'use strict';

$(()=>{
  const $form=$(".form");
  const $submit=$("input[type='submit']");
  const $back=$(".back");
  const $next=$(".next");
  const $resultArea=$(".resultArea");

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
  
  $submit.on("click",(event)=>{
    event.preventDefault();
    $submit.prop("disabled",true);
      $.ajax({
        type:"POST",
        url:$form.prop("action"),
        data:$form.serialize(),
        dataType:"json",
        success:(data, textStatus, jqXHR)=>{
          console.log(data);
          $resultArea.text(JSON.stringify(data));
        },
        error:(jqXHR, textStatus, errorThrown)=>{
          console.log(textStatus+" "+errorThrown);
          $resultArea.text(textStatus+" "+errorThrown);
        },
        complete:()=>{
          step=step+1;
          history.pushState({step},"");
          updateStepVisilibity();
          $submit.prop("disabled",false)
        }
      });
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



