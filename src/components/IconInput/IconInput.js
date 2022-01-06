import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'

import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const SIZES = {
    small: {
      iconSize: 16,
      height: 24,
    },
    large: {
      iconSize: 24,
      height: 36,
    },
  }

  const Wrapper = styled.div`
    border-bottom: 1px solid #000;
    width: max-content;
    position: relative;
    &:focus {
      outline: 1px solid blue;
    }
  `
  const InputWrapper = styled.input`
    border: none;
    width: ${width}px;
    height: var(--height);
    padding-left: 24px;
  `
  const IconWrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    width: max-content;
  `
  const styles = SIZES[size]

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--size': styles.iconSize + 'px' }}>
        <Icon id={icon} size={styles.iconSize}></Icon>
      </IconWrapper>
      <InputWrapper
        placeholder={placeholder}
        style={{ '--height': styles.height + 'px' }}
      ></InputWrapper>
    </Wrapper>
  )
}

export default IconInput
