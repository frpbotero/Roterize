export function validField(body: any) {
  const formattEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (
    body.name.trim() === "" ||
    typeof body.name == undefined ||
    body.cpf.trim() === "" ||
    typeof body.cpf == undefined ||
    body.permission.trim() === "" ||
    typeof body.permission == undefined ||
    body.password.trim() === "" ||
    typeof body.password == undefined ||
    body.email.trim() === "" ||
    typeof body.email == undefined ||
    !formattEmail.test(body.email)
  ) {
    return false;
  }
  return true;
}
