class FormValidator {
  constructor(config, form) {
    this._config = config;
    this._element = form;
    this._submitElement = this._element.querySelector(this._config.submitButtonSelector);
    this._inputList = Array.from(this._element.querySelectorAll(this._config.inputSelector));
  }

  _showInputError = (input, errorMessage) => {
    const errorItem = this._element.querySelector(`.${input.id}-error`);
    input.classList.add(this._config.inputErrorClass);
    errorItem.textContent = errorMessage;
    errorItem.classList.add(this._config.errorClass);
  }

  _hideInputError = (input) => {
    const errorItem = this._element.querySelector(`.${input.id}-error`);
    input.classList.remove(this._config.inputErrorClass);
    errorItem.classList.remove(this._config.errorClass);
    errorItem.textContent = '';
  }

  _isValid = (input) => {
    if (!input.validity.valid) {
      this._showInputError(input, input.validationMessage);
    } else {
      this._hideInputError(input);
    };
  }

  _toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this._submitElement.classList.add(this._config.disabledButtonClass);
      this._submitElement.disabled = true;
    } else {
      this._submitElement.classList.remove(this._config.disabledButtonClass);
      this._submitElement.disabled = false;
    };
  }

  _hasInvalidInput = () => {
    return Array.from(this._element.querySelectorAll(this._config.inputSelector)).some((input) => {
      return !input.validity.valid;
    });
  }

  _setEventListener = () => {
    this._toggleButtonState();
    this._inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._isValid(input);
        this._toggleButtonState();
      });
    });
  }

  resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach((input) => {
      this._hideInputError(input);
    });
  }

  enableValidation = () => {
      this._setEventListener();
  }
};

export { FormValidator };