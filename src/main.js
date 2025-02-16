const printbtn = document.querySelector("#printbtn");

const printHandler = () => {
  window.print();
  //   console.log("hi");
};
printbtn.addEventListener("click", printHandler);
