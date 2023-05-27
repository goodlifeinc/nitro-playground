export default defineCachedEventHandler(
  async (event) => {
    const date = new Date();
    const html = await useTemplate("view", {
      name: event.context.auth.name,
      date,
    });
    return html;
  },
  {
    shouldBypassCache: (e) => {
      e.context.logger.withTag("test").info({ message: "Checking cache" });
      e.context.logger.log({ message: "test log", date: new Date() });
      e.context.logger.success({ message: "sucess icon?" });
      e.context.logger.log();
      const params = getQuery(e);
      return !!params.review;
    },
    // in seconds
    maxAge: 3600 * 8,
  }
);
