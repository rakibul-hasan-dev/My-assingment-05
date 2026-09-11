import React from 'react';

const Sidebar = ({ selectedStack, onRemove, onRemoveAll }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm sticky top-20">
      <h3 className="text-base font-bold text-gray-900">Your Stack</h3>
      <p className="text-xs text-gray-400 mb-4">
        {selectedStack.length === 0 ? 'No technologies selected yet.' : `${selectedStack.length} Technology Selected`}
      </p>

      {selectedStack.length === 0 ? (
        <div className="border border-dashed border-gray-200 rounded-xl py-10 text-center">
          <p className="text-xs text-gray-400">Your stack is empty.</p>
        </div>
      ) : (
        <div className="space-y-2.5 max-h-[50vh] overflow-y-auto pr-1">
          {selectedStack.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-2.5 rounded-xl border border-gray-100 bg-white">
              <div className="flex items-center gap-3">
                <img src={item.icon} alt={item.name} className="w-7 h-7 object-contain" />
                <div>
                  <h4 className="text-xs font-bold text-gray-800 leading-tight">{item.name}</h4>
                  <span className="text-[10px] text-gray-400">{item.category}</span>
                </div>
              </div>
              <button
                onClick={() => onRemove(item.id)}
                className="text-gray-300 hover:text-gray-500 text-sm px-1.5"
              >
                ✕
              </button>
            </div>
          ))}

          <button
            onClick={onRemoveAll}
            className="w-full mt-3 py-2 rounded-lg border border-red-200 text-red-500 text-xs font-semibold hover:bg-red-50 transition-colors"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;