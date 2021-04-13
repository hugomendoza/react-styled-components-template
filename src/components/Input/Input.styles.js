import styled from "styled-components";
import tw from 'tailwind.macro';

export const StyledInput = styled.input.attrs({
  className: "StyledInput bg-blue-300 font-sansLight text-blue-500",
})`
  ${tw` px-4 rounded`}
`