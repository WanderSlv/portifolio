export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Sistemas & Web' | 'Automações & Bots' | 'Visão Computacional & IA' | 'Desktop';
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
    level: string; // 'Aplicado com IA' | 'Em Exploração' | 'Prático'
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
  title: 'Criador de Soluções & Automações com IA',
  subtitle: 'Projetos com IA • Automações • Chatbots • Web & Desktop',
  bio: 'Exploro e utilizo o poder da Inteligência Artificial como principal alavanca para idealizar, prototipar e criar aplicações funcionais, automações comerciais, chatbots e sistemas completos — transformando ideias e necessidades em ferramentas práticas.',
  location: 'Santa Catarina, Brasil',
  email: 'wandermaci3l@gmail.com',
  github: 'https://github.com/WanderSlv',
  githubUsername: 'WanderSlv',
  linkedin: 'https://www.linkedin.com/in/wander-silva-andrade/',
  status: 'Criando projetos e soluções potencializados por IA',
  avatarUrl: 'https://avatars.githubusercontent.com/u/165096619?v=4',
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'IA, Automações & Agentes',
    iconName: 'Cpu',
    skills: [
      { name: 'Engenharia de Prompt & IA Generativa', level: 'Prático', description: 'Uso avançado de LLMs para criação e arquitetura de código, automação de fluxos e resolução de problemas' },
      { name: 'YOLOv8 & OpenCV', level: 'Aplicado com IA', description: 'Implementação assistida por IA para detecção veicular e processamento de imagens' },
      { name: 'Web Scraping & Bots', level: 'Aplicado com IA', description: 'Criação de robôs para monitoramento de tarifas aéreas e eventos em tempo real' },
      { name: 'Chatbots & Fluxos de Atendimento', level: 'Prático', description: 'Modelagem de conversas inteligentes e automação para captação de clientes' },
    ],
  },
  {
    title: 'Back-End & Bancos de Dados',
    iconName: 'Server',
    skills: [
      { name: 'Node.js & TypeScript', level: 'Aplicado com IA', description: 'Construção de APIs RESTful, regras de negócio e integração com bancos relacionais' },
      { name: 'Python & FastAPI', level: 'Aplicado com IA', description: 'Serviços de alta performance para pipelines de visão computacional e automações' },
      { name: 'PostgreSQL & Supabase', level: 'Aplicado com IA', description: 'Persistência de dados, autenticação de usuários e controle de segurança' },
      { name: 'Java & Spring Boot', level: 'Em Exploração', description: 'Conceitos de POO, estudos em microsserviços e estruturação de APIs' },
    ],
  },
  {
    title: 'Front-End & Interfaces',
    iconName: 'Layout',
    skills: [
      { name: 'React & Vite', level: 'Aplicado com IA', description: 'Desenvolvimento de interfaces modernas, responsivas e painéis administrativos' },
      { name: 'Tailwind CSS', level: 'Prático', description: 'Estilização rápida, layouts modernos, responsividade e modo escuro' },
      { name: 'Tauri (Desktop)', level: 'Aplicado com IA', description: 'Criação de aplicativos desktop corporativos leves com base em tecnologias web' },
      { name: 'Next.js', level: 'Em Exploração', description: 'Estruturação de páginas e aplicações web modernas' },
    ],
  },
  {
    title: 'Ferramentas & Ambiente',
    iconName: 'Database',
    skills: [
      { name: 'Git & GitHub', level: 'Prático', description: 'Versionamento de código, controle de histórico e publicação de projetos' },
      { name: 'Docker', level: 'Aplicado com IA', description: 'Subida e orquestração de bancos e serviços em containers' },
      { name: 'Linux', level: 'Prático', description: 'Ambiente de desenvolvimento e execução de scripts' },
      { name: 'Deploy & Cloud (Vercel/Render)', level: 'Prático', description: 'Hospedagem rápida e publicação contínua de aplicações' },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'autobot-veiculos',
    title: 'AutoBot — Plataforma de Venda de Veículos',
    subtitle: 'Automação comercial e catálogo inteligente para concessionárias',
    category: 'Sistemas & Web',
    description: 'Plataforma criada com auxílio de IA para concessionárias e lojas automatizarem atendimento, catálogo dinâmico de veículos e captura de leads.',
    longDescription: 'O AutoBot foi desenvolvido com apoio de IA para resolver o gargalo de atendimento no setor automotivo. O sistema reúne uma vitrine interativa com filtros avançados por modelo, ano, quilometragem e faixa de preço, combinada a um motor de gestão de estoque e canais de atendimento digital.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Supabase', 'IA & Chatbots'],
    techStack: ['React 18', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Lucide Icons', 'REST API'],
    features: [
      'Catálogo interativo com filtros dinâmicos e galeria em alta resolução',
      'Gerenciamento de estoque com especificações detalhadas dos veículos',
      'Integração de canais de atendimento e captura de propostas de compra',
      'Painel administrativo para controle de status e métricas de conversão',
    ],
    githubUrl: 'https://github.com/WanderSlv/vendaDeVeiculos',
    badge: 'Criado com IA',
    stats: [
      { label: 'Método', value: 'Desenvolvimento via IA' },
      { label: 'Status', value: '100% Funcional' },
    ],
  },
  {
    id: 'financeiro-pessoal',
    title: 'Sistema de Gestão Financeira Pessoal',
    subtitle: 'Controle inteligente de fluxo de caixa, despesas e relatórios',
    category: 'Sistemas & Web',
    description: 'Aplicação completa desenvolvida com suporte de IA com autenticação JWT, controle de receitas, despesas, cartões de crédito e gráficos analíticos.',
    longDescription: 'Construído utilizando ferramentas de IA para gerar a estrutura de back-end (Node.js + Express + TypeScript + Prisma ORM) e front-end (React + Tailwind). O sistema conta com autenticação JWT, controle de categorias financeiras, cálculo automático de balanços mensais e deploy via Docker.',
    tags: ['Node.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'React', 'Docker'],
    techStack: ['Node.js', 'Express', 'TypeScript', 'Prisma ORM', 'PostgreSQL', 'React', 'Tailwind CSS', 'Docker'],
    features: [
      'Autenticação e autorização segura com JWT e criptografia de credenciais',
      'Controle de transações: receitas, despesas fixas/variáveis e cartões',
      'Dashboard analítico com gráficos interativos de fluxo financeiro',
      'Docker Compose pronto para deployment em nuvem ou execução local',
    ],
    githubUrl: 'https://github.com/WanderSlv/financeiroPessoal',
    badge: 'Criado com IA',
    stats: [
      { label: 'Banco', value: 'PostgreSQL + Prisma' },
      { label: 'Deploy', value: 'Docker & Vercel' },
    ],
  },
  {
    id: 'leitura-carro-ia',
    title: 'Visão Computacional & Reconhecimento de Placas',
    subtitle: 'Detecção de veículos e OCR inteligente com YOLOv8 e OpenCV',
    category: 'Visão Computacional & IA',
    description: 'MVP funcional para controle autônomo de acesso e estacionamento utilizando modelos de IA para detecção de veículos e OCR de placas.',
    longDescription: 'Sistema de visão computacional desenvolvido com orientação de IA que processa streams de vídeo e fotos de câmeras. Aplica o modelo YOLOv8 para detecção precisa da presença veicular e algoritmos EasyOCR para leitura automática e higienização de placas, expondo endpoints via FastAPI.',
    tags: ['Python', 'YOLOv8', 'OpenCV', 'EasyOCR', 'FastAPI', 'SQLite'],
    techStack: ['Python 3.10+', 'FastAPI', 'YOLOv8 (Ultralytics)', 'OpenCV', 'EasyOCR', 'SQLite', 'Pydantic'],
    features: [
      'Detecção em tempo real de automóveis via rede neural YOLOv8',
      'Reconhecimento óptico de caracteres (OCR) de placas brasileiras/Mercosul',
      'API RESTful ultrarrápida com FastAPI para consulta e registro de acessos',
      'Armazenamento estruturado de histórico com timestamp e logs de confiança',
    ],
    githubUrl: 'https://github.com/WanderSlv/leituraDeCarro',
    badge: 'Visão Computacional',
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
    description: 'Software corporativo criado com IA para RH e liderança gerenciarem requisições de vagas e cargos com autenticação segura.',
    longDescription: 'Criado com auxílio de IA combinando o framework Tauri (Rust) com a agilidade do React e Tailwind no front-end. Toda a persistência é gerenciada via Supabase, contando com políticas granulares de segurança (Row Level Security) e sincronização em nuvem.',
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
    id: 'notificacao-passagens',
    title: 'Crawler & Monitor de Passagens Aéreas',
    subtitle: 'Automação inteligente de busca de tarifas e disparos de alertas',
    category: 'Automações & Bots',
    description: 'Robô de monitoramento contínuo de passagens aéreas que analisa variações de preços e dispara notificações automáticas de oportunidades.',
    longDescription: 'Ferramenta desenvolvida em Python com auxílio de IA para rastrear preços de passagens aéreas em tempo real. Utiliza estratégias de web scraping para identificar reduções significativas de tarifa, persistindo o histórico em SQLite e disparando alertas formatados.',
    tags: ['Python', 'Web Scraping', 'Automação', 'SQLite', 'Alertas'],
    techStack: ['Python', 'BeautifulSoup', 'Requests', 'SQLite', 'HTML/CSS Alerts'],
    features: [
      'Monitoramento periódico e agendado de rotas aéreas',
      'Cálculo de variação percentual de preços contra a média histórica',
      'Disparo de alertas formatados com links diretos de compra',
      'Execução leve e silenciosa em background',
    ],
    badge: 'Automação com IA',
    stats: [
      { label: 'Linguagem', value: 'Python' },
      { label: 'Persistência', value: 'Histórico SQLite' },
    ],
  },
  {
    id: 'gestao-comercial-cia',
    title: 'Sistema de Gestão Comercial - Cia da Saúde',
    subtitle: 'Controle de estoque, catálogo de produtos e fluxo comercial',
    category: 'Sistemas & Web',
    description: 'Sistema criado com IA para controle de produtos, gestão de estoque e otimização operacional diária com processamento de planilhas.',
    longDescription: 'Desenvolvido com apoio de IA sob medida para simplificar a rotina comercial. O sistema oferece importação e exportação de catálogos via arquivos CSV/planilhas, categorização de produtos, controle de validade e busca instantânea de itens.',
    tags: ['TypeScript', 'React', 'Node.js', 'CSV Parser', 'Gestão'],
    techStack: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'CSV Processors'],
    features: [
      'Interface rápida para consulta de produtos e especificações',
      'Importador de planilhas de fornecedores com sincronização de preços',
      'Controle visual de disponibilidade e estoque mínimo',
    ],
    githubUrl: 'https://github.com/WanderSlv/gerenciamentoCiaDaSaude',
    badge: 'Gestão & Negócios',
    stats: [
      { label: 'Objetivo', value: 'Gestão Operacional' },
      { label: 'Foco', value: 'Produtividade' },
    ],
  },
  {
    id: 'ticketmaster-monitor',
    title: 'Monitor de Ingressos & Eventos em Tempo Real',
    subtitle: 'Rastreamento de disponibilidade via Discovery API V2',
    category: 'Automações & Bots',
    description: 'Sistema semiassistido para monitoramento contínuo de disponibilidade de ingressos e eventos com integração à Discovery API.',
    longDescription: 'Projeto projetado com assistência de IA para monitorar ingressos de alta demanda em eventos ao vivo. Conecta-se à Discovery API V2 oficial, validando disponibilidade de assentos por setor e notificando quando novos lotes são liberados.',
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
  {
    id: 'ecossistema-java-alura',
    title: 'Estudos Práticos em Java & Spring Boot',
    subtitle: 'Explorando conceitos de back-end e APIs com apoio de IA',
    category: 'Sistemas & Web',
    description: 'Exercícios, projetos e experimentos explorando a linguagem Java, Spring Boot e persistência SQL.',
    longDescription: 'Repositório de estudos práticos realizados ao longo de cursos de tecnologia e complementados com o uso de IA para esclarecer dúvidas de sintaxe, boas práticas, modelagem de dados e conceitos de microsserviços.',
    tags: ['Java', 'Spring Boot', 'Spring Security', 'JPA/Hibernate', 'PostgreSQL'],
    techStack: ['Java', 'Spring Boot', 'Spring Data JPA', 'PostgreSQL'],
    features: [
      'Estruturação de entidades e relacionamentos em banco de dados',
      'Prática com controllers e endpoints REST',
      'Experimentos com validações e segurança básica',
    ],
    githubUrl: 'https://github.com/WanderSlv/Estudos-Java---Alura',
    badge: 'Estudos & Prática',
    stats: [
      { label: 'Foco', value: 'Aprendizado Contínuo' },
      { label: 'Ecossistema', value: 'Java + Spring' },
    ],
  },
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    year: '2024 - Presente',
    title: 'Criação de Soluções, MVPs & Automações com IA',
    institution: 'Projetos Práticos & Desenvolvimento com IA',
    type: 'project',
    description: 'Desenvolvimento e prototipagem de sistemas comerciais (AutoBot), softwares desktop com Tauri, automações com Python/YOLOv8, e aplicações web integradas utilizando ferramentas de IA generativa.',
    skills: ['Inteligência Artificial', 'Engenharia de Prompt', 'React', 'Python', 'Automação', 'Tauri', 'Supabase'],
  },
  {
    year: '2024',
    title: 'Estudos em Tecnologia & Back-End',
    institution: 'Alura Cursos Online de Tecnologia',
    type: 'course',
    description: 'Aprofundamento em fundamentos de programação, lógica, conceitos de desenvolvimento back-end e ecossistema de software.',
    skills: ['Lógica de Programação', 'Java', 'Spring Boot', 'Bancos de Dados'],
  },
  {
    year: 'Formação Acadêmica',
    title: 'Desenvolvimento de Sistemas & Tecnologia',
    institution: 'Instituto Federal de Santa Catarina (IFSC)',
    location: 'Santa Catarina, Brasil',
    type: 'academic',
    description: 'Fundamentos acadêmicos em tecnologia, raciocínio lógico, sistemas de informação e estrutura de computação.',
    skills: ['Lógica', 'Algoritmos', 'Sistemas de Informação', 'Tecnologia'],
  },
];
