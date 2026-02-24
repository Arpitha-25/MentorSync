
export type UserRole = 'student' | 'teacher';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  interests: string[];
  menteesCount?: number;
  maxMentees?: number;
  isActive?: boolean;
  avatarUrl?: string;
}

export interface InteractionRequest {
  id: string;
  studentId: string;
  teacherId: string;
  content: string;
  type: 'regular' | 'exam';
  isAnonymous: boolean;
  status: 'pending' | 'accepted' | 'rejected';
  isSpam: boolean;
  timestamp: string;
  studentName?: string;
}

export interface MentorAllocation {
  studentId: string;
  teacherId: string;
  assignedAt: string;
}
