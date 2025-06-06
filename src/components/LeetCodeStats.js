import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import Calendar from 'react-activity-calendar';
import { API_URL, DEFAULT_THEME } from './leetcode/constants';
import { parseSubmissionCalendar, fillMissingDates, transformData } from './leetcode/utils';

const LeetCodeStats = () => {
  const [leetCodeData, setLeetCodeData] = useState(null);
  const [calendarData, setCalendarData] = useState(null);
  const [loading, setLoading] = useState(true);
  const username = 'ashish397868'; // Replace with your LeetCode username

  useEffect(() => {
    const fetchLeetCodeData = async () => {
      try {
        const response = await axios.get(`https://leetcode-stats-api.herokuapp.com/${username}`);
        setLeetCodeData(response.data);

        // Fetch calendar data
        const calResponse = await fetch(`${API_URL}${username}/calendar`);
        const calData = await calResponse.json();
        if ('submissionCalendar' in calData) {
          const parsedData = parseSubmissionCalendar(calData.submissionCalendar);
          setCalendarData(fillMissingDates(parsedData));
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching LeetCode data:', error);
        setLoading(false);
      }
    };

    fetchLeetCodeData();
  }, [username]);

  const stats = [
    {
      difficulty: "Easy",
      solved: leetCodeData?.easySolved || 0,
      total: leetCodeData?.totalEasy || 0,
      color: "from-green-400 to-green-500",
      barColor: "bg-green-400"
    },
    {
      difficulty: "Medium",
      solved: leetCodeData?.mediumSolved || 0,
      total: leetCodeData?.totalMedium || 0,
      color: "from-yellow-400 to-yellow-500",
      barColor: "bg-yellow-400"
    },
    {
      difficulty: "Hard",
      solved: leetCodeData?.hardSolved || 0,
      total: leetCodeData?.totalHard || 0,
      color: "from-red-400 to-red-500",
      barColor: "bg-red-400"
    }
  ];

  const totalSolved = stats.reduce((acc, curr) => acc + curr.solved, 0);
  const totalProblems = stats.reduce((acc, curr) => acc + curr.total, 0);

  return (
    <div name="leetcode" className="bg-gradient-to-br from-black via-[#1a0b2e] to-[#1a0b2e] w-full min-h-screen py-20 relative">
      {/* subtle texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />

      <div className="relative z-10 max-w-screen-lg mx-auto p-4 flex flex-col justify-center text-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold inline bg-clip-text text-transparent bg-gradient-to-r from-[#c961de] to-[#7c3aed]">
            LeetCode Progress
          </h2>
          {loading ? (
            <p className="text-gray-300 mt-4">Loading stats...</p>
          ) : (
            <p className="text-gray-300 mt-4 font-semibold">
              Total Problems Solved: {totalSolved} / {totalProblems}
            </p>
          )}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Stats Cards */}
          <div className="bg-[#261d45]/40 p-6 rounded-xl border border-[#4a3a7a] hover:border-[#c961de] transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-center text-gray-200">Problem Solving Progress</h3>
            <div className="space-y-6 font-semibold">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{stat.difficulty}</span>
                    <span className="text-gray-400">{stat.solved}/{stat.total}</span>
                  </div>
                  <div className="relative h-4 bg-[#4a3a7a]/30 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(stat.solved / stat.total) * 100}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className={`absolute h-full ${stat.barColor} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activity Calendar */}
          <div className="bg-[#261d45]/40 p-6 rounded-xl border border-[#4a3a7a] hover:border-[#c961de] transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-center text-gray-200">Submission Activity</h3>
            <div className="calendar-heatmap ">
              {calendarData && (
                <Calendar
                  data={transformData(calendarData.contributions)}
                  theme={DEFAULT_THEME}
                  labels={{
                    totalCount: '{{count}} submissions in the last year',
                  }}
                  loading={loading}
                  hideColorLegend={false}
                  hideMonthLabels={false}
                  hideTotalCount={false}
                />
              )}
            </div>
            <div className="mt-4 ">
              <div className="flex justify-between items-center">
                <span className="text-gray-300 font-semibold">Success Rate</span>
                <span className="text-green-400 font-semibold">{leetCodeData?.acceptanceRate || '0'}%</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-300 font-semibold">Total Submissions</span>
                <span className="text-[#7c3aed] font-semibold">{leetCodeData?.totalSubmissions || '0'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .calendar-heatmap {
          .react-activity-calendar {
            color: #94a3b8;
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default LeetCodeStats;
