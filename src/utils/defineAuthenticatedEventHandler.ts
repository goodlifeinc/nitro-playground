// export function defineAuthenticatedEventHandler<T>(
//   handler: (event: CompatibilityEvent, user: User) => T | Promise<T>
// ) {
//   return (
//     defineEventHandler <
//     T >
//     (async (event) => {
//       try {
//         const user = await useAuth(event);
//         return handler(event, user);
//       } catch (err) {
//         sendError(event, err);
//       }
//     })
//   );
// }
