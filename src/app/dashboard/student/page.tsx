
"use client";

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MOCK_TEACHERS, MOCK_STUDENTS } from "@/lib/mock-data";
import { UserProfile } from "@/lib/types";
import { RequestModal } from "@/components/dashboard/RequestModal";
import { toast } from "@/hooks/use-toast";
import { Brain, Sparkles, LogOut } from "lucide-react";
import Link from 'next/link';

export default function StudentDashboard() {
  const [allocatedMentor, setAllocatedMentor] = useState<UserProfile | null>(null);
  const student = MOCK_STUDENTS[0];

  useEffect(() => {
    // Simple rule-based allocation:
    // 1. Match by first interest
    // 2. Check if teacher is active
    // 3. Check if teacher has capacity
    const mentor = MOCK_TEACHERS.find(t => 
      t.isActive && 
      t.interests.some(interest => student.interests.includes(interest)) &&
      (t.menteesCount || 0) < (t.maxMentees || 5)
    );
    
    if (mentor) {
      setAllocatedMentor(mentor);
    }
  }, [student]);

  const handleRequestSubmit = (data: any) => {
    // Spam detection logic (simple)
    const spamKeywords = ["buy", "spam", "click here", "urgent!!!"];
    const isSpam = spamKeywords.some(kw => data.content.toLowerCase().includes(kw));

    if (isSpam) {
      toast({
        title: "Request Flagged",
        description: "Your message triggered our automated filters and will be reviewed.",
        variant: "destructive"
      });
    } else {
      toast({
        title: "Request Sent",
        description: `Your request has been sent to ${allocatedMentor?.name}.`,
      });
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <header className="max-w-6xl mx-auto flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-headline font-bold text-primary flex items-center gap-2">
            <Brain className="text-accent" /> MentorSync
          </h1>
          <p className="text-muted-foreground">Student Portal</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <p className="font-medium text-sm">{student.name}</p>
            <p className="text-xs text-muted-foreground">{student.email}</p>
          </div>
          <Avatar>
            <AvatarImage src={student.avatarUrl} />
            <AvatarFallback>{student.name[0]}</AvatarFallback>
          </Avatar>
          <Link href="/">
            <LogOut className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-none shadow-xl bg-white">
            <CardHeader className="border-b border-muted">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent" />
                <CardTitle className="font-headline text-primary">Your Allocated Mentor</CardTitle>
              </div>
              <CardDescription>Based on your interest in: {student.interests.join(', ')}</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              {allocatedMentor ? (
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <Avatar className="w-24 h-24 ring-4 ring-secondary">
                    <AvatarImage src={allocatedMentor.avatarUrl} />
                    <AvatarFallback>{allocatedMentor.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-2 text-center sm:text-left">
                    <h3 className="text-xl font-bold text-primary">{allocatedMentor.name}</h3>
                    <p className="text-muted-foreground text-sm">{allocatedMentor.email}</p>
                    <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                      {allocatedMentor.interests.map(i => (
                        <Badge key={i} variant="secondary">{i}</Badge>
                      ))}
                    </div>
                    <RequestModal 
                      teacherId={allocatedMentor.id} 
                      teacherName={allocatedMentor.name} 
                      onSubmit={handleRequestSubmit}
                    />
                  </div>
                </div>
              ) : (
                <div className="py-10 text-center text-muted-foreground">
                  No mentors available matching your criteria at the moment.
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm bg-white">
            <CardHeader>
              <CardTitle className="font-headline text-primary">Academic Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm text-foreground/80">
                <li>Professional communication is required at all times.</li>
                <li>Teachers respond within 24-48 hours during weekdays.</li>
                <li>Exam mode is reserved for sessions within 1 week of finals.</li>
                <li>Abuse of the anonymous system will result in profile flags.</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-none shadow-sm bg-white">
            <CardHeader>
              <CardTitle className="font-headline text-sm text-primary uppercase tracking-wider">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start border-muted hover:bg-muted/50">
                Update Interests
              </Button>
              <Button variant="outline" className="w-full justify-start border-muted hover:bg-muted/50">
                Past Sessions
              </Button>
              <Button variant="outline" className="w-full justify-start border-muted hover:bg-muted/50">
                Learning Resources
              </Button>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-sm bg-white overflow-hidden">
            <div className="h-2 bg-accent w-full" />
            <CardHeader>
              <CardTitle className="font-headline text-sm text-primary uppercase tracking-wider">System Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs font-medium">Mentor Matcher: ONLINE</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs font-medium">Notification Hub: ONLINE</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
