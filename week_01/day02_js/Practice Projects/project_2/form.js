//Input
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const repeatPasswordInput = document.getElementById("repeatPassword");
const phoneInput = document.getElementById("phone");
const genderInputs = document.getElementsByName("gender");
const birthInput = document.getElementById("birth");
const countryInput = document.getElementById("country");
const hobbiesInputs = document.getElementsByName("hobbies");
const thumbnailInput = document.getElementById("thumbnail");
const bioInput = document.getElementById("bio");

//Texterror
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passError = document.getElementById("passError");
const repeatPassError = document.getElementById("repeatPassError");
const phoneError = document.getElementById("phoneError");
const genderError = document.getElementById("genderError");
const birthError = document.getElementById("birthError");
const countryError = document.getElementById("countryError");
const hobbiesError = document.getElementById("hobbiesError");
const thumbnailError = document.getElementById("thumbnailError");
const bioError = document.getElementById("bioError");

//Submit
const btnSubmit = document.getElementById("submit")

//Name
function vName(input) {
    const regex = /^.{3,}$/;
    return regex.test(input);
}
//Email
function vEmail(email) {
    if (!email.trim()) return false; // Required
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
//pass
function vPassword(password) {
    const trimmed = password.trim();
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return trimmed !== "" && regex.test(trimmed);
}
//repeatpass
function vRepeatPassword(repassword) {
    return repassword == passwordInput.value;
}
//phone
function vPhone(phone) {
    const trimmed = phone.trim();
    const regex = /^\d{10,}$/;
    return trimmed !== "" && regex.test(trimmed);
}
//birt
function vDOB(dobString) {
    if (!dobString) return false;

    const dob = new Date(dobString);
    const today = new Date();

    if (isNaN(dob.getTime())) return false;

    const ageDiff = today.getFullYear() - dob.getFullYear();
    const hasHadBirthday =
        today.getMonth() > dob.getMonth() ||
        (today.getMonth() === dob.getMonth() && today.getDate() >= dob.getDate());

    const age = hasHadBirthday ? ageDiff : ageDiff - 1;

    return age >= 18;
}
//checkCountry
function vCountry(countryValue) {
    return countryValue.trim() !== "";
}
//checkHobbies
function vHobbies(checkboxes) {
    for (let checkbox of checkboxes) {
        if (checkbox.checked) {
            return true;
        }
    }
    return false;
}
//Thumbnail
function vThumnail(fileInput) {
    if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
        return true;
    }

    const file = fileInput.files[0];
    const allowedTypes = ["image/jpg", "image/jpeg", "image/png"];

    return allowedTypes.includes(file.type);
}
//Bio
function vBio(bioText) {
    return bioText.trim().length <= 300;
}
//Button
btnSubmit.addEventListener('click', checkField);
function checkField(event) {
    let isValid = true;

    // checkName
    if (!vName(nameInput.value)) {
        event.preventDefault();
        isValid = false;
        nameInput.classList.add("border-red-500");
        nameError.classList.remove("hidden");
        nameError.innerText = "Name must have at least 3 characters";
    } else {
        nameInput.classList.remove("border-red-500");
        nameError.classList.add("hidden");
        nameError.innerText = "";
    }

    //checkEmail
    if (!vEmail(emailInput.value)) {
        event.preventDefault();
        isValid = false;
        emailInput.classList.add("border-red-500");
        emailError.classList.remove("hidden");
        emailError.innerText = "Please enter a valid email address";
    } else {
        emailInput.classList.remove("border-red-500");
        emailError.classList.add("hidden");
        emailError.innerText = "";
    }

    //checkPass
    if (!vPassword(passwordInput.value)) {
        event.preventDefault();
        isValid = false;
        passwordInput.classList.add("border-red-500");
        passError.classList.remove("hidden");
        passError.innerText = "Password must be at least 8 characters long and include both letters and numbers";
    } else {
        passwordInput.classList.remove("border-red-500");
        passError.classList.add("hidden");
        passError.innerText = "";
    }

    //checkRepeatPass
    if (!vRepeatPassword(repeatPasswordInput.value)) {
        event.preventDefault();
        isValid = false;
        repeatPasswordInput.classList.add("border-red-500");
        repeatPassError.classList.remove("hidden");
        repeatPassError.innerText = "Repeatpass must be the same as Password";
    } else {
        repeatPasswordInput.classList.remove("border-red-500");
        repeatPassError.classList.add("hidden");
        repeatPassError.innerText = "";
    }

    //checkPhone
    if (!vPhone(phoneInput.value)) {
        event.preventDefault();
        isValid = false;
        phoneInput.classList.add("border-red-500");
        phoneError.classList.remove("hidden");
        phoneError.innerText = "Please enter a valid phone number with at least 10 digits";
    } else {
        phoneInput.classList.remove("border-red-500");
        phoneError.classList.add("hidden");
        phoneError.innerText = "";
    }

    //checkGender
    let genderChecked = false;
    for (let i = 0; i < genderInputs.length; i++) {
        if (genderInputs[i].checked) {
            genderChecked = true;
            break;
        }
    }
    if (!genderChecked) {
        event.preventDefault();
        isValid = false;
        genderError.classList.remove("hidden");
        genderError.innerText = "Gender is Required";
    } else {
        genderError.classList.add("hidden");
        genderError.innerText = "";
    }

    //checkBirth
    if (!vDOB(birthInput.value)) {
        event.preventDefault();
        isValid = false;
        birthInput.classList.add("border-red-500");
        birthError.classList.remove("hidden");
        birthError.innerText = "You must be at least 18 years old";
    } else {
        birthInput.classList.remove("border-red-500");
        birthError.classList.add("hidden");
        birthError.innerText = "";
    }

    //checkCountry
    if (!vCountry(countryInput.value)) {
        event.preventDefault();
        isValid = false;
        countryError.classList.remove("hidden");
        countryError.innerText = "Please select your country";
    } else {
        countryError.classList.add("hidden");
        countryError.innerText = "";
    }

    //checkHobbies
    if (!vHobbies(hobbiesInputs)) {
        event.preventDefault();
        isValid = false;
        hobbiesError.classList.remove("hidden");
        hobbiesError.innerText = "Please select at least one hobby";
    } else {
        hobbiesError.classList.add("hidden");
        hobbiesError.innerText = "";
    }

    //checkThumbnail
    if (!vThumnail(thumbnailInput)) {
        event.preventDefault();
        isValid = false;
        thumbnailInput.classList.add("border-red-500");
        thumbnailError.classList.remove("hidden");
        thumbnailError.innerText = "Only .jpg, .jpeg, or .png image files are allowed";
    } else {
        thumbnailInput.classList.remove("border-red-500");
        thumbnailError.classList.add("hidden");
        thumbnailError.innerText = "";
    }

    //checkBio
    if (!vBio(bioInput.value)) {
        event.preventDefault();
        isValid = false;
        bioInput.classList.add("border-red-500");
        bioError.classList.remove("hidden");
        bioError.innerText = "Bio must be 300 characters or less";
    } else {
        bioInput.classList.remove("border-red-500");
        bioError.classList.add("hidden");
        bioError.innerText = "";
    }

    // Nếu tất cả hợp lệ thì alert thành công
    if (isValid) {
        alert("Submit thành công!");
    }
}
