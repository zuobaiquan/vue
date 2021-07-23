export default function HtmlPlugin(rawOptions) {
  const {
    favicon,
    headScripts = [],
    metas = [],
    links = [],
    style,
    scripts = [],
  } = rawOptions;
  //  "head" | "body" | "head-prepend" | "body-prepend"
  const getScriptContent = (
    script,
    injectTo
  ) => {
    let result = {}
    if (typeof script === "object" && script.src) {
      result = {
        tag: "script",
        injectTo,
        attrs: { ...script },
      };
    } else if (typeof script === "object" && script.content) {
      const { content, ...attr } = script;
      result = {
        tag: "script",
        injectTo,
        attrs: { ...attr },
        children: `${content}`,
      };
    } else {
      result = {
        tag: "script",
        injectTo,
        children: `${script}`,
      };
    }
    return result;
  };

  return {
    name: "html-plugin",
    transformIndexHtml(html, ctx) {
      const htmlResult = [];
      if (favicon) {
        htmlResult.push({
          tag: "link",
          attrs: { rel: "shortcut icon", type: "image/x-icon", href: favicon },
          injectTo: "head",
        });
      }
      if (metas.length) {
        metas.forEach((meta) => {
          htmlResult.push({
            tag: "meta",
            injectTo: "head",
            attrs: { ...meta },
          });
        });
      }
      if (links.length) {
        links.forEach((meta) => {
          htmlResult.push({
            tag: "link",
            injectTo: "head",
            attrs: { ...meta },
          });
        });
      }
      if (style && style.length) {
        htmlResult.push({
          tag: "style",
          injectTo: "head",
          children: `${style}`
            .split("\n")
            .map((line) => `  ${line}`)
            .join("\n"),
        });
      }
      if (headScripts.length) {
        headScripts.forEach((script) => {
          htmlResult.push(getScriptContent(script, "head"));
        });
      }
      if (scripts.length) {
        scripts.forEach((script) => {
          htmlResult.push(getScriptContent(script, "body"));
        });
      }
      return htmlResult;
    },
  };
}