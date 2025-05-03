// import { FileText, ChevronRight, Home, BriefcaseBusiness, MessageSquare, Bell, BarChart3, HelpCircle, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
// import { Link } from "react-router-dom";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { useState } from "react";
// import { Carousel } from "@/components/ui/carousel";

// const UserDashboard = () => {
//   const [loading] = useState(false);

//   const carouselImages = [
//     {
//       url: "/images/gramsansad/banner1.jpg",
//       alt: "Digital Gram Panchayat Services",
//     },
//     {
//       url: "/images/gramsansad/banner2.jpg",
//       alt: "Empowering Rural Development",
//     },
//     {
//       url: "/images/gramsansad/banner3.jpg",
//       alt: "Community Engagement & Support",
//     },
//   ];

//   const quickLinks = [
//     {
//       title: "Baandkaam Parvangi",
//       path: "/user/DAAKHLE/BaandkaamParvangi",
//       icon: <FileText className="h-5 w-5" />,
//       color: "bg-orange-100 text-orange-600 dark:bg-orange-900/20",
//     },
//     {
//       title: "Resident Certificate",
//       path: "/user/DAAKHLE/ResidentCertificateApplication",
//       icon: <Home className="h-5 w-5" />,
//       color: "bg-blue-100 text-blue-600 dark:bg-blue-900/20",
//     },
//     {
//       title: "Job Card Maagni",
//       path: "/user/MANREGA/JobCardMaagni",
//       icon: <BriefcaseBusiness className="h-5 w-5" />,
//       color: "bg-green-100 text-green-600 dark:bg-green-900/20",
//     },
//     {
//       title: "Water Supply Issue",
//       path: "/user/TAKRAAR/PaanipuravthaTakraar",
//       icon: <MessageSquare className="h-5 w-5" />,
//       color: "bg-purple-100 text-purple-600 dark:bg-purple-900/20",
//     },
//   ];

//   const contactInfo = {
//     phone: "+91 1800-123-4567",
//     email: "support@gramsansad-rohini.gov.in",
//     address: "Gram Panchayat Office, Rohini Village, Maharashtra",
//     timings: "Mon-Sat: 9:00 AM - 6:00 PM",
//   };

//   const emergencyContacts = [
//     { title: "Police", number: "100" },
//     { title: "Ambulance", number: "108" },
//     { title: "Fire", number: "101" },
//     { title: "Women Helpline", number: "1091" },
//   ];

//   return (
//     <div className="animate-fade-in space-y-8">
//       <div className="flex justify-between items-center">
//         <div>
//           <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Welcome back, User</h1>
//           <p className="text-gray-600 dark:text-gray-400">Here's an overview of your Gramsansad portal</p>
//         </div>
//         <div className="flex space-x-2">
//           <Button variant="outline" size="icon">
//             <Bell className="h-5 w-5" />
//           </Button>
//           <Button variant="outline" size="icon">
//             <HelpCircle className="h-5 w-5" />
//           </Button>
//         </div>
//       </div>

//       {loading ? (
//         <div className="h-[400px] md:h-[500px] bg-gray-200 dark:bg-gray-800 rounded-xl animate-pulse" />
//       ) : (
//         <div className="space-y-8">
//           {/* Carousel Banner */}
//           <Carousel
//             images={carouselImages}
//             className="w-full rounded-xl overflow-hidden shadow-lg"
//           />

//           {/* Main Sections Grid */}
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//             {/* Daakhle Section */}
//             <Card className="col-span-1">
//               <div className="p-6">
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Daakhle</h3>
//                   <Link to="/user/DAAKHLE/BaandkaamParvangi">
//                     <Button variant="outline" size="sm">View All</Button>
//                   </Link>
//                 </div>
//                 <div className="space-y-4">
//                   <Link to="/user/DAAKHLE/BaandkaamParvangi" className="block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
//                     <h4 className="font-medium text-gray-900 dark:text-white">Submit New Application</h4>
//                     <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Apply for various certificates and documents</p>
//                   </Link>
//                   <Link to="/user/dashboard" className="block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
//                     <h4 className="font-medium text-gray-900 dark:text-white">Track Applications</h4>
//                     <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Check status of your submissions</p>
//                   </Link>
//                 </div>
//               </div>
//             </Card>

//             {/* Maanrega Section */}
//             <Card className="col-span-1">
//               <div className="p-6">
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Maanrega</h3>
//                   <Link to="/user/MANREGA/JobCardMaagni">
//                     <Button variant="outline" size="sm">View All</Button>
//                   </Link>
//                 </div>
//                 <div className="space-y-4">
//                   <Link to="/user/MANREGA/JobCardMaagni" className="block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
//                     <h4 className="font-medium text-gray-900 dark:text-white">Job Card Registration</h4>
//                     <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Apply for employment under MANREGA</p>
//                   </Link>
//                   <Link to="/user/MANREGA/KaamMaagni" className="block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
//                     <h4 className="font-medium text-gray-900 dark:text-white">Work Progress</h4>
//                     <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Track work schedule and payments</p>
//                   </Link>
//                 </div>
//               </div>
//             </Card>

//             {/* Takrar Section */}
//             <Card className="col-span-1">
//               <div className="p-6">
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Takrar</h3>
//                   <Link to="/user/TAKRAAR/PaanipuravthaTakraar">
//                     <Button variant="outline" size="sm">View All</Button>
//                   </Link>
//                 </div>
//                 <div className="space-y-4">
//                   <Link to="/user/TAKRAAR/PaanipuravthaTakraar" className="block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
//                     <h4 className="font-medium text-gray-900 dark:text-white">Lodge Grievance</h4>
//                     <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Submit new complaints or issues</p>
//                   </Link>
//                   <Link to="/user/TAKRAAR/CleaningServiceTakraar" className="block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
//                     <h4 className="font-medium text-gray-900 dark:text-white">Track Complaints</h4>
//                     <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">View status and resolution timeline</p>
//                   </Link>
//                 </div>
//               </div>
//             </Card>
//           </div>

//           {/* Bottom Grid */}
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//             {/* Latest Updates */}
//             <Card className="col-span-1 lg:col-span-2">
//               <div className="p-6">
//                 <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Latest Updates</h3>
//                 <div className="space-y-4">
//                   <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
//                     <div className="p-2 bg-blue-100 dark:bg-blue-900/20 text-blue-600 rounded-full mr-4">
//                       <Bell className="h-5 w-5" />
//                     </div>
//                     <div>
//                       <h4 className="font-medium text-gray-900 dark:text-white">New Scheme Announced</h4>
//                       <p className="text-sm text-gray-500 dark:text-gray-400">Check eligibility for the latest government schemes</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
//                     <div className="p-2 bg-green-100 dark:bg-green-900/20 text-green-600 rounded-full mr-4">
//                       <BarChart3 className="h-5 w-5" />
//                     </div>
//                     <div>
//                       <h4 className="font-medium text-gray-900 dark:text-white">MANREGA Updates</h4>
//                       <p className="text-sm text-gray-500 dark:text-gray-400">New work opportunities available in your area</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Card>

//             {/* Quick Links */}
//             <Card className="col-span-1">
//               <div className="p-6">
//                 <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
//                 <div className="space-y-3">
//                   {quickLinks.map((link, index) => (
//                     <Link
//                       key={index}
//                       to={link.path}
//                       className="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
//                     >
//                       <div className={`p-2 rounded-md ${link.color} mr-3`}>
//                         {link.icon}
//                       </div>
//                       <span className="flex-1 text-gray-700 dark:text-gray-300">{link.title}</span>
//                       <ChevronRight className="h-5 w-5 text-gray-400" />
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             </Card>
//           </div>

//           {/* Contact and Complaint Section */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             {/* Contact Information */}
//             <Card className="col-span-1">
//               <div className="p-6">
//                 <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Contact Information</h3>
//                 <div className="space-y-6">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="flex items-start space-x-4">
//                       <div className="p-2 bg-blue-100 dark:bg-blue-900/20 text-blue-600 rounded-lg">
//                         <Phone className="h-5 w-5" />
//                       </div>
//                       <div>
//                         <h4 className="font-medium text-gray-900 dark:text-white">Helpline</h4>
//                         <p className="text-sm text-gray-500 dark:text-gray-400">{contactInfo.phone}</p>
//                         <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{contactInfo.timings}</p>
//                       </div>
//                     </div>
//                     <div className="flex items-start space-x-4">
//                       <div className="p-2 bg-green-100 dark:bg-green-900/20 text-green-600 rounded-lg">
//                         <Mail className="h-5 w-5" />
//                       </div>
//                       <div>
//                         <h4 className="font-medium text-gray-900 dark:text-white">Email</h4>
//                         <p className="text-sm text-gray-500 dark:text-gray-400">{contactInfo.email}</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex items-start space-x-4">
//                     <div className="p-2 bg-purple-100 dark:bg-purple-900/20 text-purple-600 rounded-lg">
//                       <MapPin className="h-5 w-5" />
//                     </div>
//                     <div>
//                       <h4 className="font-medium text-gray-900 dark:text-white">Address</h4>
//                       <p className="text-sm text-gray-500 dark:text-gray-400">{contactInfo.address}</p>
//                     </div>
//                   </div>
//                   <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
//                     <h4 className="font-medium text-gray-900 dark:text-white mb-3">Emergency Contacts</h4>
//                     <div className="grid grid-cols-2 gap-4">
//                       {emergencyContacts.map((contact, index) => (
//                         <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
//                           <span className="text-sm text-gray-600 dark:text-gray-300">{contact.title}</span>
//                           <span className="font-semibold text-gray-900 dark:text-white">{contact.number}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Card>

//             {/* Quick Complaint Form */}
//             <Card className="col-span-1">
//               <div className="p-6">
//                 <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Quick Complaint</h3>
//                 <div className="space-y-4">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
//                       <input
//                         type="text"
//                         className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
//                         placeholder="Your name"
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Mobile</label>
//                       <input
//                         type="tel"
//                         className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
//                         placeholder="Your mobile number"
//                       />
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Complaint Type</label>
//                     <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white">
//                       <option value="">Select complaint type</option>
//                       <option value="water">Water Supply</option>
//                       <option value="sanitation">Sanitation</option>
//                       <option value="electricity">Electricity</option>
//                       <option value="roads">Roads</option>
//                       <option value="other">Other</option>
//                     </select>
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
//                     <textarea
//                       className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white h-24"
//                       placeholder="Describe your complaint..."
//                     ></textarea>
//                   </div>
//                   <div className="pt-4">
//                     <Button className="w-full">
//                       <MessageCircle className="h-4 w-4 mr-2" />
//                       Submit Complaint
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </Card>
//           </div>

//         </div>
//       )}
//     </div>
//   );
// };

// export default UserDashboard;

import {
  FileText,
  ChevronRight,
  Home,
  BriefcaseBusiness,
  MessageSquare,
  Bell,
  BarChart3,
  HelpCircle,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Award,
  Image,
  Camera,
  MessageSquareText,
  Sun,
  Send,
  AlertTriangle,
  Eye,
  Upload,
  Download,
  X,
  CheckCircle,
  Calendar
} from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Carousel } from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";

const UserDashboard = () => {
  const [loading] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    {
      sender: "system",
      message:
        "Welcome to Zilla Parisad Gramin Vibhag! How can we help you today?",
    },
  ]);

  // State for alerts (flagged documents)
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      document: "Resident Certificate",
      issue: "Incorrect address proof uploaded",
      deadline: "May 10, 2025",
    },
  ]);

  const [activeTab, setActiveTab] = useState("all"); // Default to "all"

  const [errorMessage, setErrorMessage] = useState(""); // Track validation errors

  // const handleFileUpload = (event, alertId) => {
  //   const file = event.target.files[0];
  
  //   if (!file) return; // No file selected
  
  //   if (file.type !== "application/pdf") {
  //     setErrorMessage("Please upload the document in PDF format."); // Error message
  //     event.target.value = ""; // Reset file input to prevent incorrect uploads
  //     return;
  //   }
  
  //   console.log("Selected file:", file.name);
  //   setErrorMessage(""); // Clear error when a valid PDF is uploaded
  // }; 

  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission

 
const [selectedFile, setSelectedFile] = useState(null); // Track uploaded file


  const [uploadStatus, setUploadStatus] = useState(""); // Track upload status

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
  
    if (!file) {
      setUploadStatus("No file uploaded!");
      setSelectedFile(null);
      return;
    }
  
    if (file.type !== "application/pdf") {
      setUploadStatus("Please upload the document in PDF format.");
      setSelectedFile(null);
      event.target.value = ""; // Reset file input
      return;
    }
  
    setSelectedFile(file); // Store the uploaded file
    setUploadStatus(""); // Reset error message
  };

  const carouselImages = [
    {
      url: "/images/gramsansad/banner1.jpg",
      alt: "Digital Gram Panchayat Services",
    },
    {
      url: "/images/gramsansad/banner2.jpg",
      alt: "Empowering Rural Development",
    },
    {
      url: "/images/gramsansad/banner3.jpg",
      alt: "Community Engagement & Support",
    },
  ];

  const quickLinks = [
    {
      title: "Baandkaam Parvangi",
      path: "/user/DAAKHLE/BaandkaamParvangi",
      icon: <FileText className="h-5 w-5" />,
      color: "bg-orange-100 text-orange-600 dark:bg-orange-900/20",
    },
    {
      title: "Resident Certificate",
      path: "/user/DAAKHLE/ResidentCertificateApplication",
      icon: <Home className="h-5 w-5" />,
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900/20",
    },
    {
      title: "Job Card Maagni",
      path: "/user/MANREGA/JobCardMaagni",
      icon: <BriefcaseBusiness className="h-5 w-5" />,
      color: "bg-green-100 text-green-600 dark:bg-green-900/20",
    },
    {
      title: "Water Supply Issue",
      path: "/user/TAKRAAR/PaanipuravthaTakraar",
      icon: <MessageSquare className="h-5 w-5" />,
      color: "bg-purple-100 text-purple-600 dark:bg-purple-900/20",
    },
  ];

  const contactInfo = {
    phone: "+91 1800-123-4567",
    email: "support@gramsansad-rohini.gov.in",
    address: "Gram Panchayat Office, Rohini Village, Maharashtra",
    timings: "Mon-Sat: 9:00 AM - 6:00 PM",
  };

  const emergencyContacts = [
    { title: "Police", number: "100" },
    { title: "Ambulance", number: "108" },
    { title: "Fire", number: "101" },
    { title: "Women Helpline", number: "1091" },
  ];

  // New notification data
  const notifications = [
    {
      id: 1,
      title: "Scheme Announcement",
      message:
        "New agricultural subsidies available for farmers. Apply before May 15, 2025.",
      date: "2 hours ago",
      read: false,
      type: "scheme",
    },
    {
      id: 2,
      title: "Complaint Update",
      message:
        "Your water supply complaint #WS-2304 has been assigned to a technician.",
      date: "Yesterday",
      read: true,
      type: "complaint",
    },
    {
      id: 3,
      title: "Scheme Announcement",
      message:
        "Solar panel installation subsidy now available for all village residents.",
      date: "3 days ago",
      read: true,
      type: "scheme",
    },
    {
      id: 4,
      title: "Document Approval",
      message: "Your Resident Certificate application has been approved.",
      date: "1 week ago",
      read: true,
      type: "document",
    },
  ];

  // Real-time notices
  const notices = [
    {
      id: 1,
      title: "Gram Sabha Meeting",
      content:
        "Monthly Gram Sabha meeting scheduled for April 25, 2025 at 10:00 AM.",
      date: "April 22, 2025",
      priority: "high",
    },
    {
      id: 2,
      title: "Water Supply Maintenance",
      content:
        "Scheduled maintenance of water supply on April 24. Supply will be disrupted from 9 AM to 2 PM.",
      date: "April 21, 2025",
      priority: "medium",
    },
    {
      id: 3,
      title: "Vaccination Camp",
      content:
        "Free vaccination camp for children under 5 years at Primary Health Center on April 27.",
      date: "April 20, 2025",
      priority: "high",
    },
  ];

  // Gallery items
  const galleryItems = [
    {
      id: 1,
      title: "New Road Construction",
      image: "/images/gramsansad/road-project.jpg",
      category: "development",
      date: "March 2025",
    },
    {
      id: 2,
      title: "Solar Panel Installation",
      image: "/images/gramsansad/solar-project.jpg",
      category: "development",
      date: "February 2025",
    },
    {
      id: 3,
      title: "Cleanliness Award",
      image: "/images/gramsansad/award.jpg",
      category: "award",
      date: "January 2025",
    },
    {
      id: 4,
      title: "Water Conservation Project",
      image: "/images/gramsansad/water-project.jpg",
      category: "development",
      date: "December 2024",
    },
    {
      id: 5,
      title: "Digital Village Recognition",
      image: "/images/gramsansad/digital-award.jpg",
      category: "award",
      date: "November 2024",
    },
    {
      id: 6,
      title: "Women Empowerment Program",
      image: "/images/gramsansad/women-empowerment.jpg",
      category: "development",
      date: "October 2024",
    },
  ];

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    // Add user message to chat
    setChatHistory([...chatHistory, { sender: "user", message: chatMessage }]);

    // Simulate response (in a real app, this would be from a server)
    setTimeout(() => {
      setChatHistory((prev) => [
        ...prev,
        {
          sender: "system",
          message:
            "Thank you for your message. A support representative will assist you shortly.",
        },
      ]);
    }, 1000);

    setChatMessage("");
  };

  const unreadNotifications = notifications.filter(
    (notification) => !notification.read,
  ).length;

  return (
    <div className="animate-fade-in space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Welcome back, User
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Empowering rural development through transparency, efficiency, and
            citizen participation.
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="icon" className="relative border-none">
            <Bell className="h-5 w-5" />
            {unreadNotifications > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {unreadNotifications}
              </span>
            )}
          </Button>

         

<div>

      <button
  className={`bg-red-500 text-white p-2 rounded-full shadow-md relative ${
    alerts.length > 0 ? "animate-pulse" : "bg-gray-400"
  }`}
  onClick={() => setIsAlertOpen(true)}
>
  <AlertTriangle className="h-5 w-5" />
  {alerts.length > 0 && (
    <span className="absolute -top-1 -right-1 bg-white text-red-600 text-xs rounded-full h-5 w-5 flex items-center justify-center">
      {alerts.length}
    </span>
  )}
</button>


      {/* Centered Popup Modal */}
      {isAlertOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-gray-100 shadow-lg rounded-md p-6 w-[450px] h-auto border border-gray-300 relative">
          <h2 className="text-lg font-semibold text-center text-gray-900">Document Alerts</h2>
      
          {alerts.length === 0 ? (
            <p className="text-gray-700 text-center mt-2">No document alerts at the moment.</p>
          ) : (
            <div className="mt-4 space-y-4">
              {alerts.map((alert) => (
                <div key={alert.id} className="p-4 border-l-4 border-red-600 bg-red-50 rounded-md">
                  <h4 className="font-medium text-gray-900">{alert.document}</h4>
                  <span className="text-xs text-gray-600">Deadline: {alert.deadline}</span>
                  <p className="text-sm text-gray-700">Issue: {alert.issue}</p>
      
                  {/* File Upload Section */}
                  <input
                    type="file"
                    accept=".pdf , .jpg"
                    onChange={(e) => handleFileUpload(e, alert.id)}
                    className="mt-2 border border-gray-400 rounded p-2 w-full text-gray-800" required
                  />
                  {errorMessage && (
                    <div className="mt-2 p-2 rounded bg-red-100 text-red-600">{errorMessage}</div>
                  )}
                </div>
              ))}
            </div>
          )}
      
          {/* Submit Button (Consistent with Site Design) */}
          {/* Submit Button */}
          <button
  className="mt-4 bg-blue-500 text-white px-3 py-1 rounded-md w-32 hover:bg-blue-600"
  onClick={() => {
    if (!selectedFile) {
      setUploadStatus("No file uploaded!"); // Show error message
    } else {
      setUploadStatus("Successfully Submitted!"); // Show success message
    }
  }}
>
  Submit
</button>
{uploadStatus && (
  <p className="mt-3 text-green-600 bg-green-100 p-2 rounded">{uploadStatus}</p>
)}

{/* Success Message */}
{isSubmitted && (
  <p className="mt-3 text-green-600 text-center font-medium">Successfully Submitted!</p>
)}

      
          {/* Close Button (Now in Black) */}
          <button
            className="absolute top-2 right-2 text-black hover:text-gray-700"
            onClick={() => setIsAlertOpen(false)}
          >
            ✖
          </button>
        </div>
      </div>
      )}
    </div>
  

{/* <Button
  variant="outline"
  size="icon"
  className="relative"
  onClick={() => setIsAlertOpen(!isAlertOpen)} // Toggle visibility
>
  <AlertTriangle className="h-5 w-5 text-red-600" />
  {alerts.length > 0 && (
    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
      {alerts.length}
    </span>
  )}
</Button>

{isAlertOpen && (
  <div className="absolute right-2 top-12 bg-white shadow-md rounded-md p-4 w-72 border border-gray-300 transition-opacity duration-300 ease-in-out">
    {alerts.length === 0 ? (
      <p className="text-gray-600">No document alerts at the moment.</p>
    ) : (
      <div className="space-y-2">
        {alerts.map((alert) => (
          <div key={alert.id} className="p-3 border-l-4 border-red-500 bg-gray-100 rounded-md">
            <h4 className="font-medium text-gray-900">{alert.document}</h4>
            <span className="text-xs text-gray-600">Deadline: {alert.deadline}</span>
            <p className="text-sm text-gray-700">Issue: {alert.issue}</p>
          </div>
        ))}
      </div>
    )}
    <button className="mt-3 bg-red-500 text-white px-3 py-1 rounded-md w-full hover:bg-red-600" onClick={() => setIsAlertOpen(false)}>
      Close
    </button>
  </div>
)} */}

 {/* Alert Button for Flagged Documents */}
  {/* <Button
    variant="outline"
    size="icon"
    className="relative"
    onClick={() => setActiveTab("alerts")} // Switches to Document Alerts
  >
    <AlertTriangle className="h-5 w-5 text-red-600" />
    {alerts.length > 0 && (
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
        {alerts.length}
      </span>
    )}
  </Button> */}

  {/* <Button
    variant="outline"
    size="icon"
    onClick={() => setShowChat(!showChat)}
  >
    <MessageSquareText className="h-5 w-5" />
  </Button>
  <Button variant="outline" size="icon">
    <HelpCircle className="h-5 w-5" />
  </Button> */}

 
    {/* <div className="relative">
      {/* Button to Toggle Alert Panel */}
      {/* <button
        className="bg-white border p-2 rounded-full shadow-md"
        onClick={() => setIsAlertOpen(!isAlertOpen)}
      >
        <AlertTriangle className="h-5 w-5 text-red-600" />
        {alerts.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {alerts.length}
          </span>
        )}
      </button>  */}

      {/* Floating Alert Panel */}
      {/* {isAlertOpen && (
        <div className="absolute right-0 top-12 bg-white shadow-md rounded-md p-4 w-72 border border-gray-300 z-50 transition-opacity duration-300">
          {alerts.length === 0 ? (
            <p className="text-gray-600">No document alerts at the moment.</p>
          ) : (
            <div className="space-y-2">
              {alerts.map((alert) => (
                <div key={alert.id} className="p-3 border-l-4 border-red-500 bg-gray-100 rounded-md">
                  <h4 className="font-medium text-gray-900">{alert.document}</h4>
                  <span className="text-xs text-gray-600">Deadline: {alert.deadline}</span>
                  <p className="text-sm text-gray-700">Issue: {alert.issue}</p>
                </div>
              ))}
            </div>
          )}
          {/* Close Button */}
          {/* <button
            className="mt-3 bg-red-500 text-white px-3 py-1 rounded-md w-full hover:bg-red-600"
            onClick={() => setIsAlertOpen(false)}
          >
            Close
          </button>
        </div>
      )}
    </div>
   */} 




          <Button
            variant="outline"
            size="icon"
            onClick={() => setShowChat(!showChat)}
          >
            <MessageSquareText className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon">
            <HelpCircle className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Live Chat Popup */}
      {showChat && (
        <div className="fixed bottom-4 right-4 w-80 md:w-96 bg-white dark:bg-gray-900 rounded-lg shadow-xl z-50 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <MessageSquareText className="h-5 w-5 text-blue-500 mr-2" />
              <h3 className="font-medium">Live Support</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowChat(false)}
              className="h-6 w-6"
            >
              <span className="sr-only">Close</span>
              <span className="text-lg">&times;</span>
            </Button>
          </div>
          <div className="p-4 h-80 overflow-y-auto space-y-4">
            {chatHistory.map((chat, index) => (
              <div
                key={index}
                className={`flex ${chat.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    chat.sender === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                  }`}
                >
                  {chat.message}
                </div>
              </div>
            ))}
          </div>
          <form
            onSubmit={handleChatSubmit}
            className="p-4 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="flex space-x-2">
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="Type your message..."
              />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      )}

      {loading ? (
        <div className="h-[400px] md:h-[500px] bg-gray-200 dark:bg-gray-800 rounded-xl animate-pulse" />
      ) : (
        <div className="space-y-8">
          {/* Carousel Banner */}
          <Carousel
            images={carouselImages}
            className="w-full rounded-xl overflow-hidden shadow-lg"
          />

          {/* Real-time Notices Section */}
          <Card className="rounded-md bg-gradient-to-r from-orange-500 via-white to-blue-500 p-1 hover:bg-gradient-to-l transition-all duration-300 hover:shadow-lg">
            <div className="p-6 bg-white">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Bell className="h-5 w-5 text-yellow-500 mr-2 animate-ping hover:animate-none" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white hover:text-gray-500">
                    Important Notices
                  </h3>
                </div>
                <Link to="/user/notices">
                  <Button variant="outline" size="sm" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    View All
                  </Button>
                </Link>
              </div>
              <div className="space-y-4 ">
                {notices.map((notice) => (
                  <div
                    key={notice.id}
                    className={`p-4 rounded-lg border-b-4 ${
                      notice.priority === "high"
                        ? "bg-gray-300 bg-opacity-30 hover:bg-opacity-20 hover:border-orange-500 transition-colors dark:bg-red-900/10 bg-red-50"
                        : "bg-gray-300 bg-opacity-30 hover:bg-opacity-20 hover:border-orange-500 transition-colors dark:bg-blue-900/10"
                    }`}
                  >
                    <div className="flex justify-between">
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {notice.title}
                      </h4>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {notice.date}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                      {notice.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Main Sections Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Daakhle Section */}
            {/* <Card className="col-span-1">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Daakhle
                  </h3>
                  <Link to="/user/DAAKHLE/BaandkaamParvangi">
                    <Button variant="outline" size="sm">
                      View All
                    </Button>
                  </Link>
                </div>
                <div className="space-y-4">
                  <Link
                    to="/user/DAAKHLE/BaandkaamParvangi"
                    className="block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Submit New Application
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Apply for various certificates and documents
                    </p>
                  </Link>
                  <Link
                    to="/user/dashboard"
                    className="block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Track Applications
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Check status of your submissions
                    </p>
                  </Link>
                </div>
              </div>
            </Card> */}

            {/* Maanrega Section */}
            {/* <Card className="col-span-1">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Maanrega
                  </h3>
                  <Link to="/user/MANREGA/JobCardMaagni">
                    <Button variant="outline" size="sm">
                      View All
                    </Button>
                  </Link>
                </div>
                <div className="space-y-4">
                  <Link
                    to="/user/MANREGA/JobCardMaagni"
                    className="block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Job Card Registration
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Apply for employment under MANREGA
                    </p>
                  </Link>
                  <Link
                    to="/user/MANREGA/KaamMaagni"
                    className="block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Work Progress
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Track work schedule and payments
                    </p>
                  </Link>
                </div>
              </div>
            </Card> */}

            {/* Takrar Section */}
            {/* <Card className="col-span-1">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Takrar
                  </h3>
                  <Link to="/user/TAKRAAR/PaanipuravthaTakraar">
                    <Button variant="outline" size="sm">
                      View All
                    </Button>
                  </Link>
                </div>
                <div className="space-y-4">
                  <Link
                    to="/user/TAKRAAR/PaanipuravthaTakraar"
                    className="block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Lodge Grievance
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Submit new complaints or issues
                    </p>
                  </Link>
                  <Link
                    to="/user/TAKRAAR/CleaningServiceTakraar"
                    className="block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Track Complaints
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      View status and resolution timeline
                    </p>
                  </Link>
                </div>
              </div>
            </Card> */}
          </div>

          {/* Gallery / Achievements Section */}
          <Card className="rounded-md bg-gradient-to-r from-orange-500 via-white to-blue-500 p-1 hover:bg-gradient-to-l transition-all duration-300 hover:shadow-lg">
            <div className="p-6 bg-white">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Image className="h-5 w-5 text-indigo-500 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Gallery & Achievements
                  </h3>
                </div>
                <Link to="/user/gallery">
                  <Button variant="outline" size="sm" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    View All
                  </Button>
                </Link>
              </div>

              <Tabs defaultValue="all" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="development">Development</TabsTrigger>
                  <TabsTrigger value="awards">Awards</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="mt-0">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {galleryItems.slice(0, 6).map((item) => (
                      <div
                        key={item.id}
                        className="relative group cursor-pointer overflow-hidden rounded-lg"
                      >
                        <div className="aspect-square bg-gray-200 dark:bg-gray-700 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "/images/gallery/15.jpeg";
                            }}
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                          <h4 className="text-white font-medium text-sm">
                            {item.title}
                          </h4>
                          <p className="text-gray-200 text-xs">{item.date}</p>
                        </div>
                        {item.category === "award" && (
                          <div className="absolute top-2 right-2">
                            <Badge className="bg-yellow-500">
                              <Award className="h-3 w-3 mr-1" /> Award
                            </Badge>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="development" className="mt-0">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {galleryItems
                      .filter((item) => item.category === "development")
                      .map((item) => (
                        <div
                          key={item.id}
                          className="relative group cursor-pointer overflow-hidden rounded-lg"
                        >
                          <div className="aspect-square bg-gray-200 dark:bg-gray-700 overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "/api/placeholder/200/200";
                              }}
                            />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                            <h4 className="text-white font-medium text-sm">
                              {item.title}
                            </h4>
                            <p className="text-gray-200 text-xs">{item.date}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </TabsContent>

                <TabsContent value="awards" className="mt-0">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {galleryItems
                      .filter((item) => item.category === "award")
                      .map((item) => (
                        <div
                          key={item.id}
                          className="relative group cursor-pointer overflow-hidden rounded-lg"
                        >
                          <div className="aspect-square bg-gray-200 dark:bg-gray-700 overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "/api/placeholder/200/200";
                              }}
                            />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                            <h4 className="text-white font-medium text-sm">
                              {item.title}
                            </h4>
                            <p className="text-gray-200 text-xs">{item.date}</p>
                          </div>
                          <div className="absolute top-2 right-2">
                            <Badge className="bg-yellow-500">
                              <Award className="h-3 w-3 mr-1" /> Award
                            </Badge>
                          </div>
                        </div>
                      ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </Card>

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 rounded-md bg-gradient-to-r from-orange-500 via-white to-blue-500 p-1 hover:bg-gradient-to-l   transition-all duration-300 hover:shadow-lg">
            {/* Latest Updates */}
            <Card className="col-span-1 lg:col-span-3">
              <div className="p-6 ">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Latest Updates
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center p-4 dark:bg-gray-800 rounded-lg bg-gray-300 bg-opacity-30 hover:bg-opacity-20 hover:border-orange-500 transition-colors p-4 rounded-lg border-b-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/20 text-blue-600 rounded-full mr-4">
                      <Bell className="h-5 w-5 hover:animate-bounce" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        New Scheme Announced
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Check eligibility for the latest government schemes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 dark:bg-gray-800 rounded-lg bg-gray-300 bg-opacity-30 hover:bg-opacity-20 hover:border-orange-500 transition-colors p-4 rounded-lg border-b-4">
                    <div className="p-2 bg-green-100 dark:bg-green-900/20 text-green-600 rounded-full mr-4">
                      <BarChart3 className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        MANREGA Updates
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        New work opportunities available in your area
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 dark:bg-gray-800 rounded-lg bg-gray-300 bg-opacity-30 hover:bg-opacity-20 hover:border-orange-500 transition-colors p-4 rounded-lg border-b-4">
                    <div className="p-2 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 rounded-full mr-4">
                      <Sun className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        Solar Panel Project
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Installation of solar panels completed in north sector
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Links */}
            {/* <Card className="col-span-1">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Quick Links
                </h3>
                <div className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.path}
                      className="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      <div className={`p-2 rounded-md ${link.color} mr-3`}>
                        {link.icon}
                      </div>
                      <span className="flex-1 text-gray-700 dark:text-gray-300">
                        {link.title}
                      </span>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </Link>
                  ))}
                </div>
              </div>
            </Card> */}
          </div>

          {/* Notifications Section */}
          <Card className="rounded-md bg-gradient-to-r from-orange-500 via-white to-blue-500 p-1 hover:bg-gradient-to-l transition-all duration-300 hover:shadow-lg">
            <div className="p-6 bg-white">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Bell className="h-5 w-5 text-red-500 mr-2 animate-ping" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Notifications
                  </h3>
                </div>
                <Button variant="outline" size="sm" className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ">
                <svg className="w-20 h-20 text-white-500" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="currentColor" stroke-width="2" d="M5 12l5 5l9-9" /></svg>
                  Mark All Read
                </Button>
              </div>

              <Tabs defaultValue="all" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="schemes">Schemes</TabsTrigger>
                  <TabsTrigger value="complaints">Complaints</TabsTrigger>

                </TabsList>

                <TabsContent value="all" className="mt-0 space-y-4">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 rounded-lg border-l-4 ${
                        notification.read
                          ? "p-4 dark:bg-gray-800 rounded-lg bg-gray-300 bg-opacity-30 hover:bg-opacity-20 hover:border-orange-500 transition-colors p-4 rounded-lg border-b-4"
                          : "p-4 dark:bg-gray-800 rounded-lg bg-gray-300 bg-opacity-30 hover:bg-opacity-20 hover:border-orange-500 transition-colors p-4 rounded-lg border-b-4"
                      }`}
                    >
                      <div className="flex items-start">
                        <div
                          className={`p-2 rounded-full mr-3 ${
                            notification.type === "scheme"
                              ? "bg-green-100 text-green-600 dark:bg-green-900/20"
                              : notification.type === "complaint"
                                ? "bg-red-100 text-red-600 dark:bg-red-900/20"
                                : "bg-blue-100 text-blue-600 dark:bg-blue-900/20"
                          }`}
                        >
                          {notification.type === "scheme" ? (
                            <BarChart3 className="h-5 w-5" />
                          ) : notification.type === "complaint" ? (
                            <MessageSquare className="h-5 w-5" />
                          ) : (
                            <FileText className="h-5 w-5" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <h4 className="font-medium text-gray-900 dark:text-white">
                              {notification.title}
                            </h4>
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {notification.date}
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                            {notification.message}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </TabsContent>

            

                <TabsContent value="schemes" className="mt-0 space-y-4">
                  {notifications
                    .filter((notification) => notification.type === "scheme")
                    .map((notification) => (
                      <div
                        key={notification.id}
                        className={`p-4 rounded-lg border-l-4 ${
                          notification.read
                            ? "p-4 dark:bg-gray-800 rounded-lg bg-gray-300 bg-opacity-30 hover:bg-opacity-20 hover:border-orange-500 transition-colors p-4 rounded-lg border-b-4"
                            : "p-4 dark:bg-gray-800 rounded-lg bg-gray-300 bg-opacity-30 hover:bg-opacity-20 hover:border-orange-500 transition-colors p-4 rounded-lg border-b-4"
                        }`}
                      >
                        <div className="flex items-start">
                          <div className="p-2 bg-green-100 text-green-600 dark:bg-green-900/20 rounded-full mr-3">
                            <BarChart3 className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <h4 className="font-medium text-gray-900 dark:text-white">
                                {notification.title}
                              </h4>
                              <span className="text-xs text-gray-500 dark:text-gray-400">
                                {notification.date}
                              </span>
                            </div>
                            <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                              {notification.message}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </TabsContent>

                <TabsContent value="complaints" className="mt-0 space-y-4">
                  {notifications
                    .filter((notification) => notification.type === "complaint")
                    .map((notification) => (
                      <div
                        key={notification.id}
                        className={`p-4 rounded-lg border-l-4 ${
                          notification.read
                            ? "p-4 dark:bg-gray-800 rounded-lg bg-gray-300 bg-opacity-30 hover:bg-opacity-20 hover:border-orange-500 transition-colors p-4 rounded-lg border-b-4"
                            : "p-4 dark:bg-gray-800 rounded-lg bg-gray-300 bg-opacity-30 hover:bg-opacity-20 hover:border-orange-500 transition-colors p-4 rounded-lg border-b-4"
                        }`}
                      >
                        <div className="flex items-start">
                          <div className="p-2 bg-red-100 text-red-600 dark:bg-red-900/20 rounded-full mr-3">
                            <MessageSquare className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <h4 className="font-medium text-gray-900 dark:text-white">
                                {notification.title}
                              </h4>
                              <span className="text-xs text-gray-500 dark:text-gray-400">
                                {notification.date}
                              </span>
                            </div>
                            <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                              {notification.message}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </TabsContent>
              </Tabs>
            </div>
          </Card>

          {/* Contact and Complaint Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Contact Information */}
            <Card className="col-span-1 rounded-md border-blue-500 border-2">
              <div className="p-6 rounded-md ">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/20 text-blue-600 rounded-lg">
                        <Phone className="h-5 w-5 hover:animate-ping" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          Helpline
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {contactInfo.phone}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {contactInfo.timings}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-green-100 dark:bg-green-900/20 text-green-600 rounded-lg">
                        <Mail className="h-5 w-5 hover:animate-bounce" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          Email
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {contactInfo.email}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/20 text-purple-600 rounded-lg">
                      <MapPin className="h-5 w-5 hover:animate-bounce" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        Address
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {contactInfo.address}
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                      Emergency Contacts
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {emergencyContacts.map((contact, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                        >
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            {contact.title}
                          </span>
                          <span className="font-semibold text-gray-900 dark:text-white">
                            {contact.number}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Complaint Form */}
            <Card className="col-span-1 rounded-md bg-gradient-to-r from-orange-500 via-white to-blue-500 p-1 hover:bg-gradient-to-l transition-all duration-300 hover:shadow-lg">
              <div className="p-6 bg-white rounded-md">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                  Quick Complaint
                </h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-orange-500  dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Mobile
                      </label>
                      <input
                        type="tel"
                        className="w-full px-3 py-2 border border-orange-500 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                        placeholder="Your mobile number"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Complaint Type
                    </label>
                    <select className="w-full px-3 py-2 border border-orange-500 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white">
                      <option value="" className="bg-orange-500 text-white">Select complaint type</option>
                      <option value="water" className="bg-orange-500 text-white">Water Supply</option>
                      <option value="sanitation" className="bg-orange-500 text-white">Sanitation</option>
                      <option value="electricity" className="bg-orange-500 text-white">Electricity</option>
                      <option value="roads" className="bg-orange-500 text-white">Roads</option>
                      <option value="other" className="bg-orange-500 text-white">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Description
                    </label>
                    <textarea
                      className="w-full px-3 py-2 border border-orange-500 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white h-24"
                      placeholder="Describe your complaint..."
                    ></textarea>
                  </div>
                  <div className="pt-4">
                    <Button className="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 hover:scale-105 transition-transform duration-300 ease-in-out">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Submit Complaint
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Help Center / Live Chat Section */}
          <Card className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:bg-gradient-to-t transition-all duration-300 ease-in-out hover:shadow-lg rounded-md">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Need Help?</h3>
                <Button className="hover:scale-110 transition-transform duration-300 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 hover:shadow-lg hover:border-b-4 hover:border-blue-700"
                  variant="secondary"
                  onClick={() => setShowChat(!showChat)}
                >
                  <MessageCircle className="h-4 w-4 mr-2 " />
                  Start Chat
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:bg-white/20">
                  <div className="flex flex-col items-center text-center">
                    <HelpCircle className="h-8 w-8 mb-2" />
                    <h4 className="font-medium mb-1">FAQs</h4>
                    <p className="text-sm text-blue-100">
                      Find answers to common questions
                    </p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:bg-white/20">
                  <div className="flex flex-col items-center text-center">
                    <MessageSquareText className="h-8 w-8 mb-2" />
                    <h4 className="font-medium mb-1">Live Chat</h4>
                    <p className="text-sm text-blue-100">
                      Chat with our support team
                    </p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:bg-white/20">
                  <div className="flex flex-col items-center text-center">
                    <Phone className="h-8 w-8 mb-2" />
                    <h4 className="font-medium mb-1">Call Support</h4>
                    <p className="text-sm text-blue-100">
                      Talk to our representatives
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
