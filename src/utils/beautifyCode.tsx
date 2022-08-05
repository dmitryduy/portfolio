const beautifyStringsAndNumbers = (str: string) => {
  if (parseFloat(str)) {
    return `<span style="color: #d19a66">${str}</span>`;
  } else {
    return `<span style="color: #75c372">${str}</span>`
  }
}

export const beautifyCode = (codeLine: string, code: boolean) => {
  if (!code) {
    return {
      __html: codeLine
        .replace(/react|html|css/gi, str => `<span style="color: #eb4034; opacity: .7">${str}</span>`)
        }
  }

  return {
    __html: codeLine
      .replace(/\'.*\'|\".*\"|\d+\.?\d+?/g, beautifyStringsAndNumbers)
      .replace(/constructor|class|this|for|if|else|while|new |const|let|var|return|void|false|true|export|default|import|from/g, str => `<span style="color: #a154cb">${str}</span>`)
      .replace(/Date/g, str => `<span style="color: #eb4034">${str}</span>`)
      .replace(/[()\[\]{}]/g, str => `<span style="color: #e4b535">${str}</span>`)
      .replace(/useState|setTimeout|useLayoutEffect|removeEventListener|addEventListener|matchMedia/g, str => `<span style="color: #4C8891">${str}</span>`)
  }
}