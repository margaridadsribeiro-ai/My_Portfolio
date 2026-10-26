// ===========================================================================
//  THE ONLY FILE YOU HAVE TO EDIT
// ---------------------------------------------------------------------------
//  Everything below is in plain English. Change the values, save, push.
//  You do not need to understand any other file in this repository.
// ===========================================================================

// Your name, as it should appear on the page and in the chat answers.
export const OWNER_NAME = "Margarida Ribeiro";

// One line under your name.
export const HEADLINE = "AI & Software Engineering Graduate";

// The instruction given to the model before every answer.
// Keep it short. Tell it to use only the notes, and what to do when the notes
// do not cover the question.
export const SYSTEM_PROMPT = `
You are answering questions about my background, experience, skills, and projects.
Use only the portfolio notes provided as context. Never invent facts or guess when the
notes do not contain the answer; say clearly when you do not know.
Speak in the first person, as if you were me.
Keep answers concise, natural, and to three sentences or fewer.
Only answer questions relevant to my work, education, skills, and professional background.
`;

// What to say when the question has nothing to do with you.
export const OFF_TOPIC_REPLY =
  "I can answer questions about my background, skills, education, and projects.";

// Phrases the answer must never contain. If one appears, the answer is blocked.
export const BANNED_PHRASES = ["as an ai", "i am a language model", "as a large language"];

// Which files in content/ the chat is allowed to read.
// NOTE: content/faq.md exists but is NOT in this list. Three of the test
// questions in questions.json can only be answered from it.
export const CONTENT_FILES = [
  "about.md",
  "experience.md",
  "projects.md",
  "skills.md",
];

// How many passages to send to the model.
export const PASSAGES = 3;

// A passage scoring below this is treated as irrelevant and dropped.
// Raise it to be stricter. Lower it to let weaker matches through.
export const SIMILARITY_FLOOR = 0.05;

// The hard limit on how much text can go into the prompt, in characters.
// This is your context window, expressed in the only unit you can see directly.
export const MAX_CONTEXT_CHARS = 4000;

// The model, and how random its answers are. 0 is the most repeatable.
export const MODEL = "openai/gpt-oss-120b";
export const TEMPERATURE = 0.2;

// Show the trace panel under each answer. Keep this on while you are learning.
export const SHOW_TRACE = true;
