class ServerError extends Error {
    constructor() {
      super("Internl server error");
      this.name = "ServerError";
      this.statusCode = "500";
    }
}

class NotFoundError extends Error {
    constructor() {
      super("Not found");
      this.name = "NotFoundError";
      this.statusCode = "404";
    }
}

class UnauthorizedError extends Error {
    constructor() {
      super("Please login or register to be able to add a post.");
      this.name = "UnauthorizedError";
      this.statusCode = "401";
    }
}

class BadRequestError extends Error {
  constructor() {
    super("Bad request");
    this.name = "BadRequestError";
    this.statusCode = "400";
  }
}

class UsernameInUseError extends BadRequestError {
  constructor() {
    super();
    this.message = "Username is already in use."
  }
}

class EmailInUseError extends BadRequestError {
  constructor() {
    super();
    this.message = "Email is already in use."
  }
}

class EmptyFieldsError extends BadRequestError {
  constructor() {
    super();
    this.message = "All fields should be fulfilled."
  }
}

class UsernameOrPasswdordError extends BadRequestError {
  constructor() {
    super();
    this.message = "Incorrect username or password."
  }
}

module.exports = {
  ServerError, 
  NotFoundError, 
  UnauthorizedError, 
  BadRequestError,
  UsernameInUseError,
  EmailInUseError,
  EmptyFieldsError,
  UsernameOrPasswdordError
};