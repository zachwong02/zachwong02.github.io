# Writing Style Guide: Zach Wong (zachwong02)

> Built from an analysis of all 10 posts in `src/content/posts/` (Dec 2023 – Aug 2025).  
> Weighted toward the most recent voice (2024–2025), but earlier tics are noted when they persist.

---

## 1. Voice Summary

Zach writes like he’s telling you a story over drinks after the event. First-person, self-deprecating, and obsessed with the *journey* more than the clean result. He is confident in his technical competence but constantly roasts his own planning skills, laziness, and “vibe programming.” He treats the reader like a friend who already knows the context, dropping names, inside jokes, and Hololive references without apology. The underlying mantra is *learning should be fun*, and he’ll break the fourth wall to remind you of that.

---

## 2. Structure

### How posts open
- **Event / narrative posts**: Start with a hook sentence + immediate personal context or confession.  
  Example: *“So, Black Hat Asia 2024! A huge conference packed with cybersecurity booths and fascinating talks. I should mention, though, that the ticket price was… well, let’s just say it wasn’t cheap.”* (blackhat-asia-2024.mdx)
- **Technical walkthroughs**: Start with a quick context paragraph, often admitting a knowledge gap or a lazy shortcut.  
  Example: *“Here’s some quick context for this blog series. When I started with Active Directory, I learned how to map a domain with BloodHound… And that kept me wondering: what is ADCS, anyway? So, instead of casually bringing it up to my friends without really knowing what it was, I decided to take it as a challenge…”* (adcs-attacks-part-1.mdx)
- **Guide / tool posts**: Start with the problem at work, usually with a “quick context” line.  
  Example: *“Before I dive into this blog, let me give you some quick context. At work, I handle compromise assessments.”* (investigate-fortigate-logs-with-splunk.mdx)

### Body organization
- **Chronological for events**: Day-by-day or session-by-session, with headings like `# Day 1 - The Journey Begins` or `## Day 1: No Booth Was Safe`.
- **Step-by-step for labs**: `## ESC1 Attack Lab Setup` → `### Create a Low Privilege User` → `### Finding Vulnerable Certificate Templates` → `### Exploiting The Vulnerable Certificate Template`.
- **Code-first for tooling**: Problem → 2am idea → code block → demonstration → closing thoughts.
- **Horizontal rules** (`---`) are used *extensively* after almost every heading and between major sections.
- **`<br></br>`** is used liberally for vertical spacing (a quirk carried through all MDX posts).

### How posts close
- **Events**: Thank-yous to sponsors/organizers/friends, often with a final image + emoji.  
  Example: *“Lastly, a massive shoutout to **Jia Qi** for her continuous support and guidance… here’s a flag for you MCC2023: `flag{!M_GoiNG_7o_M1Ss_MCc2023}`”* (mcc2023.mdx)
- **Technical**: A short reflection on what was learned, sometimes a pun, then `## References` (and `## Art Sources` for the Hololive series).  
  Example: *“At first, I was scared to venture into this complicated domain (yes, the pun was intended).”* (adcs-attacks-part-1.mdx)
- **Guides**: Thank the people who helped, even if it was a 2am chat.  
  Example: *“I would like to thank Fareed Fauzi for the advice you have given me at 2am… It turns out you can have bright ideas in the dark at 2am!”* (investigate-fortigate-logs-with-splunk.mdx)

### Placement of summaries / references
- Summaries are usually woven into the conclusion, not a separate bullet list.
- References are always at the bottom under `## References`, followed by `## Art Sources` if Hololive/VTuber art is used.

---

## 3. Tone & Voice

- **First person, always.** “I”, “me”, “my”.
- **Direct address to reader**: “you”, “y’all”, “if you want to follow along”.
- **Self-deprecating but not insecure**: admits laziness, poor planning, and knowledge gaps, but still shares the work proudly.
  - *“I was feeling a bit lazy (you will see this theme pop up again soon)”* (investigate-fortigate-logs-with-splunk.mdx)
  - *“my knowledge on Cobalt Strike is as little my knowledge on vulnerability research”* (decrypting-cobalt-strike-traffic.mdx)
  - *“I’m a noob, not an APT member…”* (recreating-an-apt-attack.mdx)
- **Admits mistakes and dead ends**: keeps them in the narrative.
  - *“I did try setting it up and testing it, but it just wouldn’t work. So I gave up.”* (adcs-attacks-part-4.mdx)
  - *“Long story short, I didn’t download them.”* (sincon-2024.mdx)

---

## 4. Humor

Humor is frequent and placed everywhere: titles, headings, asides, blockquotes, image captions.

| Type | Example | Where |
|------|---------|-------|
| **Puns / wordplay** | *“I managed to unlock (see what I did there?) a new skill”* (mcc2023.mdx) | Mid-narrative |
| **Memes / internet speak** | *“SWAGS, SWAGS, SWAGS!!!”*, *“LET’S GOOO”*, *“IT IS WHAT IT IS”* | Event posts |
| **Self-roasts** | *“I irresponsibly decided to sign up for it anyway!”* (blackhat-asia-2024.mdx) | Intro |
| **Lab-machine jokes** | *“The IP addresses change in this part because I had to rebuild the environment three times”* (adcs-attacks-part-4.mdx) | Technical asides |
| **CTF frustration** | *“So another year and another CTF and once again none of Zach's challenges were solved.”* (recreating-an-apt-attack.mdx) | Closing |
| **Dramatic reenactments** | Blockquote dialogues with Mr. Yapp, Blessing, Mohin, etc. | Event posts |
| **Hololive / VTuber jokes** | *“Gawr Gura be vibing”*, *“let Fuwamoco explain”* | ADCS series |
| **Sarcastic disclaimers** | *“If you are associated with Mustang Panda, please don’t make me disappear…”* (recreating-an-apt-attack.mdx) | Opening |
| **Emoji** | 🤣🤣, 😅, 🫩, 👹, 😵‍💫, 🔥 | Sprinkled mid-text and at ends of paragraphs |

**Placement rule**: Humor is not confined to a “funny section.” It appears in the first paragraph, mid-command, in image alt-text (`![hehe you don't have Cobalt Strike]`), and in blockquotes.

---

## 5. Language Patterns

- **Sentence rhythm**: Mix of long explanatory sentences and short punchy fragments.  
  *“Long story short, I didn’t download them. The long story? Well, just check out SINCON’s schedule on their website.”*
- **Favorite openers**: “So,” “Anyway,” “Well,” “Honestly,” “With that said,” “With that being said.”
- **Recurring expressions**:
  - “quick context”
  - “long story short”
  - “BUT WAIT” / “BUT WAIT!!!”
  - “IT IS WHAT IT IS”
  - “let’s be real”
  - “shoutout to”
  - “vibe” (as a verb and noun: “vibe programming”, “vibe coding”, “just vibing”)
  - “y’all”
  - “kinda” / “sorta”
  - “Welp”
  - “sadge” (image alt-text)
- **Slang / internet speak**: “lol”, “lmao”, “ngl”, “bruh”, “hehe”, “AHHHHHHHHH OMG OMG!!!!”, “fine shyt”.
- **Contractions**: Always. “don’t”, “can’t”, “won’t”, “it’s”, “that’s”.
- **Profanity**: None. The edgiest he gets is “hell” and “bruh” and “fine shyt” (censored).
- **Japanese greetings**: “どうもサメです!” (ADCS series intro, meaning “Hello, I’m a shark!” — Gawr Gura reference).

---

## 6. Technical Register

- **Depth**: Assumes basic CTF/AD knowledge but explains *why* a command is run, not just what it does.  
  Example: *“The `/EFSRAW` switch ensures the file is copied in its raw encrypted form, which is necessary for EFS-protected files so the encryption remains intact.”* (adcs-attacks-part-4.mdx)
- **Command formatting**:
  - Commands in `bash` / `powershell` / `plaintext` / `python` / `c++` code blocks.
  - Flags are often explained in the following paragraph, not in-line.
  - Uses `\` line continuations for long commands.
  - Includes Kali-style prompt in code blocks: `┌──(jigsaw㉿jigsaw)-[~/Desktop/...]`.
- **Output formatting**: Large tool outputs are pasted as `plaintext` code blocks with custom highlight annotations like `{"Let's take this piece of data":26-27}` or `{"We need this:":5-6}`.
- **Dead ends**: Explicitly kept.  
  Example: *“If you are following along, you will see that trying to authenticate with the certificate results in a `KDC_ERROR_CLIENT_NOT_TRUSTED` error… Domain Controllers will never accept CA certificates for Kerberos PKINIT, no matter what the template metadata claims.”* (adcs-attacks-part-3.mdx)
- **“Vibe programming”**: Openly admits using ChatGPT / DeepSeek to generate code, and even makes it a recurring joke.  
  Example: *“Through vibe programming, the above function was made…”* (recreating-an-apt-attack.mdx)

---

## 7. Formatting Conventions

- **Frontmatter**:
  ```yaml
  ---
  title: "..."
  description: "..."
  image: "../assets/<post-slug>/featured.png"
  createdAt: MM-DD-YYYY
  draft: false
  tags:
    - Event | Lab | Red Team | Blue Team | Digital Forensics | ADCS Attacks | Archive
  ---
  ```
- **Headings**:
  - Event posts: `#` for main sections (Day 1, Day 2), `##` for sub-sections.
  - Technical posts: `##` for main sections, `###` for sub-steps, `####` for sub-sub-steps.
  - Almost every heading is followed by `---`.
- **Images**:
  - Format: `![Alt text](../assets/<post-slug>/<filename>)`
  - Alt text is descriptive and often humorous: `![hehe you don't have Cobalt Strike]`, `![gulp gulp gulp]`, `![fine shyt]`.
- **Callouts / blockquotes**:
  - Used for disclaimers, jokes, dialogue reenactments, and “spoiler alerts”.
  - Italicized blockquotes for personal asides: `> *Looking back, I think we spent more time chatting than listening…*`
- **Code blocks**: Always fenced with language tag (`bash`, `powershell`, `python`, `c++`, `plaintext`, `html`, `xml`).
- **Spacing**: Heavy use of `<br></br>` between sections (a personal MDX quirk).
- **Imports**: For technical posts with embeds: `import { Tweet, Vimeo, YouTube } from 'astro-embed';` and sometimes `import Mermaid from '../../components/Mermaid.astro';`.

---

## 8. Narrative Style

- **Chronological, not polished**: He writes it like a story, keeping the mistakes, the 2am panic, and the “wait, that worked?” moments.
- **“Here’s what actually happened” > “Here’s the clean path”**:  
  Example: *“Now, during my research for this challenge, I do not know how did the real loader work… Sounds exciting right?! Yeah, try telling me that months ago when I was vibe coding with DeepSeek and ChatGPT, just trying to get the loader and DLL to work 😵‍💫.”* (recreating-an-apt-attack.mdx)
- **Fourth-wall breaks**: Speaks directly to the reader, asks rhetorical questions, and uses “you” to pull them into the story.  
  Example: *“But you might wonder why this EKU even exists.”* (adcs-attacks-part-2.mdx)

---

## 9. Signature Moves

1. **The “BUT WAIT” interruption**: Used to inject a plot twist or a forgotten detail.  
   Example: *“**BUT WAIT!!!** before we left for lunch…”* (mcc2023.mdx)
2. **The “quick context” opener**: Signals a technical post and gives backstory.
3. **Dramatic reenactment blockquotes**: Turns real conversations into dialogue with `> **Person:**` format.
4. **Hololive theming**: Uses VTubers as lab users, explainers, and comic relief.  
   Example: *“our low-privilege user is none other than Gawr Gura!”* (adcs-attacks-part-1.mdx)
5. **“Vibe programming” as a badge of honor**: Brags about using LLMs to write malware/loaders, then laughs when it breaks.
6. **Image alt-text jokes**: The alt text is part of the humor, not just accessibility.  
   Example: `![fine shyt]`, `![gulp gulp gulp]`, `![hehe you don't have Cobalt Strike]`.
7. **2am inspiration trope**: Credits late-night conversations or “genius solutions” that came at 2am/3am.
8. **Flags as closers**: Ends CTF-related posts with a custom flag in a `plaintext` code block.
9. **“IT IS WHAT IT IS”**: A resigned acceptance of frustrating realities, often in caps.
10. **Horizontal rule abuse**: Uses `---` after nearly every heading and between every logical chunk.

---

## 10. Never Do This

- **Don’t write a sterile, polished walkthrough** that hides dead ends or admits no uncertainty.
- **Don’t skip the personal context** — even a technical post needs a “quick context” paragraph.
- **Don’t avoid humor** — no jokes, no memes, no puns = not Zach.
- **Don’t use formal language** like “one should,” “it is recommended,” “the following methodology.”
- **Don’t hide LLM use** — if ChatGPT wrote the code, say “vibe programming” and laugh about it.
- **Don’t use corporate buzzwords** — no “synergy,” “leverage,” “best practices,” “thought leader.”
- **Don’t write long, unbroken paragraphs** — he uses short fragments and frequent breaks.
- **Don’t omit the thank-yous** — sponsors, friends, organizers, and even the reader get thanked.
- **Don’t use emojis sparingly** — he uses them liberally, especially 🤣 and 😅.
- **Don’t forget the horizontal rules** — they are a visual signature.

---

## 11. Post Templates

### A. Event / Conference Post
```markdown
---
title: "My Experience at <Event Name> <Year>"
description: "<One-line summary of the event and why it mattered>"
image: "../assets/<event-slug>/featured.png"
createdAt: MM-DD-YYYY
draft: false
tags:
  - Event
  - Archive
---

## Introduction
<Hook + personal context + confession about poor planning/laziness>

![Image of <something funny>](../assets/<event-slug>/<image>.png)

## Day 1: <Punny Title>
<Story + names + dialogue blockquotes + swag talk>

### <Sub-section with a joke title>
<More story>

## Day 2: <Punny Title>
...

## Closing Thoughts: <The Swags / The People>
![<final image>](../assets/<event-slug>/<image>.png)
<Gratitude + community feels + emoji>
```

### B. Technical Walkthrough / Lab Post
```markdown
---
title: "<Punny Title> - <Topic> Part N"
description: "<What the lab covers + the theme>"
image: "../assets/<post-slug>/featured.png"
createdAt: MM-DD-YYYY
draft: false
tags:
  - Lab
  - Red Team | Blue Team | Digital Forensics
---

## Introduction
---
<Quick context + knowledge gap + why you built the lab>

## <Topic> Basics
---
<Terminology list + concept explanation>

## <Topic> Attack Lab Setup
---
### Create a Low Privilege User
<Steps + screenshots + credentials>

### Finding Vulnerable <Things>
<Command + output + explanation>

### Exploiting The Vulnerable <Thing>
<Command + output + explanation>

## Errors I Have Encountered
<Dead ends + fixes>

## Conclusion
---
<Reflection + pun + teaser for next part>

## References
- <links>

## Art Sources
- <links if applicable>
```

### C. Guide / Tool Post
```markdown
---
title: "<Action> <Tool> with <Other Tool>"
description: "<Why you made it, usually out of frustration>"
image: "../assets/<post-slug>/featured.png"
createdAt: MM-DD-YYYY
draft: false
tags:
  - Blue Team | Digital Forensics
---

# Introduction
---
<Problem at work + frustration>

# Late Night Ideas
---
<2am conversation + idea>

# How <Experience> Can Help You at Work
---
<Code block + explanation>

# Demonstration
---
<Steps + screenshots>

# Closing Thoughts
---
<Thank-yous + final joke>
```

---

## 12. Self-Review Checklist

Before publishing, ask:

- [ ] Does the intro have a personal confession or “quick context”?
- [ ] Is there at least one pun, meme reference, or joke in the first 100 words?
- [ ] Are mistakes and dead ends kept in the narrative?
- [ ] Are commands explained *why*, not just *what*?
- [ ] Is there a “BUT WAIT” or similar interruption?
- [ ] Are there horizontal rules (`---`) after headings?
- [ ] Are image alt-texts descriptive and/or funny?
- [ ] Are there emojis (🤣, 😅, 🫩, 👹, 🔥)?
- [ ] Is there a thank-you section at the end?
- [ ] Does it sound like you’re telling a story to a friend, not writing documentation?
- [ ] If it’s a series, is there a running theme (Hololive, etc.)?
- [ ] Did you admit if you used ChatGPT/DeepSeek (“vibe programming”)?
- [ ] Are references (and art sources) listed at the bottom?
- [ ] Is the tone casual, self-deprecating, and enthusiastic?

---

*End of guide.*
