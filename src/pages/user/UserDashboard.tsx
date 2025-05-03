import { 
  FileText,
  ChevronRight,
  Home,
  BriefcaseBusiness,
  MessageSquare,
  Bell, // Add this import
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
  Calendar // Add this import
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // Import Button component
import { useState, useCallback } from "react";
import { Carousel } from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

interface ChatMessage {
  sender: 'user' | 'system';
  message: string;
  timestamp?: Date;
}

interface Alert {
  id: number;
  document: string;
  issue: string;
  deadline: string;
  resolved?: boolean;
}

interface Notification {
  id: number;
  title: string;
  message: string;
  date: string;
  read: boolean;
  type: string;
}

interface Notice {
  id: number;
  title: string;
  content: string;
  date: string;
  priority: string;
}

interface GalleryItem {
  id: number;
  title: string;
  image: string;
  category: string;
  date: string;
}

interface AppliedForm {
  id: string;
  type: string;
  status: string;
  appliedDate: string;
  approvalDate: string;
  remark: string;
}

interface QuickLink {
  title: string;
  path: string;
  icon: JSX.Element;
  color: string;
}

interface EmergencyContact {
  title: string;
  number: string;
}

const UserDashboard = () => {
  const [loading] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    {
      sender: "system",
      message: "Welcome to Zilla Parisad Gramin Vibhag! How can we help you today?",
    },
  ]);

  const [alerts, setAlerts] = useState<Alert[]>([
    {
      id: 1,
      document: "Resident Certificate",
      issue: "Incorrect address proof uploaded",
      deadline: "May 10, 2025",
    },
  ]);

  const [activeTab, setActiveTab] = useState("all");
  const [errorMessage, setErrorMessage] = useState("");
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  // New states for modals and upload progress
  const [selectedForm, setSelectedForm] = useState<AppliedForm | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [showUploadSuccess, setShowUploadSuccess] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [currentUploadId, setCurrentUploadId] = useState<string | null>(null);

  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const [searchResults, setSearchResults] = useState([]); // State for search results
  const navigate = useNavigate(); // React Router's navigation function

  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>, formId: string) => {
    const target = event.target;
    const file = target.files?.[0];

    if (!file) return;

    // Validate file type
    if (file.type !== "application/pdf") {
      setErrorMessage("Please upload the document in PDF format.");
      target.value = "";
      return;
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      setErrorMessage("File size must be less than 5MB");
      target.value = "";
      return;
    }

    setErrorMessage("");
    setIsUploading(true);
    setCurrentUploadId(formId);
    setUploadProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          setShowUploadSuccess(true);
          setTimeout(() => {
            setShowUploadSuccess(false);
            setCurrentUploadId(null);
          }, 3000);
          target.value = ""; // Reset the file input
          return 100;
        }
        return prev + 10;
      });
    }, 300);

    // In a real app, you would upload to a server here
    console.log("Uploading file for form:", formId);
  }, []);

  const handleViewForm = useCallback((form: AppliedForm) => {
    setSelectedForm(form);
  }, []);

  const handleDownloadForm = useCallback(() => {
    // In a real app, this would download the actual form
    console.log("Downloading form:", selectedForm?.id);
    // Simulate download
    const link = document.createElement('a');
    link.href = '/sample-form.pdf';
    link.download = `${selectedForm?.type.replace(/\s+/g, '-').toLowerCase()}-${selectedForm?.id}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [selectedForm]);

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
    { title: "Baandkaam Parvangi", path: "/user/DAAKHLE/BaandkaamParvangi", color: "bg-orange-100", icon: <FileText className="h-6 w-6 text-orange-500" /> },
    { title: "Resident Certificate Application", path: "/user/DAAKHLE/ResidentCertificateApplication", color: "bg-blue-100", icon: <Home className="h-6 w-6 text-blue-500" /> },
    { title: "Business Non-Exemption Certificate", path: "/user/DAAKHLE/BusinessNonExemptionCertificate", color: "bg-green-100", icon: <BriefcaseBusiness className="h-6 w-6 text-green-500" /> },
    { title: "Property Transfer Application", path: "/user/DAAKHLE/PropertyTransferApplication", color: "bg-purple-100", icon: <MapPin className="h-6 w-6 text-purple-500" /> },
    { title: "Application for Marriage Certificate", path: "/user/DAAKHLE/MarriageCertificateApplication", color: "bg-pink-100", icon: <Award className="h-6 w-6 text-pink-500" /> },
    { title: "Property Certificate (Assessment Extract)", path: "/user/DAAKHLE/PropertyCertificate", color: "bg-teal-100", icon: <FileText className="h-6 w-6 text-teal-500" /> },
    { title: "Thakbaki Naslyacha Pramanpatra", path: "/user/DAAKHLE/ThakbakiPramanpatra", color: "bg-yellow-100", icon: <FileText className="h-6 w-6 text-yellow-500" /> },
    { title: "Application for Death Certification", path: "/user/DAAKHLE/DeathCertificateApplication", color: "bg-red-100", icon: <FileText className="h-6 w-6 text-red-500" /> },
    { title: "Birth Certificate", path: "/user/DAAKHLE/BirthCertificate", color: "bg-indigo-100", icon: <FileText className="h-6 w-6 text-indigo-500" /> },
    { title: "Niradhaar Yojnesathi Vayacha Daakhla", path: "/user/DAAKHLE/NiradhaarYojna", color: "bg-cyan-100", icon: <FileText className="h-6 w-6 text-cyan-500" /> },
    { title: "Digital Signed Property Card", path: "/user/DAAKHLE/DigitalPropertyCard", color: "bg-blue-200", icon: <FileText className="h-6 w-6 text-blue-600" /> },
    { title: "DIGITALLY SIGNED 7/12", path: "/user/DAAKHLE/DigitallySigned712", color: "bg-green-200", icon: <FileText className="h-6 w-6 text-green-600" /> },
    { title: "DIGITALLY SIGNED FIELD 8A", path: "/user/DAAKHLE/DigitallySignedField8A", color: "bg-purple-200", icon: <FileText className="h-6 w-6 text-purple-600" /> },
    { title: "Job Card Maagni Arji", path: "/user/MANREGA/JobCardMaagni", color: "bg-orange-200", icon: <BriefcaseBusiness className="h-6 w-6 text-orange-600" /> },
    { title: "Kaam Maagni Arji", path: "/user/MANREGA/KaamMaagni", color: "bg-teal-200", icon: <BriefcaseBusiness className="h-6 w-6 text-teal-600" /> },
    { title: "Paanipuravtha Sambandhit Takraar", path: "/user/TAKRAAR/PaanipuravthaTakraar", color: "bg-red-200", icon: <MessageSquare className="h-6 w-6 text-red-600" /> },
    { title: "Cleaning Related Service", path: "/user/TAKRAAR/CleaningService", color: "bg-blue-200", icon: <MessageSquare className="h-6 w-6 text-blue-600" /> },
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

  const notifications = [
    {
      id: 1,
      title: "Scheme Announcement",
      message: "New agricultural subsidies available for farmers. Apply before May 15, 2025.",
      date: "2 hours ago",
      read: false,
      type: "scheme",
    },
    {
      id: 2,
      title: "Complaint Update",
      message: "Your water supply complaint #WS-2304 has been assigned to a technician.",
      date: "Yesterday",
      read: true,
      type: "complaint",
    },
    {
      id: 3,
      title: "Scheme Announcement",
      message: "Solar panel installation subsidy now available for all village residents.",
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

  const notices = [
    {
      id: 1,
      title: "Gram Sabha Meeting",
      content: "Monthly Gram Sabha meeting scheduled for April 25, 2025 at 10:00 AM.",
      date: "April 22, 2025",
      priority: "high",
    },
    {
      id: 2,
      title: "Water Supply Maintenance",
      content: "Scheduled maintenance of water supply on April 24. Supply will be disrupted from 9 AM to 2 PM.",
      date: "April 21, 2025",
      priority: "medium",
    },
    {
      id: 3,
      title: "Vaccination Camp",
      content: "Free vaccination camp for children under 5 years at Primary Health Center on April 27.",
      date: "April 20, 2025",
      priority: "high",
    },
  ];

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

  const appliedForms = [
    {
      id: "APP-2024-00123",
      type: "Resident Certificate",
      status: "Approved",
      appliedDate: "2024-05-10",
      approvalDate: "2024-05-15",
      remark: "Verified successfully",
    },
    {
      id: "APP-2024-00145",
      type: "Income Certificate",
      status: "Pending",
      appliedDate: "2024-05-12",
      approvalDate: "-",
      remark: "Under verification",
    },
    {
      id: "APP-2024-00167",
      type: "Caste Certificate",
      status: "Rejected",
      appliedDate: "2024-05-08",
      approvalDate: "2024-05-10",
      remark: "Incomplete documents",
    },
    {
      id: "APP-2024-00189",
      type: "Birth Certificate",
      status: "Approved",
      appliedDate: "2024-05-05",
      approvalDate: "2024-05-08",
      remark: "Processed quickly",
    },
  ];

  const handleChatSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    // Add user message to chat
    setChatHistory([...chatHistory, { sender: "user", message: chatMessage, timestamp: new Date() }]);

    // Simulate response
    setTimeout(() => {
      setChatHistory((prev) => [
        ...prev,
        {
          sender: "system",
          message: "Thank you for your message. A support representative will assist you shortly.",
          timestamp: new Date()
        },
      ]);
    }, 1000);

    setChatMessage("");
  }, [chatMessage, chatHistory]);

  const unreadNotifications = notifications.filter(
    (notification) => !notification.read,
  ).length;

  const handleSearch = (term: string) => {
    setSearchTerm(term);

    // Combine all searchable items
    const searchableItems = [
      ...quickLinks.map((item) => ({ type: "Quick Link", title: item.title, path: item.path })),
    ];

    // Filter items based on the search term
    const results = searchableItems.filter((item) =>
      item.title.toLowerCase().includes(term.toLowerCase())
    );

    setSearchResults(results);

    // If a Quick Link matches exactly, redirect to its path
    const exactMatch = results.find((item) => item.type === "Quick Link" && item.title.toLowerCase() === term.toLowerCase());
    if (exactMatch) {
      navigate(exactMatch.path); // Redirect to the Quick Link path
    }
  };

  return (
    <div className="animate-fade-in space-y-8">
      {/* View Form Modal */}
      {selectedForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {selectedForm.type} - {selectedForm.id}
              </h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedForm(null)}
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Application Details</h4>
                  <div className="space-y-2">
                    <p><span className="font-medium">Status:</span> 
                      <Badge
                        variant={
                          selectedForm.status === "Approved"
                            ? "secondary"
                            : selectedForm.status === "Rejected"
                            ? "destructive"
                            : "default"
                        }
                        className="ml-2"
                      >
                        {selectedForm.status}
                      </Badge>
                    </p>
                    <p><span className="font-medium">Applied Date:</span> {new Date(selectedForm.appliedDate).toLocaleDateString()}</p>
                    {selectedForm.approvalDate !== "-" && (
                      <p><span className="font-medium">Approval Date:</span> {new Date(selectedForm.approvalDate).toLocaleDateString()}</p>
                    )}
                    <p><span className="font-medium">Remark:</span> {selectedForm.remark}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Form Preview</h4>
                  <div className="border border-gray-200 dark:border-gray-700 rounded-md p-4 h-64 flex items-center justify-center bg-gray-50 dark:bg-gray-800">
                    <div className="text-center">
                      <FileText className="h-12 w-12 text-gray-400 mx-auto" />
                      <p className="mt-2 text-gray-500 dark:text-gray-400">Preview of {selectedForm.type}</p>
                      <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">Application ID: {selectedForm.id}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end space-x-3">
                <Button variant="outline" onClick={() => setSelectedForm(null)}>
                  Close
                </Button>
                <Button onClick={handleDownloadForm}>
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Upload Progress Modal */}
      {isUploading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Uploading Document
              </h3>
              <span className="text-sm font-medium">{uploadProgress}%</span>
            </div>
            <Progress value={uploadProgress} className="h-2" />
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Uploading document for {appliedForms.find(f => f.id === currentUploadId)?.type || 'application'}...
            </p>
          </div>
        </div>
      )}

      {/* Upload Success Notification */}
      {showUploadSuccess && (
        <div className="fixed bottom-4 right-4 z-50 animate-fade-in">
          <div className="bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-start max-w-sm">
            <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium">Upload Successful!</p>
              <p className="text-sm">
                Your document for {appliedForms.find(f => f.id === currentUploadId)?.type || 'application'} has been uploaded successfully.
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="ml-4 h-6 w-6 text-white hover:bg-green-600"
              onClick={() => setShowUploadSuccess(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Header Section */}
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
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-64 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
            />
            {/* Dropdown for Search Results */}
            {searchTerm && searchResults.length > 0 && (
              <div className="absolute mt-2 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg z-50">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                  {searchResults.map((result, index) => (
                    <li
                      key={index}
                      className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                      onClick={() => {
                        if (result.type === "Quick Link" && result.path) {
                          navigate(result.path); // Redirect to the Quick Link path
                        }
                      }}
                    >
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        <strong>{result.type}:</strong> {result.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* No Results Found */}
            {searchTerm && searchResults.length === 0 && (
              <div className="absolute mt-2 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg z-50">
                <p className="p-3 text-sm text-gray-700 dark:text-gray-300">Result not found</p>
              </div>
            )}
          </div>

          {/* Notifications, Alerts, and Help */}
          <Button variant="outline" size="icon" className="relative" aria-label="Notifications">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" className="relative" aria-label="Alerts">
            <AlertTriangle className="h-5 w-5 text-red-600" />
          </Button>
          <Button variant="outline" size="icon" aria-label="Help">
            <HelpCircle className="h-5 w-5" />
          </Button>
        </div>
      </div>

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
          <Card className="border-l-4 border-yellow-400">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Bell className="h-5 w-5 text-yellow-500 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Important Notices
                  </h3>
                </div>
                <Link to="/user/notices">
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </Link>
              </div>
              <div className="space-y-4">
                {notices.map((notice) => (
                  <div
                    key={notice.id}
                    className={`p-4 rounded-lg border-l-4 ${
                      notice.priority === "high"
                        ? "border-red-500 bg-red-50 dark:bg-red-900/10"
                        : "border-blue-500 bg-blue-50 dark:bg-blue-900/10"
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
            <Card className="col-span-1">
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
            </Card>

            {/* Maanrega Section */}
            <Card className="col-span-1">
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
            </Card>

            {/* Takrar Section */}
            <Card className="col-span-1">
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
            </Card>
          </div>

          {/* Applied Forms Table Section */}
          <Card>
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-indigo-500 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    My Applied Forms
                  </h3>
                </div>
                <Button variant="outline" size="sm">
                  Export to Excel
                </Button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800 text-left">
                      <th className="p-3 font-medium text-gray-700 dark:text-gray-300 rounded-tl-lg">Sr. No</th>
                      <th className="p-3 font-medium text-gray-700 dark:text-gray-300">Application ID</th>
                      <th className="p-3 font-medium text-gray-700 dark:text-gray-300">Certificate Type</th>
                      <th className="p-3 font-medium text-gray-700 dark:text-gray-300">Status</th>
                      <th className="p-3 font-medium text-gray-700 dark:text-gray-300">Applied Date</th>
                      <th className="p-3 font-medium text-gray-700 dark:text-gray-300">Approval Date</th>
                      <th className="p-3 font-medium text-gray-700 dark:text-gray-300">View/Download</th>
                      <th className="p-3 font-medium text-gray-700 dark:text-gray-300">Upload</th>
                      <th className="p-3 font-medium text-gray-700 dark:text-gray-300 rounded-tr-lg">Remark</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {appliedForms.map((form, index) => (
                      <tr key={form.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                        <td className="p-3 text-gray-700 dark:text-gray-300">{index + 1}</td>
                        <td className="p-3 font-medium text-gray-900 dark:text-white">
                          {form.id}
                        </td>
                        <td className="p-3 text-gray-700 dark:text-gray-300">{form.type}</td>
                        <td className="p-3">
                          <Badge
                            variant={
                              form.status === "Approved"
                                ? "secondary"
                                : form.status === "Rejected"
                                ? "destructive"
                                : "default"
                            }
                          >
                            {form.status}
                          </Badge>
                        </td>
                        <td className="p-3 text-gray-700 dark:text-gray-300">
                          {new Date(form.appliedDate).toLocaleDateString()}
                        </td>
                        <td className="p-3 text-gray-700 dark:text-gray-300">
                          {form.approvalDate === "-" ? "-" : new Date(form.approvalDate).toLocaleDateString()}
                        </td>
                        <td className="p-3">
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full"
                            onClick={() => handleViewForm(form)}
                          >
                            <Eye className="h-4 w-4 mr-1" /> View
                          </Button>
                        </td>
                        <td className="p-3">
                          <input
                            type="file"
                            id={`upload-${form.id}`}
                            accept=".pdf"
                            className="hidden"
                            onChange={(e) => handleFileUpload(e, form.id)}
                            disabled={isUploading}
                          />
                          <label
                            htmlFor={`upload-${form.id}`}
                            className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3 py-2 w-full cursor-pointer ${
                              isUploading ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                          >
                            <Upload className="h-4 w-4 mr-1" /> Upload
                          </label>
                        </td>
                        <td className="p-3 text-sm text-gray-700 dark:text-gray-300">
                          {form.remark}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Showing 1 to 4 of 4 entries
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm" className="bg-gray-100 dark:bg-gray-800">
                    1
                  </Button>
                  <Button variant="outline" size="sm" disabled>
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Gallery / Achievements Section */}
          <Card>
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Image className="h-5 w-5 text-indigo-500 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Gallery & Achievements
                  </h3>
                </div>
                <Link to="/user/gallery">
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </Link>
              </div>

              <Tabs defaultValue="all" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="development">Development Projects</TabsTrigger>
                  <TabsTrigger value="award">Awards</TabsTrigger>
                  <TabsTrigger value="events">Events</TabsTrigger>
                </TabsList>
                
                <TabsContent value="all">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {galleryItems.map((item) => (
                      <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                          <div>
                            <h4 className="text-white font-medium">{item.title}</h4>
                            <p className="text-xs text-gray-300">{item.date}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="development">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {galleryItems
                      .filter(item => item.category === 'development')
                      .map((item) => (
                        <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                            <div>
                              <h4 className="text-white font-medium">{item.title}</h4>
                              <p className="text-xs text-gray-300">{item.date}</p>
                            </div>
                          </div>
                        </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="award">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {galleryItems
                      .filter(item => item.category === 'award')
                      .map((item) => (
                        <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                            <div>
                              <h4 className="text-white font-medium">{item.title}</h4>
                              <p className="text-xs text-gray-300">{item.date}</p>
                            </div>
                          </div>
                        </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="events">
                  <div className="text-center py-8">
                    <Calendar className="h-12 w-12 mx-auto text-gray-400" />
                    <h4 className="mt-2 text-gray-600 dark:text-gray-300">No event photos available</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Check back later for updates
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </Card>

          {/* Quick Links Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="group"
              >
                <Card className="hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <div className={`${link.color} inline-flex p-3 rounded-lg mb-4`}>
                      {link.icon}
                    </div>
                    <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                      {link.title}
                    </h3>
                    <div className="flex items-center mt-2 text-sm text-primary">
                      <span>Quick Access</span>
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {/* Horizontal Task Bar with Quick Links */}
          <Card className="mt-6">
            <div className="p-6">
              {/* Title in the Center */}
              <div className="flex justify-center mb-6">
                <h3 className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
                  Quick Links
                </h3>
              </div>

              {/* Forms Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {[
                  { title: "Baandkaam Parvangi", icon: <FileText className="h-8 w-8 text-orange-500" /> },
                  { title: "Resident Certificate Application", icon: <Home className="h-8 w-8 text-blue-500" /> },
                  { title: "Business Non-Exemption Certificate", icon: <BriefcaseBusiness className="h-8 w-8 text-green-500" /> },
                  { title: "Property Transfer Application", icon: <MapPin className="h-8 w-8 text-purple-500" /> },
                  { title: "Application for Marriage Certificate", icon: <Award className="h-8 w-8 text-pink-500" /> },
                  { title: "Property Certificate (Assessment Extract)", icon: <FileText className="h-8 w-8 text-teal-500" /> },
                  { title: "Thakbaki Naslyacha Pramanpatra", icon: <FileText className="h-8 w-8 text-yellow-500" /> },
                  { title: "Application for Death Certification", icon: <FileText className="h-8 w-8 text-red-500" /> },
                  { title: "Birth Certificate", icon: <FileText className="h-8 w-8 text-indigo-500" /> },
                  { title: "Niradhaar Yojnesathi Vayacha Daakhla", icon: <FileText className="h-8 w-8 text-cyan-500" /> },
                  { title: "Digital Signed Property Card", icon: <FileText className="h-8 w-8 text-blue-600" /> },
                  { title: "Digitally Signed 7/12", icon: <FileText className="h-8 w-8 text-green-600" /> },
                  { title: "Digitally Signed Field 8A", icon: <FileText className="h-8 w-8 text-purple-600" /> },
                  { title: "Job Card Maagni Arji", icon: <BriefcaseBusiness className="h-8 w-8 text-orange-600" /> },
                  { title: "Kaam Maagni Arji", icon: <BriefcaseBusiness className="h-8 w-8 text-teal-600" /> },
                  { title: "Paanipuravtha Sambandhit Takraar", icon: <MessageSquare className="h-8 w-8 text-red-600" /> },
                  { title: "Cleaning Related Service", icon: <MessageSquare className="h-8 w-8 text-blue-600" /> },
                ].map((form, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow"
                  >
                    <div className="mb-3">{form.icon}</div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{form.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Contact Information Section */}
          <Card>
            <div className="p-6">
              <div className="flex items-center mb-6">
                <Phone className="h-5 w-5 text-indigo-500 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Contact Information
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-lg mr-4">
                    <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-400">{contactInfo.phone}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {contactInfo.timings}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-100 dark:bg-purple-900/20 p-3 rounded-lg mr-4">
                    <Mail className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Email</h4>
                    <p className="text-gray-600 dark:text-gray-400">{contactInfo.email}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Typically responds within 24 hours
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-lg mr-4">
                    <MapPin className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Address</h4>
                    <p className="text-gray-600 dark:text-gray-400">{contactInfo.address}</p>
                    <Button variant="link" size="sm" className="p-0 h-auto mt-1">
                      View on map
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Emergency Contacts */}
              <div className="mt-8">
                <h4 className="font-medium text-gray-900 dark:text-white mb-4">
                  Emergency Contacts
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {emergencyContacts.map((contact, index) => (
                    <Card key={index} className="border-red-200 dark:border-red-900/50">
                      <div className="p-4">
                        <h5 className="font-medium text-gray-900 dark:text-white">{contact.title}</h5>
                        <p className="text-red-600 dark:text-red-400 font-semibold mt-1">
                          {contact.number}
                        </p>
                      </div>
                    </Card>
                  ))}
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