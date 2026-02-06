import {
  Monitor,
  Wrench,
  Laptop,
  Cpu,
  HardDrive,
  Shield,
  Camera,
  Keyboard,
  Headphones,
  Printer,
  Wifi,
  Database,
} from 'lucide-react'

// ===== Business Information =====
export const BUSINESS = {
  name: 'Nimix Computers',
  tagline: 'Your Trusted Technology Partner Since 2007',
  description:
    'Computer Store offering HP laptops, CCTV solutions, and laptop repair services. Retailer of computer peripherals, computer hardware and more.',
  longDescription:
    'Nimix Computers has gained immense expertise in supplying & trading of Laptops, Desktops, Keyboards and more. Located in Nagpur, Maharashtra, we are one of the leading sellers of quality computer products. We are a service expert and hold several years of experience in the industry.',
  owner: 'Mr. Hemant Shriram Zade',
  designation: 'Proprietor',
  established: 2007,
  gstin: '27AAEPZ6750A1ZL',
  phone: '+919373373952',
  phoneDisplay: '093733 73952',
  email: 'nimixcomputers@yahoo.co.in',
  address: {
    full: 'Plot No-47, Besides Indian Oil Petrol Pump, Nandanvan Main Rd, Mire Layout, Kabir Nagar, Nagpur, Maharashtra 440024',
    short: 'Nandanvan Main Rd, Kabir Nagar, Nagpur',
    city: 'Nagpur',
    state: 'Maharashtra',
    pincode: '440024',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.5384659999997!2d79.0889!3d21.1266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a5a5a5a5%3A0x0!2sNandanvan%20Main%20Rd%2C%20Kabir%20Nagar%2C%20Nagpur!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  },
  hours: {
    weekdays: '10:00 AM – 8:00 PM',
    sunday: 'Closed',
  },
  social: {
    whatsapp: 'https://wa.me/919422106494',
  },
}

// ===== Navigation Links =====
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

// ===== Hero Slides =====
export const HERO_SLIDES = [
  {
    id: 1,
    title: 'Next-Gen Computing Solutions',
    subtitle: 'Powering Nagpur Since 2007',
    description:
      'Premium laptops, desktops, and cutting-edge technology for home and business. Experience the future of computing with Nimix Computers.',
    cta: 'Explore Products',
    ctaLink: '/products',
    image: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=1920&q=80',
    gradient: 'from-blue-600/20 via-transparent to-cyan-600/10',
  },
  {
    id: 2,
    title: 'Expert Repair Services',
    subtitle: 'Fast & Reliable Solutions',
    description:
      'From hardware diagnostics to software troubleshooting, our certified technicians bring your devices back to life with precision and care.',
    cta: 'Our Services',
    ctaLink: '/services',
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=1920&q=80',
    gradient: 'from-purple-600/20 via-transparent to-blue-600/10',
  },
  {
    id: 3,
    title: 'Advanced CCTV Solutions',
    subtitle: 'Security You Can Trust',
    description:
      'Protect what matters most with our range of surveillance systems. Professional installation and 24/7 monitoring support.',
    cta: 'Learn More',
    ctaLink: '/services',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=1920&q=80',
    gradient: 'from-emerald-600/20 via-transparent to-blue-600/10',
  },
  {
    id: 4,
    title: 'Bulk Orders & Business',
    subtitle: 'Best Prices Guaranteed',
    description:
      'Buy laptops, desktops, keyboards and peripherals in bulk. Special pricing for businesses, institutions and government orders.',
    cta: 'Contact Us',
    ctaLink: '/contact',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1920&q=80',
    gradient: 'from-orange-600/20 via-transparent to-red-600/10',
  },
]

// ===== Services =====
export const SERVICES = [
  {
    id: 'laptop-repair',
    icon: 'Wrench',
    title: 'Laptop Repair & Service',
    shortDesc: 'Expert diagnostics and repairs for all laptop brands.',
    description:
      'Our certified technicians provide comprehensive laptop repair services including screen replacement, keyboard repair, motherboard repair, battery replacement, and software troubleshooting. We service all major brands with genuine parts.',
    features: [
      'Screen Replacement',
      'Keyboard & Touchpad Repair',
      'Motherboard Repair',
      'Battery Replacement',
      'Software Installation',
      'Virus Removal',
    ],
  },
  {
    id: 'desktop-repair',
    icon: 'Monitor',
    title: 'Desktop Repair & Service',
    shortDesc: 'Complete desktop computer repair and maintenance.',
    description:
      'From hardware upgrades to complete system overhauls, we handle all desktop repair needs. Our team ensures quick turnaround times without compromising on quality.',
    features: [
      'Hardware Diagnostics',
      'Component Replacement',
      'System Upgrades',
      'OS Installation',
      'Performance Optimization',
      'Data Backup & Recovery',
    ],
  },
  {
    id: 'cctv',
    icon: 'Camera',
    title: 'CCTV Installation',
    shortDesc: 'Professional surveillance system setup and maintenance.',
    description:
      'Secure your home or business with our advanced CCTV solutions. We offer professional installation, configuration, and ongoing maintenance for all types of surveillance systems.',
    features: [
      'Site Survey & Planning',
      'HD & IP Camera Installation',
      'DVR/NVR Setup',
      'Remote Viewing Setup',
      'Maintenance & AMC',
      'Cloud Storage Integration',
    ],
  },
  {
    id: 'networking',
    icon: 'Wifi',
    title: 'Networking Solutions',
    shortDesc: 'Setup and configure networks for homes and offices.',
    description:
      'From basic home WiFi setup to complex enterprise networking, we design and implement reliable network infrastructure tailored to your needs.',
    features: [
      'WiFi Installation',
      'LAN Setup',
      'Network Security',
      'Server Configuration',
      'Cable Management',
      'Network Troubleshooting',
    ],
  },
  {
    id: 'data-recovery',
    icon: 'Database',
    title: 'Data Recovery',
    shortDesc: 'Recover lost data from damaged or corrupted drives.',
    description:
      'Lost important files? Our data recovery specialists use advanced techniques to retrieve data from damaged hard drives, SSDs, USB drives, and memory cards.',
    features: [
      'Hard Drive Recovery',
      'SSD Recovery',
      'USB & SD Card Recovery',
      'RAID Recovery',
      'Deleted File Recovery',
      'Encrypted Drive Recovery',
    ],
  },
  {
    id: 'amc',
    icon: 'Shield',
    title: 'Annual Maintenance Contract',
    shortDesc: 'Comprehensive maintenance plans for peace of mind.',
    description:
      'Keep your systems running smoothly with our AMC plans. Regular maintenance, priority support, and discounted repairs ensure your technology never lets you down.',
    features: [
      'Regular System Check-ups',
      'Priority Support',
      'Discounted Repairs',
      'Software Updates',
      'Hardware Cleaning',
      'Performance Reports',
    ],
  },
]

// ===== Product Categories =====
export const PRODUCT_CATEGORIES = [
  {
    id: 'laptops',
    icon: 'Laptop',
    title: 'Laptops',
    description: 'Premium laptops from HP, Dell, Lenovo, and more for every need and budget.',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80',
    brands: ['HP', 'Dell', 'Lenovo', 'Asus', 'Acer'],
  },
  {
    id: 'desktops',
    icon: 'Monitor',
    title: 'Desktops & PCs',
    description: 'Powerful desktop computers for home, office, and gaming setups.',
    image: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=600&q=80',
    brands: ['HP', 'Dell', 'Lenovo', 'Custom Built'],
  },
  {
    id: 'peripherals',
    icon: 'Keyboard',
    title: 'Peripherals',
    description: 'Keyboards, mice, headphones, webcams, and all essential accessories.',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80',
    brands: ['Logitech', 'HP', 'Dell', 'Zebronics', 'Cosmic Byte'],
  },
  {
    id: 'components',
    icon: 'Cpu',
    title: 'Computer Components',
    description: 'RAM, SSDs, hard drives, graphics cards, processors, and motherboards.',
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600&q=80',
    brands: ['Intel', 'AMD', 'Samsung', 'Western Digital', 'Corsair'],
  },
  {
    id: 'cctv',
    icon: 'Camera',
    title: 'CCTV & Security',
    description: 'Complete surveillance solutions with cameras, DVRs, and accessories.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80',
    brands: ['Hikvision', 'Dahua', 'CP Plus', 'Godrej'],
  },
  {
    id: 'printers',
    icon: 'Printer',
    title: 'Printers & Scanners',
    description: 'Inkjet, laser, and multifunction printers for home and office use.',
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&q=80',
    brands: ['HP', 'Canon', 'Epson', 'Brother'],
  },
  {
    id: 'networking',
    icon: 'Wifi',
    title: 'Networking Equipment',
    description: 'Routers, switches, access points, and networking cables.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80',
    brands: ['TP-Link', 'D-Link', 'Netgear', 'Cisco'],
  },
  {
    id: 'storage',
    icon: 'HardDrive',
    title: 'Storage Solutions',
    description: 'Internal and external hard drives, SSDs, NAS, and USB drives.',
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600&q=80',
    brands: ['Western Digital', 'Seagate', 'Samsung', 'SanDisk'],
  },
]

// ===== Stats =====
export const STATS = [
  { value: 18, suffix: '+', label: 'Years of Experience' },
  { value: 10000, suffix: '+', label: 'Happy Customers' },
  { value: 50, suffix: '+', label: 'Brand Partners' },
  { value: 15000, suffix: '+', label: 'Products Sold' },
]

// ===== Brands/Partners =====
export const BRANDS = [
  'HP',
  'Dell',
  'Lenovo',
  'Asus',
  'Acer',
  'Intel',
  'AMD',
  'Microsoft',
  'Logitech',
  'Samsung',
  'Western Digital',
  'Seagate',
  'Hikvision',
  'TP-Link',
  'Canon',
  'Epson',
]

// ===== Testimonials =====
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    role: 'Business Owner',
    text: 'Nimix Computers has been our go-to for all IT needs for over 5 years. Their service is prompt, pricing is fair, and the team is incredibly knowledgeable. Highly recommended!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Deshmukh',
    role: 'College Student',
    text: 'Got my HP laptop from Nimix at the best price in Nagpur. Mr. Zade personally helped me choose the right configuration for my needs. Great after-sales support too!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amit Patil',
    role: 'IT Manager',
    text: 'We purchased 50+ desktops for our office from Nimix Computers. Excellent bulk pricing, timely delivery, and they even helped with the setup. Outstanding service!',
    rating: 5,
  },
  {
    id: 4,
    name: 'Sneha Kulkarni',
    role: 'Freelance Designer',
    text: 'My laptop broke down right before a deadline. Nimix fixed it within 24 hours! Their repair service is top-notch and the prices are very reasonable.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Dr. Vikram Joshi',
    role: 'Clinic Owner',
    text: 'Nimix installed CCTV cameras at my clinic. Professional installation, great picture quality, and they configured remote viewing on my phone. Very satisfied!',
    rating: 5,
  },
  {
    id: 6,
    name: 'Meera Thakur',
    role: 'School Principal',
    text: 'We chose Nimix for our school computer lab setup. From procurement to installation to AMC, everything was handled professionally. A trustworthy partner!',
    rating: 4,
  },
]

// ===== Why Choose Us Features =====
export const FEATURES = [
  {
    icon: 'Shield',
    title: 'Trusted Since 2007',
    description: 'Over 18 years of serving Nagpur with quality products and reliable services.',
  },
  {
    icon: 'Wrench',
    title: 'Expert Technicians',
    description: 'Certified professionals with expertise across all major brands and technologies.',
  },
  {
    icon: 'Cpu',
    title: 'Genuine Products',
    description: 'We only sell authentic, warranty-backed products from authorized distributors.',
  },
  {
    icon: 'Headphones',
    title: 'After-Sales Support',
    description: 'Dedicated support team ensuring your technology works flawlessly, always.',
  },
]
