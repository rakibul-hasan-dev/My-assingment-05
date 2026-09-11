import React from 'react';

const TechCard = ({ tech, onAddToStack, isAdded }) => {
  const { name, category, description, icon, rating, difficulty, badge } = tech;

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between mb-4">
          <img src={icon} alt={name} className="w-9 h-9 object-contain" />
          <span className="text-[11px] font-semibold text-sky-500 bg-sky-50 px-2.5 py-0.5 rounded-full">
            {badge}
          </span>
        </div>

        <h3 className="text-base font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3">{description}</p>
      </div>

      <div>
        <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-50 pt-3 mb-3">
          <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-[11px]">{category}</span>
          <span>{difficulty}</span>
          <span className="flex items-center gap-1 font-semibold text-amber-500">
            ★ <span className="text-gray-700">{rating}</span>
          </span>
        </div>

        <button
          onClick={() => onAddToStack(tech)}
          disabled={isAdded}
          className={`w-full py-2 rounded-md text-xs font-semibold transition-all ${
            isAdded
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-black text-white hover:bg-gray-800'
          }`}
        >
          {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </div>
  );
};

export default TechCard;