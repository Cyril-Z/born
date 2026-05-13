/**
 * East Africa Born Wood Company Ltd
 * Main JavaScript
 */

// ============================================
// Language System
// ============================================
const I18N = {
  en: {
    // Nav
    nav_home: 'Home',
    nav_about: 'About Us',
    nav_products: 'Products',
    nav_trade: 'Global Trade',
    nav_quality: 'Quality',
    nav_contact: 'Contact',
    nav_faq: 'FAQ',
    
    // Hero
    hero_label: 'Leading Plywood Manufacturer in East Africa',
    hero_title: 'Your Trusted Partner for <span>Quality Plywood</span> Solutions',
    hero_desc: 'Full thickness range from 3mm to 18mm. Construction, furniture, and packaging plywood manufactured in Tanzania and exported worldwide.',
    hero_cta_primary: 'Request a Quote',
    hero_cta_secondary: 'View Products',
    
    // Stats
    stat_specs: 'Thickness Specs',
    stat_series: 'Product Series',
    stat_countries: 'Export Markets',
    stat_years: 'Years Experience',
    
    // Products
    products_title: 'Our Products',
    products_subtitle: 'Comprehensive plywood solutions covering all thicknesses from 3mm to 18mm for construction, furniture, and packaging applications.',
    product_construction_title: 'Construction Plywood',
    product_construction_desc: 'Water-resistant film-faced plywood designed for concrete formwork and high-rise building projects.',
    product_furniture_title: 'Furniture Plywood',
    product_furniture_desc: 'Smooth surface plywood with eco-friendly adhesive, ideal for cabinets, wardrobes, and interior decoration.',
    product_packaging_title: 'Packaging Plywood',
    product_packaging_desc: 'Cost-effective plywood with excellent compressive strength for export crates, pallets, and shipping protection.',
    product_learn_more: 'Learn More',
    
    // Thickness
    thickness_title: 'Full Thickness Range',
    thickness_subtitle: 'From ultra-thin 3mm panels to heavy-duty 18mm boards — we cover every specification your project demands.',
    thickness_cta: 'Get Full Spec Sheet',
    
    // Features
    features_title: 'Why Choose Born Wood',
    features_subtitle: 'Built on quality, trust, and decades of expertise serving markets across Africa and beyond.',
    feature_1_title: 'Full Spec Coverage',
    feature_1_desc: 'Complete thickness range from 3mm to 18mm across all product categories.',
    feature_2_title: 'East Africa Production',
    feature_2_desc: 'Manufactured in Mafinga, Tanzania with strict quality control at every stage.',
    feature_3_title: 'Global Export Experience',
    feature_3_desc: 'Proven track record exporting to Kenya, Congo, India, Zambia, Uganda, and China.',
    feature_4_title: 'B2B Wholesale Focus',
    feature_4_desc: 'Dedicated support for international buyers, construction firms, and furniture manufacturers.',
    
    // CTA
    cta_title: 'Ready to Source Quality Plywood?',
    cta_desc: 'Get competitive wholesale pricing and professional export support. Our team responds within 24 hours.',
    cta_button: 'Request Price List',
    
    // Footer
    footer_desc: 'East Africa\'s leading plywood manufacturer and supplier. Full range from 3mm to 18mm.',
    footer_products: 'Products',
    footer_company: 'Company',
    footer_support: 'Support',
    footer_copyright: '© 2025 East Africa Born Wood Company Ltd. All rights reserved.',
    footer_address: 'P.O. Box 575, Mafinga, Tanzania',
    
    // Common
    read_more: 'Read More',
    download: 'Download',
    send: 'Send Inquiry',
    name: 'Name',
    company: 'Company',
    country: 'Country',
    email: 'Email',
    phone: 'Phone',
    message: 'Message',
    product_type: 'Product Type',
    thickness: 'Thickness',
    quantity: 'Quantity Required',
    usage: 'Usage Description',
    select_product: 'Select Product',
    select_thickness: 'Select Thickness',
    select_quantity: 'Select Quantity',
    construction: 'Construction Plywood',
    furniture: 'Furniture Plywood',
    packaging: 'Packaging Plywood',
    all: 'All',
    mm: 'mm',
    specs: 'Technical Specifications',
    applications: 'Applications',
    inquiry: 'Send Inquiry',
    
    // About
    about_title: 'About Us',
    about_subtitle: 'Building trust across continents through quality plywood manufacturing and global trade.',
    about_history: 'Company History',
    about_vision: 'Our Vision',
    about_vision_text: 'To be the preferred company in Tanzania and all over the world for marine boards and plywood supplying.',
    about_mission: 'Our Mission',
    about_mission_text: 'Deliver consistent, high-quality plywood products across the full 3mm–18mm range, serving construction, furniture, and packaging industries with reliability and competitive pricing.',
    about_advantages: 'Core Advantages',
    
    // Products page
    products_page_title: 'Product Center',
    products_page_subtitle: 'Explore our comprehensive plywood catalog. Filter by product type and thickness to find the perfect solution.',
    filter_product: 'Product Type',
    filter_thickness: 'Thickness',
    moq: 'MOQ',
    supply: 'Supply Capacity',
    
    // Trade
    trade_title: 'Global Trade Network',
    trade_subtitle: 'Connecting Tanzania with the world. Strategic export partnerships across Africa and Asia.',
    export_title: 'Export Markets',
    import_title: 'Import Partners',
    logistics_title: 'Logistics & Warehousing',
    
    // Quality
    quality_title: 'Quality & Sustainability',
    quality_subtitle: 'Six-stage quality control process ensuring every sheet from 3mm to 18mm meets international standards.',
    process_title: '6-Stage Quality Control',
    sustainability_title: 'Sustainability Commitment',
    
    // Contact
    contact_title: 'Contact Us',
    contact_subtitle: 'Get in touch for quotations, product inquiries, and partnership opportunities.',
    form_title: 'Send Inquiry',
    form_desc: 'Fill out the form below and our team will respond within 24 hours.',
    address_title: 'Headquarters',
    address: 'P.O. Box 575, Mafinga, Tanzania',
    
    // FAQ
    faq_title: 'Frequently Asked Questions',
    faq_subtitle: 'Find answers to common questions about our plywood products, specifications, and ordering process.',
    
    // FAQ items
    faq_q1: 'Which thickness is suitable for my project?',
    faq_a1: '3mm–6mm: Ideal for interior decoration, backing panels, and light packaging. 9mm–12mm: Suitable for furniture frames, cabinetry, and medium-duty packaging. 15mm–18mm: Recommended for concrete formwork, heavy furniture, and industrial shipping crates. Our sales team can help you select the optimal specification.',
    faq_q2: 'How many reuses can construction plywood withstand?',
    faq_a2: 'Our film-faced construction plywood is engineered for multiple reuses. Depending on the thickness and handling conditions, 15mm–18mm boards typically achieve 15–25 pouring cycles with proper care and cleaning between uses.',
    faq_q3: 'What is the minimum order quantity (MOQ)?',
    faq_a3: 'Standard MOQ is 1×20ft container (approximately 20–22 cubic meters) per thickness/specification. Mixed container loading with multiple thicknesses is available to optimize your procurement.',
    faq_q4: 'Do you offer custom sizes?',
    faq_a4: 'Yes. While our standard sheet size is 1220×2440mm, we can accommodate custom dimensions for volume orders. Please specify your requirements in the inquiry form and our production team will assess feasibility.',
    faq_q5: 'What glue grades do you use?',
    faq_a5: 'We offer MR (Moisture Resistant), WBP (Weather & Boil Proof), and E1/E0 emission grade adhesives. Construction plywood uses WBP phenolic glue; furniture plywood uses E1 grade for indoor safety; packaging plywood uses MR grade for cost efficiency.',
    faq_q6: 'How long does shipping take?',
    faq_a6: 'From Dar es Salaam port: Kenya (3–5 days), Congo (7–10 days), Uganda (5–7 days), Zambia (10–14 days), India (12–18 days), China (20–30 days). We coordinate with experienced freight forwarders for smooth customs clearance.',
  },
  
  zh: {
    // Nav
    nav_home: '首页',
    nav_about: '关于我们',
    nav_products: '产品中心',
    nav_trade: '国际贸易',
    nav_quality: '质量与可持续',
    nav_contact: '联系我们',
    nav_faq: '常见问题',
    
    // Hero
    hero_label: '东非领先的胶合板制造商',
    hero_title: '您值得信赖的<span>优质胶合板</span>解决方案伙伴',
    hero_desc: '全厚度规格覆盖3mm至18mm。建筑模板、家具板、包装板，坦桑尼亚制造，出口全球。',
    hero_cta_primary: '获取报价',
    hero_cta_secondary: '查看产品',
    
    // Stats
    stat_specs: '厚度规格',
    stat_series: '产品系列',
    stat_countries: '出口国家',
    stat_years: '行业经验',
    
    // Products
    products_title: '产品中心',
    products_subtitle: '全系列胶合板解决方案，覆盖3mm至18mm全厚度，满足建筑、家具、包装等各领域需求。',
    product_construction_title: '建筑模板',
    product_construction_desc: '防水覆膜胶合板，专为混凝土浇筑、高层建筑工程设计，可多次周转使用。',
    product_furniture_title: '家具板',
    product_furniture_desc: '表面平整光滑，采用环保胶水，适用于橱柜、衣柜、桌椅及室内装饰基材。',
    product_packaging_title: '包装板',
    product_packaging_desc: '高性价比胶合板，抗压强度优良，适用于出口包装箱、托盘及设备防护箱。',
    product_learn_more: '了解详情',
    
    // Thickness
    thickness_title: '全厚度覆盖',
    thickness_subtitle: '从超薄3mm面板到厚重18mm板材 — 满足您项目的每一种规格需求。',
    thickness_cta: '获取完整规格表',
    
    // Features
    features_title: '为什么选择波恩木业',
    features_subtitle: '以质量、信任和数十年服务非洲及全球市场的专业经验为基石。',
    feature_1_title: '全规格覆盖',
    feature_1_desc: '所有产品类别均提供3mm至18mm的完整厚度范围。',
    feature_2_title: '东非本地生产',
    feature_2_desc: '坦桑尼亚Mafinga工厂制造，每个生产阶段均执行严格质量控制。',
    feature_3_title: '丰富出口经验',
    feature_3_desc: '稳定出口至肯尼亚、刚果、印度、赞比亚、乌干达及中国等市场。',
    feature_4_title: '专注B2B批发',
    feature_4_desc: '为国际采购商、建筑商和家具制造商提供专业支持。',
    
    // CTA
    cta_title: '准备采购优质胶合板？',
    cta_desc: '获取有竞争力的批发价格和专业的出口支持。我们的团队将在24小时内回复。',
    cta_button: '获取价格单',
    
    // Footer
    footer_desc: '东非领先的胶合板制造商和供应商。3mm至18mm全系列覆盖。',
    footer_products: '产品',
    footer_company: '公司',
    footer_support: '支持',
    footer_copyright: '© 2025 东非波恩木业有限公司 版权所有',
    footer_address: '坦桑尼亚 Mafinga P.O. Box 575',
    
    // Common
    read_more: '了解更多',
    download: '下载',
    send: '发送询盘',
    name: '姓名',
    company: '公司名称',
    country: '国家',
    email: '电子邮箱',
    phone: '电话',
    message: '留言',
    product_type: '产品类型',
    thickness: '厚度规格',
    quantity: '需求数量',
    usage: '用途描述',
    select_product: '选择产品',
    select_thickness: '选择厚度',
    select_quantity: '选择数量',
    construction: '建筑模板',
    furniture: '家具板',
    packaging: '包装板',
    all: '全部',
    mm: '毫米',
    specs: '技术参数',
    applications: '应用场景',
    inquiry: '发送询盘',
    
    // About
    about_title: '关于我们',
    about_subtitle: '通过优质胶合板制造和全球贸易，跨越大陆建立信任。',
    about_history: '公司历史',
    about_vision: '企业愿景',
    about_vision_text: '成为坦桑尼亚及全球范围内海洋板和胶合板供应的首选公司。',
    about_mission: '企业使命',
    about_mission_text: '在3mm至18mm全厚度范围内提供一致的高品质胶合板产品，以可靠性和有竞争力的价格服务于建筑、家具和包装行业。',
    about_advantages: '核心优势',
    
    // Products page
    products_page_title: '产品中心',
    products_page_subtitle: '探索我们全面的胶合板目录。按产品类型和厚度筛选，找到最适合的解决方案。',
    filter_product: '产品类型',
    filter_thickness: '厚度规格',
    moq: '最小起订量',
    supply: '供货能力',
    
    // Trade
    trade_title: '全球贸易网络',
    trade_subtitle: '连接坦桑尼亚与世界。横跨非洲和亚洲的战略出口合作伙伴关系。',
    export_title: '出口市场',
    import_title: '进口合作',
    logistics_title: '物流与仓储',
    
    // Quality
    quality_title: '质量与可持续性',
    quality_subtitle: '六道质量控制流程，确保从3mm到18mm的每一张板材都符合国际标准。',
    process_title: '六道质量检测流程',
    sustainability_title: '可持续发展承诺',
    
    // Contact
    contact_title: '联系我们',
    contact_subtitle: '获取报价、产品咨询和合作机会，请随时与我们联系。',
    form_title: '发送询盘',
    form_desc: '填写下方表单，我们的团队将在24小时内回复。',
    address_title: '总部地址',
    address: '坦桑尼亚 Mafinga P.O. Box 575',
    
    // FAQ
    faq_title: '常见问题',
    faq_subtitle: '关于我们的胶合板产品、规格和订购流程的常见问答。',
    
    // FAQ items
    faq_q1: '不同厚度适用于什么场景？',
    faq_a1: '3mm–6mm：适用于室内装饰、背板和轻型包装。9mm–12mm：适用于家具框架、橱柜和中型包装。15mm–18mm：推荐用于混凝土浇筑模板、重型家具和工业运输箱。我们的销售团队可以帮您选择最佳规格。',
    faq_q2: '建筑模板可周转多少次？',
    faq_a2: '我们的覆膜建筑模板专为多次周转设计。根据厚度和使用条件，15mm–18mm板材在正确保养和清洁的情况下通常可实现15–25次浇筑循环。',
    faq_q3: '最小起订量（MOQ）是多少？',
    faq_a3: '标准最小起订量为1个20尺货柜（约20–22立方米）每种厚度/规格。支持混合货柜装载多种厚度，以优化您的采购成本。',
    faq_q4: '是否支持定制尺寸？',
    faq_a4: '是的。我们的标准板面尺寸为1220×2440mm，但对于批量订单我们可以定制尺寸。请在询盘表单中注明您的需求，我们的生产团队将评估可行性。',
    faq_q5: '使用什么胶水等级？',
    faq_a5: '我们提供MR（防潮）、WBP（防水煮沸）和E1/E0级环保胶水。建筑模板使用WBP酚醛胶；家具板使用E1级确保室内安全；包装板使用MR级胶水以控制成本。',
    faq_q6: '运输需要多长时间？',
    faq_a6: '从达累斯萨拉姆港出发：肯尼亚（3–5天）、刚果（7–10天）、乌干达（5–7天）、赞比亚（10–14天）、印度（12–18天）、中国（20–30天）。我们与经验丰富的货代合作，确保顺利清关。',
  }
};

let currentLang = localStorage.getItem('bornwood-lang') || 'en';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('bornwood-lang', lang);
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  
  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (I18N[lang][key]) {
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = I18N[lang][key];
      } else {
        el.textContent = I18N[lang][key];
      }
    }
  });
  
  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (I18N[lang][key]) {
      el.placeholder = I18N[lang][key];
    }
  });
  
  // Update select options
  document.querySelectorAll('option[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (I18N[lang][key]) {
      el.textContent = I18N[lang][key];
    }
  });
  
  // Update active state on switchers
  document.querySelectorAll('.lang-switcher span, .mobile-lang span').forEach(span => {
    span.classList.toggle('active', span.dataset.lang === lang);
  });
}

// ============================================
// Mobile Menu
// ============================================
function initMobileMenu() {
  const btn = document.querySelector('.mobile-menu-btn');
  const menu = document.querySelector('.mobile-menu');
  
  if (!btn || !menu) return;
  
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
  });
  
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      btn.classList.remove('active');
      menu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// ============================================
// Header Scroll Effect
// ============================================
function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;
  
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  });
}

// ============================================
// FAQ Accordion
// ============================================
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isActive = item.classList.contains('active');
      
      // Close all
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      
      // Open clicked if wasn't active
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

// ============================================
// Tabs
// ============================================
function initTabs() {
  document.querySelectorAll('.tab-nav').forEach(nav => {
    nav.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tabId = btn.dataset.tab;
        const container = nav.closest('.tabs-container') || nav.parentElement;
        
        // Update buttons
        nav.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Update content
        container.querySelectorAll('.tab-content').forEach(content => {
          content.classList.toggle('active', content.dataset.tab === tabId);
        });
      });
    });
  });
}

// ============================================
// Scroll Animations
// ============================================
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// ============================================
// Product Filter (Products Page)
// ============================================
function initProductFilter() {
  const typeFilter = document.getElementById('filter-type');
  const thickFilter = document.getElementById('filter-thickness');
  const cards = document.querySelectorAll('.product-detail-card');
  
  if (!typeFilter || !thickFilter) return;
  
  function filter() {
    const type = typeFilter.value;
    const thick = thickFilter.value;
    
    cards.forEach(card => {
      const cardType = card.dataset.type;
      const cardThick = card.dataset.thickness;
      
      const typeMatch = type === 'all' || cardType === type;
      const thickMatch = thick === 'all' || cardThick === thick;
      
      card.style.display = typeMatch && thickMatch ? 'block' : 'none';
    });
  }
  
  typeFilter.addEventListener('change', filter);
  thickFilter.addEventListener('change', filter);
}

// ============================================
// Form Validation
// ============================================
function initFormValidation() {
  document.querySelectorAll('form[data-validate]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      let valid = true;
      const required = form.querySelectorAll('[required]');
      
      required.forEach(field => {
        if (!field.value.trim()) {
          valid = false;
          field.style.borderColor = '#e53935';
        } else {
          field.style.borderColor = '';
        }
      });
      
      if (valid) {
        // Show success message
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        btn.innerHTML = currentLang === 'zh' ? '✓ 已发送' : '✓ Sent';
        btn.disabled = true;
        
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.disabled = false;
          form.reset();
        }, 3000);
      }
    });
  });
}

// ============================================
// Active Nav Link
// ============================================
function initActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  
  document.querySelectorAll('.nav-link, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// ============================================
// Smooth Scroll for anchor links
// ============================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ============================================
// Pre-select product from URL param
// ============================================
function initContactFormProduct() {
  const select = document.getElementById('contact-product');
  if (!select) return;
  
  const params = new URLSearchParams(window.location.search);
  const product = params.get('product');
  if (product) {
    select.value = product;
  }
}

// ============================================
// Initialize Everything
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
  initMobileMenu();
  initHeaderScroll();
  initFAQ();
  initTabs();
  initScrollAnimations();
  initProductFilter();
  initFormValidation();
  initActiveNav();
  initSmoothScroll();
  initContactFormProduct();
});

// Expose for inline handlers
window.setLanguage = setLanguage;
