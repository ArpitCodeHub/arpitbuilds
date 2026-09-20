export const capabilities = [
  { title: "BUILD", body: ["Websites", "Apps", "Dashboards", "Digital products"], mark: "{ }" },
  { title: "AUTOMATE", body: ["Agents", "Workflows", "Business processes"], mark: "↻" },
  { title: "CREATE", body: ["Videos", "Visuals", "Campaigns", "AI-generated experiences"], mark: "✦" },
  { title: "CONNECT", body: ["Bots", "Interfaces", "Intelligent experiences"], mark: "⌁" },
] as const;

export const experience = [
  { place: "RavanAI / Cymake.Inc", role: "AI Automations Expert", detail: "AI creatives, influencer content, n8n automations." },
  { place: "Unevenly", role: "AI Prompt Engineer", detail: "AI videos, images, surrealism, prompt techniques." },
  { place: "GageLabs", role: "AI Automations Developer", detail: "AI-assisted full-stack web apps, automation." },
  { place: "Zopper", role: "Social Media Coordinator", detail: "Content, socials, internal tools, website work." },
] as const;

export const toolkit = {
  THINK: ["ChatGPT", "Claude", "Gemini", "Perplexity"],
  BUILD: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Node.js", "Supabase", "Firebase", "Python", "SQL"],
  AUTOMATE: ["n8n", "Claude Automation"],
  CREATE: ["Canva", "Gemini", "Higgsfield", "RunwayML", "HailuoAI"],
  SHIP: ["Git", "GitHub", "Vercel", "Hostinger", "VS Code", "Kiro", "OpenCode", "Antigravity"],
} as const;