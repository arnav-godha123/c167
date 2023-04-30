AFRAME.registerComponent("create-buttons",{
    init:function(){
        var button1=document.createElement("button")
        button1.innerHTML="rateus"
        button1.setAttribute("id","rating-buttons")
        button1.setAttribute("class","btn btn-warning")

        var button2=document.createElement("button")
        button2.innerHTML="order-us"
        button2.setAttribute("id","order-buttons")
        button2.setAttribute("class","btn btn-warning")

        var buttonDiv=document.getElementById("button-div")
        buttonDiv.appendChild(button1)
        buttonDiv.appendChild(button2)
    }
})