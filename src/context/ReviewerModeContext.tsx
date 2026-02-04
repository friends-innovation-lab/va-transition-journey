'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface ReviewerModeContextType {
  reviewerMode: boolean;
  setReviewerMode: (value: boolean) => void;
}

const ReviewerModeContext = createContext<ReviewerModeContextType | undefined>(undefined);

export function ReviewerModeProvider({ children }: { children: ReactNode }) {
  const [reviewerMode, setReviewerMode] = useState(false);

  return (
    <ReviewerModeContext.Provider value={{ reviewerMode, setReviewerMode }}>
      {children}
    </ReviewerModeContext.Provider>
  );
}

export function useReviewerMode() {
  const context = useContext(ReviewerModeContext);
  if (context === undefined) {
    throw new Error('useReviewerMode must be used within a ReviewerModeProvider');
  }
  return context;
}
