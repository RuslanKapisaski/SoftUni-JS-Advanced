function validate(request) {
  const validMetod = ["GET", "POST", "DELETE", "CONNECT"];
  const versions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
  const validUriPattern = /^[\w+.]+$/;
  const messagePattern = /^[\w+.]+$/;
  const specialCharacters = ["<", ">", "\\", "&", `'`, `,`];

  if (!validMetod.includes(request.method)) {
    throw new Error("Invalid request header: Invalid Method");
  }

  if (
    !request.uri ||
    !request.uri.match(validUriPattern) ||
    !request.uri === "*"
  ) {
    throw new Error("Invalid request header: Invalid URI");
  }

  if (!versions.includes(request.version)) {
    throw new Error("Invalid request header: Invalid Version");
  }

    if (!request.hasOwnProperty("message")) {
      throw new Error("Invalid request header: Invalid Message");
    }
  for (const el of request.message) {
    if (specialCharacters.includes(el)) {
      throw new Error("Invalid request header: Invalid Message");
    }
  }
  
  return request;
}

validate({
    method: 'POST',
    uri: '',
    version: 'HTTP/2.0',
    message: "sda"
});
