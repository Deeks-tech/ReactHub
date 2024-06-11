export default function stringTest(name) {
  const message = "error";
  const regex = /^[a-z1-9]+$/;

  return regex.test(name) ? true : message;
}
