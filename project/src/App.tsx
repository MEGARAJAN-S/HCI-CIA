import React, { useState } from 'react';
import { MessageSquare, Calendar, Bell, Users, BarChart3, PieChart, LineChart, Activity, CheckCircle, Video, Phone, Plus, Search, Hash } from 'lucide-react';
import { format } from 'date-fns';

// Enhanced mock data
const pendingTasks = [
  { id: 1, title: "Q1 Report Review", priority: "High", dueDate: "2024-03-25" },
  { id: 2, title: "Client Meeting Prep", priority: "Medium", dueDate: "2024-03-26" },
  { id: 3, title: "Team Training", priority: "Low", dueDate: "2024-03-28" },
  { id: 4, title: "API Integration", priority: "High", dueDate: "2024-03-29" },
  { id: 5, title: "Documentation Update", priority: "Medium", dueDate: "2024-03-30" }
];

const performanceData = [
  { month: "Jan", score: 85, efficiency: 78, completion: 92, bugs: 15, features: 25 },
  { month: "Feb", score: 88, efficiency: 82, completion: 88, bugs: 12, features: 28 },
  { month: "Mar", score: 92, efficiency: 85, completion: 95, bugs: 8, features: 30 }
];

const meetings = [
  { id: 1, title: "Sprint Planning", date: "2024-03-25 10:00", attendees: ["John", "Sarah", "Mike"] },
  { id: 2, title: "Client Demo", date: "2024-03-26 14:00", attendees: ["Sarah", "Mike", "Anna"] },
  { id: 3, title: "Team Retrospective", date: "2024-03-27 11:00", attendees: ["John", "Sarah", "Mike", "Anna"] },
  { id: 4, title: "Product Review", date: "2024-03-28 15:00", attendees: ["Mike", "Anna", "Tom"] }
];

const reminders = [
  { id: 1, title: "Submit Weekly Report", datetime: "2024-03-25 17:00" },
  { id: 2, title: "Code Review Session", datetime: "2024-03-26 11:00" },
  { id: 3, title: "Team Lunch", datetime: "2024-03-27 12:30" },
  { id: 4, title: "Project Deadline", datetime: "2024-03-29 18:00" }
];

const chatGroups = [
  { id: 1, name: "Frontend Team", members: 8, unread: 3 },
  { id: 2, name: "Project Alpha", members: 12, unread: 5 },
  { id: 3, name: "Design Sync", members: 6, unread: 0 },
  { id: 4, name: "General", members: 25, unread: 2 }
];

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false);
  const [isReminderOpen, setIsReminderOpen] = useState(false);
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi team, how's the progress?", sender: "John", timestamp: "09:30" },
    { id: 2, text: "On track with the deliverables!", sender: "Sarah", timestamp: "09:32" }
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [newMeeting, setNewMeeting] = useState({ title: "", date: "", time: "" });
  const [newReminder, setNewReminder] = useState({ title: "", datetime: "" });

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        text: newMessage,
        sender: "You",
        timestamp: format(new Date(), "HH:mm")
      }]);
      setNewMessage("");
    }
  };

  const addMeeting = (e: React.FormEvent) => {
    e.preventDefault();
    // Add meeting logic here
    setIsSchedulerOpen(false);
  };

  const addReminder = (e: React.FormEvent) => {
    e.preventDefault();
    // Add reminder logic here
    setIsReminderOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-['Inter']">
      {/* Header */}
      <header className="bg-gray-800 p-4 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Hey MEGARAJAN, How was your day?</h1>
          <div className="flex gap-4 overflow-x-auto pb-2">
            <button
              onClick={() => setIsChatOpen(!isChatOpen)}
              className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg hover:from-blue-700 hover:to-blue-500 transition shadow-lg"
            >
              <MessageSquare size={20} />
              New Chat
            </button>
            <button
              onClick={() => setIsSchedulerOpen(!isSchedulerOpen)}
              className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-lg hover:from-emerald-700 hover:to-emerald-500 transition shadow-lg"
            >
              <Calendar size={20} />
              Schedule Meeting
            </button>
            <button
              onClick={() => setIsReminderOpen(!isReminderOpen)}
              className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg hover:from-purple-700 hover:to-purple-500 transition shadow-lg"
            >
              <Bell size={20} />
              Set Reminder
            </button>
            <button className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-amber-600 to-amber-400 rounded-lg hover:from-amber-700 hover:to-amber-500 transition shadow-lg">
              <Users size={20} />
              Team Chat
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6 grid grid-cols-2 gap-6">
        {/* Existing dashboard components... */}
      </main>

      {/* Chat Modal */}
      {isChatOpen && (
        <div className="fixed bottom-4 right-4 w-96 bg-gray-800 rounded-xl shadow-2xl">
          <div className="p-4 border-b border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg">Team Chat</h3>
              <button onClick={() => setIsChatOpen(false)} className="text-gray-400 hover:text-white">
                ×
              </button>
            </div>
            <div className="flex gap-2 mb-4">
              <button className="flex-1 py-2 px-4 bg-blue-600 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2">
                <Video size={16} />
                Video Call
              </button>
              <button className="flex-1 py-2 px-4 bg-green-600 rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2">
                <Phone size={16} />
                Voice Call
              </button>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Search chats..."
                className="flex-1 bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600">
                <Search size={20} />
              </button>
            </div>
          </div>
          
          {/* Chat Groups */}
          <div className="p-4 border-b border-gray-700">
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-semibold">Groups</h4>
              <button className="p-1 hover:bg-gray-700 rounded">
                <Plus size={16} />
              </button>
            </div>
            <div className="space-y-2">
              {chatGroups.map(group => (
                <button
                  key={group.id}
                  onClick={() => setActiveChat(group.name)}
                  className={`w-full p-2 rounded-lg text-left flex items-center gap-3 ${
                    activeChat === group.name ? 'bg-blue-600' : 'hover:bg-gray-700'
                  }`}
                >
                  <Hash size={16} />
                  <div className="flex-1">
                    <div className="font-medium">{group.name}</div>
                    <div className="text-sm text-gray-400">{group.members} members</div>
                  </div>
                  {group.unread > 0 && (
                    <span className="bg-red-500 px-2 py-1 rounded-full text-xs">
                      {group.unread}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Messages */}
          <div className="h-96 p-4 overflow-y-auto space-y-4">
            {messages.map(message => (
              <div key={message.id} className={`flex flex-col ${message.sender === "You" ? "items-end" : "items-start"}`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm text-gray-400">{message.sender}</span>
                  <span className="text-xs text-gray-500">{message.timestamp}</span>
                </div>
                <div className={`px-4 py-2 rounded-lg max-w-[80%] ${
                  message.sender === "You" ? "bg-blue-600" : "bg-gray-700"
                }`}>
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <form onSubmit={sendMessage} className="p-4 border-t border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="submit" className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
                Send
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Meeting Scheduler Modal */}
      {isSchedulerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-xl w-[480px]">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Schedule Meeting</h3>
              <button onClick={() => setIsSchedulerOpen(false)} className="text-gray-400 hover:text-white">
                ×
              </button>
            </div>
            
            {/* Existing Meetings */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Upcoming Meetings</h4>
              <div className="space-y-3">
                {meetings.map(meeting => (
                  <div key={meeting.id} className="bg-gray-700 p-3 rounded-lg">
                    <div className="font-medium">{meeting.title}</div>
                    <div className="text-sm text-gray-400">
                      {format(new Date(meeting.date), "MMM d, yyyy 'at' h:mm a")}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">
                      {meeting.attendees.join(", ")}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* New Meeting Form */}
            <form onSubmit={addMeeting}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Meeting Title</label>
                  <input
                    type="text"
                    className="w-full bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newMeeting.title}
                    onChange={(e) => setNewMeeting({...newMeeting, title: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Date</label>
                    <input
                      type="date"
                      className="w-full bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={newMeeting.date}
                      onChange={(e) => setNewMeeting({...newMeeting, date: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Time</label>
                    <input
                      type="time"
                      className="w-full bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={newMeeting.time}
                      onChange={(e) => setNewMeeting({...newMeeting, time: e.target.value})}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Schedule Meeting
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Reminder Modal */}
      {isReminderOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-xl w-[480px]">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Set Reminder</h3>
              <button onClick={() => setIsReminderOpen(false)} className="text-gray-400 hover:text-white">
                ×
              </button>
            </div>

            {/* Existing Reminders */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Current Reminders</h4>
              <div className="space-y-3">
                {reminders.map(reminder => (
                  <div key={reminder.id} className="bg-gray-700 p-3 rounded-lg">
                    <div className="font-medium">{reminder.title}</div>
                    <div className="text-sm text-gray-400">
                      {format(new Date(reminder.datetime), "MMM d, yyyy 'at' h:mm a")}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* New Reminder Form */}
            <form onSubmit={addReminder}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Reminder Title</label>
                  <input
                    type="text"
                    className="w-full bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newReminder.title}
                    onChange={(e) => setNewReminder({...newReminder, title: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Date & Time</label>
                  <input
                    type="datetime-local"
                    className="w-full bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newReminder.datetime}
                    onChange={(e) => setNewReminder({...newReminder, datetime: e.target.value})}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Set Reminder
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;