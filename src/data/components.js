export const components = [
  {
    id: 'footer-simple',
    name: 'Simple Footer',
    category: 'Footer',
    tech: ['HTML', 'CSS', 'Tailwind CSS'],
    preview: `<footer class="bg-gray-800 text-white text-center p-4 rounded-lg"><p>&copy; 2023 Your Company. All rights reserved.</p></footer>`,
    code: `<footer class="bg-gray-800 text-white text-center p-4 rounded-lg">
  <p>&copy; 2023 Your Company. All rights reserved.</p>
</footer>`
  },
  {
    id: 'input-box',
    name: 'Input Box',
    category: 'Forms',
    tech: ['HTML', 'CSS', 'Tailwind CSS'],
    preview: `<input type="text" class="border border-gray-300 rounded-lg p-2 w-full" placeholder="Enter your text">`,
    code: `<input type="text" class="border border-gray-300 rounded-lg p-2 w-full" placeholder="Enter your text">`
  },
  {
    id: 'input-search',
    name: 'Input with Search Icon',
    category: 'Forms',
    tech: ['HTML', 'CSS', 'Tailwind CSS'],
    preview: `
      <div class="relative">
        <input type="text" class="border border-gray-300 rounded-lg p-2 pl-10 w-full" placeholder="Search">
        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </span>
      </div>
    `,
    code: `
<div class="relative">
  <input type="text" class="border border-gray-300 rounded-lg p-2 pl-10 w-full" placeholder="Search">
  <span class="absolute inset-y-0 left-0 flex items-center pl-3">
    <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
    </svg>
  </span>
</div>
    `
  },
  {
    id: 'accordion-basic',
    name: 'Basic Accordion',
    category: 'Accordion',
    tech: ['HTML', 'CSS', 'JavaScript'],
    preview: `
      <div class="accordion">
        <div class="accordion-header" onclick="toggleAccordion(this)">
          <h3>Accordion Title</h3>
        </div>
        <div class="accordion-content">
          <p>Accordion content goes here.</p>
        </div>
      </div>
    `,
    code: `<div class="accordion">
  <div class="accordion-header" onclick="toggleAccordion(this)">
    <h3>Accordion Title</h3>
  </div>
  <div class="accordion-content">
    <p>Accordion content goes here.</p>
  </div>
</div>`,
    script: `function toggleAccordion(header) {
  const content = header.nextElementSibling;
  content.classList.toggle('active');
}`,
    styles: `.accordion{border:1px solid #e5e7eb;border-radius:.5rem;overflow:hidden}.accordion-header{background-color:#f3f4f6;padding:1rem;cursor:pointer}.accordion-header h3{margin:0;font-size:1.125rem;font-weight:600}.accordion-content{background-color:#fff;padding:1rem;display:none}.accordion-content.active{display:block}`
  },
  {
    id: 'hero-section',
    name: 'Hero Section',
    category: 'Hero',
    tech: ['HTML', 'CSS', 'Tailwind CSS'],
    preview: `
      <div class="bg-blue-600 text-white py-20">
        <div class="container mx-auto text-center">
          <h1 class="text-4xl font-bold mb-4">Welcome to Our Website</h1>
          <p class="text-lg mb-8">We provide the best solutions for your business needs.</p>
          <a href="#" class="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold">Get Started</a>
        </div>
      </div>
    `,
    code: `
<div class="bg-blue-600 text-white py-20">
  <div class="container mx-auto text-center">
    <h1 class="text-4xl font-bold mb-4">Welcome to Our Website</h1>
    <p class="text-lg mb-8">We provide the best solutions for your business needs.</p>
    <a href="#" class="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold">Get Started</a>
  </div>
</div>
    `
  },
  {
    id: 'banner-simple',
    name: 'Simple Banner',
    category: 'Banner',
    tech: ['HTML', 'CSS', 'Tailwind CSS'],
    preview: `
      <div class="bg-yellow-200 p-4 text-center">
        <p class="text-yellow-800">Special offer! Get 20% off on all products.</p>
      </div>
    `,
    code: `
<div class="bg-yellow-200 p-4 text-center">
  <p class="text-yellow-800">Special offer! Get 20% off on all products.</p>
</div>
    `
  }
];