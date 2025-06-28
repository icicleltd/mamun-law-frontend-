import React, { useState } from 'react';
// @ts-ignore
import { Scale, Shield, Users, Heart, Calculator, Building, Truck, Gavel, Briefcase } from 'lucide-react';

// Type definitions
interface Service {
  id: string;
  title: string;
  icon: React.ReactElement<null>;
  description: string;
  features: string[];
  process: string[];
}

interface ServicesData {
  [key: string]: Service;
}

type ServiceKey = 'writ' | 'criminal' | 'civil' | 'family' | 'tax' | 'company' | 'custom' | 'arbitration' | 'labor';

interface ContactInfo {
  phone: string;
  email: string;
}

interface LegalServicesProps {
  defaultTab?: ServiceKey;
  contactInfo?: ContactInfo;
}

const ServicesSection: React.FC<LegalServicesProps> = ({ 
  defaultTab = 'writ',
  contactInfo = {
    phone: '+8801713992110',
    email: 'legalmamun@gmail.com'
  }
}) => {
  const [activeTab, setActiveTab] = useState<ServiceKey>(defaultTab);

  const services: ServicesData = {
    writ: {
      id: 'writ',
      title: 'Writ & Fundamental Rights',
      icon: <Scale className="w-6 h-6" />,
      description: 'Constitutional law expertise specializing in fundamental rights protection and writ petitions.',
      features: [
        'Writ of Habeas Corpus',
        'Writ of Mandamus',
        'Writ of Prohibition',
        'Fundamental Rights Violations',
        'Constitutional Challenges',
        'Public Interest Litigation'
      ],
      process: [
        'Case Assessment & Legal Research',
        'Petition Drafting & Documentation',
        'Court Filing & Representation',
        'Follow-up & Compliance Monitoring'
      ]
    },
    criminal: {
      id: 'criminal',
      title: 'Criminal Matter',
      icon: <Shield className="w-6 h-6" />,
      description: 'Comprehensive criminal defense and prosecution services across all levels of courts.',
      features: [
        'Criminal Defense Representation',
        'Bail Applications',
        'Investigation Support',
        'Appeals & Revisions',
        'Victim Rights Protection',
        'White Collar Crime Defense'
      ],
      process: [
        'Initial Consultation & Case Review',
        'Evidence Collection & Analysis',
        'Court Proceedings & Defense',
        'Sentencing & Appeal Strategy'
      ]
    },
    civil: {
      id: 'civil',
      title: 'Civil Matter',
      icon: <Users className="w-6 h-6" />,
      description: 'Expert handling of civil disputes, property matters, and commercial litigation.',
      features: [
        'Property Disputes',
        'Contract Violations',
        'Tort Claims',
        'Injunction Applications',
        'Damage Claims',
        'Civil Appeals'
      ],
      process: [
        'Dispute Analysis & Strategy',
        'Pleading Preparation',
        'Evidence Presentation',
        'Settlement Negotiation'
      ]
    },
    family: {
      id: 'family',
      title: 'Family Matter',
      icon: <Heart className="w-6 h-6" />,
      description: 'Sensitive handling of family disputes with focus on amicable resolutions.',
      features: [
        'Divorce Proceedings',
        'Child Custody',
        'Maintenance Claims',
        'Succession Matters',
        'Adoption Procedures',
        'Domestic Violence Cases'
      ],
      process: [
        'Confidential Consultation',
        'Mediation Attempts',
        'Legal Documentation',
        'Court Representation'
      ]
    },
    tax: {
      id: 'tax',
      title: 'VAT & Tax',
      icon: <Calculator className="w-6 h-6" />,
      description: 'Comprehensive tax advisory and litigation services for individuals and businesses.',
      features: [
        'VAT Compliance & Returns',
        'Income Tax Matters',
        'Tax Appeals',
        'Custom Duty Issues',
        'Tax Planning',
        'Revenue Court Representation'
      ],
      process: [
        'Tax Assessment Review',
        'Compliance Strategy',
        'Appeal Filing',
        'Tribunal Representation'
      ]
    },
    company: {
      id: 'company',
      title: 'Company Matter',
      icon: <Building className="w-6 h-6" />,
      description: 'Corporate legal services including formation, compliance, and commercial disputes.',
      features: [
        'Company Formation',
        'Corporate Compliance',
        'Board Resolutions',
        'Merger & Acquisitions',
        'Shareholder Disputes',
        'Regulatory Compliance'
      ],
      process: [
        'Corporate Structure Analysis',
        'Documentation & Filing',
        'Compliance Monitoring',
        'Strategic Legal Advice'
      ]
    },
    custom: {
      id: 'custom',
      title: 'Custom',
      icon: <Truck className="w-6 h-6" />,
      description: 'Specialized customs and trade law services for import-export businesses.',
      features: [
        'Custom Clearance Issues',
        'Import-Export Compliance',
        'Duty Assessment Appeals',
        'Trade Dispute Resolution',
        'Regulatory Compliance',
        'Anti-Dumping Matters'
      ],
      process: [
        'Trade Assessment',
        'Compliance Review',
        'Appeal Strategy',
        'Tribunal Representation'
      ]
    },
    arbitration: {
      id: 'arbitration',
      title: 'Arbitration',
      icon: <Gavel className="w-6 h-6" />,
      description: 'Alternative dispute resolution through arbitration and mediation services.',
      features: [
        'Commercial Arbitration',
        'Construction Disputes',
        'International Arbitration',
        'Mediation Services',
        'Award Enforcement',
        'Arbitration Advocacy'
      ],
      process: [
        'Dispute Assessment',
        'Arbitrator Selection',
        'Proceeding Management',
        'Award Implementation'
      ]
    },
    labor: {
      id: 'labor',
      title: 'Labor Law',
      icon: <Briefcase className="w-6 h-6" />,
      description: 'Employment and labor law services protecting rights of workers and employers.',
      features: [
        'Employment Contracts',
        'Wrongful Termination',
        'Labor Tribunal Cases',
        'Industrial Disputes',
        'Workers Compensation',
        'Trade Union Matters'
      ],
      process: [
        'Employment Assessment',
        'Legal Strategy Development',
        'Tribunal Representation',
        'Settlement Negotiation'
      ]
    }
  };

  const serviceKeys = Object.keys(services) as ServiceKey[];
  const currentService: Service = services[activeTab];

  const handleTabChange = (serviceKey: ServiceKey): void => {
    setActiveTab(serviceKey);
  };

  const handlePhoneClick = (): void => {
    window.location.href = `tel:${contactInfo.phone}`;
  };

  const handleEmailClick = (): void => {
    window.location.href = `mailto:${contactInfo.email}`;
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Legal Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Expert legal representation across all areas of law by MD. Abdullah Al Mamun, 
          Advocate of the Supreme Court of Bangladesh
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 bg-white p-4 rounded-xl shadow-lg">
        {serviceKeys.map((serviceKey: ServiceKey) => (
          <button
            key={serviceKey}
            onClick={() => handleTabChange(serviceKey)}
            className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeTab === serviceKey
                ? 'bg-blue-600 text-white shadow-md transform scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm'
            }`}
            type="button"
            role="tab"
            aria-selected={activeTab === serviceKey}
            aria-controls={`panel-${serviceKey}`}
          >
            {services[serviceKey].icon}
            <span className="hidden sm:inline">{services[serviceKey].title}</span>
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div 
        className="bg-white rounded-xl shadow-lg overflow-hidden"
        role="tabpanel"
        id={`panel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
      >
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-white bg-opacity-20 p-3 rounded-lg">
              {currentService.icon}
            </div>
            <div>
              <h2 className="text-3xl font-bold">{currentService.title}</h2>
              <p className="text-blue-100 text-lg mt-2">{currentService.description}</p>
            </div>
          </div>
        </div>

        <div className="p-6 grid md:grid-cols-2 gap-8">
          {/* Services Offered */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <Scale className="w-4 h-4 text-blue-600" />
              </div>
              Services Offered
            </h3>
            <div className="space-y-3">
              {currentService.features.map((feature: string, index: number) => (
                <div 
                  key={`feature-${index}`} 
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <Gavel className="w-4 h-4 text-green-600" />
              </div>
              Our Process
            </h3>
            <div className="space-y-4">
              {currentService.process.map((step: string, index: number) => (
                <div key={`process-${index}`} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-gray-700 font-medium">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        {/* <div className="bg-gray-50 p-6 border-t">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Need Legal Assistance?</h3>
            <p className="text-gray-600 mb-4">
              Contact MD. Abdullah Al Mamun for professional legal consultation
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={handlePhoneClick}
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                type="button"
              >
                <span>📞</span>
                {contactInfo.phone}
              </button>
              <button 
                onClick={handleEmailClick}
                className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200"
                type="button"
              >
                <span>✉️</span>
                {contactInfo.email}
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ServicesSection;