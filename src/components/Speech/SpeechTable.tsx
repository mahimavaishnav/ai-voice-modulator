import type { SpeechGeneratedResponse } from "../../types/speech";
import type { VoiceMetaData } from "../../types/voices";
import TableSpeech from "./TableComponentForSpeech";

// Static mock data for the frontend-only branch - no backend calls.
const mockVoices: VoiceMetaData[] = [
  { id: 1, name: "Narrative - Deep Male", created_at: "2024-03-10T09:00:00Z" },
  { id: 2, name: "Friendly Female", created_at: "2024-03-11T09:00:00Z" },
  { id: 3, name: "News Anchor", created_at: "2024-03-12T09:00:00Z" },
];

const mockSpeeches: SpeechGeneratedResponse[] = [
  {
    id: 101,
    voice: 1,
    audio_file: 1,
    created_by: 1,
    created_at: "2024-03-10T10:04:00Z",
    text: "Welcome to AI Voice Modulator. Let's bring your script to life.",
  },
  {
    id: 102,
    voice: 2,
    audio_file: 2,
    created_by: 1,
    created_at: "2024-03-12T11:20:00Z",
    text: "Hi, I am Sarthak, I am a fullstack developer.",
  },
  {
    id: 103,
    voice: 3,
    audio_file: 3,
    created_by: 1,
    created_at: "2024-03-14T15:45:00Z",
    text: "This generated clip keeps every word perfectly in sync.",
  },
];

const SpeechTable: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="text-xs font-mono font-bold px-2 py-0.5 rounded border border-[#ebdcd0] dark:border-[#201f1c] text-[#5c5852] bg-[#fdfdfc] dark:bg-[#121211]">
          History
        </span>
        <h2 className="text-sm font-semibold tracking-tight text-[#1c1c1c] dark:text-zinc-200">
          Synthesized Collection
        </h2>
      </div>
      <TableSpeech speechGeneratedResponseDisplay={mockSpeeches} voicesCollection={mockVoices} />
    </div>
  );
};

export default SpeechTable;
