export function validField(body: any) {
  const formattEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  for (let prop in body) {
    if (body.hasOwnProperty(prop)) {
      if (body[prop] === undefined || body[prop] === "") {
        return prop;
      }
    }
  }

  return true;
}
