/**
 * Main Portfolio Application Logic
 * Integrates dynamic data, Lucide icons, filterable skills, project modal,
 * contact form handling, resume preview, and scroll animations.
 */

document.addEventListener('DOMContentLoaded', function() {
  const data = window.PORTFOLIO_DATA;
  if (!data) {
    console.error("Portfolio data not found. Please ensure data.js is loaded.");
    return;
  }

  // Initialize all sections
  initNavbar();
  renderSkills();
  renderProjects();
  renderEducation();
  renderAchievements();
  renderInterests();
  initProjectModal();
  initResumeModal();
  initContactForm();
  initScrollReveal();
  initBackToTop();

  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

/**
 * Toast Notification Utility
 */
function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  
  let iconName = 'info';
  let iconColor = 'text-sky-400';
  if (type === 'success') {
    iconName = 'check-circle';
    iconColor = 'text-emerald-400';
  } else if (type === 'warning') {
    iconName = 'alert-triangle';
    iconColor = 'text-amber-400';
  }

  toast.innerHTML = `
    <i data-lucide="${iconName}" class="w-5 h-5 ${iconColor} flex-shrink-0"></i>
    <span class="text-sm font-medium text-slate-200">${message}</span>
  `;

  container.appendChild(toast);
  if (window.lucide) window.lucide.createIcons({ root: toast });

  setTimeout(() => {
    toast.classList.add('fade-out');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 4000);
}

/**
 * Navbar & Mobile Menu Setup
 */
function initNavbar() {
  const nav = document.getElementById('main-nav');
  const mobileToggle = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Scroll glass blur effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.classList.add('shadow-lg', 'shadow-black/40', 'border-sky-500/20');
      nav.classList.remove('border-transparent');
    } else {
      nav.classList.remove('shadow-lg', 'shadow-black/40', 'border-sky-500/20');
      nav.classList.add('border-transparent');
    }

    // Active link highlighting
    let currentSection = '';
    const scrollPos = window.scrollY + 180;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSection = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-sky-400', 'font-semibold');
      link.classList.add('text-slate-300');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('text-sky-400', 'font-semibold');
        link.classList.remove('text-slate-300');
      }
    });
  });

  // Mobile menu toggle
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = !mobileMenu.classList.contains('hidden');
      if (isOpen) {
        mobileMenu.classList.add('hidden');
        mobileToggle.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
      } else {
        mobileMenu.classList.remove('hidden');
        mobileToggle.innerHTML = '<i data-lucide="x" class="w-6 h-6"></i>';
      }
      if (window.lucide) window.lucide.createIcons();
    });

    // Close mobile menu on clicking any link
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileToggle.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
        if (window.lucide) window.lucide.createIcons();
      });
    });
  }
}

/**
 * Render Skills Cards with Interactive Category Filters
 */
function renderSkills() {
  const container = document.getElementById('skills-grid');
  const filterBtns = document.querySelectorAll('.skill-filter-btn');
  if (!container) return;

  const skills = window.PORTFOLIO_DATA.skills;

  function displaySkills(category = 'all') {
    const filtered = category === 'all' 
      ? skills 
      : skills.filter(s => s.category === category);

    container.innerHTML = filtered.map(skill => `
      <div class="glass-panel rounded-2xl p-6 relative group overflow-hidden border border-slate-800/80 hover:border-sky-500/40 card-hover-effect">
        <!-- Ambient corner highlight -->
        <div class="absolute top-0 right-0 w-24 h-24 bg-sky-500/5 rounded-bl-full pointer-events-none group-hover:bg-sky-500/10 transition-all duration-300"></div>
        
        <div class="flex items-start justify-between mb-4">
          <div class="w-12 h-12 rounded-xl bg-slate-800/90 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:text-sky-300 group-hover:border-sky-400/50 group-hover:scale-105 transition-all duration-300 shadow-inner">
            <i data-lucide="${skill.icon}" class="w-6 h-6"></i>
          </div>
          <span class="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-sky-950/80 text-sky-300 border border-sky-500/20">
            ${skill.proficiency}%
          </span>
        </div>

        <h3 class="font-heading text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
          ${skill.name}
        </h3>

        <p class="text-sm text-slate-400 mb-5 leading-relaxed line-clamp-3">
          ${skill.description}
        </p>

        <!-- Proficiency Progress Bar -->
        <div class="w-full bg-slate-800/80 rounded-full h-2 mb-4 overflow-hidden p-0.5 border border-slate-700/50">
          <div class="progress-bar-fill bg-gradient-to-r from-sky-500 to-cyan-400 h-full rounded-full" style="width: ${skill.proficiency}%;"></div>
        </div>

        <!-- Tags -->
        <div class="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/60">
          ${skill.tags.map(t => `<span class="text-xs px-2 py-0.5 rounded bg-slate-900/80 text-slate-300 border border-slate-800">${t}</span>`).join('')}
        </div>
      </div>
    `).join('');

    if (window.lucide) window.lucide.createIcons({ root: container });
  }

  // Filter click handlers
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-sky-500', 'text-slate-950', 'font-semibold', 'shadow-lg', 'shadow-sky-500/25');
        b.classList.add('bg-slate-800/60', 'text-slate-300');
      });
      btn.classList.add('bg-sky-500', 'text-slate-950', 'font-semibold', 'shadow-lg', 'shadow-sky-500/25');
      btn.classList.remove('bg-slate-800/60', 'text-slate-300');
      displaySkills(btn.dataset.category);
    });
  });

  displaySkills('all');
}

/**
 * Render Projects Section
 */
function renderProjects() {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  const projects = window.PORTFOLIO_DATA.projects;

  container.innerHTML = projects.map(proj => `
    <div class="glass-panel rounded-2xl overflow-hidden border border-slate-800/80 hover:border-sky-500/40 flex flex-col group card-hover-effect">
      <!-- Project Media -->
      <div class="relative h-56 overflow-hidden bg-slate-950">
        <img 
          src="${proj.image}" 
          alt="${proj.title}" 
          class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
        
        <!-- Category Pill -->
        <div class="absolute top-4 left-4">
          <span class="px-3 py-1 rounded-full text-xs font-medium bg-slate-900/90 text-sky-300 border border-sky-500/30 backdrop-blur-md shadow-sm">
            ${proj.category}
          </span>
        </div>

        <div class="absolute bottom-3 right-4 font-mono text-xs text-slate-400 bg-slate-950/80 px-2.5 py-0.5 rounded border border-slate-800">
          ${proj.year}
        </div>
      </div>

      <!-- Content -->
      <div class="p-6 flex-1 flex flex-col justify-between">
        <div>
          <!-- Role -->
          <div class="flex items-center gap-1.5 text-xs text-cyan-400 font-mono mb-2">
            <i data-lucide="user-check" class="w-3.5 h-3.5"></i>
            <span>${proj.role}</span>
          </div>

          <h3 class="font-heading text-xl font-bold text-white mb-2.5 group-hover:text-sky-300 transition-colors">
            ${proj.title}
          </h3>

          <p class="text-sm text-slate-400 leading-relaxed mb-4">
            ${proj.shortDescription}
          </p>

          <!-- Tech stack tags -->
          <div class="flex flex-wrap gap-1.5 mb-6">
            ${proj.technologies.map(tech => `
              <span class="text-xs px-2.5 py-1 rounded-md bg-slate-800/70 text-slate-300 border border-slate-700/60 font-mono">
                ${tech}
              </span>
            `).join('')}
          </div>
        </div>

        <!-- Action Button -->
        <button 
          data-project-id="${proj.id}" 
          class="open-project-btn w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-sky-500 hover:text-slate-950 text-slate-200 text-sm font-semibold border border-slate-700 hover:border-sky-400 transition-all duration-300 group/btn"
        >
          <span>View Project Details</span>
          <i data-lucide="arrow-right" class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"></i>
        </button>
      </div>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons({ root: container });
}

/**
 * Render Education Timeline
 */
function renderEducation() {
  const container = document.getElementById('education-timeline');
  if (!container) return;

  const education = window.PORTFOLIO_DATA.education;

  container.innerHTML = education.map((edu, idx) => `
    <div class="relative pl-8 md:pl-10 pb-10 last:pb-0 group">
      <!-- Connecting Line -->
      <div class="absolute left-2.5 md:left-3 top-3 bottom-0 w-0.5 bg-gradient-to-b from-sky-500 to-slate-800 group-last:hidden"></div>
      
      <!-- Node Dot -->
      <div class="absolute left-0 md:left-0.5 top-1.5 w-5 h-5 rounded-full bg-slate-900 border-2 border-sky-400 flex items-center justify-center shadow-lg shadow-sky-500/20 group-hover:scale-125 group-hover:bg-sky-500 transition-all duration-300">
        <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
      </div>

      <!-- Content Box -->
      <div class="glass-panel rounded-2xl p-6 border border-slate-800/80 hover:border-sky-500/40 card-hover-effect">
        <div class="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <span class="inline-block px-2.5 py-0.5 text-xs font-mono font-medium rounded bg-sky-950/80 text-sky-300 border border-sky-500/20 mb-1.5">
              ${edu.duration}
            </span>
            <h3 class="font-heading text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
              ${edu.degree}
            </h3>
            <p class="text-sm font-medium text-slate-300 flex items-center gap-1.5 mt-1">
              <i data-lucide="graduation-cap" class="w-4 h-4 text-cyan-400"></i>
              <span>${edu.institution}</span>
              <span class="text-slate-500">•</span>
              <span class="text-slate-400">${edu.location}</span>
            </p>
          </div>

          <div class="flex flex-col items-end">
            <span class="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">
              ${edu.status}
            </span>
            <span class="text-xs font-mono text-amber-300 mt-1.5 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-500/20">
              ${edu.score}
            </span>
          </div>
        </div>

        <ul class="mt-4 space-y-2 text-sm text-slate-400">
          ${edu.highlights.map(h => `
            <li class="flex items-start gap-2.5">
              <i data-lucide="check" class="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5"></i>
              <span>${h}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons({ root: container });
}

/**
 * Render Achievements Section
 */
function renderAchievements() {
  const container = document.getElementById('achievements-grid');
  if (!container) return;

  const achievements = window.PORTFOLIO_DATA.achievements;

  container.innerHTML = achievements.map(ach => `
    <div class="glass-panel rounded-2xl p-6 border border-slate-800/80 hover:border-sky-500/40 flex flex-col justify-between card-hover-effect group">
      <div>
        <div class="flex items-start justify-between mb-4">
          <div class="w-12 h-12 rounded-xl bg-slate-900 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:text-sky-300 group-hover:scale-105 transition-all shadow-inner">
            <i data-lucide="${ach.icon}" class="w-6 h-6"></i>
          </div>
          <span class="font-mono text-xs px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-800">
            ${ach.category}
          </span>
        </div>

        <h3 class="font-heading text-lg font-bold text-white mb-1 group-hover:text-sky-300 transition-colors">
          ${ach.title}
        </h3>

        <p class="text-xs font-mono text-cyan-400 mb-3 flex items-center gap-1.5">
          <span>${ach.organization}</span>
          <span class="text-slate-600">|</span>
          <span class="text-slate-400">${ach.date}</span>
        </p>

        <p class="text-sm text-slate-400 leading-relaxed">
          ${ach.description}
        </p>
      </div>

      <div class="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
        <span class="flex items-center gap-1 text-sky-400">
          <i data-lucide="check-circle-2" class="w-3.5 h-3.5"></i>
          Verified Credential / Activity
        </span>
      </div>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons({ root: container });
}

/**
 * Render Career Interests Section
 */
function renderInterests() {
  const container = document.getElementById('interests-grid');
  if (!container) return;

  const interests = window.PORTFOLIO_DATA.interests;

  container.innerHTML = interests.map(item => `
    <div class="glass-panel rounded-2xl p-6 border border-slate-800/80 hover:border-cyan-500/40 card-hover-effect group relative overflow-hidden">
      <!-- Glow accent -->
      <div class="absolute -right-6 -bottom-6 w-20 h-20 bg-cyan-500/5 rounded-full filter blur-xl group-hover:bg-cyan-500/15 transition-all"></div>
      
      <div class="w-12 h-12 rounded-xl bg-slate-900 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 group-hover:scale-105 transition-all mb-4">
        <i data-lucide="${item.icon}" class="w-6 h-6"></i>
      </div>

      <h3 class="font-heading text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
        ${item.title}
      </h3>

      <p class="text-sm text-slate-400 leading-relaxed">
        ${item.description}
      </p>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons({ root: container });
}

/**
 * Project Details Modal
 */
function initProjectModal() {
  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('project-modal-content');
  const closeBtn = document.getElementById('close-project-modal');
  if (!modal) return;

  document.addEventListener('click', e => {
    const btn = e.target.closest('.open-project-btn');
    if (!btn) return;

    const projectId = btn.dataset.projectId;
    const project = window.PORTFOLIO_DATA.projects.find(p => p.id === projectId);
    if (!project) return;

    modalContent.innerHTML = `
      <div class="relative">
        <!-- Header Banner Image -->
        <div class="relative h-64 md:h-80 w-full overflow-hidden rounded-t-2xl bg-slate-950">
          <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
          
          <div class="absolute bottom-6 left-6 right-6">
            <span class="inline-block px-3 py-1 text-xs font-mono font-medium rounded-full bg-sky-500/90 text-slate-950 mb-2">
              ${project.category} • ${project.year}
            </span>
            <h2 class="font-heading text-2xl md:text-3xl font-extrabold text-white">
              ${project.title}
            </h2>
            <p class="text-sm text-cyan-300 font-mono mt-1">Role: ${project.role}</p>
          </div>
        </div>

        <!-- Body Content -->
        <div class="p-6 md:p-8 space-y-6">
          <!-- Objective -->
          <div>
            <h4 class="text-xs uppercase font-mono tracking-wider text-sky-400 font-semibold mb-2">Project Objective</h4>
            <p class="text-slate-300 text-sm md:text-base leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              ${project.details.objective}
            </p>
          </div>

          <!-- Key Engineering Deliverables -->
          <div>
            <h4 class="text-xs uppercase font-mono tracking-wider text-sky-400 font-semibold mb-3">Key Deliverables & Analysis</h4>
            <ul class="space-y-2.5">
              ${project.details.keyFeatures.map(f => `
                <li class="flex items-start gap-3 text-sm text-slate-300">
                  <div class="w-5 h-5 rounded-md bg-sky-500/20 text-sky-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i data-lucide="check" class="w-3.5 h-3.5"></i>
                  </div>
                  <span>${f}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <!-- Tools & Outcome Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
              <span class="text-xs font-mono text-slate-400 block mb-1">Software & Engineering Tools</span>
              <p class="text-sm font-medium text-white">${project.details.toolsUsed}</p>
            </div>
            <div class="bg-slate-900/80 p-4 rounded-xl border border-sky-500/30">
              <span class="text-xs font-mono text-emerald-400 block mb-1">Measured Result / Safety Margin</span>
              <p class="text-sm font-medium text-emerald-200">${project.details.outcome}</p>
            </div>
          </div>

          <!-- Technologies Badges -->
          <div class="pt-4 border-t border-slate-800">
            <span class="text-xs font-mono text-slate-400 block mb-2">Applied Engineering Competencies:</span>
            <div class="flex flex-wrap gap-2">
              ${project.technologies.map(t => `<span class="px-3 py-1 rounded bg-slate-800 text-xs font-mono text-sky-300 border border-slate-700">${t}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>
    `;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';

    if (window.lucide) window.lucide.createIcons({ root: modalContent });
  });

  function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}

/**
 * Resume Preview Modal & PDF Download Handler
 */
function initResumeModal() {
  const resumeModal = document.getElementById('resume-preview-modal');
  const openResumeBtn = document.getElementById('preview-resume-btn');
  const closeResumeBtn = document.getElementById('close-resume-modal');
  const downloadResumeBtns = document.querySelectorAll('.download-resume-trigger');

  if (openResumeBtn && resumeModal) {
    openResumeBtn.addEventListener('click', () => {
      resumeModal.classList.remove('hidden');
      resumeModal.classList.add('flex');
      document.body.style.overflow = 'hidden';
      if (window.lucide) window.lucide.createIcons({ root: resumeModal });
    });
  }

  function closeResume() {
    if (resumeModal) {
      resumeModal.classList.add('hidden');
      resumeModal.classList.remove('flex');
      document.body.style.overflow = '';
    }
  }

  if (closeResumeBtn) closeResumeBtn.addEventListener('click', closeResume);

  if (resumeModal) {
    resumeModal.addEventListener('click', e => {
      if (e.target === resumeModal) closeResume();
    });
  }

  downloadResumeBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const resumePath = window.PORTFOLIO_DATA.personal.resumePath;
      showToast("Downloading Resume... (Add your custom PDF to assets/resume/ to update)", "success");
      
      // Attempt download of local file or trigger simulated download
      const link = document.createElement('a');
      link.href = resumePath;
      link.download = "Piyush_Pareek_Mechanical_Engineering_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  });
}

/**
 * Contact Form & Copy Email Logic
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const copyEmailBtn = document.getElementById('copy-email-btn');

  // Copy email to clipboard
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = window.PORTFOLIO_DATA.personal.email;
      navigator.clipboard.writeText(email).then(() => {
        showToast(`Email copied: ${email}`, 'success');
      }).catch(() => {
        showToast(email, 'info');
      });
    });
  }

  // Contact form submission
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const subjectInput = document.getElementById('contact-subject');
      const messageInput = document.getElementById('contact-message');
      const submitBtn = document.getElementById('contact-submit-btn');

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const subject = subjectInput ? subjectInput.value.trim() : 'Portfolio Inquiry';
      const message = messageInput.value.trim();

      if (!name || !email || !message) {
        showToast("Please fill in all required fields.", "warning");
        return;
      }

      // Check simple email regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showToast("Please provide a valid email address.", "warning");
        return;
      }

      // Animate button
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-slate-950 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span>Sending Message...</span>
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        form.reset();

        showToast(`Thank you, ${name}! Your message has been sent to Piyush Pareek.`, "success");
        if (window.lucide) window.lucide.createIcons({ root: submitBtn });
      }, 1100);
    });
  }
}

/**
 * Scroll Reveal Animations
 */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal-on-scroll');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

/**
 * Floating Back-to-Top Button
 */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 450) {
      backToTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
      backToTopBtn.classList.add('opacity-100', 'translate-y-0');
    } else {
      backToTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
      backToTopBtn.classList.remove('opacity-100', 'translate-y-0');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
