import styled from "styled-components";
import tw from 'tailwind.macro';

export const StyledButton = styled.button.attrs({
  className: "StyledButton",
})`
  ${tw` px-4 py-2 text-red-900 text-sm lg:text-2xl bg-terciary-600 font-sansLight`}
`