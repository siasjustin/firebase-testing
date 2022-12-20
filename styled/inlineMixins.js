import theme from "./theme"

export function isActive(page, val) {
  return page === val ? "black" : theme.colors.grey
}