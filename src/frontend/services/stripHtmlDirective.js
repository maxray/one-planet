const stripHtmlDirective = {
  beforeMount(el, binding) {
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = binding.value
    let strippedContent = tempDiv.textContent || tempDiv.innerText || ''
    strippedContent = strippedContent.replace(/\u00A0/g, ' ') // Replace non-breaking spaces with regular spaces
    el.textContent = strippedContent
  },
  updated(el, binding) {
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = binding.value
    let strippedContent = tempDiv.textContent || tempDiv.innerText || ''
    strippedContent = strippedContent.replace(/\u00A0/g, ' ') // Replace non-breaking spaces with regular spaces
    el.textContent = strippedContent
  },
}

export default stripHtmlDirective
