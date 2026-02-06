export type Locale = 'es' | 'en';

export const translations = {
  es: {
    nav: {
      about: 'Nosotros',
      products: 'Productos',
      services: 'Servicios',
      process: 'Proceso',
      trust: 'Confianza',
      contact: 'Contacto',
    },
    hero: {
      title: 'Fruta Premium\nDesde Chile al Mundo',
      subtitle:
        'Exportamos cerezas frescas y ciruelas deshidratadas de la más alta calidad, con trazabilidad completa desde el campo hasta su destino.',
      cta: 'Contáctenos',
      ctaSecondary: 'Conozca Nuestros Productos',
    },
    about: {
      label: 'Nosotros',
      title: 'Tradición, Calidad y Alcance Global',
      description:
        'Grupo La Consentida nace en el corazón del Valle Central de Chile, una de las regiones frutícolas más privilegiadas del hemisferio sur. Con décadas de experiencia en la agroindustria, nos especializamos en la exportación de cerezas frescas premium y ciruelas deshidratadas de calidad superior.',
      description2:
        'Nuestra operación integra toda la cadena de valor: desde la compra de fruta en origen y el secado industrial, hasta la comercialización en los mercados más exigentes del mundo.',
      stat1Label: 'Años de Experiencia',
      stat1Value: '+20',
      stat2Label: 'Países de Destino',
      stat2Value: '+15',
      stat3Label: 'Toneladas Anuales',
      stat3Value: '+2.000',
      stat4Label: 'Productores Asociados',
      stat4Value: '+50',
    },
    products: {
      label: 'Productos de Exportación',
      title: 'Calidad que Cruza Fronteras',
      subtitle:
        'Seleccionamos y procesamos fruta que cumple con los más rigurosos estándares internacionales de calidad y seguridad alimentaria.',
      cherry: {
        name: 'Cerezas Frescas',
        description:
          'Cerezas chilenas premium, seleccionadas en su punto óptimo de madurez. Calibres superiores, color intenso y firmeza excepcional para los mercados más exigentes de Asia, Europa y Norteamérica.',
        features: [
          'Calibres premium (28mm+)',
          'Cadena de frío controlada',
          'Empaque de exportación',
          'Trazabilidad completa',
        ],
      },
      prune: {
        name: 'Ciruelas Deshidratadas',
        description:
          'Ciruelas deshidratadas mediante proceso industrial controlado, conservando sabor, textura y propiedades nutricionales. Producto versátil para consumo directo, repostería e industria alimentaria.',
        features: [
          'Proceso de secado controlado',
          'Sin conservantes artificiales',
          'Múltiples calibres disponibles',
          'Empaque industrial y retail',
        ],
      },
    },
    services: {
      label: 'Servicios',
      title: 'Soluciones Integrales para la Cadena Frutícola',
      subtitle:
        'Ofrecemos servicios especializados que cubren cada eslabón de la cadena de valor, desde el campo hasta el mercado final.',
      items: [
        {
          title: 'Secado de Fruta',
          description:
            'Planta de secado industrial con tecnología de última generación. Capacidad para procesar grandes volúmenes manteniendo estándares óptimos de calidad y humedad controlada.',
        },
        {
          title: 'Compra en Origen',
          description:
            'Red de compra directa con productores del Valle Central. Relaciones de largo plazo que garantizan acceso a la mejor fruta de cada temporada, con precios justos y transparentes.',
        },
        {
          title: 'Comercialización Nacional',
          description:
            'Distribución y venta en el mercado chileno a través de canales especializados. Fruta fresca y procesada disponible para la industria alimentaria, retail y distribuidores.',
        },
        {
          title: 'Exportación Internacional',
          description:
            'Gestión integral de exportación: logística, documentación, cumplimiento normativo y coordinación en destino. Presencia activa en mercados de Asia, Europa y América.',
        },
      ],
    },
    process: {
      label: 'Nuestro Proceso',
      title: 'Control Total, Calidad Garantizada',
      subtitle:
        'Cada etapa de nuestro proceso está diseñada para preservar la calidad superior de la fruta y cumplir con los estándares más exigentes del mercado internacional.',
      steps: [
        {
          title: 'Selección en Origen',
          description:
            'Evaluamos y seleccionamos la mejor fruta directamente en los campos del Valle Central de Chile.',
        },
        {
          title: 'Control de Calidad',
          description:
            'Inspección rigurosa de calibre, color, firmeza y condición fitosanitaria en cada lote.',
        },
        {
          title: 'Procesamiento',
          description:
            'Líneas de empaque y secado industrial con tecnología de punta y monitoreo continuo.',
        },
        {
          title: 'Logística Internacional',
          description:
            'Cadena de frío y distribución optimizada para garantizar frescura en destino.',
        },
      ],
    },
    trust: {
      label: 'Confianza y Estándares',
      title: 'Compromiso con la Excelencia',
      subtitle:
        'Nuestras operaciones cumplen con los más altos estándares de calidad, seguridad alimentaria y responsabilidad social exigidos por los mercados internacionales.',
      items: [
        {
          title: 'Inocuidad Alimentaria',
          description:
            'Procesos certificados y auditorías permanentes que garantizan la seguridad de nuestros productos en cada etapa.',
        },
        {
          title: 'Trazabilidad Completa',
          description:
            'Sistema de seguimiento desde el campo hasta el punto de destino, asegurando transparencia total en la cadena.',
        },
        {
          title: 'Sostenibilidad',
          description:
            'Prácticas agrícolas responsables y compromiso con el desarrollo de las comunidades productoras locales.',
        },
        {
          title: 'Mercados Globales',
          description:
            'Presencia comercial activa en China, Estados Unidos, Europa, Medio Oriente y Latinoamérica.',
        },
      ],
    },
    contact: {
      label: 'Contacto',
      title: 'Conectemos',
      subtitle:
        'Estamos listos para ser su socio comercial. Contáctenos para cotizaciones, información de productos o cualquier consulta.',
      form: {
        name: 'Nombre',
        company: 'Empresa',
        email: 'Correo electrónico',
        message: 'Mensaje',
        submit: 'Enviar Mensaje',
        success: '¡Mensaje enviado exitosamente! Nos pondremos en contacto pronto.',
        namePlaceholder: 'Su nombre completo',
        companyPlaceholder: 'Nombre de su empresa',
        emailPlaceholder: 'correo@empresa.com',
        messagePlaceholder: 'Cuéntenos sobre sus necesidades comerciales...',
      },
      info: {
        email: 'contacto@grupolaconsentida.cl',
        location: 'Valle Central, Chile',
        locationDetail: 'Región del Maule, Chile',
      },
    },
    footer: {
      rights: '© 2026 Grupo La Consentida. Todos los derechos reservados.',
      tagline: 'Fruta premium desde Chile al mundo.',
    },
  },
  en: {
    nav: {
      about: 'About',
      products: 'Products',
      services: 'Services',
      process: 'Process',
      trust: 'Trust',
      contact: 'Contact',
    },
    hero: {
      title: 'Premium Fruit\nFrom Chile to the World',
      subtitle:
        'We export premium fresh cherries and dried prunes of the highest quality, with full traceability from field to final destination.',
      cta: 'Contact Us',
      ctaSecondary: 'Explore Our Products',
    },
    about: {
      label: 'About Us',
      title: 'Heritage, Quality, and Global Reach',
      description:
        "Grupo La Consentida was born in the heart of Chile's Central Valley, one of the most privileged fruit-growing regions in the Southern Hemisphere. With decades of experience in agribusiness, we specialize in exporting premium fresh cherries and superior quality dried prunes.",
      description2:
        'Our operation integrates the entire value chain: from direct fruit procurement at origin and industrial drying, to distribution in the most demanding markets worldwide.',
      stat1Label: 'Years of Experience',
      stat1Value: '+20',
      stat2Label: 'Destination Countries',
      stat2Value: '+15',
      stat3Label: 'Annual Tons',
      stat3Value: '+2,000',
      stat4Label: 'Partner Growers',
      stat4Value: '+50',
    },
    products: {
      label: 'Export Products',
      title: 'Quality That Crosses Borders',
      subtitle:
        'We select and process fruit that meets the most rigorous international standards for quality and food safety.',
      cherry: {
        name: 'Fresh Cherries',
        description:
          'Premium Chilean cherries, harvested at optimal ripeness. Superior calibers, deep color, and exceptional firmness for the most demanding markets in Asia, Europe, and North America.',
        features: [
          'Premium calibers (28mm+)',
          'Controlled cold chain',
          'Export packaging',
          'Full traceability',
        ],
      },
      prune: {
        name: 'Dried Prunes',
        description:
          'Prunes dehydrated through a controlled industrial process, preserving flavor, texture, and nutritional properties. A versatile product for direct consumption, bakery, and the food industry.',
        features: [
          'Controlled drying process',
          'No artificial preservatives',
          'Multiple calibers available',
          'Industrial & retail packaging',
        ],
      },
    },
    services: {
      label: 'Services',
      title: 'End-to-End Solutions for the Fruit Supply Chain',
      subtitle:
        'We offer specialized services covering every link in the value chain, from the field to the final market.',
      items: [
        {
          title: 'Fruit Drying',
          description:
            'State-of-the-art industrial drying facility. Capacity to process large volumes while maintaining optimal quality standards and controlled humidity levels.',
        },
        {
          title: 'Direct Procurement',
          description:
            'Direct purchasing network with growers across the Central Valley. Long-term relationships ensuring access to the finest fruit each season, with fair and transparent pricing.',
        },
        {
          title: 'Domestic Distribution',
          description:
            'Distribution and sales in the Chilean market through specialized channels. Fresh and processed fruit available for the food industry, retail, and distributors.',
        },
        {
          title: 'International Export',
          description:
            'Comprehensive export management: logistics, documentation, regulatory compliance, and destination coordination. Active presence in Asian, European, and American markets.',
        },
      ],
    },
    process: {
      label: 'Our Process',
      title: 'Total Control, Guaranteed Quality',
      subtitle:
        'Every stage of our process is designed to preserve the superior quality of the fruit and meet the most demanding standards in the international market.',
      steps: [
        {
          title: 'Field Selection',
          description:
            "We evaluate and select the finest fruit directly from Chile's Central Valley orchards.",
        },
        {
          title: 'Quality Control',
          description:
            'Rigorous inspection of caliber, color, firmness, and phytosanitary condition for every lot.',
        },
        {
          title: 'Processing',
          description:
            'Cutting-edge packing lines and industrial drying with continuous monitoring.',
        },
        {
          title: 'International Logistics',
          description:
            'Optimized cold chain and distribution to ensure freshness at destination.',
        },
      ],
    },
    trust: {
      label: 'Trust & Standards',
      title: 'Committed to Excellence',
      subtitle:
        'Our operations meet the highest standards of quality, food safety, and social responsibility demanded by international markets.',
      items: [
        {
          title: 'Food Safety',
          description:
            'Certified processes and ongoing audits ensuring product safety at every stage of our operation.',
        },
        {
          title: 'Full Traceability',
          description:
            'Tracking system from field to destination point, ensuring complete transparency across the supply chain.',
        },
        {
          title: 'Sustainability',
          description:
            'Responsible agricultural practices and commitment to developing local farming communities.',
        },
        {
          title: 'Global Markets',
          description:
            'Active commercial presence in China, the United States, Europe, the Middle East, and Latin America.',
        },
      ],
    },
    contact: {
      label: 'Contact',
      title: "Let's Connect",
      subtitle:
        'We are ready to be your trade partner. Reach out for quotes, product information, or any inquiries.',
      form: {
        name: 'Name',
        company: 'Company',
        email: 'Email',
        message: 'Message',
        submit: 'Send Message',
        success: 'Message sent successfully! We will be in touch shortly.',
        namePlaceholder: 'Your full name',
        companyPlaceholder: 'Your company name',
        emailPlaceholder: 'email@company.com',
        messagePlaceholder: 'Tell us about your business needs...',
      },
      info: {
        email: 'contacto@grupolaconsentida.cl',
        location: 'Central Valley, Chile',
        locationDetail: 'Maule Region, Chile',
      },
    },
    footer: {
      rights: '© 2026 Grupo La Consentida. All rights reserved.',
      tagline: 'Premium fruit from Chile to the world.',
    },
  },
};

export type TranslationKeys = typeof translations.es;
