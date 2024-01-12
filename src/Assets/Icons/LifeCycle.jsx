import React from 'react'
import PropTypes from 'prop-types'

export default function LifeCycle ({ fill = '#B2BFD2', ...props }) {
    return (
        <svg className="cursor-pointer" width="18" height="18" viewBox="10 0 45 62" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                fill="#000000" stroke="none">
                <path d="M250 571 c-108 -35 -177 -121 -187 -232 -5 -48 -9 -58 -27 -63 -19
-6 -17 -10 24 -46 l45 -39 16 37 c32 74 32 80 3 74 -27 -5 -27 -4 -22 41 16
144 174 238 299 178 24 -11 52 -26 61 -33 25 -18 47 4 28 27 -39 46 -174 78
-240 56z" fill={fill} />
                <path d="M286 434 c-34 -33 -12 -94 34 -94 31 0 50 22 50 59 0 25 -26 51 -50
51 -10 0 -26 -7 -34 -16z" fill={fill} />
                <path d="M511 394 c-11 -31 -21 -57 -21 -59 0 -1 11 0 25 3 23 4 25 1 25 -29
-1 -44 -29 -106 -66 -143 -80 -80 -197 -86 -296 -14 -25 18 -47 -4 -28 -27 50
-61 205 -81 285 -38 83 44 134 121 142 215 4 38 10 58 19 58 29 0 22 20 -20
54 l-43 35 -22 -55z" fill={fill} />
                <path d="M253 294 c-28 -7 -47 -30 -39 -49 9 -24 68 -55 106 -55 38 0 97 31
107 56 11 28 -21 46 -88 49 -35 2 -74 1 -86 -1z" fill={fill} />
            </g>
        </svg>
    )
}

LifeCycle.propTypes = {
    fill: PropTypes.string,
}
