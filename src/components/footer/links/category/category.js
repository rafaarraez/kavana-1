import React from 'react';
import styled from "styled-components";

const category = ({ className, children }) => {
    return (
        <div className={className}>
            { children }
        </div>
    );
};

const Category = styled(category)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 0.80rem;
  padding-left: 10px;
  border-left: 1px solid ${props => props.theme.text};
  height: auto;
  width: auto;
`;

export default Category;
