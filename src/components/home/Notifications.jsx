import React from 'react';
import { motion } from 'framer-motion';

const notifications = [
  {
    // icon: <BellIcon className="w-5 h-5 text-white" />,
    title: "New Order",
    description: "You have a new order waiting for review."
  },
  {
    // icon: <CalendarIcon className="w-5 h-5 text-white" />,
    title: "Upcoming Event",
    description: "Your team meeting is scheduled for tomorrow at 2pm."
  }
 
];

export default function Notifications() {
  return (
    <div className="flex flex-col pb-10 items-center gap-8 w-full bg-black p-8">
      <div className='text-6xl font-bold text-white'>Notifications</div>
      <div className="flex flex-wrap justify-center gap-4 w-full max-w-5xl">
        {notifications.map((notification, index) => (
          <NotificationCard
            key={index}
            icon={<BellIcon/>}
            title={notification.title}
            description={notification.description}
          />
        ))}
      </div>
    </div>
  );
}

function NotificationCard({ icon, title, description }) {
  return (
    <motion.div
      className="flex flex-col items-center gap-2 bg-gray-800 p-6 rounded-lg shadow-lg w-full sm:w-1/3 transform transition-transform duration-300 hover:scale-105"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-gray-600 rounded-full p-3">{icon}</div>
      <div className="text-lg font-medium text-white">{title}</div>
      <p className="text-sm text-gray-300 text-center">{description}</p>
    </motion.div>
  );
}

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function InboxIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
