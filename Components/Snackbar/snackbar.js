const baselineDemo = document.querySelector(".baselinedemo");
const errorSnackbar = document.querySelector(".error");
const leadingDemo = document.querySelector(".leadingdemo");
const successSnackbar = document.querySelector(".success")

baselineDemo.addEventListener("click", function baseLineHandler(){
    errorSnackbar.style.cssText += 'display: flex; left: 34rem;bottom: 0.5rem;position: fixed;';
    setTimeout(()=> {
        errorSnackbar.style.display = "none";
    },3000)
});

leadingDemo.addEventListener("click", function leadingHandler(){
    successSnackbar.style.cssText += 'display: flex; left: 1rem;bottom: 0.5rem;position: fixed;';
    setTimeout(()=> {
        successSnackbar.style.display = "none";
    },3000)
});