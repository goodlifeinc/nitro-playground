const template = (templateName) =>
  templateName.endsWith(".html") ? templateName : `${templateName}.html`;

const deep = (o, k) =>
  k.split(".").reduce((a, c, i) => {
    const m = c.match(/(.*?)\[(\d*)\]/);
    if (m && a != null && a[m[1]] != null) return a[m[1]][+m[2]];
    return a == null ? a : a[c];
  }, o);
const inject = (str, obj) =>
  str.replace(/\${(.*?)}/g, (x, g) => deep(obj, g) || "x");

// let t1 = 'My name is ${users[0].name}, I am ${users[0].info.age}.';
// let r1 = inject(t1, {users: [{name: 'JOHN', info: {age: 23}}]}
// let t2 = "My name is ${0} - ${0} ${1.data[0].surname}."
// let r2 = inject(t2, ['John', {data:[{surname: 'Smith'}]}] );

async function useTemplate(templateName, params = {}) {
  const html = (await useStorage("assets:templates").getItem(
    template(templateName)
  )) as string;

  return inject(html, params);
}

export default useTemplate;
