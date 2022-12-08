interface ICreateCodeString {
  component: string,
  used?: Array<string>,
  configs?: {
    [key: string]: any
  },
  render?: string,
}

function stringifyConfigItems(configs: {
  [key: string]: any
}): string
{
  return Object.entries(configs).map(([k, v]) =>  
    `\nconst ${k} = ${
      JSON.stringify(v, function(key, val) {
        if (typeof val === 'function') {
          return "rmjsqts" + val.toString() + "rmjsqts";
        }
        return val;
      }, 2)
      .replace(/"(\w+)"\s*:/g, '$1:')
      .replace(/\\"/g, '"')
      .replace(/"rmjsqts(.*?)rmjsqts"/g, '$1')
    }
    `
  ).join("")
}

export function createCodeString({component, used, configs, render}: ICreateCodeString): string {
return`
import React from 'react'
import { ${used?.join(",")} } from 'faansyu-ui'
${
  configs ?
  stringifyConfigItems(configs)
  : ""
}
export default const ${component} = () => {
  return (
    <div>
      ${render}
    </div>
  )
}
`
}