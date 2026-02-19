// ========================================
// PROJECT DATA (EDIT THIS FILE)
// ========================================
function seqImages(dir, count, label, ext = "jpg") {
  return Array.from({ length: count }, (_, i) => ({
    src: `${dir}/${i + 1}.${ext}`,
    caption: `${label} — ${i + 1}`
  }));
}
function seqVideos(dir, count, label, ext = "mp4") {
  return Array.from({ length: count }, (_, i) => ({
    src: `${dir}/${i + 1}.${ext}`,
    caption: `${label} video — ${i + 1}`
  }));
}
window.PROJECTS = [

  {
    id: "p1",
    title: "Luxury Villa Renovation – Shahrak-e Gharb",
    category: "residential",
    year: "2025-2026",
    role: "Execution + Site Supervision + Coordination",
    tools: "On-site Execution, Coordination, Detailing",
    short: "Complete renovation and modernization of a 570 sqm villa on a 1,000 sqm land.",
    description: "…",

    beforeImages: seqImages("../assets/projects/p2/before", 9, "Before", "jpeg"),
    afterImages:  seqImages("../assets/projects/p2/after",  10, "After"),
    finalImages: [],

    videoEmbed: "",
    videoFile: "../assets/projects/p2/video/walkthrough.mp4"
  }, 
  {
  id: "p2",
  title: "Residential Renovation – Velenjak",
  category: "residential",
  year: "2025",
  role: "Execution + Site Supervision + Coordination",
  tools: "On-site Execution, Drywall (Gypsum Board), Tiling, Plumbing, Windows, Cabinetry",
  short: "Complete renovation of a 140 sqm residential unit focused on spatial modernization and functional optimization.",
  description:
    "Complete renovation of a residential unit with a focus on spatial modernization and functional optimization. The scope included full ceiling demolition and installation of a new gypsum board (drywall) ceiling, spatial reconfiguration through partition construction and addition of one room, floor and bathroom tiling, installation of wall-hung sanitary systems and concealed plumbing fixtures, replacement of PVC windows, full kitchen cabinet replacement, and complete interior repainting. The project emphasized spatial coherence, improved functionality, and precise execution of modern construction details.",

  // 7 BEFORE images
  beforeImages: seqImages("../assets/projects/p5/before/images", 7, "Before", "jpg"),

  // 1 BEFORE video
  beforeVideos: seqVideos("../assets/projects/p5/before/videos", 1, "Before", "mp4"),

  // 4 AFTER images
  afterImages: seqImages("../assets/projects/p5/after/images", 4, "After", "jpg"),

  // 4 AFTER videos
  afterVideos: seqVideos("../assets/projects/p5/after/videos", 4, "After", "mp4"),

  // Keep final empty for this project (optional)
  finalImages: [],
  videoEmbed: "",
  videoFile: ""
},
  {
  id: "p3",
  title: "Fitness Club Renovation – Haft Tir",
  category: "interior",
  year: "2025",
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
  videoFile: "../assets/projects/p4/after/5.mp4"
},
  {
    id: "p5",
    title: "Interior Execution – Tehransar",
    category: "interior",
    year: "2024",
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
  


];
