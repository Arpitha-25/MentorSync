"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, GraduationCap, UserCog, Rocket, ArrowRight, ShieldAlert } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background selection:bg-accent selection:text-white">
      {/* Hero Section */}
      <nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
        <div className="flex items-center gap-2 text-primary font-headline font-bold text-2xl">
          <div className="bg-primary text-white p-1 rounded-md">
            <Brain className="w-6 h-6" />
          </div>
          MentorSync
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-foreground/70">
          <Link href="#" className="hover:text-primary transition-colors">How it works</Link>
          <Link href="#" className="hover:text-primary transition-colors">Research</Link>
          <Link href="#" className="hover:text-primary transition-colors">About</Link>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-16 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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

        {/* Feature Highlights */}
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
