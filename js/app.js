let form = document.getElementById("patient-form");

let cards = document.getElementsByClassName("cards")[0];

function Patients(
  fullName,
  password,
  dob,
  gender,
  phoneNumber,
  chronicDiseases
) {
  this.fullName = fullName;
  this.password = password;
  this.dob = dob;
  this.gender = gender;
  this.phone = phoneNumber;
  this.chronicDiseases = chronicDiseases;
}

function render(event) {
  event.preventDefault();
  let patient = new Patients(
    document.getElementById("full-name").value,
    document.getElementById("password").value,
    document.getElementById("dob").value,
    document.getElementById("gender").value,
    document.getElementById("phone-number").value,
    document.getElementById("chronic-diseases").value
  );

  let patientArr =
    localStorage.getItem("patient") == null
      ? []
      : JSON.parse(localStorage.getItem("patient"));
  patientArr.push(patient);
  localStorage.setItem("patient", JSON.stringify(patientArr));

  console.log(patientArr);

  for (let i = 0; i < patientArr.length; i++) {
    //
    cards.innerHTML += `
    <div class="card">
      <img src="/Hospital-System/profile-circle-icon-2048x2048-cqe5466q.png" />
      <h2>${patientArr[i].fullName}</h2>
      <p>Date of Birth: ${patientArr[i].dob}</p>
      <p>Gender : ${patientArr[i].gender}</p>
      <p>Phone: ${patientArr[i].phone}</p>
      <p>Password : ${patientArr[i].password}</p>
      <p>Chronic Diseases: ${patientArr[i].chronicDiseases}</p>
    </div>`;
  }
}

form.addEventListener("submit", render);
