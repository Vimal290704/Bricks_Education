import React, { useContext } from "react";
import HomeContext from "../../context/HomeContext";

const ScheduleSection = () => {
  const { currentDay, showDay } = useContext(HomeContext);
  const scheduleData = {
    1: {
      title: "DAY 1 - Mindset & Fundamentals",
      duration: "6 hours of immersive learning",
      timeline: [
        {
          time: "15 min",
          icon: "👋",
          title: "Intro + Icebreaking",
          description: "Meet your mentors, teammates, and the BRICKS vibe.",
        },
        {
          time: "20 min",
          icon: "💭",
          title: "Philosophy of Exploration",
          description:
            "Why is this workshop happening? Why do we need to learn to learn? How is tech moving so fast?",
        },
        {
          time: "20 min",
          icon: "🌟",
          title: "Interactive Tech Session",
          description:
            "Mind-blowing facts: Microsoft servers are underwater, Elon Musk's tech visions, What if tech disappears tomorrow?",
        },
        {
          time: "20 min",
          icon: "🎯",
          title: "Team Formation + Kit Distribution",
          description:
            "Each team gets: 1 Arduino, Chassis + Motors, 1-2 sensors, Breadboard, wires, batteries etc.",
        },
        {
          time: "2 hour",
          icon: "⚡",
          title: "Tech Fundamentals",
          description:
            "Arduino basics, sensors, wiring, logic. Hands-on circuit building.",
        },
        {
          time: "1 hour",
          icon: "🤖",
          title: "AI x Learn-to-Learn",
          description:
            "Using ChatGPT, YouTube, Docs for self-learning & debugging.",
        },
      ],
    },
    2: {
      title: "DAY 2 - Action & Competition",
      duration: "4 hours of building and competing",
      timeline: [
        {
          time: "1-1.5 hour",
          icon: "🔧",
          title: "Continue Building",
          description: "Teams build and test their bots. Mentors support.",
        },
        {
          time: "15 min",
          icon: "🏁",
          title: "Robo Race Setup",
          description: "Obstacle courses, racing loops, and test trials.",
        },
        {
          time: "1-1.5 hour",
          icon: "🏎️",
          title: "Robo Races & Wars",
          description:
            "Let the games begin. Time-based, task-based, or battle-based races.",
        },
        {
          time: "30 min",
          icon: "🏆",
          title: "Prize Distribution",
          description: "Winning teams receive goodies and certificates.",
        },
      ],
    },
    3: {
      title: "DAY 3 - Think Like a CEO",
      duration: "4.5 hours of innovation and presentation",
      timeline: [
        {
          time: "1.5 hour",
          icon: "💡",
          title: "Mentored Build Time",
          description: "Work on prototypes and solutions.",
        },
        {
          time: "30 min",
          icon: "📊",
          title: "Presentation Prep",
          description: "Pitching skills, team planning.",
        },
        {
          time: "2 hour",
          icon: "🦈",
          title: "Shark Tank Pitches",
          description:
            "Present ideas to panel. Judges evaluate on originality, relevance, teamwork.",
        },
        {
          time: "40-50 min",
          icon: "🎉",
          title: "Final Prize Distribution + Reflection",
          description: "Final awards and student reflections.",
        },
      ],
    },
  };

  return (
    <section
      id="schedule"
      className="section schedule-section animate-on-scroll bg-gray-50 py-16"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="section-header text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Workshop Schedule</h2>
          <p className="text-xl text-gray-600">
            A comprehensive 3-day journey of learning and innovation
          </p>
        </div>

        {/* Desktop Layout - Your original design */}
        <div className="hidden lg:block">
          <div className="schedule-container">
            <div className="schedule-sidebar">
              <div className="schedule-progress-line"></div>

              {[1, 2, 3].map((day) => (
                <div
                  key={day}
                  className={`schedule-day-item ${currentDay === day ? "active" : ""}`}
                  onClick={() => showDay(day)}
                >
                  <div className="progress-dot"></div>
                  <span className="day-number">0{day}</span>
                  <span className="day-title">
                    {day === 1 && "Mindset & Fundamentals"}
                    {day === 2 && "Action & Competition"}
                    {day === 3 && "Think Like a CEO"}
                  </span>
                  <span className="day-subtitle">
                    {day === 1 && "6 hours of immersive learning"}
                    {day === 2 && "4 hours of building and competing"}
                    {day === 3 && "4.5 hours of innovation and presentation"}
                  </span>
                </div>
              ))}
            </div>

            <div className="schedule-content">
              <div className={`schedule-day ${currentDay ? "active" : ""}`}>
                <div className="day-header">
                  <h3>{scheduleData[currentDay]?.title}</h3>
                  <div className="day-duration">
                    {scheduleData[currentDay]?.duration}
                  </div>
                </div>
                <div className="schedule-timeline">
                  {scheduleData[currentDay]?.timeline.map((item, index) => (
                    <div key={index} className="timeline-item">
                      <div className="timeline-time">
                        {item.time}
                      </div>
                      <div className="timeline-content">
                        <div className="timeline-icon">{item.icon}</div>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Simplified Mobile Layout */}
        <div className="lg:hidden">
          {/* Mobile: Show all days in a simple vertical layout */}
          <div className="space-y-8">
            {[1, 2, 3].map((day) => (
              <div key={day} className="mobile-day-section">
                {/* Day Header */}
                <div className="bg-red-500 text-white p-4 rounded-t-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white text-red-500 rounded-full flex items-center justify-center text-sm font-bold">
                      {day}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">
                        {day === 1 && "Mindset & Fundamentals"}
                        {day === 2 && "Action & Competition"}
                        {day === 3 && "Think Like a CEO"}
                      </h3>
                      <p className="text-sm opacity-90">
                        {scheduleData[day]?.duration}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Day Timeline */}
                <div className="bg-white rounded-b-xl border-x border-b border-gray-200">
                  {scheduleData[day]?.timeline.map((item, index) => (
                    <div key={index} className="p-4 border-b border-gray-100 last:border-b-0">
                      <div className="flex gap-3">
                        <div className="text-lg shrink-0">{item.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-semibold text-gray-800 text-sm">{item.title}</h4>
                            <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium">
                              {item.time}
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;