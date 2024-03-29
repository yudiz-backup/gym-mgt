import React, { useId } from 'react'
import PropTypes from 'prop-types'
import './_search.scss'

const Search = ({ onChange, errorMessage, id, className, startIcon, ...props }) => {
  const RandomId = useId()

  return (
    <>
      <>
        <div className={`search-input`}>
          <div className="search-input-field">
            {startIcon && (
              <div>
                <label htmlFor={id || RandomId} className="search_set_input_icon">
                  {startIcon}
                </label>
              </div>
            )}
            <input
              onChange={onChange}
              id={id || RandomId}
              className={`${className} ${!!errorMessage && 'search-errorInput'} ${startIcon && 'ps-5'}`}
              type="search"
              {...props}
            />
          </div>
        </div>
        {errorMessage && <p className="search-errorMessage">{errorMessage}</p>}
      </>
    </>
  )
}

Search.propTypes = {
  id: PropTypes.string,
  labelText: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func,
  disableError: PropTypes.bool,
  startIcon: PropTypes.any,
}

export default Search
