## Task: Fix Bengali Text Quality in All Articles (One by One)

Focus ONLY on language quality. Do NOT change structure, add FAQ, or expand content unless necessary for grammar.

Process one `.md` file at a time from:
- `src/content/sorkari-seba/`
- `src/content/exam-o-vorti/`
- `src/content/local-guide/`

---

### What to Check & Fix

#### 1. Foreign/Weird Characters
Remove ANY character that is NOT Bengali, English, number, or standard punctuation:
- Korean: `라인`, `ㅇ`, `ㄱ` etc.
- Chinese/Japanese: `の`, `は`, `中` etc.
- Stray symbols: `*`, `~`, `^`, `•` (unless intentional bullet)
- Broken Unicode: `à¦`, `à§` etc.

**Example fix:**
Before: জন্ম নিবন্ধন করতে হলে প্রথমে ওয়েবসাইটে যেতে হবে 라িন
After:  জন্ম নিবন্ধন করতে হলে প্রথমে ওয়েবসাইটে যেতে হবে
plain

#### 2. Spelling Mistakes (বানান)
Fix common Bengali spelling errors:
- `সরকারি` (not `সরকারী`)
- `নিবন্ধন` (not `নিবন্ধন` with wrong conjunct)
- `পরিচয়পত্র` (not `পরিচয় পত্র` separate)
- `অনুসন্ধান` (not `অনুসন্ধান` wrong)
- `সংরক্ষণ` (not `সংরক্ষন`)
- `সম্পূর্ণ` (not `সম্পুর্ণ`)
- `প্রয়োজনীয়` (not `প্রয়োজনীয়` with extra য)
- `সহজে` (not `সহজে` wrong form)
- `যাচাই` (not `যাচাই` with wrong vowel)

#### 3. AI-Sounding Phrases → Natural Bengali
Replace robotic phrases:

| ❌ AI Sounding | ✅ Natural Bengali |
|---------------|-------------------|
| আজকের এই ডিজিটাল যুগে... | বর্তমানে... / এখন... |
| এটি উল্লেখযোগ্য যে... | মনে রাখবেন... |
| সারসংক্ষেপে বলা যায়... | সংক্ষেপে... / এক কথায়... |
| উপরোক্ত আলোচনা থেকে প্রতীয়মান হয়... | উপরের আলোচনা থেকে বোঝা যায়... |
| প্রথমত, দ্বিতীয়ত, তৃতীয়ত... | প্রথমে... তারপর... এছাড়াও... |
| বিভিন্ন ধরনের... | বিভিন্ন... (remove "ধরনের" if redundant) |
| বিশেষভাবে উল্লেখযোগ্য... | বিশেষ করে... |
| অন্যদিকে... | আবার... / অপরদিকে... |
| যেমন ধরা যেতে পারে... | ধরুন... / যেমন... |

#### 4. Grammar & Flow
- Fix awkward sentence structures
- Remove unnecessary repetition of words
- Ensure subject-verb agreement
- Fix incorrect postpositions (এ, এর, এতে, থেকে)

#### 5. Punctuation
- Use `।` (Bengali danda) at end of sentences
- Use `,` (comma) for pauses
- Do NOT use `.` (English period) at end of Bengali sentences
- Use `「」` or `""` for quotes consistently

---

### Process Per File

For each file:
1. Read the full content
2. Scan for the 5 issues above
3. Show ONLY the changed sentences (before → after)
4. Paste the complete corrected file
5. Wait for "OK" before next file

---

### Example Output Format
File: src/content/sorkari-seba/nid-card-apply.md
Changes Made:
Foreign char removed:
Before: ওয়েবসাইটে যেতে হবে 라িন
After: ওয়েবসাইটে যেতে হবে
Spelling fix:
Before: সরকারী সেবা
After: সরকারি সেবা
AI phrase fix:
Before: আজকের এই ডিজিটাল যুগে এনআইডি করার প্রক্রিয়া সহজ হয়েছে
After: বর্তমানে এনআইডি করার প্রক্রিয়া অনেক সহজ
Grammar fix:
Before: আপনাকে প্রথমে রেজিস্ট্রেশন করতে হবে তারপর আবেদন
After: প্রথমে রেজিস্ট্রেশন করতে হবে, তারপর আবেদন করতে হবে
Corrected Full File:
[paste complete file]
plain

---

### Rules

- Change ONLY text/sentences that are wrong
- Do NOT add new sections
- Do NOT remove existing sections
- Do NOT change frontmatter structure (only fix spelling inside strings)
- Do NOT expand word count
- Keep filenames unchanged
- One file per response

Start with the first file in `src/content/sorkari-seba/` now.