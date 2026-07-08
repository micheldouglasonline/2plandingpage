// Dictionary mapping page numbers to technical details and categories
const catalogData = {
    1: {
        category: "institutional",
        categoryName: "Capa do Catálogo",
        title: "Capa do Catálogo Oficial Heli 2026",
        desc: "Apresentação oficial da linha de empilhadeiras e equipamentos de movimentação Heli para o ano de 2026. Tecnologia de ponta, sustentabilidade e alta eficiência."
    },
    2: {
        category: "institutional",
        categoryName: "Apresentação Heli",
        title: "Introdução Heli & 2P",
        desc: "Apresentação institucional da parceria entre a fabricante global Heli e a revendedora autorizada 2P Empilhadeiras, destacando a infraestrutura de suporte e peças."
    },
    3: {
        category: "electric",
        categoryName: "Empilhadeira Elétrica / Lítio",
        title: "Série Lítio CPD15",
        desc: "Empilhadeira elétrica contrabalançada com capacidade de 1.5 toneladas (1500 kg). Equipada com bateria de Lítio (Li-FePO4) de carga rápida (100% em 2 horas). Perfeita para operações internas que exigem zero emissões e baixo ruído."
    },
    4: {
        category: "electric",
        categoryName: "Empilhadeira Elétrica / Lítio",
        title: "Série Lítio CPD20",
        desc: "Empilhadeira elétrica contrabalançada com capacidade de 2.0 toneladas (2000 kg). Excelente ergonomia, estabilidade aprimorada e torre de alta visibilidade. Bateria de lítio livre de manutenção e com carga de oportunidade."
    },
    5: {
        category: "electric",
        categoryName: "Empilhadeira Elétrica / Lítio",
        title: "Série Lítio CPD25",
        desc: "Empilhadeira elétrica contrabalançada com capacidade de 2.5 toneladas (2500 kg). Projetada para ciclos de trabalho intensos, oferecendo durabilidade extrema e economia de até 70% nos custos operacionais em relação aos modelos a combustão."
    },
    6: {
        category: "electric",
        categoryName: "Empilhadeira Elétrica / Lítio",
        title: "Série Lítio CPD30",
        desc: "Empilhadeira elétrica contrabalançada com capacidade de 3.0 toneladas (3000 kg). Alta potência de tração e elevação, equiparável a modelos a combustão, mas com as vantagens da motorização elétrica de corrente alternada (AC)."
    },
    7: {
        category: "electric",
        categoryName: "Empilhadeira Elétrica / Lítio",
        title: "Série Lítio CPD35",
        desc: "Empilhadeira elétrica contrabalançada com capacidade de 3.5 toneladas (3500 kg). Modelo de alta capacidade equipado com sistemas eletrônicos inteligentes de controle de curvas e frenagem regenerativa."
    },
    8: {
        category: "electric",
        categoryName: "Empilhadeira Elétrica / Lítio",
        title: "Série Elétrica CPD15-AC3",
        desc: "Empilhadeira elétrica compacta com bateria tracionária de chumbo-ácido de 48V. Capacidade de 1.5 toneladas, ideal para manobras em corredores estreitos e armazenagem em porta-paletes."
    },
    9: {
        category: "electric",
        categoryName: "Empilhadeira Elétrica / Lítio",
        title: "Série Elétrica CPD20-GB2",
        desc: "Empilhadeira elétrica tracionária com capacidade de 2.0 toneladas. Design ergonômico com amplo espaço para o operador e painel digital multifuncional com autodiagnóstico."
    },
    10: {
        category: "electric",
        categoryName: "Empilhadeira Elétrica / Lítio",
        title: "Série Elétrica CPD25-GB2",
        desc: "Empilhadeira elétrica tracionária com capacidade de 2.5 toneladas. Conta com sistema de extração lateral de bateria que facilita a troca de turnos em operações 24/7."
    },
    11: {
        category: "combustion",
        categoryName: "Empilhadeira a Combustão (Diesel/GLP)",
        title: "Série Combustão CPCD25",
        desc: "Empilhadeira a combustão equipada com motor Diesel de alto torque e baixo consumo. Capacidade de 2.5 toneladas (2500 kg). Ideal para pátios externos, terrenos irregulares e portos."
    },
    12: {
        category: "combustion",
        categoryName: "Empilhadeira a Combustão (Diesel/GLP)",
        title: "Série Combustão CPCD30",
        desc: "Empilhadeira a combustão Diesel com capacidade de 3.0 toneladas (3000 kg). Sistema de transmissão flutuante Heli que reduz sensivelmente as vibrações transferidas ao operador."
    },
    13: {
        category: "combustion",
        categoryName: "Empilhadeira a Combustão (Diesel/GLP)",
        title: "Série Combustão CPCD35",
        desc: "Empilhadeira a combustão Diesel com capacidade de 3.5 toneladas (3500 kg). Filtro de ar duplo e escapamento elevado, projetada para suportar ambientes com muita poeira e detritos."
    },
    14: {
        category: "combustion",
        categoryName: "Empilhadeira a Combustão (Diesel/GLP)",
        title: "Série Combustão CPQD20",
        desc: "Empilhadeira a combustão equipada com motor GLP/Gasolina de baixas emissões. Capacidade de 2.0 toneladas (2000 kg). Versátil para trabalhar em ambientes internos ventilados e áreas externas."
    },
    15: {
        category: "combustion",
        categoryName: "Empilhadeira a Combustão (Diesel/GLP)",
        title: "Série Combustão CPQD25",
        desc: "Empilhadeira a combustão GLP com capacidade de 2.5 toneladas (2500 kg). Transmissão automática suave, direção hidrostática e excelente visibilidade das pontas dos garfos."
    },
    16: {
        category: "combustion",
        categoryName: "Empilhadeira a Combustão (Diesel/GLP)",
        title: "Série Combustão CPQD30",
        desc: "Empilhadeira a combustão GLP com capacidade de 3.0 toneladas (3000 kg). Motor robusto de alto desempenho e cabine com suspensão que previne fadiga do operador."
    },
    17: {
        category: "combustion",
        categoryName: "Empilhadeira a Combustão (Diesel/GLP)",
        title: "Série Combustão CPQD35",
        desc: "Empilhadeira a combustão GLP com capacidade de 3.5 toneladas (3500 kg). Ideal para descarregamento rápido de carretas e movimentação de cargas pesadas em pátios logísticos."
    },
    18: {
        category: "combustion",
        categoryName: "Empilhadeira a Combustão (Diesel/GLP)",
        title: "Série Combustão Pesada CPCD50",
        desc: "Empilhadeira a combustão Diesel de alta capacidade de carga (5.0 toneladas). Indicada para indústrias metalúrgicas, cimenteiras, blocos de concreto e cargas pesadas pesadas."
    },
    19: {
        category: "warehouse",
        categoryName: "Transpaleteira & Patolada",
        title: "Transpaleteira Elétrica CBD15-Série G",
        desc: "Transpaleteira elétrica com capacidade de 1.5 toneladas (1500 kg). Equipamento compacto, ideal para movimentação horizontal rápida em supermercados, docas e dentro de baús de caminhão."
    },
    20: {
        category: "warehouse",
        categoryName: "Transpaleteira & Patolada",
        title: "Transpaleteira Elétrica CBD20-Série G2",
        desc: "Transpaleteira elétrica com capacidade de 2.0 toneladas (2000 kg). Chassi reforçado, braço de controle ergonômico e motor de tração de corrente alternada livre de manutenção."
    },
    21: {
        category: "warehouse",
        categoryName: "Transpaleteira & Patolada",
        title: "Transpaleteira de Lítio CBD25",
        desc: "Transpaleteira elétrica de alta capacidade (2.5 toneladas) equipada com bateria de Lítio integrada. Carregamento completo ultra rápido e excelente torque de movimentação."
    },
    22: {
        category: "warehouse",
        categoryName: "Transpaleteira & Patolada",
        title: "Empilhadeira Patolada CDD12-Série G",
        desc: "Empilhadeira elétrica patolada com capacidade de 1.2 toneladas (1200 kg) e elevação de mastro até 4.5 metros. Perfeita para armazenagem vertical em corredores estreitos."
    },
    23: {
        category: "warehouse",
        categoryName: "Transpaleteira & Patolada",
        title: "Empilhadeira Patolada CDD15-Série G",
        desc: "Empilhadeira elétrica patolada com capacidade de 1.5 toneladas (1500 kg). Equipada com plataforma dobrável para o operador a bordo e grades laterais de segurança."
    },
    24: {
        category: "warehouse",
        categoryName: "Transpaleteira & Patolada",
        title: "Empilhadeira Patolada CDD16-Série G2",
        desc: "Empilhadeira elétrica patolada de alta precisão com capacidade de 1.6 toneladas. Motor AC potente e mastro triplex com elevação livre para trabalho sob tetos baixos."
    },
    25: {
        category: "reach",
        categoryName: "Empilhadeira Retrátil / Especial",
        title: "Empilhadeira Retrátil CQD16-Série G2",
        desc: "Empilhadeira retrátil elétrica com capacidade de 1.6 toneladas (1600 kg). Elevação de torre até 9.5 metros. Ideal para armazéns verticais de alta densidade e corredores muito estreitos."
    },
    26: {
        category: "reach",
        categoryName: "Empilhadeira Retrátil / Especial",
        title: "Empilhadeira Retrátil CQD20-Série G2",
        desc: "Empilhadeira retrátil elétrica com capacidade de 2.0 toneladas (2000 kg). Elevação até 12.5 metros com estabilidade residual de ponta e câmera na torre para visualização dos garfos."
    },
    27: {
        category: "reach",
        categoryName: "Empilhadeira Retrátil / Especial",
        title: "Rebocador Elétrico QYD30-Série G",
        desc: "Rebocador elétrico industrial com capacidade de tração de 3.0 toneladas (3000 kg) em comboios de cargas. Perfeito para linhas de montagem industrial, aeroportos e hospitais."
    },
    28: {
        category: "institutional",
        categoryName: "Contracapa do Catálogo",
        title: "Contracapa do Catálogo Oficial Heli 2026",
        desc: "Informações finais e contatos para aquisição dos equipamentos. A 2P Empilhadeiras é o seu canal de vendas e suporte oficial Heli."
    }
};

let currentModalPage = 1;

// ==========================================================================
// Mobile Menu Navigation Logic
// ==========================================================================
const mobileToggle = document.querySelector('.mobile-nav-toggle');
const mobileClose = document.querySelector('.mobile-nav-close');
const mobileOverlay = document.querySelector('.mobile-nav-overlay');
const mobileLinks = document.querySelectorAll('.mobile-nav-link');

function openMobileMenu() {
    mobileOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    mobileOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

if (mobileToggle) mobileToggle.addEventListener('click', openMobileMenu);
if (mobileClose) mobileClose.addEventListener('click', closeMobileMenu);
if (mobileOverlay) mobileOverlay.addEventListener('click', (e) => {
    if (e.target === mobileOverlay) closeMobileMenu();
});

mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// ==========================================================================
// Filter Catalog Gallery Logic
// ==========================================================================
function filterCatalog(category) {
    // Update active filter button
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        const btnText = btn.textContent.toLowerCase();
        
        let isActive = false;
        if (category === 'all' && btnText.includes('todos')) isActive = true;
        else if (category === 'electric' && btnText.includes('elétricas')) isActive = true;
        else if (category === 'combustion' && btnText.includes('combustão')) isActive = true;
        else if (category === 'warehouse' && btnText.includes('transpaleteiras')) isActive = true;
        else if (category === 'reach' && btnText.includes('retráteis')) isActive = true;
        else if (category === 'institutional' && btnText.includes('institucional')) isActive = true;
        
        if (isActive) btn.classList.add('active');
        else btn.classList.remove('active');
    });

    // Filter cards
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// ==========================================================================
// Lightbox Modal Functionality (Catalog Viewer)
// ==========================================================================
const catalogModal = document.getElementById('catalogModal');
const modalImg = document.getElementById('modalCatalogImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalBadge = document.getElementById('modalBadge');
const modalQr = document.getElementById('modalQrImg');
const modalWaBtn = document.getElementById('modalWaBtn');
const modalPageField = document.getElementById('modalPageField');
const modalProductField = document.getElementById('modalProductField');

function openCatalogModal(pageNumber) {
    currentModalPage = parseInt(pageNumber);
    updateModalContent();
    catalogModal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeCatalogModal() {
    catalogModal.classList.remove('open');
    document.body.style.overflow = '';
}

function updateModalContent() {
    const data = catalogData[currentModalPage];
    if (!data) return;

    // Load High-Res WebP Page Image
    modalImg.src = `catalog_pages_large/page_${currentModalPage}.webp`;
    modalImg.alt = `${data.title} - Página ${currentModalPage}`;
    
    // Load QR Code
    modalQr.src = `qrcodes/page_${currentModalPage}.png`;
    modalQr.alt = `QR Code Página ${currentModalPage}`;
    
    // Set texts
    modalTitle.textContent = `Página ${String(currentModalPage).padStart(2, '0')} - ${data.title}`;
    modalDesc.textContent = data.desc;
    modalBadge.textContent = data.categoryName;
    
    // Reset badges color classes
    modalBadge.className = 'modal-badge';
    modalBadge.classList.add(`badge-${data.category}`);
    
    // Setup WhatsApp direct contact URL
    const phone = "5511976274714";
    let message = `Olá! Tenho interesse nas empilhadeiras/equipamentos apresentados na Página ${currentModalPage} (${data.title}) do catálogo Heli 2026. Gostaria de solicitar um orçamento.`;
    if (currentModalPage === 1) {
        message = "Olá! Vi a capa do catálogo de empilhadeiras Heli 2026 e gostaria de mais informações sobre os produtos.";
    } else if (currentModalPage === 28) {
        message = "Olá! Vi o catálogo de empilhadeiras Heli 2026 e gostaria de falar com a equipe de vendas.";
    }
    
    const encodedMsg = encodeURIComponent(message);
    modalWaBtn.href = `https://wa.me/${phone}?text=${encodedMsg}`;
    
    // Fill hidden form fields inside the modal
    if (modalPageField) modalPageField.value = currentModalPage;
    if (modalProductField) modalProductField.value = data.title;
}

function navigateCatalog(direction) {
    currentModalPage += direction;
    
    // Loop navigation boundaries
    if (currentModalPage < 1) currentModalPage = 28;
    if (currentModalPage > 28) currentModalPage = 1;
    
    updateModalContent();
}

// Close modal on Escape key press
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && catalogModal.classList.contains('open')) {
        closeCatalogModal();
    }
    // Keyboard navigation inside modal
    if (catalogModal.classList.contains('open')) {
        if (e.key === 'ArrowLeft') navigateCatalog(-1);
        if (e.key === 'ArrowRight') navigateCatalog(1);
    }
});

// ==========================================================================
// WhatsApp Floating Box Widget Logic
// ==========================================================================
const waChatBox = document.getElementById('waChatBox');
const waFloatBtn = document.getElementById('waFloatBtn');

function toggleWaChatBox() {
    if (waChatBox.style.display === 'flex') {
        waChatBox.style.opacity = '0';
        waChatBox.style.transform = 'translateY(20px)';
        setTimeout(() => {
            waChatBox.style.display = 'none';
        }, 300);
    } else {
        waChatBox.style.display = 'flex';
        setTimeout(() => {
            waChatBox.style.opacity = '1';
            waChatBox.style.transform = 'translateY(0)';
        }, 10);
        
        // Remove notification badge when first opened
        const badge = document.querySelector('.wa-notification-badge');
        if (badge) badge.style.display = 'none';
    }
}

// ==========================================================================
// Lead Forms Submissions & Success Dialogs
// ==========================================================================
const heroLeadForm = document.getElementById('heroLeadForm');
const mainContactForm = document.getElementById('mainContactForm');
const modalQuickForm = document.getElementById('modalQuickForm');
const successModal = document.getElementById('successModal');
const successMsg = document.getElementById('successModalMsg');

function showSuccessModal(message) {
    if (successMsg) successMsg.textContent = message;
    successModal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeSuccessModal() {
    successModal.classList.remove('open');
    document.body.style.overflow = '';
}

// Process forms
if (heroLeadForm) {
    heroLeadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('heroName').value;
        const email = document.getElementById('heroEmail').value;
        const phone = document.getElementById('heroPhone').value;
        const interest = document.getElementById('heroEquip').value;
        
        // Create lead object
        const lead = { name, email, phone, interest, source: 'hero_form', date: new Date().toISOString() };
        saveLead(lead);
        
        // Clear inputs
        heroLeadForm.reset();
        
        showSuccessModal(`Olá, ${name}! Recebemos seu interesse em "${interest}". Um especialista da 2P Empilhadeiras entrará em contato via WhatsApp no número ${phone} em instantes.`);
    });
}

if (mainContactForm) {
    mainContactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('contactName').value;
        const company = document.getElementById('contactCompany').value;
        const email = document.getElementById('contactEmail').value;
        const phone = document.getElementById('contactPhone').value;
        const service = document.getElementById('contactService').value;
        const msg = document.getElementById('contactMsg').value;
        
        const lead = { name, company, email, phone, service, msg, source: 'main_contact_form', date: new Date().toISOString() };
        saveLead(lead);
        
        mainContactForm.reset();
        
        showSuccessModal(`Obrigado pelo contato, ${name} da ${company}! Sua solicitação de "${service}" foi registrada. Enviamos uma confirmação para ${email} e nossa equipe técnica/comercial ligará para você no número ${phone} em breve.`);
    });
}

if (modalQuickForm) {
    modalQuickForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const pageNum = document.getElementById('modalPageField').value;
        const prodName = document.getElementById('modalProductField').value;
        const name = document.getElementById('modalFormName').value;
        const phone = document.getElementById('modalFormPhone').value;
        const email = document.getElementById('modalFormEmail').value;
        
        const lead = { name, phone, email, page: pageNum, product: prodName, source: 'modal_quick_form', date: new Date().toISOString() };
        saveLead(lead);
        
        modalQuickForm.reset();
        closeCatalogModal();
        
        showSuccessModal(`Solicitação recebida, ${name}! Registramos seu interesse na cotação da empilhadeira/equipamento da Página ${pageNum} (${prodName}). Um consultor comercial enviará a tabela completa para o e-mail ${email} ou entrará em contato via WhatsApp no número ${phone}.`);
    });
}

// Function to simulate saving lead (stores locally in localStorage)
function saveLead(lead) {
    try {
        let leads = JSON.parse(localStorage.getItem('2p_forklift_leads') || '[]');
        leads.push(lead);
        localStorage.setItem('2p_forklift_leads', JSON.stringify(leads));
        console.log("Lead successfully saved locally:", lead);
    } catch (e) {
        console.error("Failed to save lead:", e);
    }
}
