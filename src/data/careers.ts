export interface Role {
  id: string;
  title: string;
  category: 'technical' | 'hybrid' | 'non-technical';
  department: string;
  location: string;
  type: 'full-time' | 'contract' | 'dao';
  level: 'junior' | 'mid' | 'senior' | 'lead';
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
  compensationRange: {
    min: number;
    max: number;
    currency: string;
    equity?: string;
    tokens?: boolean;
  };
  benefits?: string[];
  technologies: string[];
}

export const careers: Role[] = [
  // Technical Roles
  {
    id: 'blockchain-developer',
    title: 'Blockchain Developer',
    category: 'technical',
    department: 'Engineering',
    location: 'Remote / Tokyo',
    type: 'full-time',
    level: 'senior',
    responsibilities: [
      'Design and build blockchain networks and decentralized applications',
      'Write and deploy smart contracts on Ethereum, Solana, and other chains',
      'Integrate blockchain services with existing systems',
      'Troubleshoot complex blockchain infrastructure issues',
      'Optimize gas costs and transaction throughput',
      'Conduct code reviews and mentor junior developers'
    ],
    requirements: [
      '5+ years software development experience',
      'Deep expertise in Solidity, Rust, or Move',
      'Experience with Web3.js, Ethers.js, or similar libraries',
      'Strong understanding of consensus algorithms (PoW, PoS, PBFT)',
      'Knowledge of blockchain protocols (Ethereum, Hyperledger, Solana)',
      'Experience with smart contract security best practices'
    ],
    niceToHave: [
      'Experience with Layer 2 solutions (Optimism, Arbitrum)',
      'Knowledge of MEV and sandwich attack prevention',
      'Contributions to open-source blockchain projects',
      'Experience with cross-chain bridges'
    ],
    compensationRange: {
      min: 150000,
      max: 250000,
      currency: 'USD',
      equity: '0.1-0.5%',
      tokens: true
    },
    benefits: [
      'Full remote work flexibility',
      'Health, dental, and vision insurance',
      'Annual learning budget ($5,000)',
      'Conference attendance sponsorship',
      'Token allocation in projects'
    ],
    technologies: ['Solidity', 'Rust', 'Web3.js', 'Hardhat', 'Foundry', 'IPFS', 'The Graph']
  },
  {
    id: 'ai-engineer',
    title: 'AI/Machine Learning Engineer',
    category: 'technical',
    department: 'AI Research',
    location: 'Remote / San Francisco',
    type: 'full-time',
    level: 'senior',
    responsibilities: [
      'Develop and deploy AI models for trading and optimization',
      'Build ML pipelines for real-time data processing',
      'Implement reinforcement learning for autonomous agents',
      'Optimize model performance and reduce inference latency',
      'Research and implement cutting-edge AI techniques',
      'Collaborate with blockchain team on AI-blockchain integration'
    ],
    requirements: [
      'MS/PhD in Computer Science, AI, or related field',
      'Strong proficiency in Python and ML frameworks (TensorFlow, PyTorch)',
      'Experience with deep learning and neural networks',
      'Knowledge of statistics, linear algebra, and calculus',
      'Experience deploying models to production',
      'Track record of shipping AI-powered products'
    ],
    niceToHave: [
      'Experience with Large Language Models (LLMs)',
      'Knowledge of quantitative finance',
      'Experience with distributed training',
      'Published research papers in AI/ML'
    ],
    compensationRange: {
      min: 180000,
      max: 350000,
      currency: 'USD',
      equity: '0.2-1.0%'
    },
    benefits: [
      'Flexible working hours',
      'GPU compute budget',
      'Patent filing support',
      'Sabbatical opportunities',
      'Top-tier health coverage'
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Kubernetes', 'CUDA', 'Transformers', 'JAX']
  },
  {
    id: 'quantitative-researcher',
    title: 'Quantitative Researcher',
    category: 'technical',
    department: 'Trading',
    location: 'New York / London / Singapore',
    type: 'full-time',
    level: 'lead',
    responsibilities: [
      'Design and backtest quantitative trading strategies',
      'Analyze market microstructure and identify alpha opportunities',
      'Develop predictive models using alternative data sources',
      'Optimize portfolio construction and risk management',
      'Collaborate with traders on strategy implementation',
      'Research DeFi protocols for yield optimization'
    ],
    requirements: [
      'Advanced degree in Mathematics, Physics, or Quantitative Finance',
      'Expertise in time-series analysis and statistical modeling',
      'Proficiency in Python, R, and C++',
      'Deep understanding of financial markets and derivatives',
      'Experience with high-frequency data analysis',
      'Strong research and analytical skills'
    ],
    niceToHave: [
      'Published research in quantitative finance',
      'Experience with cryptocurrency markets',
      'Knowledge of MEV and DeFi protocols',
      'Kaggle competition achievements'
    ],
    compensationRange: {
      min: 200000,
      max: 500000,
      currency: 'USD',
      equity: 'Performance-based bonus 50-200%'
    },
    benefits: [
      'Profit sharing arrangement',
      'Access to proprietary data',
      'Conference and training budget',
      'Relocation assistance',
      'Visa sponsorship available'
    ],
    technologies: ['Python', 'R', 'C++', 'MATLAB', 'kdb+/q', 'SQL', 'Arctic', 'QuantLib']
  },

  // Hybrid Roles
  {
    id: 'web3-data-scientist',
    title: 'Web3 Data Scientist',
    category: 'hybrid',
    department: 'Analytics',
    location: 'Remote',
    type: 'full-time',
    level: 'mid',
    responsibilities: [
      'Extract insights from on-chain and off-chain data',
      'Build dashboards for DeFi protocol analytics',
      'Identify patterns in blockchain transactions',
      'Develop ML models for fraud detection',
      'Analyze tokenomics and protocol efficiency',
      'Create data pipelines for real-time analytics'
    ],
    requirements: [
      '3+ years data science experience',
      'Proficiency in Python, SQL, and data visualization',
      'Understanding of blockchain data structures',
      'Experience with Web3 analytics tools (Dune, The Graph)',
      'Knowledge of DeFi protocols and tokenomics',
      'Strong statistical analysis skills'
    ],
    niceToHave: [
      'Experience with Subgraphs',
      'Knowledge of MEV analysis',
      'Experience with real-time data processing',
      'Understanding of smart contract events'
    ],
    compensationRange: {
      min: 130000,
      max: 200000,
      currency: 'USD',
      tokens: true
    },
    technologies: ['Python', 'SQL', 'Dune Analytics', 'The Graph', 'Pandas', 'Apache Spark', 'Tableau']
  },
  {
    id: 'ai-smart-contract-auditor',
    title: 'AI-Assisted Smart Contract Auditor',
    category: 'hybrid',
    department: 'Security',
    location: 'Remote',
    type: 'contract',
    level: 'senior',
    responsibilities: [
      'Conduct comprehensive smart contract security audits',
      'Develop and train AI models for vulnerability detection',
      'Perform automated and manual code review',
      'Write detailed audit reports and recommendations',
      'Research new attack vectors and security patterns',
      'Collaborate with development teams on fixes'
    ],
    requirements: [
      'Deep expertise in Solidity and EVM',
      'Experience with security tools (Slither, Mythril, Echidna)',
      'Understanding of common vulnerabilities (reentrancy, overflow)',
      'Experience with formal verification methods',
      'Knowledge of ML/AI for pattern recognition',
      'Strong technical writing skills'
    ],
    niceToHave: [
      'Bug bounty track record',
      'Certified blockchain security professional',
      'Experience with ZK-proofs',
      'Published security research'
    ],
    compensationRange: {
      min: 150,
      max: 300,
      currency: 'USD/hour',
      tokens: true
    },
    technologies: ['Solidity', 'Python', 'Foundry', 'Slither', 'Mythril', 'Formal Verification']
  },
  {
    id: 'defi-protocol-architect',
    title: 'DeFi Protocol Architect',
    category: 'hybrid',
    department: 'Protocol Design',
    location: 'Remote',
    type: 'full-time',
    level: 'lead',
    responsibilities: [
      'Design tokenomics and incentive mechanisms',
      'Architect cross-chain DeFi protocols',
      'Implement AI-powered yield strategies',
      'Optimize protocol efficiency and gas costs',
      'Lead protocol governance initiatives',
      'Research and integrate new DeFi primitives'
    ],
    requirements: [
      '5+ years DeFi protocol development',
      'Expert knowledge of AMMs, lending, and derivatives',
      'Experience with protocol economics and game theory',
      'Proficiency in Solidity and protocol architecture',
      'Understanding of AI/ML for optimization',
      'Track record of successful protocol launches'
    ],
    compensationRange: {
      min: 180000,
      max: 300000,
      currency: 'USD',
      equity: '0.5-2.0%',
      tokens: true
    },
    technologies: ['Solidity', 'Rust', 'Python', 'Hardhat', 'DeFi Protocols', 'Game Theory']
  },

  // Non-Technical Roles
  {
    id: 'blockchain-consultant',
    title: 'Blockchain Strategy Consultant',
    category: 'non-technical',
    department: 'Consulting',
    location: 'Remote / Travel Required',
    type: 'full-time',
    level: 'senior',
    responsibilities: [
      'Advise enterprises on blockchain adoption strategies',
      'Conduct feasibility studies and ROI analysis',
      'Design blockchain transformation roadmaps',
      'Lead client workshops and presentations',
      'Identify use cases and implementation opportunities',
      'Manage stakeholder relationships'
    ],
    requirements: [
      'MBA or equivalent business experience',
      '5+ years management consulting experience',
      'Deep understanding of blockchain technology and use cases',
      'Excellent presentation and communication skills',
      'Experience with enterprise transformation projects',
      'Strong business analysis capabilities'
    ],
    compensationRange: {
      min: 150000,
      max: 250000,
      currency: 'USD',
      equity: '0.1-0.5%'
    },
    technologies: ['Blockchain Platforms', 'Enterprise Architecture', 'Business Analysis']
  },
  {
    id: 'dao-community-manager',
    title: 'DAO Community Manager',
    category: 'non-technical',
    department: 'Community',
    location: 'Remote',
    type: 'dao',
    level: 'mid',
    responsibilities: [
      'Manage and grow DAO community across platforms',
      'Facilitate governance discussions and proposals',
      'Organize community events and AMAs',
      'Create engaging content and updates',
      'Coordinate with core contributors',
      'Handle community support and feedback'
    ],
    requirements: [
      '3+ years community management experience',
      'Deep understanding of DAO governance',
      'Active in Web3/DeFi communities',
      'Excellent written and verbal communication',
      'Experience with Discord, Telegram, Twitter',
      'Ability to work across time zones'
    ],
    compensationRange: {
      min: 80000,
      max: 150000,
      currency: 'USD',
      tokens: true
    },
    technologies: ['Discord', 'Telegram', 'Snapshot', 'Community Tools', 'Social Media']
  }
];

// Additional metadata for the careers section
export const careerCategories = {
  technical: {
    title: 'Technical Roles',
    description: 'Build the future of decentralized technology',
    icon: '💻'
  },
  hybrid: {
    title: 'Hybrid Roles',
    description: 'Bridge the gap between AI and blockchain',
    icon: '🔗'
  },
  'non-technical': {
    title: 'Non-Technical Roles',
    description: 'Drive strategy and community growth',
    icon: '🚀'
  }
};

export const marketContext = {
  industry: 'AI & Blockchain',
  marketSize: '$943B by 2032',
  growthRate: '45% CAGR',
  openRoles: careers.length,
  averageSalary: '$200,000+',
  remotePercentage: '85%'
};