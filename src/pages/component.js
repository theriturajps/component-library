export function renderComponent(container, component) {
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
            <a href="https://github.com/yourusername/yourrepo" target="_blank" class="text-gray-700 hover:text-gray-900">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.066 2.87.814.088-.632.328-1.066.598-1.3-2.09-.237-4.288-1.063-4.288-4.73 0-1.045.37-1.903 1.03-2.568-.103-.25-.447-1.282.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.665 1.024 1.523 1.024 2.568 0 3.678-2.195 4.496-4.308 4.737.336.306.645.918.645 1.852 0 1.335-.012 2.415-.012 2.741 0 .269.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/>
              </svg>
            </a>
          </div>
        </div>
      </nav>

      <!-- Main Content -->
      <main class="flex-grow py-8">
        <div class="container-custom">
          <div class="mb-6">
            <a href="#/" class="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200">
              <svg class="w-4 h-4 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to components
            </a>
          </div>

          <div class="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div class="p-6">
              <h1 class="text-2xl font-bold text-gray-900 mb-3">${component.name}</h1>
              <div class="flex gap-2 mb-6">
                ${component.tech.map(tech => `
                  <span class="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">${tech}</span>
                `).join('')}
              </div>
              
              <!-- Preview -->
              <div class="mb-8">
                <h2 class="text-lg font-semibold text-gray-900 mb-4">Preview</h2>
                <div class="p-6 bg-gray-50 rounded-lg border border-gray-200">
                  ${component.preview}
                </div>
              </div>

              <!-- Code -->
              <h2 class="text-lg font-semibold text-gray-900 mb-4">Code</h2>
              <div class="code-block relative">
                <button class="copy-button text-black absolute top-2 right-2 bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200" data-code="${component.code.replace(/"/g, '&quot;')}">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path class="text-black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                </button>
                <pre><code>${component.code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
              </div>

              <!-- Script -->
              ${component.script ? `
                <h2 class="text-lg font-semibold text-gray-900 mb-4 mt-8">JavaScript</h2>
                <div class="code-block relative">
                  <button class="copy-button text-black absolute top-2 right-2 bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200" data-code="${component.script.replace(/"/g, '&quot;')}">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path class="text-black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                  </button>
                  <pre><code>${component.script.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
                </div>
              ` : ''}

              <!-- Styles -->
              ${component.styles ? `
                <h2 class="text-lg font-semibold text-gray-900 mb-4 mt-8">CSS</h2>
                <div class="code-block relative">
                  <button class="copy-button text-black absolute top-2 right-2 bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200" data-code="${component.styles.replace(/"/g, '&quot;')}">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path class="text-black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                  </button>
                  <pre><code>${component.styles.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
                </div>
              ` : ''}
            </div>
          </div>
        </div>
      </main>

      <!-- Footer -->
      <footer class="bg-gray-900 py-6">
        <div class="container-custom">
          <p class="text-gray-400 text-center text-sm">
            &copy; ${new Date().getFullYear()} Components. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  `;

  container.innerHTML = template;

  // Copy functionality
  document.querySelectorAll('.copy-button').forEach(button => {
    button.addEventListener('click', () => {
      const code = button.dataset.code;
      navigator.clipboard.writeText(code);

      const originalContent = button.innerHTML;
      button.innerHTML = `
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path class="text-black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        Copied!
      `;
      setTimeout(() => {
        button.innerHTML = originalContent;
      }, 2000);
    });
  });

  // Inject the component's JavaScript into the page
  if (component.script) {
    const script = document.createElement('script');
    script.textContent = component.script;
    document.body.appendChild(script);
  }

  // Inject the component's custom CSS into the page
  if (component.styles) {
    const style = document.createElement('style');
    style.textContent = component.styles;
    document.head.appendChild(style);
  }
}