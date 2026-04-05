import { useState } from “react”;

const PILLARS = [
{ id: “safety”, label: “Prioritize Safety – Deliver Quality”, emoji: “🛡️” },
{ id: “hope”, label: “Infuse Hope”, emoji: “✨” },
{ id: “clarity”, label: “Create Clarity”, emoji: “💡” },
{ id: “outcome”, label: “Own the Outcome”, emoji: “🎯” },
{ id: “elevate”, label: “Elevate the Moment”, emoji: “⭐” },
];

const PILLAR_PHRASES = {
safety: [“ensured every detail was handled safely and with precision”, “put quality and safety above all else”, “showed what it looks like to never cut corners”],
hope: [“brought extraordinary care and empathy to those who needed it most”, “listened deeply and responded with heart”, “turned a difficult moment into one of hope”],
clarity: [“cut through the noise and made things simple for everyone involved”, “communicated proactively and kept everyone informed”, “gave patients and families the clarity they deserved”],
outcome: [“took full ownership and followed through when it mattered”, “refused to let anything fall through the cracks”, “showed up for the team and the patient without being asked”],
elevate: [“turned an ordinary interaction into something unforgettable”, “went the extra step to make someone feel truly cared for”, “did more than the job required — and it made all the difference”],
};

export default function BestInWestApp() {
const [name, setName] = useState(””);
const [location, setLocation] = useState(””);
const [story, setStory] = useState(””);
const [pillar, setPillar] = useState(””);
const [generated, setGenerated] = useState(””);
const [copied, setCopied] = useState(false);
const [step, setStep] = useState(1);

function generateRecognition() {
if (!name || !location || !story || !pillar) return;
const phrases = PILLAR_PHRASES[pillar];
const phrase = phrases[Math.floor(Math.random() * phrases.length)];
const selectedPillar = PILLARS.find((p) => p.id === pillar);

```
const blurb = `🌟 BEST IN WEST — ${name.toUpperCase()} | ${location}\n\n` +
  `This week, I want to shine a light on ${name} from ${location}.\n\n` +
  `${story.trim()} — and in doing so, ${name} ${phrase}.\n\n` +
  `This is what it looks like to live our service pillar: ${selectedPillar.emoji} ${selectedPillar.label}.\n\n` +
  `In serving others, we are extraordinary. And ${name} is proof of that.\n\n` +
  `— Doug Chang, VP West Operations`;

setGenerated(blurb);
setStep(3);
```

}

function copyToClipboard() {
navigator.clipboard.writeText(generated);
setCopied(true);
setTimeout(() => setCopied(false), 2000);
}

function reset() {
setName(””); setLocation(””); setStory(””); setPillar(””);
setGenerated(””); setStep(1);
}

return (
<div style={{
minHeight: “100vh”,
background: “linear-gradient(135deg, #0a0a1a 0%, #0d1b2a 50%, #0a1628 100%)”,
fontFamily: “‘Georgia’, serif”,
padding: “40px 20px”,
display: “flex”,
flexDirection: “column”,
alignItems: “center”,
}}>
{/* Header */}
<div style={{ textAlign: “center”, marginBottom: “40px” }}>
<div style={{
fontSize: “11px”, letterSpacing: “6px”, color: “#4a9eff”,
textTransform: “uppercase”, marginBottom: “12px”, fontFamily: “monospace”
}}>
Option Care Health · West Operations
</div>
<h1 style={{
fontSize: “clamp(28px, 5vw, 42px)”, fontWeight: “700”,
color: “#ffffff”, margin: “0 0 8px 0”, lineHeight: 1.1,
textShadow: “0 0 40px rgba(74,158,255,0.3)”
}}>
⭐ Best in West
</h1>
<p style={{ color: “#6b8caf”, fontSize: “15px”, margin: 0, fontStyle: “italic” }}>
Recognition Generator
</p>
</div>

```
  {/* Card */}
  <div style={{
    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "20px", padding: "36px", width: "100%", maxWidth: "620px",
    backdropFilter: "blur(10px)", boxShadow: "0 20px 60px rgba(0,0,0,0.4)"
  }}>

    {/* Step indicators */}
    <div style={{ display: "flex", gap: "8px", marginBottom: "32px" }}>
      {["Who", "What", "Recognition"].map((label, i) => (
        <div key={i} style={{
          flex: 1, padding: "8px", borderRadius: "8px", textAlign: "center",
          fontSize: "12px", fontFamily: "monospace", letterSpacing: "1px",
          background: step >= i + 1 ? "rgba(74,158,255,0.2)" : "rgba(255,255,255,0.05)",
          color: step >= i + 1 ? "#4a9eff" : "#3a5a7a",
          border: `1px solid ${step >= i + 1 ? "rgba(74,158,255,0.4)" : "rgba(255,255,255,0.05)"}`,
          transition: "all 0.3s"
        }}>
          {i + 1}. {label}
        </div>
      ))}
    </div>

    {step < 3 && (
      <>
        {/* Name & Location */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "20px" }}>
          <div>
            <label style={labelStyle}>Colleague's Name</label>
            <input
              value={name}
              onChange={e => { setName(e.target.value); if (e.target.value) setStep(s => Math.max(s, 1)); }}
              placeholder="e.g. Maria Santos"
              style={inputStyle}
            />
          </div>
          <div>
            <label style={labelStyle}>Branch / Location</label>
            <input
              value={location}
              onChange={e => setLocation(e.target.value)}
              placeholder="e.g. Phoenix, AZ"
              style={inputStyle}
            />
          </div>
        </div>

        {/* Story */}
        <div style={{ marginBottom: "20px" }}>
          <label style={labelStyle}>What did they do? <span style={{ color: "#4a6a8a", fontStyle: "italic", fontWeight: 400 }}>(be specific)</span></label>
          <textarea
            value={story}
            onChange={e => { setStory(e.target.value); if (e.target.value) setStep(s => Math.max(s, 2)); }}
            placeholder="e.g. She stayed two hours late to ensure a patient's infusion was ready before a holiday weekend, coordinating with the nursing team to make sure nothing was missed..."
            style={{ ...inputStyle, height: "100px", resize: "vertical" }}
          />
        </div>

        {/* Pillar */}
        <div style={{ marginBottom: "28px" }}>
          <label style={labelStyle}>Which service pillar did they embody?</label>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {PILLARS.map((p) => (
              <button
                key={p.id}
                onClick={() => setPillar(p.id)}
                style={{
                  padding: "12px 16px", borderRadius: "10px", border: "1px solid",
                  textAlign: "left", cursor: "pointer", transition: "all 0.2s",
                  fontSize: "14px", fontFamily: "Georgia, serif",
                  background: pillar === p.id ? "rgba(74,158,255,0.15)" : "rgba(255,255,255,0.03)",
                  borderColor: pillar === p.id ? "rgba(74,158,255,0.6)" : "rgba(255,255,255,0.08)",
                  color: pillar === p.id ? "#a8d4ff" : "#6b8caf",
                }}
              >
                {p.emoji} {p.label}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={generateRecognition}
          disabled={!name || !location || !story || !pillar}
          style={{
            width: "100%", padding: "16px", borderRadius: "12px", border: "none",
            cursor: (!name || !location || !story || !pillar) ? "not-allowed" : "pointer",
            background: (!name || !location || !story || !pillar)
              ? "rgba(255,255,255,0.05)"
              : "linear-gradient(135deg, #1a6fff, #0a4fd4)",
            color: (!name || !location || !story || !pillar) ? "#3a5a7a" : "#ffffff",
            fontSize: "16px", fontFamily: "Georgia, serif", fontWeight: "600",
            letterSpacing: "0.5px", transition: "all 0.3s",
            boxShadow: (!name || !location || !story || !pillar) ? "none" : "0 4px 20px rgba(26,111,255,0.4)"
          }}
        >
          ✨ Generate Recognition
        </button>
      </>
    )}

    {/* Generated output */}
    {step === 3 && generated && (
      <div>
        <div style={{
          background: "rgba(74,158,255,0.06)", border: "1px solid rgba(74,158,255,0.2)",
          borderRadius: "12px", padding: "24px", marginBottom: "20px",
          whiteSpace: "pre-wrap", color: "#c8dff5", fontSize: "15px",
          lineHeight: "1.7", fontFamily: "Georgia, serif"
        }}>
          {generated}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
          <button onClick={copyToClipboard} style={{
            padding: "14px", borderRadius: "10px", border: "1px solid rgba(74,158,255,0.4)",
            background: copied ? "rgba(74,255,158,0.15)" : "rgba(74,158,255,0.15)",
            color: copied ? "#4aff9e" : "#4a9eff",
            fontSize: "14px", fontFamily: "Georgia, serif", cursor: "pointer",
            transition: "all 0.3s"
          }}>
            {copied ? "✓ Copied!" : "📋 Copy to Clipboard"}
          </button>
          <button onClick={reset} style={{
            padding: "14px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.04)", color: "#6b8caf",
            fontSize: "14px", fontFamily: "Georgia, serif", cursor: "pointer",
          }}>
            🔄 Recognize Someone Else
          </button>
        </div>
      </div>
    )}
  </div>

  <p style={{
    color: "#2a4a6a", fontSize: "12px", marginTop: "24px",
    fontStyle: "italic", letterSpacing: "1px", fontFamily: "monospace"
  }}>
    "In serving others, we are extraordinary."
  </p>
</div>
```

);
}

const labelStyle = {
display: “block”, fontSize: “11px”, letterSpacing: “2px”,
textTransform: “uppercase”, color: “#4a7aaa”, marginBottom: “8px”,
fontFamily: “monospace”, fontWeight: “600”
};

const inputStyle = {
width: “100%”, padding: “12px 14px”, borderRadius: “10px”,
border: “1px solid rgba(255,255,255,0.1)”, background: “rgba(255,255,255,0.05)”,
color: “#c8dff5”, fontSize: “14px”, fontFamily: “Georgia, serif”,
outline: “none”, boxSizing: “border-box”,
transition: “border-color 0.2s”
};
