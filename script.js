console.log("Script")
document.querySelector('.ham').style.display = 'none';
document.querySelector('.chamber').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo')
    if (document.querySelector('.sidebar').classList.contains('sidebarGo')) {
        document.querySelector('.ham').style.display ='inline'
        document.querySelector('.cross').style.display ='none'
    }
    else{
        document.querySelector('.ham').style.display ='none'
        setTimeout(() => {
            document.querySelector('.cross').style.display ='inline'
        }, 310);

    }
})
document.querySelector('.chamber').addEventListener("click", ()=>{
    document.querySelector('.main').classList.toggle('mainChange')
    // if (document.querySelector('.sidebar').classList.contains('sidebarGo')) {
    //     document.querySelector('.ham').style.display ='inline'
    //     document.querySelector('.cross').style.display ='none'
    // }
    // else{
    //     document.querySelector('.ham').style.display ='none'
    //     setTimeout(() => {
    //         document.querySelector('.cross').style.display ='inline'
            
    //     }, 400);

    }
)