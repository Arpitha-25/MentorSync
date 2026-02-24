
"use client";

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogTrigger 
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { MOCK_TEACHERS, MOCK_STUDENTS } from "@/lib/mock-data";
import { UserProfile } from "@/lib/types";
import { RequestModal } from "@/components/dashboard/RequestModal";
import { toast } from "@/hooks/use-toast";
import { Brain, Sparkles, LogOut, BookOpen, History, Settings2, Check } from "lucide-react";
import Link from 'next/link';

const AVAILABLE_INTERESTS = [
  "Machine Learning", "Data Science", "Mathematics", "Statistics", 
  "Software Engineering", "Artificial Intelligence", "Blockchain", 
  "UI/UX Design", "Product Management", "Cybersecurity"
];

const MOCK_PAST_SESSIONS = [
  { id: 'ps1', date: '2024-03-15', mentor: 'Dr. Sarah Mitchell', topic: 'Neural Networks Basics' },
  { id: 'ps2', date: '2024-03-10', mentor: 'Prof. Robert Chen', topic: 'Statistical Distributions' },
  { id: 'ps3', date: '2024-03-05', mentor: 'Dr. Sarah Mitchell', topic: 'Linear Regression Review' },
];

const MOCK_RESOURCES = [
  { id: 'r1', title: 'Introduction to PyTorch', type: 'PDF', size: '2.4 MB' },
  { id: 'r2', title: 'Advanced Gradient Descent', type: 'Video', duration: '15 min' },
  { id: 'r3', title: 'Matrix Algebra for ML', type: 'Course', duration: '4 hours' },
];

export default function StudentDashboard() {
  const [student, setStudent] = useState(MOCK_STUDENTS[0]);
  const [allocatedMentor, setAllocatedMentor] = useState<UserProfile | null>(null);
  const [selectedInterests, setSelectedInterests] = useState<string[]>(student.interests);

  useEffect(() => {
    // Simple rule-based allocation:
    const mentor = MOCK_TEACHERS.find(t => 
      t.isActive && 
      t.interests.some(interest => student.interests.includes(interest)) &&
      (t.menteesCount || 0) < (t.maxMentees || 5)
    );
    
    if (mentor) {
      setAllocatedMentor(mentor);
    } else {
      setAllocatedMentor(null);
    }
  }, [student]);

  const handleRequestSubmit = (data: any) => {
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

  const handleUpdateInterests = () => {
    setStudent(prev => ({ ...prev, interests: selectedInterests }));
    toast({
      title: "Interests Updated",
      description: "Your mentor matches will be re-evaluated.",
    });
  };

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest) 
        : [...prev, interest]
    );
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
              {/* Update Interests Action */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full justify-start border-muted hover:bg-muted/50">
                    <Settings2 className="mr-2 h-4 w-4 text-accent" /> Update Interests
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Update Your Interests</DialogTitle>
                    <DialogDescription>Select the topics you are currently focusing on to improve mentor matching.</DialogDescription>
                  </DialogHeader>
                  <div className="grid grid-cols-2 gap-4 py-4">
                    {AVAILABLE_INTERESTS.map((interest) => (
                      <div key={interest} className="flex items-center space-x-2">
                        <Checkbox 
                          id={interest} 
                          checked={selectedInterests.includes(interest)}
                          onCheckedChange={() => toggleInterest(interest)}
                        />
                        <Label htmlFor={interest} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          {interest}
                        </Label>
                      </div>
                    ))}
                  </div>
                  <Button onClick={handleUpdateInterests} className="w-full bg-primary">Save Changes</Button>
                </DialogContent>
              </Dialog>

              {/* Past Sessions Action */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full justify-start border-muted hover:bg-muted/50">
                    <History className="mr-2 h-4 w-4 text-accent" /> Past Sessions
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Session History</DialogTitle>
                    <DialogDescription>A record of your previous interactions and consultations.</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    {MOCK_PAST_SESSIONS.map(session => (
                      <div key={session.id} className="flex items-start justify-between p-3 border rounded-lg bg-muted/20">
                        <div>
                          <p className="font-bold text-primary">{session.topic}</p>
                          <p className="text-xs text-muted-foreground">{session.mentor}</p>
                        </div>
                        <p className="text-xs font-medium text-muted-foreground">{session.date}</p>
                      </div>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>

              {/* Learning Resources Action */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full justify-start border-muted hover:bg-muted/50">
                    <BookOpen className="mr-2 h-4 w-4 text-accent" /> Learning Resources
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Learning Resources</DialogTitle>
                    <DialogDescription>Recommended materials shared by your mentors.</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-3 py-4">
                    {MOCK_RESOURCES.map(res => (
                      <div key={res.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent/5 transition-colors cursor-pointer group">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-primary/5 rounded-lg group-hover:bg-primary/10">
                            <BookOpen className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-bold">{res.title}</p>
                            <p className="text-xs text-muted-foreground">{res.type} {res.size || res.duration}</p>
                          </div>
                        </div>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Check className="h-4 w-4 text-muted-foreground" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
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
