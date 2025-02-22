import './style.css'
import { renderHome } from './pages/home'
import { renderComponent } from './pages/component'
import { components } from './data/components'


// Initialize router
function initRouter() {
  const app = document.querySelector('#app')

  function navigate() {
    const path = window.location.hash.slice(1) || '/'

    if (path === '/') {
      renderHome(app, components)
    } else {
      const componentId = path.slice(1) // Remove leading slash
      const component = components.find(c => c.id === componentId)
      if (component) {
        renderComponent(app, component)
      } else {
        window.location.hash = '/'
      }
    }
  }

  window.addEventListener('hashchange', navigate)
  navigate()
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  initRouter()
})