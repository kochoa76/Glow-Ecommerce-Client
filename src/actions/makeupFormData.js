export const updateMakeupFormData = makeupFormData => {
  return {
    type: 'UPDATED_DATA',
    makeupFormData
  }
}

export const resetMakeupForm = () => {
  return {
    type: 'RESET_MAKEUP_FORM'
  }
}
