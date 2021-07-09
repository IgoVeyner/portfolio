const Divider = () => {
  return (
    <svg 
      width="110" height="7" viewBox="0 0 110 7" className="divider-container">
      <path 
        className="divider divider-top"
        d="M43.1429 0H110L104.857 4H38L43.1429 0Z" 
      />
      <path 
        className="divider divider-bottom"
        d="M5.14286 3H72L66.8571 7H0L5.14286 3Z" 
      />
    </svg>
  )
}

export default Divider