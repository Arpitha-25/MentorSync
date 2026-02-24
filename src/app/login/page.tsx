"use client";

import { useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Brain, ArrowLeft, Loader2, Mail, Lock } from "lucide-react";
import Link from 'next/link';

function LoginForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const role = searchParams.get('role') || 'student';
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login delay
    setTimeout(() => {
      if (role === 'teacher') {
        router.push('/dashboard/teacher');
      } else {
        router.push('/dashboard/student');
      }
    }, 1000);
  };

  return (
    <Card className="w-full max-w-md border-none shadow-2xl bg-white">
      <CardHeader className="space-y-1 pt-8">
        <div className="flex justify-center mb-4">
          <div className="bg-primary text-white p-3 rounded-2xl shadow-lg">
            <Brain className="w-8 h-8" />
          </div>
        </div>
        <CardTitle className="text-2xl font-headline font-bold text-center text-primary">
          Welcome Back
        </CardTitle>
        <CardDescription className="text-center">
          Login as {role === 'teacher' ? 'Faculty Member' : 'Student'} to continue
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                id="email" 
                type="email" 
                placeholder="name@university.edu" 
                className="pl-10"
                required 
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="password">Password</Label>
              <Button variant="link" className="px-0 h-auto text-xs text-accent hover:text-accent/80">
                Forgot password?
              </Button>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                id="password" 
                type="password" 
                placeholder="••••••••" 
                className="pl-10"
                required 
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4 pb-8">
          <Button 
            type="submit" 
            className="w-full h-11 bg-primary hover:bg-primary/90 text-lg font-headline"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Signing in...
              </>
            ) : (
              'Sign In'
            )}
          </Button>
          <div className="text-center text-sm text-muted-foreground">
            {role === 'teacher' ? (
              <p>Not faculty? <Link href="/login?role=student" className="text-accent font-medium hover:underline">Student Login</Link></p>
            ) : (
              <p>Are you faculty? <Link href="/login?role=teacher" className="text-accent font-medium hover:underline">Faculty Login</Link></p>
            )}
          </div>
        </CardFooter>
      </form>
    </Card>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/10 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[100px]" />
      </div>

      <Link 
        href="/" 
        className="absolute top-8 left-8 flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium text-sm group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </Link>

      <Suspense fallback={
        <div className="flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      }>
        <LoginForm />
      </Suspense>

      <footer className="mt-8 text-xs text-muted-foreground text-center">
        <p>© 2024 MentorSync Academic Systems. All rights reserved.</p>
        <div className="flex gap-4 justify-center mt-2">
          <Link href="#" className="hover:underline">Privacy</Link>
          <Link href="#" className="hover:underline">Terms</Link>
          <Link href="#" className="hover:underline">Help</Link>
        </div>
      </footer>
    </div>
  );
}
