"use client";

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { MOCK_TEACHERS, MOCK_REQUESTS } from "@/lib/mock-data";
import { InteractionRequest } from "@/lib/types";
import { TeacherRequests } from "@/components/dashboard/TeacherRequests";
import { Brain, Users, Calendar, LogOut, Activity, ShieldAlert } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import Link from 'next/link';

export default function TeacherDashboard() {
  const teacher = MOCK_TEACHERS[0];
  const [isActive, setIsActive] = useState(teacher.isActive);
  const [requests, setRequests] = useState<InteractionRequest[]>(MOCK_REQUESTS);

  const handleRequestAction = (id: string, status: 'accepted' | 'rejected') => {
    setRequests(prev => prev.filter(r => r.id !== id));
    toast({
      title: status === 'accepted' ? "Request Accepted" : "Request Rejected",
      description: status === 'accepted' ? "A session has been scheduled." : "The student has been notified.",
    });
  };

  const handleToggleActive = (checked: boolean) => {
    setIsActive(checked);
    toast({
      title: checked ? "System Active" : "System Paused",
      description: checked ? "You are now accepting new mentees." : "New students will not be allocated to you.",
    });
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <header className="max-w-6xl mx-auto flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-headline font-bold text-primary flex items-center gap-2">
            <Brain className="text-accent" /> MentorSync
          </h1>
          <p className="text-muted-foreground">Faculty Portal</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <p className="font-medium text-sm">{teacher.name}</p>
            <p className="text-xs text-muted-foreground">{teacher.email}</p>
          </div>
          <Avatar>
            <AvatarImage src={teacher.avatarUrl} />
            <AvatarFallback>{teacher.name[0]}</AvatarFallback>
          </Avatar>
          <Link href="/">
            <LogOut className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <section>
            <h2 className="text-xl font-headline text-primary mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5 text-accent" /> Interaction Requests
            </h2>
            <TeacherRequests requests={requests} onAction={handleRequestAction} />
          </section>

          <section>
            <h2 className="text-xl font-headline text-primary mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-accent" /> Current Mentees
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[1, 2].map((i) => (
                <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="pt-6 flex items-center gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={`https://picsum.photos/seed/mentee${i}/100/100`} />
                    </Avatar>
                    <div>
                      <p className="font-bold text-primary">Mentee {i}</p>
                      <p className="text-xs text-muted-foreground">Research Project A</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <Card className="border-none shadow-xl bg-white overflow-hidden">
             <div className="h-2 bg-primary w-full" />
            <CardHeader>
              <CardTitle className="font-headline text-primary">Workload Status</CardTitle>
              <CardDescription>Mentoring Capacity</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-primary">{teacher.menteesCount} / {teacher.maxMentees}</span>
                  <span className="text-xs text-muted-foreground">Active Slots</span>
                </div>
                <div className="flex items-center space-x-2 bg-muted/50 p-2 rounded-lg">
                  <Switch 
                    id="active-mode" 
                    checked={isActive} 
                    onCheckedChange={handleToggleActive}
                  />
                  <Label htmlFor="active-mode" className="text-xs font-bold uppercase cursor-pointer">
                    {isActive ? 'Accepting' : 'Paused'}
                  </Label>
                </div>
              </div>

              <div className="pt-4 border-t border-muted">
                <p className="text-sm font-medium mb-3">Schedule Overview</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Monday</span>
                    <span className="text-primary font-medium">9:00 - 11:00 AM</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Wednesday</span>
                    <span className="text-primary font-medium">2:00 - 4:00 PM</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm bg-white">
            <CardHeader>
              <CardTitle className="font-headline text-sm text-primary uppercase tracking-wider">Faculty Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <button className="w-full text-left p-2 rounded-md hover:bg-muted/50 flex items-center gap-2 text-sm transition-colors">
                <Calendar className="w-4 h-4 text-accent" /> Manage Availability
              </button>
              <button className="w-full text-left p-2 rounded-md hover:bg-muted/50 flex items-center gap-2 text-sm transition-colors text-destructive">
                <ShieldAlert className="w-4 h-4" /> Reported Spam
              </button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
