export interface Industry {
  id: string;
  title: string;
  description: string;
  icon: string;
  keyPoints: string[];
  services: string[];
  stats?: {
    metric: string;
    value: string;
  }[];
  backgroundColor?: string;
}

export const industries: Industry[] = [
  {
    id: 'financial-services',
    title: 'Financial Services & Quantitative Trading',
    description: 'Leveraging AI algorithms for high-frequency trading and risk management in traditional and decentralized markets',
    icon: '📈',
    keyPoints: [
      'High-frequency trading with 65,000+ TPS on Solana blockchain',
      'AI agents achieving up to 83% annualized returns',
      'Automated risk management with real-time stop-loss mechanisms',
      '86.6% win rates on algorithmic ETF trades'
    ],
    services: [
      'Algorithmic trading system development',
      'DeFi protocol integration',
      'Smart contract-based derivatives',
      'Real-time risk analytics',
      'Quantitative strategy optimization',
      'Market microstructure analysis'
    ],
    stats: [
      { metric: 'Annual Returns', value: '83%' },
      { metric: 'Win Rate', value: '86.6%' },
      { metric: 'Transaction Speed', value: '65K TPS' }
    ],
    backgroundColor: 'from-blue-500/10 to-purple-500/10'
  },
  {
    id: 'defi',
    title: 'Decentralized Finance (DeFi)',
    description: 'Building autonomous, transparent financial protocols with AI-powered optimization and security',
    icon: '💎',
    keyPoints: [
      'AI-powered yield optimization achieving 30%+ APY',
      'Automated liquidity management across multiple DEXs',
      'Cross-chain arbitrage systems with sub-second execution',
      'Fraud detection with 99% accuracy using ensemble learning'
    ],
    services: [
      'DeFi protocol development',
      'Yield optimization strategies',
      'Liquidity pool management',
      'Smart contract security auditing',
      'MEV protection systems',
      'Governance token economics'
    ],
    stats: [
      { metric: 'APY Achieved', value: '30%+' },
      { metric: 'Fraud Detection', value: '99%' },
      { metric: 'Audit Success', value: '40 vulnerabilities prevented' }
    ],
    backgroundColor: 'from-purple-500/10 to-pink-500/10'
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Pharmaceuticals',
    description: 'Securing patient data and accelerating medical research with blockchain-verified AI systems',
    icon: '🏥',
    keyPoints: [
      'Immutable patient data verification on blockchain',
      'AI-powered diagnostic systems with explainable outputs',
      'Drug traceability from manufacturer to patient',
      'Clinical trial data integrity with cryptographic proofs'
    ],
    services: [
      'HIPAA-compliant blockchain solutions',
      'AI diagnostic tool integration',
      'Pharmaceutical supply chain tracking',
      'Electronic health record systems',
      'Clinical trial management platforms',
      'Medical credential verification'
    ],
    stats: [
      { metric: 'Data Security', value: '100%' },
      { metric: 'Processing Speed', value: '10x faster' },
      { metric: 'Compliance Rate', value: '100%' }
    ],
    backgroundColor: 'from-green-500/10 to-teal-500/10'
  },
  {
    id: 'supply-chain',
    title: 'Supply Chain & Logistics',
    description: 'Revolutionizing global supply chains with real-time tracking and automated compliance',
    icon: '🚚',
    keyPoints: [
      'Food traceability reduced from 6+ days to 2.2 seconds',
      '30% operational efficiency improvement through AI optimization',
      'Real-time tracking with IoT sensor integration',
      'Automated compliance reporting and verification'
    ],
    services: [
      'End-to-end supply chain digitization',
      'IoT sensor network deployment',
      'Smart contract automation',
      'Compliance management systems',
      'Predictive maintenance AI',
      'Carbon footprint tracking'
    ],
    stats: [
      { metric: 'Tracing Time', value: '2.2 seconds' },
      { metric: 'Efficiency Gain', value: '30%' },
      { metric: 'Cost Reduction', value: '42%' }
    ],
    backgroundColor: 'from-orange-500/10 to-red-500/10'
  },
  {
    id: 'technology-infrastructure',
    title: 'Technology & Infrastructure',
    description: 'Democratizing AI compute resources through decentralized physical infrastructure networks',
    icon: '🖥️',
    keyPoints: [
      'Decentralized GPU networks with 92.8% cost savings vs AWS',
      'AI model training infrastructure with 12,696 GPU hours delivered',
      'Distributed computing achieving 85.7% success rates',
      'Edge computing integration for real-time processing'
    ],
    services: [
      'DePIN network development',
      'Cloud migration strategies',
      'AI infrastructure architecture',
      'Performance optimization',
      'Kubernetes orchestration',
      'Distributed system design'
    ],
    stats: [
      { metric: 'Cost Savings', value: '92.8%' },
      { metric: 'GPU Utilization', value: '12,696 hours' },
      { metric: 'Success Rate', value: '85.7%' }
    ],
    backgroundColor: 'from-indigo-500/10 to-blue-500/10'
  },
  {
    id: 'creative-digital',
    title: 'Creative & Digital Assets',
    description: 'Empowering creators with blockchain-based ownership and AI-enhanced content generation',
    icon: '🎨',
    keyPoints: [
      'NFT marketplace development with built-in royalties',
      'AI-generated art platforms with provenance tracking',
      'Digital rights management on immutable ledgers',
      'Creator economy solutions with direct monetization'
    ],
    services: [
      'NFT platform development',
      'Digital asset management systems',
      'Smart contract royalty distribution',
      'IPFS integration for metadata',
      'AI content generation tools',
      'Community governance platforms'
    ],
    stats: [
      { metric: 'Transaction Volume', value: '$10M+' },
      { metric: 'Creator Earnings', value: '95% share' },
      { metric: 'Platform Uptime', value: '99.9%' }
    ],
    backgroundColor: 'from-pink-500/10 to-purple-500/10'
  }
];