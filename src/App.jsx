import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechCard from './components/TechCard';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [selectedStack, setSelectedStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (tech) => {
    const exists = selectedStack.some((item) => item.id === tech.id);
    if (exists) {
      toast.warning('Already added to your stack!');
      return;
    }

    setSelectedStack([...selectedStack, tech]);
    toast.success(`Added ${tech.name} to stack!`);
  };

  const handleRemove = (id) => {
    const item = selectedStack.find((i) => i.id === id);
    setSelectedStack(selectedStack.filter((i) => i.id !== id));
    if (item) {
      toast.info(`Removed ${item.name}`);
    }
  };

  const handleRemoveAll = () => {
    setSelectedStack([]);
    toast.error('Removed all items from stack');
  };

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-gray-800">
      <ToastContainer position="top-right" autoClose={2000} />
      <Navbar />
      <Hero />

      <main id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-extrabold text-gray-900">
            Explore the <span className="brand-gradient-text">Technologies</span>
          </h2>
          <p className="text-xs text-gray-400 mt-1">Pick one technology per category to build your ideal stack.</p>
        </div>

        {loading ? (
          <div className="text-center py-20 text-gray-400 text-sm">
            Loading technologies...
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {technologies.map((tech) => (
                <TechCard
                  key={tech.id}
                  tech={tech}
                  onAddToStack={handleAddToStack}
                  isAdded={selectedStack.some((item) => item.id === tech.id)}
                />
              ))}
            </div>

            <div className="lg:col-span-1">
              <Sidebar
                selectedStack={selectedStack}
                onRemove={handleRemove}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;