// ========================================
// PROJECT DATA (EDIT THIS FILE)
// ========================================
function seqImages(dir, count, label, ext = "jpg") {
  return Array.from({ length: count }, (_, i) => ({
    src: `${dir}/${i + 1}.${ext}`,
    caption: `${label} — ${i + 1}`
  }));
}
window.PROJECTS = [
  {
    id: "p1",
    title: "Interior Execution – Tehransar",
    category: "interior",
    year: "2023–2024",
    role: "Site Execution + Coordination",
    tools: "On-site Execution",
    short: "Interior execution focused on precise detailing, large-format slab installation, and coordinated MEP integration.",
    description:
      "Execution of suspended slab steel substructure, installation of large-format slabs, electrical wiring, and installation of suspended cabinetry. The project required close coordination between structural and architectural detailing to achieve precise execution.",
    beforeImages: [
      { src: "../assets/img/p1-before-1.jpg", caption: "Before — existing condition" }
    ],
    afterImages: [
      { src: "../assets/img/p1-after-1.jpg", caption: "After — executed interior result" }
    ],
    finalImages: [],
    videoEmbed: "",
    videoFile: ""
  },
  {
    id: "p2",
    title: "Luxury Villa Renovation – Shahrak-e Gharb",
    category: "residential",
    year: "2024",
    role: "Execution + Site Supervision + Coordination",
    tools: "On-site Execution, Coordination, Detailing",
    short: "Complete renovation and modernization of a 570 sqm villa on a 1,000 sqm land.",
    description: "…",

    beforeImages: seqImages("../assets/projects/p2/before", 9, "Before", "jpeg"),
    afterImages:  seqImages("../assets/projects/p2/after",  2, "After"),
    finalImages:  seqImages("../assets/projects/p2/final",  2, "Final"),

    videoEmbed: "",
    videoFile: "../assets/projects/p2/video/walkthrough.mp4"
  },
  {
  id: "p3",
  title: "Fitness Club Renovation – Haft Tir",
  category: "interior",
  year: "2024",
  role: "Execution + Site Supervision + Coordination",
  tools: "On-site Execution, Steel Fabrication, CNC Detailing",
  short: "Full renovation and interior execution of a 180 sqm fitness club focused on performance standards and a strong visual identity.",
  description:
    "Full renovation and interior execution of a fitness facility with a focus on performance standards and strong visual identity. The project included installation of specialized gym flooring, steel framework construction for pull-up bars and dumbbell stations, full-height mirror installation, gypsum board ceiling execution, design and fabrication of VIP and standard CNC-cut lockers, CNC decorative panels, motivational wall graphics, and complete repainting. The objective was to create a professional, dynamic, and motivating workout environment.",
  
  // 6 BEFORE images (.jpeg)
  beforeImages: seqImages("../assets/projects/p3/before", 6, "Before", "jpeg"),

  // 10 AFTER images (.jpg)
  afterImages: seqImages("../assets/projects/p3/after", 10, "After", "JPG"),

  // No final gallery (video-only section is hidden if no video)
  finalImages: [],

  // No video
  videoEmbed: "",
  videoFile: ""
},




{
  id: "p4",
  title: "Residential Renovation – Mirdamad",
  category: "residential",
  year: "2024–2025",
  role: "Execution + Site Supervision + Coordination",
  tools: "On-site Execution, Detailing, Coordination",
  short: "130 sqm interior refurbishment focused on key living spaces with improved material quality and detailing.",
  description:
    "Interior refurbishment with emphasis on key living spaces. The scope included bedroom flooring replacement with parquet, bathroom retiling, installation of wall-hung sanitary systems and concealed fixtures, kitchen cabinetry execution, gypsum board ceiling installation, and complete repainting. The renovation was executed with minimal structural intervention while enhancing material quality and detailing.",

  // 2 BEFORE images
  beforeImages: seqImages("../assets/projects/p4/before", 2, "Before", "jpg"),

  // 2 AFTER images
  afterImages: seqImages("../assets/projects/p4/after", 2, "After", "jpg"),

  // keep empty (optional) — since you mainly have video
  finalImages: [],

  // ONE MP4 video
  videoEmbed: "",
  videoFile: "../assets/projects/p4/video/walkthrough.mp4"
},

];
