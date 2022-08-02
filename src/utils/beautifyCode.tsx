const beautifyStringsAndNumbers = (str: string) => {
  if (parseFloat(str)) {
    return `<span style="color: #d19a66">${str}</span>`;
  } else {
    return `<span style="color: #75c372">${str}</span>`
  }
}

export const beautifyCode = (lineIndex: number, codeLine: string) => {
  return {
    __html: lineIndex + ' ' + codeLine
      .replace(/\".*\"|\d+\.?\d+?/g, beautifyStringsAndNumbers)
      .replace(/constructor|class|this|for|if|else|while|new |const|let|var|return|void|false|true/g, str => `<span style="color: #a154cb">${str}</span>`)
      .replace(/Date/g, str => `<span style="color: #eb4034">${str}</span>`)
      .replace(/[()\[\]{}]/g, str => `<span style="color: #e4b535">${str}</span>`)
      .replace(/useState|setTimeout/g, str => `<span style="color: #4C8891">${str}</span>`)
  }
}