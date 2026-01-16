import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
    LineChart, Line
} from 'recharts';
import { Clock, AlertTriangle, CheckCircle, TrendingUp, Users, Moon, Sun } from 'lucide-react';
import { shiftAnalysisData, hourlyWorkloadData, kpiData } from '../data';

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-slate-50 p-8 font-sans text-slate-900">
            {/* Header */}
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-slate-800">IT Support Process Improvement Dashboard</h1>
                <p className="text-slate-500 mt-2">Operational Metrics & Stickiness Analysis</p>
            </header>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-medium text-slate-500">Total Tickets (Week)</h3>
                        <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                            <TrendingUp size={20} />
                        </div>
                    </div>
                    <div className="text-3xl font-bold text-slate-800">{kpiData.totalTickets}</div>
                    <p className="text-xs text-green-600 mt-1 font-medium">{kpiData.trend}</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-medium text-slate-500">Avg Resolution Time</h3>
                        <div className="p-2 bg-amber-50 rounded-lg text-amber-600">
                            <Clock size={20} />
                        </div>
                    </div>
                    <div className="text-3xl font-bold text-slate-800">{kpiData.avgResolutionTime}</div>
                    <p className="text-xs text-slate-400 mt-1">Blended Average</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-medium text-slate-500">SLA Breach Rate</h3>
                        <div className="p-2 bg-red-50 rounded-lg text-red-600">
                            <AlertTriangle size={20} />
                        </div>
                    </div>
                    <div className="text-3xl font-bold text-red-600">{kpiData.slaBreachRate}</div>
                    <p className="text-xs text-red-500 mt-1 font-medium">Critical - Action Required</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                {/* Chart 1: Shift Analysis (The Problem Proof) */}
                <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                            <Users size={20} className="text-slate-400" />
                            Shift Performance Analysis
                        </h2>
                        <div className="flex gap-2">
                            <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full flex items-center gap-1">
                                <Sun size={12} /> Day
                            </span>
                            <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full flex items-center gap-1">
                                <Moon size={12} /> Night
                            </span>
                        </div>
                    </div>

                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={shiftAnalysisData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748B' }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748B' }} label={{ value: 'Mins', angle: -90, position: 'insideLeft' }} />
                                <Tooltip
                                    cursor={{ fill: '#F1F5F9' }}
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                                <Legend />
                                <Bar dataKey="avgResolutionTime" name="Avg Resolution (Mins)" fill="#6366f1" radius={[4, 4, 0, 0]} barSize={60} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <p className="text-sm text-slate-500 mt-4 italic text-center">
                        Night shift takes ~4 hours (240 mins) vs 15 mins for Day shift
                    </p>
                </div>

                {/* Actionable Insights Panel (JD Requirement) */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 rounded-xl shadow-lg flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-6 text-emerald-400">
                        <CheckCircle size={24} />
                        <h2 className="text-xl font-bold">Analyst Recommendations</h2>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Observation</h3>
                            <p className="text-sm leading-relaxed">
                                Night Shift resolution times are 400% higher than Day Shift despite lower volume.
                            </p>
                        </div>

                        <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Root Cause</h3>
                            <p className="text-sm leading-relaxed">
                                Lack of Level 2 support availability during off-hours.
                            </p>
                        </div>

                        <div className="bg-emerald-500/20 border border-emerald-500/30 p-4 rounded-lg">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">Recommendation</h3>
                            <p className="text-sm font-medium leading-relaxed text-emerald-100">
                                Reallocate 2 Senior Analysts to the Night Shift rotation to reduce SLA breaches.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Chart 2: Workload (Volume) */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <h2 className="text-lg font-bold text-slate-800 mb-6">Hourly Ticket Volume (Week Average)</h2>
                <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={hourlyWorkloadData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                            <XAxis dataKey="hour" axisLine={false} tickLine={false} tick={{ fill: '#64748B' }} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748B' }} />
                            <Tooltip
                                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                            />
                            <Line type="monotone" dataKey="tickets" name="Tickets Received" stroke="#0ea5e9" strokeWidth={3} dot={{ r: 4, fill: '#0ea5e9' }} activeDot={{ r: 6 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
