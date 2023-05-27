export default defineRenderHandler(async (event) => {
  const date = new Date();
  const html = await useTemplate("view", {
    name: event.context.auth.name,
    date,
  });
  return {
    body: html,
    statusCode: 200,
  };
});
