import styled from "styled-components";
import { MdManageSearch } from "react-icons/md";

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  width: 150px
  font: inherit;
`;

export const Icon = styled(MdManageSearch)`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 6px;
`;
