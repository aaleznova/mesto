const showInputError = (form, input, errorMessage, obj) => {
  const errorItem = form.querySelector(`.${input.id}-error`);
  input.classList.add(obj.inputErrorClass);
  errorItem.classList.add('popup__input_type_error-active');
  errorItem.textContent = errorMessage;
};

const hideInputError = (form, input, obj) => {
  const errorItem = form.querySelector(`.${input.id}-error`);
  input.classList.remove(obj.inputErrorClass);
  errorItem.classList.remove('popup__input_type_error-active');
  errorItem.textContent = '';
};

const isValid = (form, input, obj) => {
  if (!input.validity.valid) {
    showInputError(form, input, input.validationMessage, obj);
  } else {
    hideInputError(form, input, obj);
  }
};

const toggleButtonState = (inputCollection, submitButtonElement, obj) => {
  if (hasInvalidInput(inputCollection, obj)) {
    submitButtonElement.classList.add(obj.inactiveButtonClass);
    submitButtonElement.setAttribute('disabled', 'disabled');
  } else {
    submitButtonElement.classList.remove(obj.inactiveButtonClass);
    submitButtonElement.removeAttribute('disabled', 'disabled');
  }
};

const hasInvalidInput = (inputCollection, obj) => {
  return inputCollection.some((input) => {
    return !input.validity.valid;
  });
};

const setEventListener = (form, obj) => {
  const inputCollection = Array.from(form.querySelectorAll(obj.inputSelector));
  const submitButtonElement = form.querySelector(obj.submitButtonSelector);
  toggleButtonState(inputCollection, submitButtonElement, obj);
  inputCollection.forEach((input) => {
    input.addEventListener('input', function () {
      isValid(form, input, obj);
      toggleButtonState(inputCollection, submitButtonElement, obj);
    });
  });
};

const enableValidation = (obj) => {
  const formCollection = Array.from(
    document.querySelectorAll(obj.formSelector)
  );
  formCollection.forEach((form) => {
    form.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListener(form, obj);
  });
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});