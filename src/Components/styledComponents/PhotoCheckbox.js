import React from 'react'
import styled from 'styled-components'

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const HiddenCheckbox = styled.input.attrs({type: 'checkbox'})`
  border: 0;
  height: 50px;
  width: 50px;
  overflow: hidden;
  padding: 0;
  opacity: 0;
  position: absolute;
  white-space: nowrap;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  background:${({checked, photoSelector}) => checked ? `url(${photoSelector})` : '#fff'} no-repeat;
  background-size: cover;
  border-radius: 50%;
  border:2px solid #ccc;
  transition: all 150ms;
`;

const PhotoCheckbox = ({className, checked, photoSelector, ...props}) => {
    return (
        <CheckboxContainer className={className}>
            <HiddenCheckbox checked={checked} {...props}/>
            <StyledCheckbox checked={checked} photoSelector={photoSelector}/>
        </CheckboxContainer>
    );
};

export default PhotoCheckbox