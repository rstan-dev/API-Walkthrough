const API_KEY = "bbr-qrG_EfdEP3oPDniV13ppCKA";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal")); 

document.getElementById("status").addEventListener("click", e => getStatus(e));

