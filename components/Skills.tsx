'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { skills, skillCategories, getSkillsByCategory, skillLevelDescriptions } from '@/data/skills';
import { projects } from '@/data/projects';
import { companyExperiences } from '@/data/experience';

const ProficiencyIndicator = ({ level }: { level: number }) => {
  return (
    <div className="flex items-center gap-1 mt-2">
      {[1, 2, 3, 4, 5].map((dot) => (
        <div
          key={dot}
          className={`w-2 h-2 rounded-full ${
            dot <= level
              ? level >= 4
                ? 'bg-green-500'
                : level >= 3
                ? 'bg-blue-500'
                : 'bg-yellow-500'
              : 'bg-gray-600'
          }`}
        />
      ))}
    </div>
  );
};

const SkillBubble = ({ 
  category, 
  isExpanded, 
  onClick,
  position 
}: { 
  category: any; 
  isExpanded: boolean; 
  onClick: () => void;
  position: { x: number; y: number };
}) => {
  const skillCount = getSkillsByCategory(category.id).length;
  
  return (
    <motion.div
      className={`absolute cursor-pointer select-none ${isExpanded ? 'z-20' : 'z-10'}`}
      style={{ 
        left: `${position.x}%`, 
        top: `${position.y}%`,
        transform: 'translate(-50%, -50%)'
      }}
      whileHover={{ 
        scale: isExpanded ? 1 : 1.1,
        y: isExpanded ? 0 : -5
      }}
      whileTap={{ scale: 0.95 }}
      animate={{
        y: isExpanded ? 0 : [0, -8, 0],
        transition: {
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }
      }}
      onClick={onClick}
    >
      <div className={`
        relative px-6 py-4 rounded-full shadow-lg backdrop-blur-sm border-2 transition-all duration-300
        ${isExpanded 
          ? `${category.color} border-white text-white scale-110 shadow-2xl` 
          : 'bg-gray-800/80 border-gray-600 text-white hover:bg-gray-700'
        }
      `}>
        <div className="flex items-center gap-2">
          <span className="font-medium text-sm">{category.name}</span>
          <span className={`
            text-xs px-2 py-1 rounded-full 
            ${isExpanded 
              ? 'bg-white/20 text-white' 
              : 'bg-gray-700 text-gray-300'
            }
          `}>
            {skillCount}
          </span>
        </div>
        
        {/* Floating particles effect */}
        {!isExpanded && (
          <>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-75"></div>
            <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"></div>
          </>
        )}
      </div>
    </motion.div>
  );
};

const AnimatedBackgroundBubbles = () => {
  const bubbles = [
    { size: 140, left: '5%',  top: '10%',  color: 'bg-purple-900/20' },
    { size: 90,  left: '80%', top: '12%',  color: 'bg-blue-900/20' },
    { size: 110, left: '70%', top: '55%',  color: 'bg-pink-900/20' },
    { size: 100, left: '20%', top: '60%',  color: 'bg-green-900/20' },
    { size: 70,  left: '50%', top: '25%',  color: 'bg-yellow-900/20' },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {bubbles.map((b, i) => (
        <motion.div
          key={i}
          className={`rounded-full blur-2xl ${b.color}`}
          style={{ width: b.size, height: b.size, left: b.left, top: b.top, position: 'absolute' }}
          animate={{ y: [0, -12, 0], scale: [1, 1.03, 1] }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const radarRef = useRef<HTMLDivElement | null>(null);

  const handleTagClick = (skillName: string) => {
    const skill = skills.find((s) => s.name.toLowerCase() === skillName.toLowerCase());
    if (!skill) return;
    setSelectedSkill(skill.name);
    setSelectedCategory(skill.category);
    // Smooth scroll to radar section
    requestAnimationFrame(() => {
      if (radarRef.current) {
        radarRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  };

  const clearSelection = () => {
    setSelectedCategory(null);
    setSelectedSkill(null);
  };

  // (Removed categories grid and bubble handlers)

  return (
    <section 
      id="skills" 
      className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 transition-colors duration-300 overflow-hidden"
      aria-label="Skills and expertise section"
    >
      <div className="container mx-auto container-padding relative">
        <AnimatedBackgroundBubbles />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            Skills & Expertise
          </h2>
          {/* 3D Tag Cloud */}
          <div className="mt-12 md:mt-16">
            <TagCloud3D onTagClick={handleTagClick} />
          </div>

          {/* Radar center by default; shift left with related work on selection */}
          <div ref={radarRef} className={selectedCategory ? "mt-12 md:grid md:grid-cols-[minmax(320px,500px)_minmax(280px,1fr)] gap-8 items-start" : "mt-12 flex justify-center"}>
            <div className="justify-self-center">
              <CapabilityRadar focusCategoryId={selectedCategory} focusSkillName={selectedSkill} />
              {selectedCategory && (
                <div className="mt-4 flex items-center justify-center gap-3 text-sm text-gray-300">
                  <span className="px-2 py-1 rounded-md bg-gray-800/80 border border-gray-700">Focused: {skillCategories.find(c=>c.id===selectedCategory)?.name}</span>
                  <button onClick={clearSelection} className="px-3 py-1 rounded-md bg-gray-700 hover:bg-gray-600 text-white border border-gray-600">Clear</button>
                </div>
              )}
            </div>
            {selectedCategory && (
              <div className="md:mt-0 mt-8">
                <RelatedWork focusCategoryId={selectedCategory} focusSkillName={selectedSkill} />
              </div>
            )}
          </div>

          {/* Proficiency Legend */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <span>Basics (3)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span>Proficient (4)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>Expert (5)</span>
            </div>
          </div>
        </motion.div>

        {/* Categories grid removed */}


      </div>
    </section>
  );
}

// Animated Capability Radar Chart
const CapabilityRadar = ({ focusCategoryId, focusSkillName }: { focusCategoryId: string | null, focusSkillName: string | null }) => {
  // Aggregate average per category on 1-5 scale
  const categories = useMemo(() => skillCategories.map(c => c.id), []);
  const labels = useMemo(() => skillCategories.map(c => c.name), []);
  const values = useMemo(() => {
    return categories.map(cat => {
      const list = skills.filter(s => s.category === cat);
      if (list.length === 0) return 0;
      const avg = list.reduce((a, b) => a + b.level, 0) / list.length;
      return avg; // 1..5
    });
  }, [categories]);

  const maxLevel = 5;
  const radius = 120;
  const center = { x: 160, y: 160 };
  const angleStep = (Math.PI * 2) / categories.length;

  const displayValues = useMemo(() => {
    if (!focusCategoryId) return values;
    return values.map((v, i) => (categories[i] === focusCategoryId ? v : Math.min(1, v)));
  }, [values, focusCategoryId, categories]);

  // Selected skill level (exact), fallback to category average when not provided
  const selectedSkillLevel = useMemo(() => {
    if (!focusSkillName) return null;
    const s = skills.find(sk => sk.name.toLowerCase() === focusSkillName.toLowerCase());
    return s ? s.level : null;
  }, [focusSkillName]);

  const points = displayValues.map((v, i) => {
    const angle = -Math.PI / 2 + i * angleStep;
    const r = (v / maxLevel) * radius;
    return {
      x: center.x + Math.cos(angle) * r,
      y: center.y + Math.sin(angle) * r
    };
  });
  const polygon = points.map(p => `${p.x},${p.y}`).join(' ');

  return (
    <div className="mx-auto w-full max-w-md">
      <svg viewBox="0 0 320 320" className="w-full h-auto">
        {/* Grid */}
        {[1, 2, 3, 4, 5].map((lvl) => (
          <circle
            key={lvl}
            cx={center.x}
            cy={center.y}
            r={(lvl / maxLevel) * radius}
            className="fill-none stroke-gray-700"
            strokeDasharray="4 4"
          />
        ))}

        {/* Spokes */}
        {categories.map((_, i) => {
          const angle = -Math.PI / 2 + i * angleStep;
          const x = center.x + Math.cos(angle) * radius;
          const y = center.y + Math.sin(angle) * radius;
          return (
            <line key={i} x1={center.x} y1={center.y} x2={x} y2={y} className="stroke-gray-700" />
          );
        })}

        {/* Area */}
        <motion.polygon
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          points={polygon}
          className="fill-purple-500/25 stroke-purple-400"
          strokeWidth={2}
        />

        {/* Level markers and arrow for selected category */}
        {focusCategoryId && (() => {
          const selIdx = categories.indexOf(focusCategoryId);
          if (selIdx < 0) return null;
          const angle = -Math.PI / 2 + selIdx * angleStep;
          const cosA = Math.cos(angle);
          const sinA = Math.sin(angle);
          const marker = (lvl: number) => {
            const r = (lvl / maxLevel) * radius;
            const x = center.x + cosA * r;
            const y = center.y + sinA * r;
            return { x, y };
          };
          const selectedVal = selectedSkillLevel ?? displayValues[selIdx];
          const rSel = (selectedVal / maxLevel) * radius;
          const tipX = center.x + cosA * rSel;
          const tipY = center.y + sinA * rSel;
          const baseR = Math.max(0, rSel - 12);
          const baseX = center.x + cosA * baseR;
          const baseY = center.y + sinA * baseR;
          const perpX = -sinA;
          const perpY = cosA;
          const wing = 5;
          const leftX = baseX + perpX * wing;
          const leftY = baseY + perpY * wing;
          const rightX = baseX - perpX * wing;
          const rightY = baseY - perpY * wing;
          return (
            <g key="markers">
              {/* Dots at 3/4/5 */}
              {([3,4,5] as const).map((lvl) => {
                const p = marker(lvl);
                const color = lvl === 3 ? '#eab308' : lvl === 4 ? '#3b82f6' : '#22c55e';
                return <circle key={`m-${lvl}`} cx={p.x} cy={p.y} r={4} fill={color} stroke="#0f172a" strokeWidth={1} />;
              })}
              {/* Arrow to selected level */}
              <polygon points={`${tipX},${tipY} ${leftX},${leftY} ${rightX},${rightY}`} className="fill-purple-300" />
            </g>
          );
        })()}

        {/* Labels */}
        {labels.map((label, i) => {
          const angle = -Math.PI / 2 + i * angleStep;
          const x = center.x + Math.cos(angle) * (radius + 16);
          const y = center.y + Math.sin(angle) * (radius + 16);
          return (
            <text key={label} x={x} y={y} className={`${focusCategoryId === categories[i] ? 'fill-purple-300' : 'fill-gray-300'} text-[10px]`} textAnchor="middle" dominantBaseline="central">
              {label}
            </text>
          );
        })}
      </svg>
      <div className="text-xs text-gray-400 text-center">Radar shows average proficiency per category</div>
    </div>
  );
};

const RelatedWork = ({ focusCategoryId, focusSkillName }: { focusCategoryId: string, focusSkillName: string | null }) => {
  const categorySkills = useMemo(
    () => skills.filter(s => s.category === focusCategoryId).map(s => s.name.toLowerCase()),
    [focusCategoryId]
  );
  const targetSkills = useMemo(() => {
    return focusSkillName ? [focusSkillName.toLowerCase()] : categorySkills;
  }, [focusSkillName, categorySkills]);

  type WorkItem = { id: string; title: string; kind: 'project' | 'experience'; url?: string };

  const items: WorkItem[] = useMemo(() => {
    const projectItems: WorkItem[] = projects
      .filter(p => p.technologies.some(t => targetSkills.includes(t.toLowerCase())))
      .map(p => ({ id: `project-${p.id}`, title: p.title, kind: 'project' as const, url: p.liveUrl || p.githubUrl }));

    const experienceItems: WorkItem[] = companyExperiences.flatMap(exp =>
      exp.roles
        .filter(r => r.technologies.some(t => targetSkills.includes(t.toLowerCase())))
        .map((r, idx) => ({
          id: `exp-${exp.id}-${idx}`,
          title: `${exp.company} — ${r.position}`,
          kind: 'experience' as const,
          url: exp.companyUrl
        }))
    );

    return [...projectItems, ...experienceItems];
  }, [targetSkills]);

  if (items.length === 0) {
    return <div className="text-center text-gray-400 text-sm">No related projects or experience for this category.</div>;
  }

  return (
    <div>
      <div className="text-center text-gray-300 mb-3">Where this skill is used</div>
      <div className="flex flex-col gap-3">
        {items.map((it, i) => {
          const Tag = it.url ? 'a' : 'div';
          return (
            <motion.div
              key={it.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: i * 0.05 }}
            >
              {/* @ts-ignore - Tag is narrowed at runtime */}
              <Tag
                href={it.url}
                target={it.url ? '_blank' : undefined}
                rel={it.url ? 'noreferrer' : undefined}
                className="flex items-center gap-2 px-3 py-2 rounded-md bg-gray-800/80 border border-gray-700 text-white text-sm hover:bg-gray-700 shadow-sm"
              >
                <span className={`text-[10px] px-1.5 py-0.5 rounded ${it.kind === 'project' ? 'bg-blue-500/20 text-blue-300' : 'bg-green-500/20 text-green-300'}`}>
                  {it.kind === 'project' ? 'Project' : 'Experience'}
                </span>
                <span className="truncate">{it.title}</span>
              </Tag>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

// 3D Tag Cloud (pseudo-3D using depth scaling & opacity)
const TagCloud3D = ({ onTagClick }: { onTagClick?: (skillName: string) => void }) => {
  // Flatten skills list (limit to avoid clutter)
  const tagList = useMemo(() => {
    const names = skills.map((s) => s.name);
    return Array.from(new Set(names)).slice(0, 40);
  }, []);

  const count = tagList.length;
  const points = useMemo(() => fibonacciSphere(count), [count]);

  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);
  const vel = useRef({ vx: 0.003, vy: 0.006 });
  const dragging = useRef(false);
  const last = useRef<{x:number;y:number}|null>(null);
  const frame = useRef<number|undefined>(undefined);

  useEffect(() => {
    const loop = () => {
      if (!dragging.current) {
        setRotX((r) => r + vel.current.vx);
        setRotY((r) => r + vel.current.vy);
      }
      frame.current = requestAnimationFrame(loop);
    };
    frame.current = requestAnimationFrame(loop);
    return () => { if (frame.current) cancelAnimationFrame(frame.current); };
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    last.current = { x: e.clientX, y: e.clientY };
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current || !last.current) return;
    const dx = e.clientX - last.current.x;
    const dy = e.clientY - last.current.y;
    last.current = { x: e.clientX, y: e.clientY };
    // adjust velocity based on drag
    vel.current.vy = dx * 0.0008;
    vel.current.vx = -dy * 0.0008;
    setRotX((r) => r + vel.current.vx * 4);
    setRotY((r) => r + vel.current.vy * 4);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <div
      className="relative mx-auto h-[360px] md:h-[440px] w-full max-w-5xl select-none"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
      role="group"
      aria-label="3D skill cloud"
    >
      <div className="absolute inset-0" style={{ perspective: '800px' }} aria-hidden="true" />
      <div className="absolute inset-0">
        {points.map((p, i) => {
          const rotated = rotatePoint(p, rotX, rotY);
          // project to 2D
          const depth = (rotated.z + 1) / 2; // 0..1
          const x = 50 + rotated.x * 38; // percentage
          const y = 50 + rotated.y * 38;
          const scale = 0.8 + depth * 0.6;
          const opacity = 0.35 + depth * 0.65;
          const zIndex = Math.floor(depth * 1000) + 1;
          const skillName = tagList[i];
          const skillObj = skills.find((s) => s.name === skillName);
          const logo = skillObj?.logo;
          return (
            <motion.div
              key={i}
              className="absolute will-change-transform"
              style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale, opacity }}
              transition={{ duration: 0.3 }}
            >
              {logo ? (
                <motion.button
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ zIndex }}
                  className="rounded-full bg-gray-800/80 border border-gray-700 shadow-sm hover:bg-gray-700/80 cursor-pointer p-1"
                  onClick={() => onTagClick && onTagClick(skillName)}
                  title={skillName}
                  aria-label={skillName}
                >
                  <img
                    src={logo}
                    alt={skillName}
                    className="h-8 w-8 md:h-10 md:w-10 object-contain rounded-full"
                    draggable={false}
                    onError={(e) => {
                      (e.currentTarget.style.display = 'none');
                      const next = e.currentTarget.nextElementSibling as HTMLElement | null;
                      if (next) next.style.display = 'inline-block';
                    }}
                  />
                  <span
                    className="px-3 py-1.5 rounded-full bg-gray-800/80 border border-gray-700 text-gray-200 text-xs md:text-sm shadow-sm whitespace-nowrap"
                    style={{ display: 'none' }}
                  >
                    {skillName}
                  </span>
                </motion.button>
              ) : (
                <motion.span
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ zIndex }}
                  className="px-3 py-1.5 rounded-full bg-gray-800/80 border border-gray-700 text-gray-200 text-xs md:text-sm shadow-sm hover:bg-gray-700/80 cursor-pointer whitespace-nowrap"
                  onClick={() => onTagClick && onTagClick(skillName)}
                  title={skillName}
                >
                  {skillName}
                </motion.span>
              )}
            </motion.div>
          );
        })}
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5" aria-hidden="true"></div>
      <div className="mt-6 md:mt-8 text-xs md:text-sm text-gray-300 text-center">Drag to rotate • Auto-spins when idle</div>
    </div>
  );
};

// Fibonacci sphere for even distribution
function fibonacciSphere(samples: number) {
  const pts: Array<{x:number;y:number;z:number}> = [];
  const offset = 2 / samples;
  const increment = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < samples; i++) {
    const y = i * offset - 1 + offset / 2;
    const r = Math.sqrt(1 - y * y);
    const phi = i * increment;
    const x = Math.cos(phi) * r;
    const z = Math.sin(phi) * r;
    pts.push({ x, y, z });
  }
  return pts;
}

// Rotate around X and Y axes
function rotatePoint(p: {x:number;y:number;z:number}, ax: number, ay: number) {
  // rotate around X
  let y = p.y * Math.cos(ax) - p.z * Math.sin(ax);
  let z = p.y * Math.sin(ax) + p.z * Math.cos(ax);
  // rotate around Y
  const x = p.x * Math.cos(ay) + z * Math.sin(ay);
  const z2 = -p.x * Math.sin(ay) + z * Math.cos(ay);
  return { x, y, z: z2 };
}
