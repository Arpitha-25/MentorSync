"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Brain, 
  GraduationCap, 
  UserCog, 
  Rocket, 
  ArrowRight, 
  ShieldAlert, 
  ListChecks, 
  Beaker, 
  Info,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background selection:bg-accent selection:text-white scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-muted">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-primary font-headline font-bold text-2xl">
            <div className="bg-primary text-white p-1 rounded-md">
              <Brain className="w-6 h-6" />
            </div>
            MentorSync
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-foreground/70">
            <Link href="#how-it-works" className="hover:text-primary transition-colors">How it works</Link>
            <Link href="#research" className="hover:text-primary transition-colors">Research</Link>
            <Link href="#about" className="hover:text-primary transition-colors">About</Link>
          </div>
          <div className="flex gap-4">
             <Link href="/dashboard/student">
              <Button variant="ghost" size="sm">Login</Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-bold">
              <Rocket className="w-4 h-4" />
              Next-Gen Academic Support
            </div>
            <h1 className="text-5xl lg:text-7xl font-headline font-bold text-primary leading-tight">
              Intelligent <br />
              <span className="text-accent">Mentorship</span> <br />
              Allocation.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Optimizing the bridge between students and teachers through data-driven matching, schedule management, and instant interaction.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/dashboard/student" className="flex-1">
                <Button className="w-full h-16 text-lg bg-primary hover:bg-primary/90 font-headline group">
                  Student Login
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/dashboard/teacher" className="flex-1">
                <Button variant="outline" className="w-full h-16 text-lg border-primary text-primary hover:bg-primary/5 font-headline">
                  Faculty Portal
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-3xl" />
            <Card className="relative border-none shadow-2xl overflow-hidden rounded-3xl">
              <CardContent className="p-0">
                <img 
                  src="https://picsum.photos/seed/mentorsync_hero/800/600" 
                  alt="Modern Education" 
                  className="w-full h-auto object-cover"
                  data-ai-hint="modern education"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex gap-4">
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl flex-1 border border-white/20">
                      <p className="text-white font-bold text-2xl">500+</p>
                      <p className="text-white/70 text-sm">Active Mentors</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl flex-1 border border-white/20">
                      <p className="text-white font-bold text-2xl">98%</p>
                      <p className="text-white/70 text-sm">Match Rating</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-24 border-t border-muted">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/5 text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <ListChecks className="w-4 h-4" /> The Process
            </div>
            <h2 className="text-4xl font-headline font-bold text-primary mb-6">Simple, Seamless Allocation</h2>
            <p className="text-muted-foreground">Our platform automates the complex logistics of academic mentoring, so you can focus on learning.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-accent text-white rounded-xl flex items-center justify-center font-bold text-xl">1</div>
              <h3 className="text-xl font-bold text-primary">Define Your Profile</h3>
              <p className="text-muted-foreground text-sm">Students select their research interests and academic goals. Faculty set their expertise and maximum capacity.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-accent text-white rounded-xl flex items-center justify-center font-bold text-xl">2</div>
              <h3 className="text-xl font-bold text-primary">Smart Matching</h3>
              <p className="text-muted-foreground text-sm">Our algorithm analyzes interest overlaps and workload balance to pair you with the perfect mentor automatically.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-accent text-white rounded-xl flex items-center justify-center font-bold text-xl">3</div>
              <h3 className="text-xl font-bold text-primary">Direct Engagement</h3>
              <p className="text-muted-foreground text-sm">Use our secure portal to request consultations, share resources, and manage session schedules efficiently.</p>
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section id="research" className="py-24 border-t border-muted">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                <Beaker className="w-4 h-4" /> Algorithmic Excellence
              </div>
              <h2 className="text-4xl font-headline font-bold text-primary mb-6">Backed by Academic Research</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle2 className="text-accent shrink-0" />
                  <p className="text-sm text-muted-foreground"><span className="font-bold text-primary">Fairness-Aware Matching:</span> We use modified stable-roommate algorithms to ensure equitable faculty distribution.</p>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="text-accent shrink-0" />
                  <p className="text-sm text-muted-foreground"><span className="font-bold text-primary">Workload Optimization:</span> Dynamic capacity management prevents faculty burnout while maximizing student access.</p>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="text-accent shrink-0" />
                  <p className="text-sm text-muted-foreground"><span className="font-bold text-primary">Sematic Interest Mapping:</span> NLP-driven keyword analysis connects deep technical niches accurately.</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 bg-muted/30 rounded-3xl p-8 border border-muted">
              <div className="space-y-4">
                <div className="h-4 bg-muted rounded-full w-3/4 animate-pulse" />
                <div className="h-4 bg-muted rounded-full w-1/2 animate-pulse" />
                <div className="h-24 bg-primary/5 rounded-xl border border-primary/10 flex items-center justify-center">
                  <Brain className="w-12 h-12 text-primary opacity-20" />
                </div>
                <div className="h-4 bg-muted rounded-full w-2/3 animate-pulse" />
              </div>
              <p className="mt-8 text-xs text-muted-foreground italic text-center">"MentorSync's allocation logic has improved our department's mentor-student satisfaction scores by 42% since implementation."</p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 border-t border-muted">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/5 text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <Info className="w-4 h-4" /> Our Mission
            </div>
            <h2 className="text-4xl font-headline font-bold text-primary mb-8">Bridging the Gap Between Ambition and Expertise</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              MentorSync was founded by a team of educators and engineers who saw a recurring problem: the "bottleneck" of mentorship. In many universities, the most talented students struggle to find guidance, while the most dedicated teachers are overwhelmed by logistical overhead. 
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Our mission is to democratize access to mentorship by removing the friction of manual allocation. We believe that every student deserves a guide, and every teacher deserves a system that respects their time.
            </p>
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-2xl shadow-sm">
                <div className="text-3xl font-bold text-accent mb-1">2023</div>
                <div className="text-xs text-muted-foreground uppercase font-bold">Founded</div>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm">
                <div className="text-3xl font-bold text-accent mb-1">12+</div>
                <div className="text-xs text-muted-foreground uppercase font-bold">Institutions</div>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm">
                <div className="text-3xl font-bold text-accent mb-1">10k+</div>
                <div className="text-xs text-muted-foreground uppercase font-bold">Connections</div>
              </div>
            </div>
          </div>
        </section>

        {/* Original Feature Highlights */}
        <section className="mt-32 grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center mb-6">
              <GraduationCap className="text-primary w-6 h-6" />
            </div>
            <h3 className="text-xl font-headline font-bold text-primary mb-3">Rule-Based Matching</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Our deterministic allocation engine ensures students find the right expertise while managing teacher workload balance.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-accent/5 rounded-2xl flex items-center justify-center mb-6">
              <UserCog className="text-accent w-6 h-6" />
            </div>
            <h3 className="text-xl font-headline font-bold text-primary mb-3">Schedule Autonomy</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Teachers maintain full control over their availability with dynamic toggles and blocked schedule slots.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center mb-6">
              <ShieldAlert className="text-primary w-6 h-6" />
            </div>
            <h3 className="text-xl font-headline font-bold text-primary mb-3">Spam Detection</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Integrated rule-based flagging keeps academic interactions focused and professional for everyone.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-muted bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm text-muted-foreground">© 2024 MentorSync Academic Systems. All rights reserved.</p>
          <div className="flex gap-8 text-sm font-medium text-foreground/60">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary">Terms of Service</Link>
            <Link href="#" className="hover:text-primary">Support</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
