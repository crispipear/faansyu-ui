import { IApiItem, fontSize, typeColor } from "../ApiTable"

enum COMPONENTS {
  HEADER = "Header",
  TEXT = "Text",
  PARAGRAPH = "Paragraph"
}

export const HeaderApi: IApiItem[] = [
  typeColor({componentName: COMPONENTS.HEADER}),
  fontSize({componentName: COMPONENTS.HEADER}),
  {
    property: "tag",
    type: "string",
    description: "Set the html tag of the Header component",
    default: "h1"
  }
]

export const ParagraphApi: IApiItem[] = [
  typeColor({componentName: COMPONENTS.PARAGRAPH}),
  fontSize({componentName: COMPONENTS.PARAGRAPH, defaultSize: "s"}),
]

export const TextApi: IApiItem[] = [
  typeColor({componentName: COMPONENTS.TEXT}),
  fontSize({componentName: COMPONENTS.TEXT, defaultSize: "s"}),
]