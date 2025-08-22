// Theme toggle logic will go here

// Tabbed Features Data (SVG icons)
const features = [
  {
    title: 'Real-Time Sync',
    icon: `<svg class='w-12 h-12 mb-4' fill='none' stroke='#3b82f6' stroke-width='2' viewBox='0 0 24 24'><path d='M4 4v5h.582M20 20v-5h-.581M5.635 19A9 9 0 1 1 19 5.634M16 16v1a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-1' stroke-linecap='round' stroke-linejoin='round'/></svg>`,
    desc: 'Collaborate instantly with your team, no matter where you are.'
  },
  {
    title: 'Secure Storage',
    icon: `<svg class='w-12 h-12 mb-4' fill='none' stroke='#10b981' stroke-width='2' viewBox='0 0 24 24'><rect x='3' y='11' width='18' height='11' rx='2' stroke-linecap='round' stroke-linejoin='round'/><path d='M7 11V7a5 5 0 0 1 10 0v4' stroke-linecap='round' stroke-linejoin='round'/></svg>`,
    desc: 'Your files are encrypted and protected with industry-leading security.'
  },
  {
    title: 'Mobile Access',
    icon: `<svg class='w-12 h-12 mb-4' fill='none' stroke='#a21caf' stroke-width='2' viewBox='0 0 24 24'><rect x='7' y='2' width='10' height='20' rx='2' stroke-linecap='round' stroke-linejoin='round'/><circle cx='12' cy='18' r='1' stroke-linecap='round' stroke-linejoin='round'/></svg>`,
    desc: 'Access and manage your files from any device, anywhere.'
  },
  {
    title: 'Automated Backups',
    icon: `<svg class='w-12 h-12 mb-4' fill='none' stroke='#f59e42' stroke-width='2' viewBox='0 0 24 24'><path d='M12 20v-6M12 4v2M4.93 4.93l1.42 1.42M19.07 19.07l-1.42-1.42M4 12H2M22 12h-2M4.93 19.07l1.42-1.42M19.07 4.93l-1.42 1.42' stroke-linecap='round' stroke-linejoin='round'/></svg>`,
    desc: 'Never lose your data with daily automated backups.'
  },
  {
    title: 'Team Management',
    icon: `<svg class='w-12 h-12 mb-4' fill='none' stroke='#ec4899' stroke-width='2' viewBox='0 0 24 24'><circle cx='12' cy='7' r='4' stroke-linecap='round' stroke-linejoin='round'/><path d='M5.5 21a7.5 7.5 0 0 1 13 0' stroke-linecap='round' stroke-linejoin='round'/></svg>`,
    desc: 'Easily add, remove, and manage team members and permissions.'
  },
  {
    title: 'Integrations',
    icon: `<svg class='w-12 h-12 mb-4' fill='none' stroke='#6366f1' stroke-width='2' viewBox='0 0 24 24'><rect x='3' y='3' width='7' height='7' rx='2' stroke-linecap='round' stroke-linejoin='round'/><rect x='14' y='3' width='7' height='7' rx='2' stroke-linecap='round' stroke-linejoin='round'/><rect x='14' y='14' width='7' height='7' rx='2' stroke-linecap='round' stroke-linejoin='round'/><rect x='3' y='14' width='7' height='7' rx='2' stroke-linecap='round' stroke-linejoin='round'/></svg>`,
    desc: 'Connect with your favorite tools like Slack, Google Drive, and more.'
  }
];

function setFeatureTab(idx) {
  const content = document.getElementById('feature-content');
  content.style.opacity = 0;
  setTimeout(() => {
    content.innerHTML = `
      ${features[idx].icon}
      <h3 class="font-semibold text-2xl mb-2">${features[idx].title}</h3>
      <p class="text-gray-600 dark:text-gray-300">${features[idx].desc}</p>
    `;
    content.style.opacity = 1;
  }, 250);
  // Update tab button styles
  document.querySelectorAll('.tab-btn').forEach((btn, i) => {
    if (i === idx) {
      btn.classList.add('bg-blue-100', 'text-blue-700', 'dark:bg-gray-700', 'dark:text-blue-200');
      btn.classList.remove('text-gray-700', 'dark:text-gray-200');
    } else {
      btn.classList.remove('bg-blue-100', 'text-blue-700', 'dark:bg-gray-700', 'dark:text-blue-200');
      btn.classList.add('text-gray-700', 'dark:text-gray-200');
    }
  });
}

// Testimonials Carousel Data
const testimonials = [
  {
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'CloudSync has transformed the way our team works together!',
    name: 'Alex P.',
    stars: 5
  },
  {
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'The real-time sync is a game changer for remote collaboration.',
    name: 'Jamie L.',
    stars: 5
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
    quote: 'I love how secure and easy to use CloudSync is!',
    name: 'Chris W.',
    stars: 4
  },
  {
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    quote: 'The mobile access lets me work from anywhere, anytime.',
    name: 'Morgan S.',
    stars: 5
  }
];

let testimonialIdx = 0;

function renderTestimonial(idx, animate = true) {
  const card = document.getElementById('testimonial-card');
  card.style.opacity = 0;
  card.style.transform = 'translateX(24px)';
  setTimeout(() => {
    const t = testimonials[idx];
    card.innerHTML = `
      <img src="${t.avatar}" alt="${t.name}" class="w-16 h-16 rounded-full mb-4 shadow-lg border-2 border-blue-200 dark:border-blue-400">
      <div class="flex justify-center mb-2">${'★'.repeat(t.stars).padEnd(5, '☆').split('').map(s => `<span class='text-yellow-400 text-lg'>${s}</span>`).join('')}</div>
      <p class="italic mb-2 text-gray-700 dark:text-gray-200">"${t.quote}"</p>
      <span class="font-semibold text-blue-700 dark:text-blue-300">— ${t.name}</span>
    `;
    card.style.opacity = 1;
    card.style.transform = 'translateX(0)';
  }, animate ? 250 : 0);
  // Update dots
  const dots = document.getElementById('testimonial-dots');
  dots.innerHTML = testimonials.map((_, i) =>
    `<button aria-label="Go to testimonial ${i+1}" class="w-3 h-3 rounded-full mx-1 ${i === idx ? 'bg-blue-600' : 'bg-blue-200 dark:bg-gray-600'} transition" style="outline:none;"></button>`
  ).join('');
  Array.from(dots.children).forEach((dot, i) => {
    dot.onclick = () => { testimonialIdx = i; renderTestimonial(i); };
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Initialize first tab
  setFeatureTab(0);
  // Tab click handlers
  document.querySelectorAll('.tab-btn').forEach((btn, i) => {
    btn.addEventListener('click', () => setFeatureTab(i));
  });
  renderTestimonial(testimonialIdx, false);
  document.getElementById('testimonial-prev').onclick = () => {
    testimonialIdx = (testimonialIdx - 1 + testimonials.length) % testimonials.length;
    renderTestimonial(testimonialIdx);
  };
  document.getElementById('testimonial-next').onclick = () => {
    testimonialIdx = (testimonialIdx + 1) % testimonials.length;
    renderTestimonial(testimonialIdx);
  };
});
