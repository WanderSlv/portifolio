export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full Stack' | 'Back-End' | 'IA & Automação' | 'Desktop';
  description: string;
  longDescription: string;
  tags: string[];
  techStack: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  badge?: string;
  stats?: { label: string; value: string }[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level: string; // 'Avançado' | 'Intermediário' | 'Especialista'
    icon?: string;
    description: string;
  }[];
}

export interface TimelineItem {
  year: string;
  title: string;
  institution: string;
  location?: string;
  type: 'academic' | 'project' | 'course';
  description: string;
  skills: string[];
}

export const PERSONAL_INFO = {
  name: 'Wander Silva',
  fullName: 'Wander Silva Andrade',
  title: 'Desenvolvedor Full Stack',
  subtitle: 'Java • TypeScript • React • Python • Spring Boot',
  bio: 'Desenvolvedor focado na criação de ecossistemas web robustos e escaláveis. Uno back-ends de alta performance construídos em Java (Spring Boot) e Node.js/TypeScript a front-ends reativos e fluidos com React e Tailwind CSS, além de desenvolver automações e sistemas com Inteligência Artificial e Visão Computacional.',
  location: 'Santa Catarina, Brasil',
  email: 'wandermaci3l@gmail.com',
  github: 'https://github.com/WanderSlv',
  githubUsername: 'WanderSlv',
  linkedin: 'https://www.linkedin.com/in/wander-silva-andrade/',
  status: 'Disponível para novas oportunidades & projetos',
  avatarUrl: 'https://avatars.githubusercontent.com/u/165096619?v=4',
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Back-End & APIs',
    iconName: 'Server',
    skills: [
      { name: 'Java', level: 'Especialista', description: 'POO avançada, Streams, Collections e arquitetura limpa' },
      { name: 'Spring Boot', level: 'Avançado', description: 'APIs RESTful, Spring Security, JPA/Hibernate, Spring Data' },
      { name: 'Node.js & TypeScript', level: 'Avançado', description: 'Microsserviços assíncronos, Express, tipagem estrita' },
      { name: 'Python & FastAPI', level: 'Avançado', description: 'APIs de alta performance e pipelines de dados' },
      { name: 'Prisma ORM', level: 'Avançado', description: 'Modelagem de esquemas e migrações eficientes' },
    ],
  },
  {
    title: 'Front-End & UI/UX',
    iconName: 'Layout',
    skills: [
      { name: 'React', level: 'Avançado', description: 'Hooks modernos, estado global, Componentes reutilizáveis' },
      { name: 'TypeScript', level: 'Avançado', description: 'Tipagem robusta de ponta a ponta' },
      { name: 'Next.js', level: 'Intermediário', description: 'SSR, SSG e rotas de API com otimização web' },
      { name: 'Tailwind CSS', level: 'Avançado', description: 'Design responsivo, temas dark/light e animações' },
      { name: 'Tauri (Desktop)', level: 'Intermediário', description: 'Aplicativos desktop ultraleves integrados com React' },
    ],
  },
  {
    title: 'Bancos de Dados & Cloud',
    iconName: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 'Avançado', description: 'Queries complexas, índices, modelagem relacional' },
      { name: 'Supabase', level: 'Avançado', description: 'BaaS com Postgres, Auth e Row Level Security' },
      { name: 'MySQL & SQLite', level: 'Avançado', description: 'Bancos relacionais e persistência embedded' },
      { name: 'Docker', level: 'Intermediário', description: 'Containerização de ambientes e microsserviços' },
      { name: 'Vercel & Render', level: 'Avançado', description: 'Deploy contínuo e infraestrutura serverless' },
    ],
  },
  {
    title: 'IA, Automações & Ferramentas',
    iconName: 'Cpu',
    skills: [
      { name: 'YOLOv8 & OpenCV', level: 'Intermediário', description: 'Detecção de objetos e visão computacional' },
      { name: 'EasyOCR & Web Scraping', level: 'Avançado', description: 'Extração de texto em imagens e crawlers de dados' },
      { name: 'Git & GitHub', level: 'Avançado', description: 'Controle de versão, branching, PRs e workflows' },
      { name: 'Linux', level: 'Avançado', description: 'Ambiente de desenvolvimento e automação de scripts' },
      { name: 'Postman & Insomnia', level: 'Avançado', description: 'Testes automatizados e documentação de APIs' },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'autobot-veiculos',
    title: 'AutoBot — Plataforma de Venda de Veículos',
    subtitle: 'Automação comercial e catálogo inteligente para concessionárias',
    category: 'Full Stack',
    description: 'Plataforma moderna desenvolvida para concessionárias e lojas automatizarem atendimento, catálogo dinâmico de veículos e captura de leads qualificados.',
    longDescription: 'O AutoBot foi concebido para resolver o gargalo de atendimento no setor automotivo. O sistema reúne uma vitrine interativa com filtros avançados por modelo, ano, quilometragem e faixa de preço, combinada a um motor de gestão de estoque e gatilhos de comunicação instantânea com clientes via canais digitais.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Supabase', 'CRM'],
    techStack: ['React 18', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Lucide Icons', 'REST API'],
    features: [
      'Catálogo interativo com filtros dinâmicos e galeria em alta resolução',
      'Gerenciamento de estoque com especificações detalhadas dos veículos',
      'Integração de canais de atendimento e captura de propostas de compra',
      'Painel administrativo para controle de status e métricas de conversão',
    ],
    githubUrl: 'https://github.com/WanderSlv/vendaDeVeiculos',
    badge: 'Destaque',
    stats: [
      { label: 'Arquitetura', value: 'Modular' },
      { label: 'Performance', value: '100% Responsivo' },
    ],
  },
  {
    id: 'financeiro-pessoal',
    title: 'Sistema de Gestão Financeira Pessoal',
    subtitle: 'Controle inteligente de fluxo de caixa, despesas e relatórios',
    category: 'Full Stack',
    description: 'Aplicação Full Stack completa com autenticação JWT, controle granular de receitas, despesas, cartões de crédito e gráficos analíticos em tempo real.',
    longDescription: 'Desenvolvido com uma arquitetura separada em back-end (Node.js + Express + TypeScript + Prisma ORM) e front-end (React + Tailwind), o sistema fornece segurança de nível bancário com hash de senhas, JWT tokens, controle de categorias financeiras, cálculo automático de balanços mensais e exportação de relatórios.',
    tags: ['Node.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'React', 'Docker'],
    techStack: ['Node.js', 'Express', 'TypeScript', 'Prisma ORM', 'PostgreSQL', 'React', 'Tailwind CSS', 'Docker'],
    features: [
      'Autenticação e autorização segura com JWT e criptografia de credenciais',
      'Controle de transações: receitas, despesas fixas/variáveis e cartões',
      'Dashboard analítico com gráficos interativos de fluxo financeiro',
      'Docker Compose pronto para deployment em nuvem ou execução local',
    ],
    githubUrl: 'https://github.com/WanderSlv/financeiroPessoal',
    badge: 'Full Stack',
    stats: [
      { label: 'Banco', value: 'PostgreSQL + Prisma' },
      { label: 'Deploy', value: 'Docker & Vercel' },
    ],
  },
  {
    id: 'leitura-carro-ia',
    title: 'Visão Computacional & Reconhecimento de Placas',
    subtitle: 'Detecção de veículos e OCR inteligente com YOLOv8 e OpenCV',
    category: 'IA & Automação',
    description: 'MVP para controle autônomo de acesso e estacionamento utilizando IA para detecção de veículos e OCR de placas com API FastAPI.',
    longDescription: 'Sistema inteligente de visão computacional que processa streams de vídeo e fotos de câmeras. Aplica o modelo YOLOv8 para detecção precisa da presença veicular e algoritmos EasyOCR para leitura automática e higienização dos caracteres das placas, persistindo os registros em banco e expondo rotas via FastAPI.',
    tags: ['Python', 'YOLOv8', 'OpenCV', 'EasyOCR', 'FastAPI', 'SQLite'],
    techStack: ['Python 3.10+', 'FastAPI', 'YOLOv8 (Ultralytics)', 'OpenCV', 'EasyOCR', 'SQLite', 'Pydantic'],
    features: [
      'Detecção em tempo real de automóveis via rede neural YOLOv8',
      'Reconhecimento óptico de caracteres (OCR) de placas brasileiras/Mercosul',
      'API RESTful ultrarrápida com FastAPI para consulta e registro de entradas/saídas',
      'Armazenamento estruturado de histórico com timestamp e logs de confiança',
    ],
    githubUrl: 'https://github.com/WanderSlv/leituraDeCarro',
    badge: 'Inteligência Artificial',
    stats: [
      { label: 'Modelo', value: 'YOLOv8 Neural Net' },
      { label: 'Framework', value: 'FastAPI + OpenCV' },
    ],
  },
  {
    id: 'gestao-abertura-cargos',
    title: 'Sistema Desktop Corporativo de Gestão de Cargos',
    subtitle: 'App Desktop nativo com Tauri, React e Supabase',
    category: 'Desktop',
    description: 'Software corporativo para departamento de recursos humanos e liderança gerenciarem requisições de abertura de vagas e cargos com autenticação e RLS.',
    longDescription: 'Construído combinando a performance e baixo consumo de memória do Tauri (Rust) com a agilidade do React e Tailwind no front-end. Toda a persistência é gerenciada via Supabase, contando com políticas granulares de segurança (Row Level Security) e sincronização em tempo real das etapas de aprovação.',
    tags: ['Tauri (Rust)', 'React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    techStack: ['Tauri', 'Rust Backend Engine', 'React 18', 'TypeScript', 'Supabase DB', 'Tailwind CSS'],
    features: [
      'Executável Desktop com pegada de memória reduzida via Tauri',
      'Fluxo completo de solicitação, triagem e aprovação de cargos',
      'Segurança corporativa com Supabase Auth e Row Level Security',
      'Interface limpa com suporte a modo escuro e filtros avançados',
    ],
    githubUrl: 'https://github.com/WanderSlv/gestaoAberturaCargoQualita',
    badge: 'Desktop App',
    stats: [
      { label: 'Engine', value: 'Tauri / Rust' },
      { label: 'Auth & DB', value: 'Supabase RLS' },
    ],
  },
  {
    id: 'ecossistema-java-alura',
    title: 'Ecossistema Back-End Java & Microsserviços',
    subtitle: 'Arquitetura limpa, Spring Boot, APIs RESTful e Testes',
    category: 'Back-End',
    description: 'Projetos e implementações no ecossistema Java aplicando boas práticas de Engenharia de Software, princípios SOLID, Spring Boot e persistência SQL.',
    longDescription: 'Repositório de engenharia back-end contendo serviços desenvolvidos ao longo da especialização Java na Alura e projetos independentes. Inclui tratamento centralizado de exceções, validação de DTOs com Bean Validation, segurança com Spring Security e tokens JWT, mapeamentos relacionais com Hibernate/JPA e testes unitários.',
    tags: ['Java', 'Spring Boot', 'Spring Security', 'JPA/Hibernate', 'PostgreSQL', 'JUnit'],
    techStack: ['Java 17/21', 'Spring Boot 3', 'Spring Data JPA', 'Spring Security', 'PostgreSQL', 'Maven'],
    features: [
      'Design em camadas (Controllers, Services, Repositories, DTOs e Mappers)',
      'Segurança com filtros JWT e controle de permissões por perfil (Roles)',
      'Consultas otimizadas com Spring Data JPA e paginação de dados',
      'Tratamento global de erros padronizado com RFC 7807',
    ],
    githubUrl: 'https://github.com/WanderSlv/Estudos-Java---Alura',
    badge: 'Back-End Core',
    stats: [
      { label: 'Padrão', value: 'Clean Architecture' },
      { label: 'Stack', value: 'Java + Spring Boot' },
    ],
  },
  {
    id: 'notificacao-passagens',
    title: 'Crawler & Monitor de Passagens Aéreas',
    subtitle: 'Automação inteligente de busca de tarifas e disparos de alertas',
    category: 'IA & Automação',
    description: 'Robô de monitoramento contínuo de passagens aéreas que analisa variações de preços e dispara notificações automáticas de oportunidades.',
    longDescription: 'Ferramenta desenvolvida em Python para rastrear preços de passagens aéreas em tempo real. Utiliza estratégias de web scraping e consumo de APIs para identificar reduções significativas de tarifa, persistindo o histórico em SQLite para análise de tendências de preços e disparando alertas instantâneos com templates HTML.',
    tags: ['Python', 'Web Scraping', 'Automação', 'SQLite', 'Alertas'],
    techStack: ['Python', 'BeautifulSoup', 'Requests', 'SQLite', 'HTML/CSS Alerts'],
    features: [
      'Monitoramento periódico e agendado de rotas aéreas',
      'Cálculo de variação percentual de preços contra a média histórica',
      'Disparo de alertas formatados com links diretos de compra',
      'Execução leve e silenciosa em background',
    ],
    badge: 'Automação',
    stats: [
      { label: 'Linguagem', value: 'Python' },
      { label: 'Persistência', value: 'Histórico SQLite' },
    ],
  },
  {
    id: 'gestao-comercial-cia',
    title: 'Sistema de Gestão Comercial - Cia da Saúde',
    subtitle: 'Controle de estoque, catálogo de produtos e fluxo comercial',
    category: 'Full Stack',
    description: 'Sistema completo para controle de produtos, gestão de estoque e otimização operacional diária com processamento de planilhas.',
    longDescription: 'Desenvolvido sob medida para simplificar e acelerar a rotina comercial. O sistema oferece importação e exportação de catálogos via arquivos CSV/planilhas, categorização de produtos, controle de validade e lote, além de busca instantânea de itens para atendimento no balcão.',
    tags: ['TypeScript', 'React', 'Node.js', 'CSV Parser', 'Gestão'],
    techStack: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'CSV Processors'],
    features: [
      'Interface rápida para consulta de produtos e especificações',
      'Importador de planilhas de fornecedores com sincronização de preços',
      'Controle visual de disponibilidade e estoque mínimo',
    ],
    githubUrl: 'https://github.com/WanderSlv/gerenciamentoCiaDaSaude',
    badge: 'Comercial',
    stats: [
      { label: 'Objetivo', value: 'Gestão Operacional' },
      { label: 'Foco', value: 'Produtividade' },
    ],
  },
  {
    id: 'ticketmaster-monitor',
    title: 'Monitor de Ingressos & Eventos em Tempo Real',
    subtitle: 'Rastreamento de disponibilidade via Discovery API V2',
    category: 'IA & Automação',
    description: 'Sistema semiassistido para monitoramento contínuo de disponibilidade de ingressos e eventos com integração à Discovery API.',
    longDescription: 'Projeto projetado para monitorar ingressos de alta demanda em eventos ao vivo. Conecta-se à Discovery API V2 oficial, validando disponibilidade de assentos por setor e notificando imediatamente quando novos lotes são liberados.',
    tags: ['JavaScript', 'Node.js', 'API Integration', 'Automação'],
    techStack: ['Node.js', 'JavaScript', 'Discovery API V2', 'Webhooks'],
    features: [
      'Polling inteligente respeitando rate-limits da API oficial',
      'Monitoramento de setores e datas específicas de shows e jogos',
      'Logs detalhados de disponibilidade e status',
    ],
    badge: 'API & Real-Time',
    stats: [
      { label: 'Integração', value: 'Discovery API' },
      { label: 'Modo', value: 'Semiassistido' },
    ],
  },
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    year: '2024 - Presente',
    title: 'Desenvolvedor de Software Full Stack & Projetos Autônomos',
    institution: 'Projetos Independentes & Freelances',
    type: 'project',
    description: 'Desenvolvimento de sistemas corporativos, plataformas de vendas com automação (AutoBot), aplicações desktop em Tauri, visão computacional com YOLOv8/FastAPI e ecossistemas web com React e Spring Boot.',
    skills: ['Java', 'Spring Boot', 'React', 'TypeScript', 'Python', 'Supabase', 'PostgreSQL', 'Tauri'],
  },
  {
    year: '2024',
    title: 'Especialização Back-End Java & Spring Boot',
    institution: 'Alura Cursos Online de Tecnologia',
    type: 'course',
    description: 'Aprofundamento na carreira de desenvolvedor Java, com ênfase em microsserviços, Spring Boot 3, Spring Security, arquitetura RESTful, testes e persistência relacional com JPA/Hibernate.',
    skills: ['Java', 'Spring Boot', 'Spring Security', 'JPA/Hibernate', 'JUnit', 'Clean Code'],
  },
  {
    year: 'Formação Acadêmica',
    title: 'Desenvolvimento de Sistemas & Tecnologia',
    institution: 'Instituto Federal de Santa Catarina (IFSC)',
    location: 'Santa Catarina, Brasil',
    type: 'academic',
    description: 'Formação técnica sólida em lógica de programação, estrutura de dados, algoritmos em C/Java, redes, bancos de dados e engenharia de software.',
    skills: ['Lógica de Programação', 'Estrutura de Dados', 'Bancos de Dados', 'Engenharia de Software', 'C', 'Java'],
  },
];
