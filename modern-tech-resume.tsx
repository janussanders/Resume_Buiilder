import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Award, Terminal, Cpu, Zap } from 'lucide-react';

const ModernResume = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header Section with Photo */}
      <header className="mb-8">
        <div className="flex justify-between items-start">
          <div className="flex gap-6 items-start">
            <div className="w-40 h-40 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/api/placeholder/160/160" 
                alt="Professional headshot" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-800">Janus L. Sanders</h1>
              <h2 className="text-xl text-blue-600 mt-2">IoT & Renewable Energy Innovation Leader</h2>
              <div className="mt-4 flex flex-col gap-2 text-slate-600">
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <a href="mailto:janussanders@gmail.com" className="hover:text-blue-600">janussanders@gmail.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>360-953-9443</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>Pahoa, Hawaii</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-slate-600">
            <div className="flex items-center gap-2">
              <Github size={16} />
              <a href="https://github.com/janussanders" className="hover:text-blue-600">github.com/janussanders</a>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin size={16} />
              <a href="https://linkedin.com/in/janus-sanders" className="hover:text-blue-600">linkedin.com/in/janus-sanders</a>
            </div>
          </div>
        </div>
      </header>

      {/* Innovation Highlight */}
      <div className="bg-blue-600 text-white p-6 rounded-lg mb-8">
        <h3 className="text-lg font-semibold mb-3">🚀 Innovation Focus</h3>
        <p className="leading-relaxed">
          Pioneering sustainable technology solutions through IoT integration and machine learning. 
          Currently developing groundbreaking prototypes using native Hawaiian resources, 
          while leveraging 34+ years of expertise in embedded systems and renewable energy.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Terminal className="text-blue-600" />
          Technical Arsenal
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold text-blue-600 mb-2">Core Tech</h4>
            <ul className="space-y-1 text-slate-600">
              <li>• C++, C#, Python</li>
              <li>• OpenWRT, Arduino</li>
              <li>• REST API Development</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold text-blue-600 mb-2">IoT & ML</h4>
            <ul className="space-y-1 text-slate-600">
              <li>• Omega Onion 2S+</li>
              <li>• BLE Sense Simba</li>
              <li>• Stanford ML Algorithms</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold text-blue-600 mb-2">Systems</h4>
            <ul className="space-y-1 text-slate-600">
              <li>• SCADA Integration</li>
              <li>• High Voltage Systems</li>
              <li>• 3D Printing & PCB Design</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Cpu className="text-blue-600" />
          Featured Innovation Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="font-semibold text-blue-600 mb-2">IoT Yeast Prototype System</h4>
            <p className="text-slate-600">
              Pioneered an IoT-driven biological system using native Hawaiian resources. 
              Implemented real-time monitoring with Omega Onion and ML-optimized environmental controls.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="font-semibold text-blue-600 mb-2">Smart Wind Farm Repower</h4>
            <p className="text-slate-600">
              Led 50MW wind farm modernization using ML-enhanced SCADA systems, 
              improving grid integration and renewable energy optimization.
            </p>
          </div>
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Zap className="text-blue-600" />
          Leadership Journey
        </h3>
        <div className="space-y-6">
          <div className="relative pl-8 border-l-2 border-blue-200">
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-0"></div>
            <h4 className="font-semibold text-blue-600">Assistant Vice President, Project Management</h4>
            <p className="text-slate-600">WSP USA | 2021 - Present</p>
            <p className="mt-2 text-slate-600">
              Leading large-scale renewable energy projects, focusing on wind, solar, and battery storage innovations.
              Awarded for excellence in building high-performing tech teams.
            </p>
          </div>
          <div className="relative pl-8 border-l-2 border-blue-200">
            <div className="absolute w-4 h-4 bg-blue-400 rounded-full -left-[9px] top-0"></div>
            <h4 className="font-semibold text-blue-600">Lead Consultant, Project Management</h4>
            <p className="text-slate-600">WSP USA | 2018 - 2021</p>
            <p className="mt-2 text-slate-600">
              Integrated ML algorithms for predictive maintenance and energy optimization across client portfolios.
            </p>
          </div>
        </div>
      </div>

      {/* Education & Certifications */}
      <div>
        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Award className="text-blue-600" />
          Education & Achievements
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold text-blue-600 mb-2">Education</h4>
            <ul className="space-y-2 text-slate-600">
              <li>• B.S. Power Systems Engineering - Washington State University</li>
              <li>• Machine Learning Certificate - Stanford Online (2023)</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold text-blue-600 mb-2">Recent Recognition</h4>
            <ul className="space-y-2 text-slate-600">
              <li>• People and Culture Award - WSP USA (2023)</li>
              <li>• Certificate of Appreciation - BPA (2020, 2021)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernResume;
