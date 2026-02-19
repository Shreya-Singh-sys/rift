import { create } from 'zustand';

export interface Fix {
  file: string;
  bug_type: string;
  line: number;
  commit_message: string;
  status: 'pending' | 'success' | 'failed';
}

export interface HealingResult {
  team_name: string;
  leader_name: string;
  repo_url: string;
  branch_name: string;
  total_commits: number;
  execution_time_minutes: number;
  final_score: number;
  fixes: Fix[];
  status: string;
  total_failures: number;
  iterations_completed: number;
}

interface HealingState {
  isLoading: boolean;
  result: HealingResult | null;
  error: string | null;
  iteration: number;
  maxIterations: number;
  
  setLoading: (loading: boolean) => void;
  setResult: (result: HealingResult | null) => void;
  setError: (error: string | null) => void;
  setIteration: (iteration: number) => void;
  setMaxIterations: (max: number) => void;
  reset: () => void;
}

export const useHealingStore = create<HealingState>((set) => ({
  isLoading: false,
  result: null,
  error: null,
  iteration: 0,
  maxIterations: 5,
  
  setLoading: (loading) => set({ isLoading: loading }),
  setResult: (result) => set({ result }),
  setError: (error) => set({ error }),
  setIteration: (iteration) => set({ iteration }),
  setMaxIterations: (max) => set({ maxIterations: max }),
  reset: () => set({ isLoading: false, result: null, error: null, iteration: 0 }),
}));
