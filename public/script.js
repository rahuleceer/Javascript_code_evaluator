let textarea=document.getElementById('inpText')
let encodebtn=document.getElementById('inpEncode')
let code=document.getElementById('code')

encodebtn.onclick= function(){
    let data=textarea.value
    data=window.btoa(data);
    code.value=data
}