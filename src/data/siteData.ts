import camping from "@/assets/activity-camping.jpg";
import social from "@/assets/activity-social.jpg";
import training from "@/assets/activity-training.jpg";
import events from "@/assets/activity-events.jpg";

export const leaders = [
  { name_bn: "ডাটা যুক্ত করা হয়নি", name_en: "Data not added yet", role_bn: "পরবর্তীতে যুক্ত করা হবে", role_en: "Will be added later" },
  { name_bn: "ডাটা যুক্ত করা হয়নি", name_en: "Data not added yet", role_bn: "পরবর্তীতে যুক্ত করা হবে", role_en: "Will be added later" },
  { name_bn: "ডাটা যুক্ত করা হয়নি", name_en: "Data not added yet", role_bn: "পরবর্তীতে যুক্ত করা হবে", role_en: "Will be added later" },
  { name_bn: "ডাটা যুক্ত করা হয়নি", name_en: "Data not added yet", role_bn: "পরবর্তীতে যুক্ত করা হবে", role_en: "Will be added later" },
  { name_bn: "ডাটা যুক্ত করা হয়নি", name_en: "Data not added yet", role_bn: "পরবর্তীতে যুক্ত করা হবে", role_en: "Will be added later" },
  { name_bn: "ডাটা যুক্ত করা হয়নি", name_en: "Data not added yet", role_bn: "পরবর্তীতে যুক্ত করা হবে", role_en: "Will be added later" },
  { name_bn: "ডাটা যুক্ত করা হয়নি", name_en: "Data not added yet", role_bn: "পরবর্তীতে যুক্ত করা হবে", role_en: "Will be added later" },
  { name_bn: "ডাটা যুক্ত করা হয়নি", name_en: "Data not added yet", role_bn: "পরবর্তীতে যুক্ত করা হবে", role_en: "Will be added later" },
];

export const stats = [
  { key: "stat_total", value: 0 },
  { key: "stat_running", value: 0 },
  { key: "stat_former", value: 0 },
  { key: "stat_events", value: 0 },
] as const;

// Generate 50 activity images (rover01.jpg to rover50.jpg)
// Grouped by category: Camping first, then Social Work, Training, Events
const generateActivities = () => {
  const activities = [];
  
  // Distribute 50 images across 4 categories (12-13 each)
  const distribution = [
    { category: "cat_camping", count: 13 },      // rover01-13
    { category: "cat_social", count: 13 },       // rover14-26
    { category: "cat_training", count: 12 },     // rover27-38
    { category: "cat_events", count: 12 }        // rover39-50
  ];
  
  let imageIndex = 1;
  
  for (const { category, count } of distribution) {
    for (let i = 0; i < count; i++) {
      const imgName = `rover${String(imageIndex).padStart(2, '0')}.jpg`;
      activities.push({
        img: `/images/${imgName}`,
        key: category
      });
      imageIndex++;
    }
  }
  
  return activities;
};

export const activities = generateActivities();

export const notices = [
  {
    date: new Date().toISOString().split('T')[0],
    title_bn: "ডাটা যুক্ত করা হয়নি",
    title_en: "Data not added yet",
    body_bn: "এই বিভাগে শীঘ্রই ডাটা যুক্ত করা হবে।",
    body_en: "Data will be added to this section soon.",
  },
  {
    date: new Date().toISOString().split('T')[0],
    title_bn: "ডাটা যুক্ত করা হয়নি",
    title_en: "Data not added yet",
    body_bn: "এই বিভাগে শীঘ্রই ডাটা যুক্ত করা হবে।",
    body_en: "Data will be added to this section soon.",
  },
  {
    date: new Date().toISOString().split('T')[0],
    title_bn: "ডাটা যুক্ত করা হয়নি",
    title_en: "Data not added yet",
    body_bn: "এই বিভাগে শীঘ্রই ডাটা যুক্ত করা হবে।",
    body_en: "Data will be added to this section soon.",
  },
];

// PRS Award Winners
export const prsAwardees = [
  {
    name_bn: "ডাটা যুক্ত করা হয়নি",
    name_en: "Data not added yet",
    year: "---",
    image: "/placeholder.svg",
  },
  {
    name_bn: "ডাটা যুক্ত করা হয়নি",
    name_en: "Data not added yet",
    year: "---",
    image: "/placeholder.svg",
  },
  {
    name_bn: "ডাটা যুক্ত করা হয়নি",
    name_en: "Data not added yet",
    year: "---",
    image: "/placeholder.svg",
  },
];

// Social Development Award Winners
export const socialAwardees = [
  {
    name_bn: "ডাটা যুক্ত করা হয়নি",
    name_en: "Data not added yet",
    year: "---",
    image: "/placeholder.svg",
  },
  {
    name_bn: "ডাটা যুক্ত করা হয়নি",
    name_en: "Data not added yet",
    year: "---",
    image: "/placeholder.svg",
  },
  {
    name_bn: "ডাটা যুক্ত করা হয়নি",
    name_en: "Data not added yet",
    year: "---",
    image: "/placeholder.svg",
  },
];
