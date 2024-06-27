import { extendTheme } from "@chakra-ui/react"

const CustomTheme = extendTheme({
    colors: {
      "main": "#2C4BE2",
      "dark-theme" : {
        "bg-black": "#09090A",
        "element-grey": "#1D1D1F",
        "label-white": "#D9D9D9"
      }
    },
})

export default CustomTheme;
  