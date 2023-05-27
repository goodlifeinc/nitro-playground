import IndexRes from "../dtos/IndexRes";

export default eventHandler(async (event) => {
  const res = (await event.$fetch("/")) as IndexRes;
  return res?.nitro;
});
