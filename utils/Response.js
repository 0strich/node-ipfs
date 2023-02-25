function Response() {
  if (!(this instanceof Response)) {
    return new Response();
  }
  this.status = {};
  this.response = '';
}

module.exports = Response;
