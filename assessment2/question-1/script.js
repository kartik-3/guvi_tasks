const $form = document.querySelector("#login-form");
const $name = document.querySelector("#full-name");
const $address1 = document.querySelector("#address-line-1");
const $address2 = document.querySelector("#address-line-2");
const $city = document.querySelector("#city");
const $state = document.querySelector("#state");
const $zip = document.querySelector("#zip-code");
const $country = document.querySelector("#country");
const $email = document.querySelector("#email");
const $phone = document.querySelector("#phone");

$form.addEventListener("submit", function (e) {
  e.preventDefault();

  let hasError = false;

  if (!$name.value) {
    $name.classList.add("red-border");
    hasError = true;
  }
  if (!$address1.value) {
    $address1.classList.add("red-border");
    hasError = true;
  }
  if (!$address2.value) {
    $address2.classList.add("red-border");
    hasError = true;
  }
  if (!$city.value) {
    $city.classList.add("red-border");
    hasError = true;
  }
  if (!$state.value) {
    $state.classList.add("red-border");
    hasError = true;
  }
  if (!$country.value) {
    $country.classList.add("red-border");
    hasError = true;
  }
  if (!isDigit($zip.value) || $zip.value.length != 6) {
    $zip.classList.add("red-border");
    hasError = true;
  }
  if (!$email.value) {
    $email.classList.add("red-border");
    hasError = true;
  }
  if (!isDigit($phone.value) || $phone.value.length != 10) {
    $phone.classList.add("red-border");
    hasError = true;
  }

  if (!hasError) {
    alert("Thanks for submitting.");
  }
});

$name.addEventListener("change", function () {
  if ($name.value) {
    $name.classList.remove("red-border");
  }
});

$address1.addEventListener("change", function () {
  if ($address1.value) {
    $address1.classList.remove("red-border");
  }
});

$address2.addEventListener("change", function () {
  if ($address2.value) {
    $address2.classList.remove("red-border");
  }
});

$city.addEventListener("change", function () {
  if ($city.value) {
    $city.classList.remove("red-border");
  }
});

$state.addEventListener("change", function () {
  if ($state.value) {
    $state.classList.remove("red-border");
  }
});

$zip.addEventListener("change", function () {
  if (isDigit($zip) && $zip.value.length == 6) {
    $zip.classList.remove("red-border");
  }
});

$country.addEventListener("change", function () {
  if ($country.value) {
    $country.classList.remove("red-border");
  }
});

$email.addEventListener("change", function () {
  if ($email.value) {
    $email.classList.remove("red-border");
  }
});

$phone.addEventListener("change", function () {
  if (isDigit($phone) && $phone.value.length == 10) {
    $phone.classList.remove("red-border");
  }
});

function isDigit(str) {
  if (Number(str) == str) {
    return true;
  } else {
    return false;
  }
}
