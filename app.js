/* ==========================================================================
   EPHIS LATAM - INTERACTIVE APPLICATION SCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. Track Selector Data & Logic ---
  const trackData = {
    ejecutivo: {
      title: "Orientación Ejecutiva",
      description: "El programa te capacita para acompañar a CEOs, directores y gerentes a potenciar su liderazgo estratégico, optimizar la toma de decisiones bajo alta presión y alinear sus metas personales con los resultados de la organización.",
      list: [
        "Mentoring en liderazgo situacional y toma de decisiones sistémica.",
        "Gestión de brechas de desempeño en puestos de alta dirección.",
        "Herramientas de evaluación 360° y ontología del lenguaje corporativo."
      ],
      icon: "👔",
      visualTitle: "Liderazgo & Dirección",
      visualSub: "Competencias ejecutivas integradas en el plan de estudios único de la certificación."
    },
    organizacional: {
      title: "Orientación Organizacional",
      description: "Desarrollas las competencias para intervenir en la cultura, clima y estructura de las empresas, impulsando la innovación, la resiliencia sistémica y el alineamiento estratégico.",
      list: [
        "Diagnóstico de modelos de observador organizacional.",
        "Facilitación de cultura de alto desempeño e innovación.",
        "Acompañamiento en procesos de fusión, reestructuración y crecimiento."
      ],
      icon: "🏢",
      visualTitle: "Transformación Cultural",
      visualSub: "Herramientas de intervención sistémica para empresas e instituciones."
    },
    speaker: {
      title: "Speaker Vivencial",
      description: "Integrado en el nivel avanzado, desarrollas habilidades de oratoria de alto impacto y facilitación vivencial para diseñar y liderar conferencias, talleres y seminarios memorables.",
      list: [
        "Diseño de experiencias de aprendizaje vivencial e interactivo.",
        "Presencia escénica, manejo de voz y conexión emocional con el público.",
        "Estructuración de conferencias magistrales con sello propio."
      ],
      icon: "🎤",
      visualTitle: "Escena & Oratoria",
      visualSub: "Doble perfil profesional como Coach y Speaker incorporado en el programa."
    },
    equipos: {
      title: "Coaching de Equipos",
      description: "Adquieres las herramientas para facilitar la cohesión, alineamiento y sinergia en equipos de trabajo, transformando grupos de individuos en células autónomas de alto rendimiento.",
      list: [
        "Resolución de conflictos sistémicos e interpersonales en equipos.",
        "Establecimiento de acuerdos transparentes y compromisos mutuos.",
        "Optimización de la comunicación y confianza colectiva."
      ],
      icon: "👥",
      visualTitle: "Sinergia & Performance",
      visualSub: "Capacidad de facilitación colectiva desarrollada dentro de la formación."
    },
    rrhh: {
      title: "Gestión del Talento",
      description: "El enfoque te brinda los conocimientos para integrar el coaching ontológico a las políticas de desarrollo, retención, liderazgo interno y bienestar organizacional.",
      list: [
        "Estrategias de desarrollo de talento y planes de carrera.",
        "Gestión del bienestar, inteligencia emocional y prevención del burnout.",
        "Diseño de programas internos de coaching para colaboradores."
      ],
      icon: "🌱",
      visualTitle: "Talento & Bienestar",
      visualSub: "Alineación estratégica para profesionales de Gestión Humana y People."
    },
    personal: {
      title: "Orientación Personal (Life)",
      description: "Te capacita para guiar a individuos en su desarrollo personal, propósito de vida, equilibrio emocional y superación de obstáculos intrapersonales hacia su máximo bienestar.",
      list: [
        "Acompañamiento en definición de metas de vida y visión personal.",
        "Gestión de estados de ánimo, emociones y conversaciones internas.",
        "Diseño de hábitos posibilitantes y toma de responsabilidad."
      ],
      icon: "✨",
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
          trackIcon.textContent = data.icon;
          trackVisualTitle.textContent = data.visualTitle;
          trackVisualSub.textContent = data.visualSub;

          trackList.innerHTML = '';
          data.list.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            trackList.appendChild(li);
          });

          if (trackInterestSelect) {
            trackInterestSelect.value = (key === 'equipos') ? 'organizacional' : key;
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

      // Close all accordions in same group if desired, or toggle
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
      modalSubtitle.textContent = `Recibe la malla curricular completa y agenda tu entrevista para la cohorte 2026.`;
      leadModal.classList.add('active');
    }
  };

  const btnHeroPostular = document.getElementById('btnHeroPostular');
  const btnTrackEnroll = document.getElementById('btnTrackEnroll');
  const btnCtaFinal = document.getElementById('btnCtaFinal');
  const btnBrochureNav = document.getElementById('btnBrochureNav');
  const btnPostularNav = document.getElementById('btnPostularNav');

  if (btnHeroPostular) btnHeroPostular.addEventListener('click', () => openBrochureModal('Hero'));
  if (btnTrackEnroll) btnTrackEnroll.addEventListener('click', () => openBrochureModal('Track'));
  if (btnCtaFinal) btnCtaFinal.addEventListener('click', () => openBrochureModal('Cta Final'));
  if (btnBrochureNav) btnBrochureNav.addEventListener('click', () => openBrochureModal('Header Brochure'));

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

  // --- 6. Form Submission Simulation ---
  if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nombre = document.getElementById('nombre').value;
      const email = document.getElementById('email').value;

      leadForm.innerHTML = `
        <div style="text-align: center; padding: 2rem 1rem;">
          <div style="font-size: 3rem; margin-bottom: 1rem;">🎉</div>
          <h4 style="font-size: 1.5rem; color: var(--accent-gold-light); margin-bottom: 0.5rem;">¡Solicitud Recibida con Éxito!</h4>
          <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 1.5rem;">
            Gracias <strong>${nombre}</strong>. Hemos enviado el Brochure Oficial de EPHIS a <strong>${email}</strong> y un asesor de admisiones te contactará vía WhatsApp a la brevedad.
          </p>
          <a href="https://www.ephislatam.com/site/wp-content/uploads/2025/07/EPHIS_20-Brochure_Programa.pdf" target="_blank" rel="noopener" class="btn btn-gold">
            Descargar PDF Directamente
          </a>
        </div>
      `;
    });
  }

});
