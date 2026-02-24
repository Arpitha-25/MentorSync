
"use client";

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Send, MessageSquare } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface RequestModalProps {
  teacherId: string;
  teacherName: string;
  onSubmit: (data: { content: string, type: 'regular' | 'exam', isAnonymous: boolean }) => void;
}

export function RequestModal({ teacherId, teacherName, onSubmit }: RequestModalProps) {
  const [content, setContent] = useState("");
  const [type, setType] = useState<'regular' | 'exam'>('regular');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    if (!content.trim()) {
      toast({ title: "Error", description: "Please enter a message", variant: "destructive" });
      return;
    }
    onSubmit({ content, type, isAnonymous });
    setContent("");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full bg-accent hover:bg-accent/90 mt-2">
          <MessageSquare className="w-4 h-4 mr-2" /> Request Interaction
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-headline text-primary">New Interaction Request</DialogTitle>
          <DialogDescription>
            Send a direct message to {teacherName}.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Explain what you need help with..."
              className="min-h-[100px]"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label>Request Type</Label>
            <RadioGroup defaultValue="regular" onValueChange={(v) => setType(v as 'regular' | 'exam')}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="regular" id="r1" />
                <Label htmlFor="r1">Regular Consultation</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="exam" id="r2" />
                <Label htmlFor="r2">Exam Mode (Urgent)</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="anon" 
              checked={isAnonymous} 
              onCheckedChange={(checked) => setIsAnonymous(checked as boolean)} 
            />
            <Label htmlFor="anon" className="text-sm text-muted-foreground">Send Anonymously</Label>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleSubmit} className="bg-primary">
            <Send className="w-4 h-4 mr-2" /> Send Request
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
