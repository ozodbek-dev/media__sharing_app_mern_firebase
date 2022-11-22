const d_flex = (dir, wrap, align, justify) => {
  return `
    display:flex;
    ${dir && `flex-direction:${dir};`}
    ${wrap && `flex-wrap:${wrap};`}
    ${align && `align-items:${align};`}
    ${justify && `justify-content:${justify};`}
  `;
}
const d_grid = () => {
  return ``;
}


export {
  d_flex,
  d_grid
}