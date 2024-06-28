import { extendTheme } from "@chakra-ui/react"

const CustomTheme = extendTheme({
    colors: {
      "main": "#5352ED",
      "dark-theme" : {
        "bg-black": "#1B1B1F",
        "element-grey": "#161618",
        "label-white": "#D9D9D9"
      }
    },
})

export default CustomTheme;
  