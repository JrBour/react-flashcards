import styled from 'styled-components';

export const Nav = styled.ul `
  list-style: none;
  display: flex;
`;

export const NavItem = styled.li`
  ${({ selected }) => selected && `color: blue;`}
  cursor: pointer;
  text-transform: uppercase;
  padding-left: 20px;
`;