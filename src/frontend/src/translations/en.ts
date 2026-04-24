export const en = {
  // School info
  schoolNameBengali: "বৈষ্ণবচক মহেশ চন্দ্র উচ্চ বিদ্যালয়",
  schoolNameEnglish: "BAISHNABCHAK M.C. HIGH SCHOOL",
  schoolTagline: "Nurturing Minds, Building Character since 1928",
  schoolTaglineBengali: "জ্ঞান ও চরিত্রে আদর্শ নাগরিক গড়া",
  established: "Est. 1928",

  // Navigation
  nav: {
    home: "Home",
    about: "About Us",
    admissions: "Admissions",
    contact: "Contact",
    notices: "Notice Board",
    teachers: "Teachers",
    students: "Students",
    admin: "Admin Panel",
  },

  // Auth
  login: "Login",
  logout: "Logout",
  loginWithII: "Login with Internet Identity",
  loginRequired: "Login Required",
  loginRequiredMsg: "Please login to view this page.",
  adminRequired: "Admin Access Required",
  adminRequiredMsg: "You do not have permission to access this page.",
  loggedInAs: "Logged in",

  // Language toggle
  langToggle: "বাং",

  // Pages - Home
  home: {
    title: "Home",
    heroTitle: "Nurturing Minds, Building Character",
    heroSubtitle: "A tradition of excellence in education since 1928",
    pinnedNotices: "Pinned Notices",
    pinnedNoticesBn: "বিজ্ঞপ্তি",
    latestNotices: "Latest Notices",
    viewAll: "View All Notices",
    principalMessage: "Principal's Message",
    schoolValues: "School Values & Mission",
    upcomingEvents: "Upcoming Events",
    quickLinks: "Quick Links",
    values: {
      academic: "Academic Excellence",
      academicBn: "শিক্ষায় উৎকর্ষ",
      holistic: "Holistic Growth",
      holisticBn: "সামগ্রিক বিকাশ",
      community: "Community Engagement",
      communityBn: "সমাজবদ্ধতা",
    },
  },

  // Pages - About
  about: {
    title: "About Us",
    history: "Our History",
    mission: "Mission & Vision",
    facilities: "Facilities",
    achievements: "Achievements",
    historyText:
      "Founded in 1928, Baishnabchak M.C. High School has been a pillar of education in the community for nearly a century. The school has nurtured generations of students, producing leaders, scholars, and responsible citizens.",
    missionText:
      "Our mission is to provide quality education that develops not only academic excellence but also strong moral character, critical thinking, and a sense of community responsibility.",
    visionText:
      "To be the leading institution in West Bengal that produces well-rounded, capable, and compassionate citizens ready to contribute to society.",
    affiliatedBoard: "Affiliated Board",
    boardName: "West Bengal Board of Secondary Education",
    classesOffered: "Classes Offered",
    classRange: "Class V to Class XII",
    medium: "Medium of Instruction",
    mediumName: "Bengali & English",
  },

  // Pages - Admissions
  admissions: {
    title: "Admissions",
    openFor: "Admissions Open For",
    process: "Admission Process",
    eligibility: "Eligibility Criteria",
    documents: "Required Documents",
    fees: "Fee Structure",
    applyNow: "Enquire Now",
    contactAdmissions: "Contact for Admissions",
    processSteps: [
      "Fill out the online enquiry form",
      "Visit the school office with required documents",
      "Appear for the entrance assessment",
      "Receive admission confirmation",
    ],
    documentsRequired: [
      "Birth Certificate",
      "Transfer Certificate from previous school",
      "Last year mark sheet",
      "Aadhaar Card (Student & Parent)",
      "Passport size photographs (4)",
      "Caste Certificate (if applicable)",
    ],
  },

  // Pages - Contact
  contact: {
    title: "Contact Us",
    address: "Address",
    phone: "Phone",
    email: "Email",
    hours: "Office Hours",
    sendMessage: "Send a Message",
    name: "Your Name",
    yourEmail: "Your Email",
    message: "Message",
    submit: "Send Message",
    success: "Message sent successfully! We will get back to you soon.",
    error: "Failed to send message. Please try again.",
    addressValue: "M.C HIGH SCHOOL, Baishnabchak, Kolkata, West Bengal 721158",
    phoneValue: "+91 9123386590",
    emailValue: "mchs.baishnabchak@gmail.com",
    hoursValue: "10:45 AM – 3:30 PM (Mon–Fri), Closed on Sunday",
  },

  // Pages - Notices
  notices: {
    title: "Notice Board",
    pinned: "Pinned",
    all: "All Notices",
    categories: {
      all: "All",
      Academic: "Academic",
      General: "General",
      Holiday: "Holiday",
      Alert: "Alert",
      Other: "Other",
    },
    noNotices: "No notices available.",
    postedOn: "Posted on",
    readMore: "Read More",
  },

  // Pages - Teachers
  teachers: {
    title: "Teaching Staff",
    subject: "Subject",
    qualification: "Qualification",
    contact: "Contact",
    noTeachers: "No teachers found.",
    searchPlaceholder: "Search teachers...",
  },

  // Pages - Students
  students: {
    title: "Student Directory",
    class: "Class",
    section: "Section",
    roll: "Roll No.",
    noStudents: "No students found.",
    searchPlaceholder: "Search students...",
  },

  // Admin Panel
  admin: {
    title: "Admin Panel",
    notices: "Manage Notices",
    teachers: "Manage Teachers",
    students: "Manage Students",
    addNotice: "Add Notice",
    addTeacher: "Add Teacher",
    addStudent: "Add Student",
    edit: "Edit",
    delete: "Delete",
    pin: "Pin",
    unpin: "Unpin",
    save: "Save",
    cancel: "Cancel",
    confirm: "Confirm",
    deleteConfirm: "Are you sure you want to delete this item?",
    createSuccess: "Created successfully.",
    updateSuccess: "Updated successfully.",
    deleteSuccess: "Deleted successfully.",
    error: "An error occurred. Please try again.",
  },

  // Common
  loading: "Loading...",
  error: "Something went wrong.",
  retry: "Retry",
  close: "Close",
  back: "Back",
  category: "Category",
  date: "Date",
  name: "Name",
  actions: "Actions",
};

export type TranslationKeys = typeof en;
