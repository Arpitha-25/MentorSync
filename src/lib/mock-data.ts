
import { UserProfile, InteractionRequest } from './types';

export const MOCK_STUDENTS: UserProfile[] = [
  {
    id: 's1',
    name: 'Alex Johnson',
    email: 'alex@edu.com',
    role: 'student',
    interests: ['Machine Learning', 'Data Science'],
    avatarUrl: 'https://picsum.photos/seed/s1/200/200'
  }
];

export const MOCK_TEACHERS: UserProfile[] = [
  {
    id: 't1',
    name: 'Dr. Sarah Mitchell',
    email: 'sarah.m@university.edu',
    role: 'teacher',
    interests: ['Machine Learning', 'Mathematics'],
    menteesCount: 2,
    maxMentees: 5,
    isActive: true,
    avatarUrl: 'https://picsum.photos/seed/t1/200/200'
  },
  {
    id: 't2',
    name: 'Prof. Robert Chen',
    email: 'r.chen@university.edu',
    role: 'teacher',
    interests: ['Data Science', 'Statistics'],
    menteesCount: 4,
    maxMentees: 5,
    isActive: true,
    avatarUrl: 'https://picsum.photos/seed/t2/200/200'
  }
];

export const MOCK_REQUESTS: InteractionRequest[] = [
  {
    id: 'r1',
    studentId: 's1',
    teacherId: 't1',
    content: 'Hi Sarah, I would like to discuss my thesis topic on neural networks.',
    type: 'regular',
    isAnonymous: false,
    status: 'pending',
    isSpam: false,
    timestamp: new Date().toISOString(),
    studentName: 'Alex Johnson'
  }
];
