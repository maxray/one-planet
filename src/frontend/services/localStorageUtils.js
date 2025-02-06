export function saveStateToLocal(state) {
  const serializedState = JSON.stringify(state)
  localStorage.setItem('appState', serializedState)
  console.log('--- LOCAL STORAGE UPDATED ---')
}

export function loadStateFromLocal() {
  const serializedState = localStorage.getItem('appState')
  if (serializedState) {
    return JSON.parse(serializedState)
  }
  return undefined
}
