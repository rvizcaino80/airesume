const fs = require("node:fs/promises");
const path = require("node:path");

const DEFAULT_MODEL = "deepseek-chat";
const DEFAULT_BASE_URL = "https://api.deepseek.com/chat/completions";

module.exports = async function (context, req) {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  const model = process.env.DEEPSEEK_MODEL || DEFAULT_MODEL;
  const baseUrl = process.env.DEEPSEEK_BASE_URL || DEFAULT_BASE_URL;

  if (!apiKey) {
    return {
      status: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        error: "Missing DEEPSEEK_API_KEY environment variable."
      })
    };
  }

  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!message) {
    return {
      status: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Message is required." })
    };
  }

  if (message.length > 100) {
    return {
      status: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Message must be 100 characters or fewer." })
    };
  }

  const knowledgeBasePath = path.join(__dirname, "..", "data", "chat-knowledge.txt");
  const knowledgeBase = await fs.readFile(knowledgeBasePath, "utf8");

  const systemPrompt = [
    "You are Rogers Vizcaino speaking in first person on your portfolio site.",
    "Answer questions about yourself using the knowledge base below as the primary source of truth.",
    "Always respond in first person, as if you are speaking directly for yourself.",
    "Never refer to yourself as Rogers in third person.",
    "Match the language of the user's message. If the user writes in Spanish, answer in Spanish. If the user writes in English, answer in English.",
    "Keep answers concise, factual, professional, and natural.",
    "Never exceed 80 words in a response.",
    "Whenever you mention LinkedIn, render it as a markdown link using exactly this URL: [LinkedIn](https://www.linkedin.com/in/rogersvizcaino/).",
    "If the conversation drifts away from professional topics, respond with a light, playful line and steer it back toward your experience, stack, work, or availability.",
    "If a question is not supported by the knowledge base or is something you should not share, do not invent details.",
    "Instead, answer in first person with a warm, natural fallback that says you cannot share that information and invites the user to contact you by email at rvizcaino@gmail.com or through LinkedIn.",
    "Vary that fallback wording from time to time so it does not sound repeated.",
    "",
    "Knowledge base:",
    knowledgeBase
  ].join("\n");

  const upstream = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message }
      ],
      temperature: 0.4,
      max_tokens: 180
    })
  });

  if (!upstream.ok) {
    const errorText = await upstream.text();
    return {
      status: 502,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        error: "DeepSeek request failed.",
        details: errorText
      })
    };
  }

  const data = await upstream.json();
  const reply = data?.choices?.[0]?.message?.content?.trim();

  if (!reply) {
    return {
      status: 502,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        error: "No response content returned by DeepSeek."
      })
    };
  }

  return {
    status: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ reply })
  };
};
