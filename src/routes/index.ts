import IndexRes from "../dtos/IndexRes";

export default defineEventHandler<IndexRes>(() => {
  return { nitro: "Is Awesome!" };
});
