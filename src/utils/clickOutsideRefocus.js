const clickOutsideRef = (content_ref, toggle_ref, setActive) => {
  document.addEventListener("click", (e) => {
    e.stopPropagation();
    if (content_ref.current && toggle_ref.current.contains(e.target)) {
      setActive(true)
      console.log('inside ref')
    }
    else{
      if(content_ref.current && !content_ref.current.contains(e.target)){
      setActive(false)
      }
    }
  })
}

export { clickOutsideRef};