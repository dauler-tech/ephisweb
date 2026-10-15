/* ==========================================================================
   EPHIS LATAM - INTERACTIVE APPLICATION SCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. Track Selector Data & Logic (Programa Único e Integral) ---
  const trackData = {
    ejecutivo: {
      title: "Orientación Ejecutiva",
      description: "Integrado en el programa único de 9 meses, te capacita para acompañar a CEOs, directores y gerentes a potenciar su liderazgo estratégico, optimizar la toma de decisiones bajo alta presión y alinear sus metas personales con los resultados de la organización.",
      list: [
        "Mentoring en liderazgo situacional y toma de decisiones sistémica.",
        "Gestión de brechas de desempeño en puestos de alta dirección.",
        "Herramientas de evaluación 360° y ontología del lenguaje corporativo."
      ],
      icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
      visualTitle: "Liderazgo & Dirección",
      visualSub: "Competencia integrada dentro del plan de estudios único del programa."
    },
    organizacional: {
      title: "Orientación Organizacional",
      description: "Integrado en el programa único de 9 meses, desarrollas las competencias para intervenir en la cultura, clima y estructura de las empresas, impulsando la innovación, la resiliencia sistémica y el alineamiento estratégico.",
      list: [
        "Diagnóstico de modelos de observador organizacional.",
        "Facilitación de cultura de alto desempeño e innovación.",
        "Acompañamiento en procesos de fusión, reestructuración y crecimiento."
      ],
      icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>`,
      visualTitle: "Transformación Cultural",
      visualSub: "Herramientas de intervención sistémica incluidas en la formación."
    },
    speaker: {
      title: "Speaker Vivencial",
      description: "Integrado en el nivel avanzado de la certificación, desarrollas habilidades de oratoria de alto impacto y facilitación vivencial para diseñar y liderar conferencias, talleres y seminarios memorables.",
      list: [
        "Diseño de experiencias de aprendizaje vivencial e interactivo.",
        "Presencia escénica, manejo de voz y conexión emocional con el público.",
        "Estructuración de conferencias magistrales con sello propio."
      ],
      icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 8-9.04 9.06a1.5 1.5 0 0 0 2.12 2.12L14 10.12"/><path d="M15.7 6.3a3 3 0 0 0-4.2 4.2l3.5 3.5a3 3 0 0 0 4.2-4.2l-3.5-3.5z"/><path d="m18 3 3 3"/></svg>`,
      visualTitle: "Escena & Oratoria",
      visualSub: "Doble perfil profesional como Coach y Speaker incorporado en el programa."
    },
    equipos: {
      title: "Inteligencia Sistémica",
      description: "Integrado en el programa único de 9 meses, adquieres las herramientas para facilitar la cohesión, alineamiento y sinergia en equipos de trabajo, transformando grupos en células autónomas de alto rendimiento.",
      list: [
        "Resolución de conflictos sistémicos e interpersonales en equipos.",
        "Establecimiento de acuerdos transparentes y compromisos mutuos.",
        "Optimización de la comunicación y confianza colectiva."
      ],
      icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      visualTitle: "Inteligencia Sistémica",
      visualSub: "Capacidad de facilitación colectiva desarrollada dentro de la formación."
    },
    rrhh: {
      title: "Gestión del Talento",
      description: "Integrado en el programa único de 9 meses, el enfoque te brinda los conocimientos para integrar el coaching ontológico a las políticas de desarrollo, retención, liderazgo interno y bienestar organizacional.",
      list: [
        "Estrategias de desarrollo de talento y planes de carrera.",
        "Gestión del bienestar, inteligencia emocional y prevención del burnout.",
        "Diseño de programas internos de coaching para colaboradores."
      ],
      icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 20h10"/><path d="M12 20v-8"/><path d="M12 12c-2.5 0-5-2-5-5a5 5 0 0 1 10 0c0 3-2.5 5-5 5z"/></svg>`,
      visualTitle: "Talento & Bienestar",
      visualSub: "Alineación estratégica para profesionales de Gestión Humana y People."
    },
    personal: {
      title: "Orientación Personal (Life)",
      description: "Integrado en el programa único de 9 meses, te capacita para guiar a individuos en su desarrollo personal, propósito de vida, equilibrio emocional y superación de obstáculos intrapersonales hacia su máximo bienestar.",
      list: [
        "Acompañamiento en definición de metas de vida y visión personal.",
        "Gestión de estados de ánimo, emociones y conversaciones internas.",
        "Diseño de hábitos posibilitantes y toma de responsabilidad."
      ],
      icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.28 1.28L3 12l5.8 1.9a2 2 0 0 1 1.28 1.28L12 21l1.9-5.8a2 2 0 0 1 1.28-1.28L21 12l-5.8-1.9a2 2 0 0 1-1.28-1.28L12 3z"/></svg>`,
      visualTitle: "Evolución Personal",
      visualSub: "Bases ontológicas e intrapersonales fundamentales del programa."
    }
  };

  const trackTabs = document.querySelectorAll('.track-tab');
  const trackTitle = document.getElementById('trackTitle');
  const trackDescription = document.getElementById('trackDescription');
  const trackList = document.getElementById('trackList');
  const trackIcon = document.getElementById('trackIcon');
  const trackVisualTitle = document.getElementById('trackVisualTitle');
  const trackVisualSub = document.getElementById('trackVisualSub');
  const trackInterestSelect = document.getElementById('trackInterest');

  if (trackTabs.length > 0) {
    trackTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        trackTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const key = tab.getAttribute('data-track');
        const data = trackData[key];
        if (data) {
          trackTitle.textContent = data.title;
          trackDescription.textContent = data.description;
          trackIcon.innerHTML = data.icon;
          trackVisualTitle.textContent = data.visualTitle;
          trackVisualSub.textContent = data.visualSub;

          trackList.innerHTML = '';
          data.list.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            trackList.appendChild(li);
          });

          if (trackInterestSelect) {
            trackInterestSelect.value = key;
          }
        }
      });
    });
  }

  // --- 2. Syllabus & FAQ Accordion Logic ---
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isActive = item.classList.contains('active');

      const group = item.parentElement;
      group.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // --- 3. Testimonials Filter Logic ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const testimonialCards = document.querySelectorAll('.testimonial-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const country = btn.getAttribute('data-country');
      testimonialCards.forEach(card => {
        if (country === 'all' || card.getAttribute('data-country') === country) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --- 4. Investment Calculator Logic ---
  const calcBtns = document.querySelectorAll('.calc-opt-btn');
  const calcPriceDisplay = document.getElementById('calcPriceDisplay');
  const calcDetailDisplay = document.getElementById('calcDetailDisplay');

  const planData = {
    contado: {
      price: "$2,125 USD",
      detail: "Pago único total con 15% de bonificación por inscripción anticipada completa."
    },
    trimestral: {
      price: "$750 USD / trimestre",
      detail: "3 pagos trimestrales abonados la semana anterior al inicio de cada módulo."
    },
    mensual: {
      price: "$250 USD / mes",
      detail: "9 cuotas mensuales abonadas del 1 al 10 de cada mes sin intereses adicionales."
    }
  };

  calcBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      calcBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const planKey = btn.getAttribute('data-plan');
      const data = planData[planKey];
      if (data && calcPriceDisplay && calcDetailDisplay) {
        calcPriceDisplay.textContent = data.price;
        calcDetailDisplay.textContent = data.detail;
      }
    });
  });

  // --- 5. Modal Lead Logic ---
  const leadModal = document.getElementById('leadModal');
  const modalClose = document.getElementById('modalClose');
  const modalTitle = document.getElementById('modalTitle');
  const modalSubtitle = document.getElementById('modalSubtitle');
  const leadForm = document.getElementById('leadForm');

  window.openBrochureModal = function(source = 'General') {
    if (leadModal) {
      modalTitle.textContent = `Solicitar Admisión & Brochure (${source})`;
      modalSubtitle.textContent = `Recibe la malla curricular completa y agenda tu entrevista para el programa integral 2026.`;
      leadModal.classList.add('active');
    }
  };

  const btnHeroPostular = document.getElementById('btnHeroPostular');
  const btnTrackEnroll = document.getElementById('btnTrackEnroll');
  const btnCtaFinal = document.getElementById('btnCtaFinal');

  if (btnHeroPostular) btnHeroPostular.addEventListener('click', () => openBrochureModal('Programa Integral'));
  if (btnTrackEnroll) btnTrackEnroll.addEventListener('click', () => openBrochureModal('Programa Integral'));
  if (btnCtaFinal) btnCtaFinal.addEventListener('click', () => openBrochureModal('Cta Final'));

  if (modalClose && leadModal) {
    modalClose.addEventListener('click', () => {
      leadModal.classList.remove('active');
    });

    leadModal.addEventListener('click', (e) => {
      if (e.target === leadModal) {
        leadModal.classList.remove('active');
      }
    });
  }

  // --- 6. Form Submission Simulation (SVG Success Icon) ---
  if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nombre = document.getElementById('nombre').value;
      const email = document.getElementById('email').value;

      leadForm.innerHTML = `
        <div style="text-align: center; padding: 2rem 1rem;">
          <div style="margin-bottom: 1.25rem;">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          </div>
          <h4 style="font-size: 1.5rem; color: var(--accent-gold-light); margin-bottom: 0.5rem;">¡Solicitud Recibida con Éxito!</h4>
          <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 1.5rem;">
            Gracias <strong>${nombre}</strong>. Hemos enviado el Brochure Oficial de EPHIS a <strong>${email}</strong> y un asesor de admisiones te contactará vía WhatsApp a la brevedad para coordinar tu entrevista.
          </p>
          <a href="assets/brochures/EPHIS-Brochure-Certificacion-9M.pdf" target="_blank" rel="noopener" class="btn btn-gold">
            Descargar PDF Directamente
          </a>
        </div>
      `;
    });
  }

});
