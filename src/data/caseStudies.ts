export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  metrics: {
    label: string;
    value: string;
    highlight?: boolean;
  }[];
  image?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'tickeron-ai-trading',
    title: 'AI-Powered Trading Platform Achieving 83% Returns',
    client: 'Tickeron',
    industry: 'Financial Services',
    challenge: 'Manual trading inefficiencies and emotional bias were limiting returns and consistency in trading performance',
    solution: 'Implemented AI-powered Financial Learning Models (FLMs) with automated trading using Bayesian optimization, technical indicators (SMA, RSI, ATR), and systematic hyperparameter tuning',
    results: [
      '83% annualized returns achieved over 390 days',
      '86.6% win rate on leveraged and sector ETF trades',
      '$26,392 profit generated on $100,000 initial balance',
      'Consistent performance maintained for 127-390 day periods'
    ],
    technologies: ['Python', 'TensorFlow', 'Bayesian Optimization', 'Machine Learning', 'Technical Analysis', 'Algorithmic Trading'],
    metrics: [
      { label: 'Annual Returns', value: '+83%', highlight: true },
      { label: 'Win Rate', value: '86.6%', highlight: true },
      { label: 'Profit Generated', value: '$26,392' },
      { label: 'Performance Period', value: '390 days' }
    ],
    testimonial: {
      quote: 'The AI trading system has transformed our platform, delivering consistent returns that far exceed traditional strategies while eliminating emotional bias from trading decisions.',
      author: 'Trading Team Lead',
      role: 'Tickeron Financial Technologies'
    }
  },
  {
    id: 'berkeley-gpu-network',
    title: 'Decentralized GPU Network Saves 92.8% on AI Research Costs',
    client: 'UC Berkeley RAIL Lab',
    industry: 'AI Research & Infrastructure',
    challenge: 'High cost of GPU compute resources on traditional cloud providers was limiting AI research capabilities and model training',
    solution: 'Partnered with io.net to leverage decentralized GPU network, aggregating underutilized computational resources from global providers',
    results: [
      '92.8% cost savings compared to AWS H100 pricing',
      '12,696 GPU hours utilized over 66 days',
      '85.7% navigation success rate achieved for AI model',
      '5TB storage provisioned in just 30 minutes'
    ],
    technologies: ['Distributed Computing', 'GPU Clusters', 'Kubernetes', 'Docker', 'PyTorch', 'DePIN'],
    metrics: [
      { label: 'Cost Savings', value: '92.8%', highlight: true },
      { label: 'Total Cost', value: '$11,299 vs $156,034' },
      { label: 'GPU Hours', value: '12,696' },
      { label: 'Model Success Rate', value: '85.7%' }
    ],
    testimonial: {
      quote: 'The decentralized infrastructure provided enterprise-grade reliability at a fraction of the cost, enabling us to complete our research that would have been financially impossible otherwise.',
      author: 'Research Director',
      role: 'UC Berkeley RAIL Lab'
    }
  },
  {
    id: 'smart-contract-security',
    title: 'Comprehensive Security Audit Prevents Critical Vulnerabilities',
    client: 'Web3 DeFi Protocol',
    industry: 'Blockchain Security',
    challenge: 'New DeFi protocol needed comprehensive security audit before mainnet launch to prevent potential exploits and losses',
    solution: 'Conducted hybrid White-Box audit combining automated tools (Slither, Mythril) with manual review, custom fuzz testing, and AI-powered vulnerability detection',
    results: [
      '40 vulnerabilities discovered and fixed',
      '2 critical vulnerabilities prevented',
      'Risk level reduced from HIGH to MINIMAL',
      'Secure mainnet launch with zero exploits'
    ],
    technologies: ['Solidity', 'Slither', 'Mythril', 'Fuzz Testing', 'Static Analysis', 'AI Security Tools'],
    metrics: [
      { label: 'Vulnerabilities Found', value: '40', highlight: true },
      { label: 'Critical Issues', value: '2 prevented' },
      { label: 'Risk Reduction', value: 'HIGH → MINIMAL' },
      { label: 'Post-Launch Incidents', value: '0' }
    ],
    testimonial: {
      quote: 'The comprehensive audit gave us confidence to launch. Finding those critical vulnerabilities before deployment saved us from potential millions in losses.',
      author: 'Chief Technology Officer',
      role: 'DeFi Protocol Team'
    }
  },
  {
    id: 'walmart-food-traceability',
    title: 'Blockchain Reduces Food Tracing from Days to Seconds',
    client: 'Walmart',
    industry: 'Supply Chain & Retail',
    challenge: 'Food safety incidents required days to trace contamination sources, risking consumer health and massive product recalls',
    solution: 'Implemented blockchain-based food traceability system with IoT sensors, creating immutable record of food journey from farm to store',
    results: [
      'Tracing time reduced from 6+ days to 2.2 seconds',
      '100% supply chain visibility achieved',
      '30% reduction in food waste',
      'Compliance reporting automated'
    ],
    technologies: ['Hyperledger Fabric', 'IoT Sensors', 'RFID', 'Smart Contracts', 'Supply Chain APIs', 'Real-time Analytics'],
    metrics: [
      { label: 'Tracing Speed', value: '2.2 seconds', highlight: true },
      { label: 'Previous Time', value: '6+ days' },
      { label: 'Waste Reduction', value: '30%' },
      { label: 'Visibility', value: '100%' }
    ],
    testimonial: {
      quote: 'The ability to trace any product in seconds has revolutionized our food safety protocols and dramatically reduced the scope of recalls when issues arise.',
      author: 'VP of Food Safety',
      role: 'Walmart'
    }
  },
  {
    id: 'voltr-defi-optimization',
    title: 'AI-Powered Yield Optimization Achieves 30%+ APY',
    client: 'Voltr Protocol',
    industry: 'Decentralized Finance',
    challenge: 'DeFi users struggling to optimize yields across multiple protocols and manage impermanent loss risks',
    solution: 'Built AI-ready yield optimization protocol on Solana with dynamic capital allocation, automated rebalancing, and risk assessment across Drift, Marginfi, and Solend',
    results: [
      '30%+ APY achieved on leveraged positions',
      'Automated rebalancing every 4 hours',
      'Risk-adjusted returns improved by 45%',
      'Gas costs reduced by 78% using Solana'
    ],
    technologies: ['Solana', 'Rust', 'Machine Learning', 'Smart Contracts', 'DeFi Protocols', 'Yield Aggregation'],
    metrics: [
      { label: 'APY Achieved', value: '30%+', highlight: true },
      { label: 'Risk-Adjusted Returns', value: '+45%' },
      { label: 'Gas Savings', value: '78%' },
      { label: 'Rebalancing Frequency', value: '6x daily' }
    ],
    testimonial: {
      quote: 'Voltr\'s AI optimization has made sophisticated DeFi strategies accessible to everyone, delivering institutional-grade returns with minimal effort.',
      author: 'DeFi Strategy Lead',
      role: 'Voltr Protocol'
    }
  },
  {
    id: 'fraud-detection-system',
    title: 'Machine Learning Achieves 99% Fraud Detection Accuracy',
    client: 'European Banking Consortium',
    industry: 'Financial Security',
    challenge: 'Rising cryptocurrency fraud and money laundering requiring real-time detection across millions of transactions',
    solution: 'Deployed ensemble learning approach combining multiple ML models to analyze on-chain patterns and identify fraudulent transactions in real-time',
    results: [
      '99% fraud detection accuracy achieved',
      'False positive rate reduced to below 3%',
      '70% of all fraudulent transactions caught',
      '42% reduction in financial losses'
    ],
    technologies: ['Python', 'TensorFlow', 'Ensemble Learning', 'Blockchain Analytics', 'Real-time Processing', 'Pattern Recognition'],
    metrics: [
      { label: 'Detection Accuracy', value: '99%', highlight: true },
      { label: 'False Positives', value: '<3%' },
      { label: 'Loss Reduction', value: '42%' },
      { label: 'Transactions Analyzed', value: '10M+ daily' }
    ],
    testimonial: {
      quote: 'The AI system has become our first line of defense against fraud, catching sophisticated schemes that would have been impossible to detect manually.',
      author: 'Head of Risk Management',
      role: 'European Banking Consortium'
    }
  }
];