import camping from "@/assets/activity-camping.jpg";
import social from "@/assets/activity-social.jpg";
import training from "@/assets/activity-training.jpg";
import events from "@/assets/activity-events.jpg";

export const leaders = [
  { name_bn: "মোঃ রফিকুল ইসলাম", name_en: "Md. Rafiqul Islam", role_bn: "গ্রুপ লিডার", role_en: "Group Leader" },
  { name_bn: "তানভীর আহমেদ", name_en: "Tanvir Ahmed", role_bn: "সিনিয়র রোভার মেট", role_en: "Senior Rover Mate" },
  { name_bn: "সাদিয়া রহমান", name_en: "Sadia Rahman", role_bn: "রোভার মেট", role_en: "Rover Mate" },
  { name_bn: "ইমরান হোসেন", name_en: "Imran Hossain", role_bn: "সেক্রেটারি", role_en: "Secretary" },
  { name_bn: "নাফিসা জাহান", name_en: "Nafisa Jahan", role_bn: "ট্রেজারার", role_en: "Treasurer" },
  { name_bn: "আরিফুল হক", name_en: "Ariful Haque", role_bn: "ক্যাম্প লিডার", role_en: "Camp Leader" },
  { name_bn: "ফারহানা ইয়াসমিন", name_en: "Farhana Yasmin", role_bn: "প্রশিক্ষক", role_en: "Trainer" },
  { name_bn: "সাকিব হাসান", name_en: "Sakib Hasan", role_bn: "অর্গানাইজার", role_en: "Organizer" },
];

export const stats = [
  { key: "stat_total", value: 248 },
  { key: "stat_running", value: 86 },
  { key: "stat_former", value: 162 },
  { key: "stat_events", value: 54 },
] as const;

export const activities = [
  { img: camping, key: "cat_camping" },
  { img: social, key: "cat_social" },
  { img: training, key: "cat_training" },
  { img: events, key: "cat_events" },
  { img: camping, key: "cat_camping" },
  { img: social, key: "cat_social" },
] as const;

export const notices = [
  {
    date: "2026-05-10",
    title_bn: "বার্ষিক ক্যাম্প ২০২৬ — রেজিস্ট্রেশন শুরু",
    title_en: "Annual Camp 2026 — Registration Open",
    body_bn: "আগামী জুন মাসে অনুষ্ঠিতব্য বার্ষিক ক্যাম্পের জন্য নিবন্ধন শুরু হয়েছে।",
    body_en: "Registration is now open for our annual camp scheduled for June.",
  },
  {
    date: "2026-05-02",
    title_bn: "মাসিক সাধারণ সভা",
    title_en: "Monthly General Meeting",
    body_bn: "প্রতি মাসের প্রথম শুক্রবার সাধারণ সভা অনুষ্ঠিত হবে।",
    body_en: "Our general meeting will be held on the first Friday of each month.",
  },
  {
    date: "2026-04-22",
    title_bn: "বৃক্ষরোপণ কর্মসূচি সফল",
    title_en: "Tree Plantation Drive Successful",
    body_bn: "আমরা সফলভাবে ক্যাম্পাসে ৫০০টি চারা রোপণ করেছি।",
    body_en: "We successfully planted 500 saplings around the campus.",
  },
];
