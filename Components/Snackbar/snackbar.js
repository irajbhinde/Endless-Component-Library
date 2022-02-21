const baselineDemo = document.querySelector(".baselinedemo");
const errorSnackbar = document.querySelector(".error");
const leadingDemo = document.querySelector(".leadingdemo");
const successSnackbar = document.querySelector(".success")

baselineDemo.addEventListener("click", function baseLineHandler(){
    errorSnackbar.style.display = "flex";
    setTimeout(()=> {
        errorSnackbar.style.display = "none";
    },3000)
});

leadingDemo.addEventListener("click", function leadingHandler(){
    successSnackbar.style.display = "flex";
    setTimeout(()=> {
        successSnackbar.style.display = "none";
    },3000)
});