class NotFoundError extends Error {
  constructor(message = "Página não encontrada") {
    super(message);
    this.status = 404;
  }
}

export default NotFoundError;
