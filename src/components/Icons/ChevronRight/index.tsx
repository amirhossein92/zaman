import React from 'react'
import { isRtl } from '../../../utils'

export const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right" style={{ transform: isRtl() ? 'unset' : 'rotate(180deg)' }}>
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
)

export default ChevronRight
