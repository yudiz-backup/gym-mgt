import React from 'react'
import PropTypes from 'prop-types'

export default function Schedule ({ fill }) {
  return (
    <>
      <svg width="18" height="23" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
          fill="#000000" stroke="none">
          <path d="M93 493 c-28 -11 -10 -19 42 -19 49 1 58 -3 87 -32 28 -28 33 -39 33
-82 0 -72 -43 -115 -115 -115 -42 0 -54 5 -80 30 -35 36 -47 87 -30 130 7 17
14 24 17 18 9 -24 23 -13 23 17 0 27 -3 30 -30 30 -17 0 -30 -4 -30 -10 0 -5
4 -10 9 -10 6 0 3 -16 -5 -35 -19 -47 -18 -84 6 -123 41 -66 113 -88 179 -54
101 51 106 183 9 242 -31 19 -87 25 -115 13z" fill={fill} />
          <path d="M363 480 c-4 -16 -14 -20 -49 -20 -24 0 -44 -4 -44 -10 0 -5 20 -10
44 -10 35 0 45 -4 49 -20 3 -12 14 -20 27 -20 13 0 24 8 27 20 3 13 14 20 29
20 21 0 24 -5 24 -35 l0 -35 -85 0 c-50 0 -85 -4 -85 -10 0 -6 35 -10 85 -10
l85 0 0 -155 0 -155 -210 0 -210 0 0 94 c0 55 -4 98 -10 101 -7 5 -10 -29 -8
-102 l3 -108 225 0 225 0 0 215 0 215 -31 3 c-22 2 -34 9 -37 23 -7 26 -47 25
-54 -1z m37 -30 c0 -16 -4 -30 -10 -30 -5 0 -10 14 -10 30 0 17 5 30 10 30 6
0 10 -13 10 -30z" fill={fill} />
          <path d="M130 401 c0 -41 4 -51 26 -66 14 -9 29 -13 32 -10 4 4 -3 14 -15 22
-18 12 -23 25 -23 59 0 24 -4 44 -10 44 -5 0 -10 -22 -10 -49z" fill={fill} />
          <path d="M290 300 c0 -5 7 -10 15 -10 9 0 15 -9 15 -25 0 -22 -4 -25 -35 -25
-33 0 -35 -2 -35 -35 0 -31 -3 -35 -25 -35 -18 0 -25 5 -25 20 0 11 -4 20 -10
20 -5 0 -10 -9 -10 -20 0 -15 -7 -20 -25 -20 -16 0 -25 6 -25 15 0 8 -4 15
-10 15 -6 0 -10 -27 -10 -60 l0 -60 150 0 150 0 0 115 0 115 -60 0 c-33 0 -60
-4 -60 -10z m100 -35 c0 -20 -5 -25 -25 -25 -20 0 -25 5 -25 25 0 20 5 25 25
25 20 0 25 -5 25 -25z m-70 -70 c0 -20 -5 -25 -25 -25 -20 0 -25 5 -25 25 0
20 5 25 25 25 20 0 25 -5 25 -25z m70 0 c0 -20 -5 -25 -25 -25 -20 0 -25 5
-25 25 0 20 5 25 25 25 20 0 25 -5 25 -25z m-210 -70 c0 -20 -5 -25 -25 -25
-20 0 -25 5 -25 25 0 20 5 25 25 25 20 0 25 -5 25 -25z m70 0 c0 -20 -5 -25
-25 -25 -20 0 -25 5 -25 25 0 20 5 25 25 25 20 0 25 -5 25 -25z m70 0 c0 -20
-5 -25 -25 -25 -20 0 -25 5 -25 25 0 20 5 25 25 25 20 0 25 -5 25 -25z m70 0
c0 -20 -5 -25 -25 -25 -20 0 -25 5 -25 25 0 20 5 25 25 25 20 0 25 -5 25 -25z" fill={fill} />
        </g>
      </svg>
    </>
  )
}
Schedule.propTypes = {
  fill: PropTypes.string,
}
