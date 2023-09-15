import styled from "styled-components";
import { Colors } from "./theme";

export const Text = styled.p`
  font-size: ${({ fontSize }) => fontSize ?? "14px"};
  color: ${({ color }) => color || "#444"};
  font-weight: ${({ fontWeight }) => fontWeight};
  margin: ${({ margin }) => margin ?? "0px"};
  padding: ${({ padding }) => padding ?? "0px"};
  width: ${({ width }) => width};
  ${({ textTransform }) => textTransform && "text-transform: " + textTransform};
  ${({ textOverflow }) => textOverflow && "text-overflow: " + textOverflow};

  ${({ noWrap }) =>
    noWrap &&
    `
    width: 90%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
`;

export const Span = styled.span`
  font-size: ${({ fontSize }) => fontSize ?? "inherit"};
  font-style: ${({ fontStyle }) => fontStyle ?? "none"};
  color: ${({ color }) => `${color} !important` ?? "inherit"};
  font-weight: ${({ fontWeight }) => fontWeight};
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width};
  text-align: ${({ textAlign }) => textAlign};
  cursor: ${({ cursor }) => cursor};
  opacity: ${({ opacity }) => opacity};

  ${({ noWrap }) =>
    noWrap &&
    `
    width: 90%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}

  ${({ lineThrough, lineThroughSize }) =>
    lineThrough &&
    `text-decoration: line-through;
      text-decoration-thickness: ${lineThroughSize ?? "1px"}
  `};
`;

export const Button = styled.button`
  text-decoration: none;
  font-style: normal;
  font-weight: normal;
  font-size: ${({ fontSize }) => fontSize ?? "1rem"};
  line-height: 16px;
  color: ${({ color }) => color ?? Colors.white};
  background-color: ${({ backgroundColor, disable, notFilled }) =>
    disable
      ? Colors.secondaryColor
      : notFilled
      ? "transparent"
      : backgroundColor ?? Colors.primaryColor};
  border: ${({ borderSize }) => borderSize ?? "1px"} solid
    ${({ backgroundColor, borderColor, disable }) =>
      disable
        ? Colors.secondaryColor
        : borderColor ?? backgroundColor ?? Colors.primaryColor};
  box-sizing: border-box;
  border-radius: ${({ borderRadius }) => borderRadius ?? "30px"};
  padding: ${({ padding }) => padding ?? "12px 20px"};
  width: ${({ width }) => width};
  height: ${({ height }) => height ?? "50px"};
  display: flex;
  align-items: ${({ alignItems }) => alignItems ?? "center"};
  justify-content: ${({ justifyContent }) => justifyContent ?? "center"};
  text-align: center;
  margin: ${({ margin }) => margin ?? "unset"};
  cursor: ${({ disable }) => (disable ? "not-allowed" : "pointer")};
  transition: ease-in-out all 0.3s;

  ${({
    notFilled,
    borderColor,
    bgHover,
    backgroundColor,
    disable,
    hoverColor,
  }) =>
    disable
      ? ""
      : notFilled
      ? `&:hover {
    background-color: ${bgHover ?? borderColor ?? Colors.primaryColor};
    color: ${hoverColor ?? Colors.white};
  }`
      : `&:hover {
    background-color: ${bgHover ?? backgroundColor ?? Colors.primaryColor};
    border: 1px solid ${bgHover ?? backgroundColor ?? Colors.primaryColor};
  }`}
`;

export const Flex = styled.div`
  display: ${({ display }) => display ?? "flex"};
  justify-content: ${({ justifyContent }) => justifyContent ?? "unset"};
  align-items: ${({ alignItems }) => alignItems ?? "unset"};
  width: ${({ width }) => width};
  min-width: ${({ minWidth }) => minWidth};
  position: ${({ position }) => position};
  max-width: ${({ maxWidth }) => maxWidth};
  height: ${({ height }) => height ?? "unset"};
  min-height: ${({ minHeight }) => minHeight ?? "unset"};
  max-height: ${({ maxHeight }) => maxHeight ?? "unset"};
  flex-direction: ${({ direction }) => direction ?? "row"};
  align-self: ${({ alignSelf }) => alignSelf ?? "unset"};
  margin: ${({ margin }) => margin};
  flex-flow: ${({ flexFlow }) => flexFlow};
  padding: ${({ padding }) => padding ?? "0px"};
  font-size: ${({ fontSize }) => fontSize ?? "14px"};
  gap: ${({ gap }) => gap ?? "0px"};
  column-gap: ${({ columnGap }) => columnGap};
  flex-wrap: ${({ flexWrap }) => flexWrap ?? "unset"};
  background-color: ${({ bg }) => bg};
  color: ${({ color }) => color};
  border-radius: ${({ borderRadius }) => borderRadius ?? "0px"};
  border: ${({ border }) => border ?? "unset"};
  box-shadow: ${({ boxShadow, shadow }) =>
    shadow ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" : boxShadow ?? "none"};
  overflow: ${({ overflow }) => overflow};
  overflow-x: ${({ overflowX }) => overflowX};
  overflow-y: ${({ overflowY }) => overflowY};
  z-index: ${({ zIndex }) => zIndex ?? "unset"};
  cursor: ${({ cursor }) => cursor ?? "unset"};
  opacity: ${({ opacity, disabled }) =>
    disabled || opacity ? "0.5" : "unset"};
  transition: ${({ transition }) => transition ?? "unset"};
  pointer-events: ${(props) => (props.disabled ? "none" : "unset")};

  -ms-overflow-style: none;
  scrollbar-width: 5px;

  ::-webkit-scrollbar {
    background-color: #fff;
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: ${Colors.primaryColor};
  }

  :hover {
    ${({ hover }) =>
      hover &&
      `
      opacity: 0.8;
  `}
  }
  ${({ hideScrollbar }) =>
    hideScrollbar &&
    `
     ::-webkit-scrollbar {
    display: none;
  }
  `}
`;
