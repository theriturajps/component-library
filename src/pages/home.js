export function renderHome(container, components) {
  const template = `
    <div class="min-h-screen flex flex-col">
      <!-- Navigation -->
      <nav class="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div class="container-custom">
          <div class="flex justify-between items-center h-12">
            <a href="#/" class="flex items-center space-x-2">
              <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z"/>
              </svg>
              <span class="text-lg font-bold text-gray-900">Components</span>
            </a>
            <a href="https://github.com/theriturajps" target="_blank" class="text-gray-700 hover:text-gray-900">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.066 2.87.814.088-.632.328-1.066.598-1.3-2.09-.237-4.288-1.063-4.288-4.73 0-1.045.37-1.903 1.03-2.568-.103-.25-.447-1.282.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.665 1.024 1.523 1.024 2.568 0 3.678-2.195 4.496-4.308 4.737.336.306.645.918.645 1.852 0 1.335-.012 2.415-.012 2.741 0 .269.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/>
              </svg>
            </a>
          </div>
        </div>
      </nav>

      <!-- Hero Section -->
      <section class="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 py-12">
        <div class="absolute inset-0 bg-grid-white/10"></div>
        <div class="container-custom relative">
          <div class="text-center max-w-2xl mx-auto">
            <h1 class="text-3xl font-bold text-white mb-4">
              Beautiful UI Components
            </h1>
            <p class="text-lg text-blue-100 mb-6">
              Professional, ready-to-use components for your next project. Copy, paste, and customize with ease.
            </p>
            <div class="relative max-w-xl mx-auto">
              <input type="text" placeholder="Search components..." class="search-input" id="searchInput" />
              <svg class="absolute left-4 top-3 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <!-- Main Content -->
      <main class="flex-grow py-8">
        <div class="container-custom">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
            <h2 class="text-xl font-bold text-gray-900 mb-4 sm:mb-0">All Components</h2>
            <div class="flex gap-3">
              <button class="border border-gray-200 text-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                Welcome
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" id="componentsGrid">
            ${components.map(component => `
              <a href="#/${component.id}" class="group">
                <div class="component-card">
                  <div class="flex items-start justify-between mb-3">
                    <h3 class="text-base font-semibold text-gray-900">${component.name}</h3>
                    <span class="text-blue-600">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                  <div class="flex flex-wrap gap-1.5 mb-2">
                    ${component.tech.map(tech => `
                      <span class="px-2 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-full border border-gray-100">${tech}</span>
                    `).join('')}
                  </div>
                  <div class="text-xs text-gray-500 flex items-center gap-1.5">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    ${component.category}
                  </div>
                </div>
              </a>
            `).join('')}
          </div>
        </div>
      </main>

      <!-- Footer -->
      <footer class="bg-gray-900 py-3">
        <div class="container-custom">
          <p class="text-gray-400 text-center text-sm">
            &copy; ${new Date().getFullYear()} Components. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  `

  container.innerHTML = template

  // Search functionality
  const searchInput = document.getElementById('searchInput')
  const componentsGrid = document.getElementById('componentsGrid')

  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase()
    const filteredComponents = components.filter(component =>
      component.name.toLowerCase().includes(searchTerm) ||
      component.category.toLowerCase().includes(searchTerm) ||
      component.tech.some(tech => tech.toLowerCase().includes(searchTerm))
    )

    componentsGrid.innerHTML = filteredComponents.map(component => `
      <a href="#/${component.id}" class="group">
        <div class="component-card">
          <div class="flex items-start justify-between mb-3">
            <h3 class="text-base font-semibold text-gray-900">${component.name}</h3>
            <span class="text-blue-600">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
          <div class="flex flex-wrap gap-1.5 mb-2">
            ${component.tech.map(tech => `
              <span class="px-2 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-full border border-gray-100">${tech}</span>
            `).join('')}
          </div>
          <div class="text-xs text-gray-500 flex items-center gap-1.5">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            ${component.category}
          </div>
        </div>
      </a>
    `).join('')
  })
}