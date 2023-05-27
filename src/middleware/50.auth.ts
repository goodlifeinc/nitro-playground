export default defineEventHandler((event) => {
  event.context.auth = { name: "Username " + Math.round(Math.random() * 100) };
});
