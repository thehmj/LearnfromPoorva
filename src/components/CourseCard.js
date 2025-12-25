"use client";
import Link from 'next/link';
import ThemeColors from '@/Constants/colors';

const palette = [
  ['#7c3aed', '#22d3ee'],
  ['#22c55e', '#06b6d4'],
  ['#f59e0b', '#ef4444'],
  ['#06b6d4', '#3b82f6'],
];

function pickColors(key = '') {
  // const i = Math.abs(hashCode(key)) % palette.length;
  return palette[0]; // Always return the 3rd color palette
}

function hashCode(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h << 5) - h + str.charCodeAt(i);
  return h;
}

export default function CourseCard({ course }) {
  const [c1, c2] = pickColors(course.slug || course._id);
  return (
    <div className="tilt" style={{padding:10,borderRadius:20,boxShadow:"0 10px 30px rgba(0,0,0,0.1)" ,background:"#fff",}}>
      <div className="card tilt-inner" style={{ overflow: 'hidden' }}>
        <div style={{ height: 140, background: `linear-gradient(120deg, ${c1}, ${c2})`,alignItems:"center",justifyContent:"center",borderRadius:20 }}>
          <div style={{color:"#fff",fontSize:70,fontWeight:"900",textAlign:"center",height:"100%"}}>
            1040
            </div>
        </div>
        <div style={{ padding: 14 }}>
          <div className="chip" style={{ background: 'rgba(255,255,255,.08)', borderColor: 'rgba(255,255,255,.18)' }}>CA</div>
          <h3 style={{ margin: '8px 0 4px', fontSize: 18 }}>{course.title}</h3>
          <p className="text-muted" style={{ minHeight: 44 }}>{course.description}</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
            <span style={{ fontWeight: 800 }}>₹{Number(course.price).toLocaleString('en-IN')}</span>
            <Link className="btn" href={`/courses/${course.slug || course._id}`}>View</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

