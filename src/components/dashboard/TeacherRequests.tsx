
"use client";

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, ShieldAlert, Clock, User } from "lucide-react";
import { InteractionRequest } from "@/lib/types";
import { format } from "date-fns";

interface TeacherRequestsProps {
  requests: InteractionRequest[];
  onAction: (id: string, status: 'accepted' | 'rejected') => void;
}

export function TeacherRequests({ requests, onAction }: TeacherRequestsProps) {
  return (
    <div className="space-y-4">
      {requests.length === 0 ? (
        <Card className="bg-muted/30">
          <CardContent className="py-10 text-center text-muted-foreground">
            No pending interaction requests.
          </CardContent>
        </Card>
      ) : (
        requests.map((req) => (
          <Card key={req.id} className={`${req.isSpam ? 'border-destructive/30 bg-destructive/5' : 'bg-white'}`}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  <Badge variant={req.type === 'exam' ? 'destructive' : 'secondary'}>
                    {req.type.toUpperCase()} MODE
                  </Badge>
                  {req.isSpam && (
                    <Badge variant="outline" className="text-destructive border-destructive flex items-center gap-1">
                      <ShieldAlert className="w-3 h-3" /> Flagged
                    </Badge>
                  )}
                </div>
                <div className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {format(new Date(req.timestamp), 'MMM d, h:mm a')}
                </div>
              </div>
              <CardTitle className="text-lg flex items-center gap-2 mt-2 font-headline">
                <User className="w-4 h-4 text-primary" />
                {req.isAnonymous ? "Anonymous Student" : req.studentName}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/80 mb-4">{req.content}</p>
              <div className="flex gap-2 justify-end">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="text-destructive border-destructive hover:bg-destructive/10"
                  onClick={() => onAction(req.id, 'rejected')}
                >
                  <X className="w-4 h-4 mr-1" /> Reject
                </Button>
                <Button 
                  size="sm" 
                  className="bg-accent hover:bg-accent/90"
                  onClick={() => onAction(req.id, 'accepted')}
                >
                  <Check className="w-4 h-4 mr-1" /> Accept
                </Button>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}
