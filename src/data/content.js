// Central content file — edit this to rebrand the site for a different school.
// All imagery is sourced from Unsplash (free-to-use license, no attribution required).

export const school = {
  name: "Emerald College",
  shortName: "Emerald College",
  tagline: "Educating the whole child, in Lagos and beyond",
  founded: 2003,
  address: "14 Admiralty Way, Lekki Phase 1, Lagos, Nigeria",
  phone: "+234 803 555 0192",
  email: "admissions@emeraldcollege.edu.ng",
  hours: "Mon – Fri, 7:30am – 4:00pm",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    linkedin: "https://linkedin.com",
  },
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63377.02!2d3.4531!3d6.4432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8ad14b6fcf6b%3A0x2fdcb1c9f8b95a8c!2sLekki%2C%20Lagos!5e0!3m2!1sen!2sng!4v1700000000000",
};

export const stats = [
  { value: 850, suffix: "+", label: "Students enrolled" },
  { value: 22, suffix: "", label: "Years running" },
  { value: 14, suffix: ":1", label: "Student–teacher ratio" },
  { value: 96, suffix: "%", label: "WAEC / NECO pass rate" },
];

export const programs = [
  {
    id: "early-years",
    name: "Early Years",
    ages: "Ages 3 – 5",
    description:
      "A play-led foundation stage built around phonics, numeracy and Yoruba, Igbo or Hausa language exposure, so children arrive at Primary One confident and curious.",
  },
  {
    id: "primary",
    name: "Primary School",
    ages: "Ages 6 – 11",
    description:
      "The full National Common Curriculum enriched with coding, creative arts and a strong reading culture — every child leaves Primary Six reading two grades above level.",
  },
  {
    id: "secondary",
    name: "Junior & Senior Secondary",
    ages: "Ages 12 – 17",
    description:
      "WAEC and NECO preparation alongside Cambridge IGCSE options, with dedicated tracks for Sciences, Commercials and Arts from JSS3 onward.",
  },
  {
    id: "extracurricular",
    name: "Clubs & Sport",
    ages: "All year groups",
    description:
      "Debate, robotics, Model UN, football and swimming — every student represents the school in at least one inter-house or inter-school competition each term.",
  },
];

export const admissionSteps = [
  {
    term: "Step 1",
    title: "Submit an inquiry",
    window: "Rolling, all year",
    description:
      "Complete the online inquiry form or call the admissions office. We'll send the prospectus and an entrance assessment date within 48 hours.",
  },
  {
    term: "Step 2",
    title: "Campus tour & assessment",
    window: "Tuesdays & Thursdays, 9am",
    description:
      "Tour the campus with a current parent, then your child sits a short, age-appropriate literacy and numeracy assessment — no pressure, just a conversation.",
  },
  {
    term: "Step 3",
    title: "Offer & enrollment",
    window: "Within 10 working days",
    description:
      "Successful applicants receive a formal offer letter. Secure the place with the enrollment deposit and completed medical/guardian forms.",
  },
  {
    term: "Step 4",
    title: "Resumption",
    window: "September, January or April",
    description:
      "Join at the start of any of our three terms. New students get a buddy from their class and a settling-in call from the form teacher in week one.",
  },
];

export const admissionsInfo = {
  requirements: [
    "Completed application form + 2 passport photographs",
    "Birth certificate or international passport",
    "Previous school's report card (last 2 terms)",
    "Transfer/testimonial letter for JSS/SSS entry",
    "Immunization record",
  ],
  deadlines: [
    { term: "First Term", window: "Closes 2nd week of August" },
    { term: "Second Term", window: "Closes 2nd week of December" },
    { term: "Third Term", window: "Closes 2nd week of March" },
  ],
  fees: [
    { level: "Early Years", tuition: "₦420,000 / term" },
    { level: "Primary School", tuition: "₦510,000 / term" },
    { level: "Junior Secondary", tuition: "₦640,000 / term" },
    { level: "Senior Secondary", tuition: "₦710,000 / term" },
  ],
  note: "Fees include books, lunch and the school bus within Lekki–Ajah. A one-time ₦150,000 registration fee applies to new admissions.",
};

export const testimonials = [
  {
    quote:
      "My son struggled with confidence in his old school. Two terms into JSS1 at Emerald College and he's running for Prefect. The form teachers actually know him.",
    name: "Adaeze Okonkwo",
    role: "Parent, JSS1",
    image:
      "https://images.unsplash.com/photo-1666281269793-da06484657e8?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    quote:
      "The robotics club rebuilt how I think about problems. We placed second at the Lagos State STEM Fair and our coach stayed back every Saturday to help us.",
    name: "Tobi Adewale",
    role: "SS2 Student",
    image:
      "https://images.unsplash.com/photo-1632215863153-0dae7657d0a9?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    quote:
      "I finished SSS3 at Emerald College in 2018 and I'm now in my final year of Medicine at UNILAG. The study habits I built there still carry me through exam weeks.",
    name: "Chiamaka Eze",
    role: "Alumna, Class of 2018",
    image:
      "https://images.unsplash.com/photo-1547226706-af7e2c20bcea?auto=format&fit=crop&w=200&h=200&q=80",
  },
];

export const leadership = [
  {
    name: "Dr. Folasade Bamigboye",
    title: "Head of School",
    bio: "22 years in Nigerian secondary education; PhD in Educational Leadership, University of Ibadan.",
    image:
      "https://images.unsplash.com/photo-1594750852563-5ed8e0421d40?auto=format&fit=crop&w=500&h=600&q=80",
    featured: true,
  },
  {
    name: "Mr. Emeka Chukwuemeka",
    title: "Vice Principal, Academics",
    bio: "Leads curriculum design and oversees WAEC/NECO results across all subject departments.",
    image:
      "https://images.unsplash.com/photo-1608485439523-25b28d982428?auto=format&fit=crop&w=400&h=500&q=80",
  },
  {
    name: "Mrs. Ngozi Umeh",
    title: "Head of Primary",
    bio: "Fifteen years teaching Key Stage 1–2; champions the school's phonics and reading program.",
    image:
      "https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&w=400&h=500&q=80",
  },
  {
    name: "Mr. Ibrahim Suleiman",
    title: "Dean of Students",
    bio: "Runs the pastoral care and prefect system; former national athletics coach.",
    image:
      "https://images.unsplash.com/photo-1631131426242-0abfa7f209c2?auto=format&fit=crop&w=400&h=500&q=80",
  },
];

export const gallery = [
  {
    src: "https://images.unsplash.com/photo-1632215861513-130b66fe97f4?auto=format&fit=crop&w=800&h=1000&q=80",
    alt: "Teacher leading a class of primary school students",
  },
  {
    src: "https://images.unsplash.com/photo-1553777907-f5dbbbb44d7c?auto=format&fit=crop&w=800&h=600&q=80",
    alt: "Students running across the school compound",
  },
  {
    src: "https://images.unsplash.com/photo-1617056239820-8ce90ba48193?auto=format&fit=crop&w=800&h=1000&q=80",
    alt: "Student in school uniform",
  },
  {
    src: "https://images.unsplash.com/photo-1770843093640-c44ae557928b?auto=format&fit=crop&w=800&h=600&q=80",
    alt: "Children in a classroom with number charts on the wall",
  },
  {
    src: "https://images.unsplash.com/photo-1548102245-c79dbcfa9f92?auto=format&fit=crop&w=800&h=1000&q=80",
    alt: "Two students standing together",
  },
  {
    src: "https://images.unsplash.com/photo-1539893867126-7ce0b48971ca?auto=format&fit=crop&w=800&h=600&q=80",
    alt: "Student writing in a notebook",
  },
  {
    src: "https://images.unsplash.com/photo-1744809495173-217ca4faa8bc?auto=format&fit=crop&w=800&h=1000&q=80",
    alt: "Student carefully drawing lines with a ruler",
  },
  {
    src: "https://images.unsplash.com/photo-1744809448493-448812255e4d?auto=format&fit=crop&w=800&h=600&q=80",
    alt: "Smiling student giving the peace sign",
  },
];

export const heroImage =
  "https://images.unsplash.com/photo-1744809482817-9a9d4fc280af?auto=format&fit=crop&w=1600&h=2000&q=80";

export const aboutImage =
  "https://images.unsplash.com/photo-1632215865645-3efa9af21424?auto=format&fit=crop&w=1200&h=1400&q=80";
