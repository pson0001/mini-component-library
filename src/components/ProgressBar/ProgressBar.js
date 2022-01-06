/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import VisuallyHidden from '../VisuallyHidden'

const ProgressBar = ({ value, size }) => {
  const SIZES = {
    small: {
      '--height': 8 + 'px',
      padding: 0 + 'px',
    },
    medium: {
      padding: 0 + 'px',
      '--height': 12 + 'px',
    },
    large: {
      padding: 4 + 'px',
      '--height': 24 + 'px',
    },
  }

  const styles = SIZES[size]

  const BarWarpper = styled.div`
    width: 100%;
    height: var(--height);
    background-color: ${COLORS.transparentGray15};
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    border-radius: 8px;
  `
  const Wrapper = styled.div`
    overflow: hidden;
    border-radius: 4px;
    height: 100%;
  `
  const Bar = styled.div`
    box-sizing: border-box;
    width: ${value}%;
    height: 100%;
    background-color: ${COLORS.primary};
    border-radius: 4px 0px 0px 4px;
  `
  return (
    <BarWarpper
      style={styles}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <Wrapper>
        <Bar></Bar>
      </Wrapper>

      <VisuallyHidden>{value}%</VisuallyHidden>
    </BarWarpper>
  )
}

export default ProgressBar
