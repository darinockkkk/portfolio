import { NextResponse } from "next/server";
import profileData from "@/data/profileData.json";

export async function POST(request) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Check if OpenAI API key is configured
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      // Fallback to predefined responses when API key is not set
      const response = getFallbackResponse(message);
      return NextResponse.json({ response });
    }

    // Call OpenAI API
    const systemPrompt = `You are Daryna's AI assistant. You know everything about her projects, experience, and skills.
You reply professionally, confidently, and in her tone.
Answer concisely (2-3 sentences).
If unsure, redirect to the portfolio sections or contact form.

Here's Daryna's information:
${JSON.stringify(profileData, null, 2)}`;

    const openaiResponse = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: message },
          ],
          temperature: 0.7,
          max_tokens: 200,
        }),
      }
    );

    if (!openaiResponse.ok) {
      throw new Error("OpenAI API request failed");
    }

    const data = await openaiResponse.json();
    const assistantMessage = data.choices[0].message.content;

    return NextResponse.json({ response: assistantMessage });
  } catch (error) {
    console.error("Chat API error:", error);

    // Return fallback response on error
    const fallbackResponse = getFallbackResponse(
      "Tell me about Daryna's experience"
    );
    return NextResponse.json({ response: fallbackResponse });
  }
}

function getFallbackResponse(message) {
  const lowerMessage = message.toLowerCase();

  // Simple keyword matching for fallback responses
  if (lowerMessage.includes("experience") || lowerMessage.includes("work")) {
    return "I have experience as a Software Developer at Kilona, Co-Founder & CTO at HODIMO, and Product Analyst at Partnerway (Spendbase). I've worked with React Native, AWS, Python, and more. Check out the Experience section for details!";
  }

  if (lowerMessage.includes("project")) {
    return "I've built several exciting projects including Yeego (AI networking platform), OutWithStrangers (Django social app), and FinanceBro (finance tracker). Scroll down to the Projects section to learn more!";
  }

  if (lowerMessage.includes("skill") || lowerMessage.includes("tech")) {
    return "I'm proficient in JavaScript/TypeScript, Python, Java, React Native, Node.js, Django, and various databases. I also work with AI/ML tools like OpenAI API and Scikit-learn. Check the Skills section for the full list!";
  }

  if (
    lowerMessage.includes("contact") ||
    lowerMessage.includes("email") ||
    lowerMessage.includes("reach")
  ) {
    return "You can reach me through the contact form on this page, or connect with me on LinkedIn and GitHub. I'd love to hear about your project!";
  }

  if (
    lowerMessage.includes("education") ||
    lowerMessage.includes("university") ||
    lowerMessage.includes("study")
  ) {
    return "I'm currently studying Computer Science with a focus on software development and AI. I love learning new technologies and applying them to real-world problems!";
  }

  // Default response
  return "Thanks for asking! I can tell you about Daryna's experience, projects, skills, or how to get in touch. Feel free to scroll through the portfolio or reach out directly!";
}

