---

# **Portfolio UI/UX Specification - Final**

---

## **Global Styles**

### **Color Palette**
```
Primary Blue:     #2563eb
Dark Blue:        #1e40af
Background:       #ffffff
Text Primary:     #1f2937
Text Secondary:   #6b7280
Divider:          #e5e7eb
Code/Mono:        #0f172a
Subtle BG:        #f9fafb (for "other projects" section)
```

### **Typography**
```
Headings:  'JetBrains Mono', monospace
Body:      'Inter', sans-serif

Sizes:
H1 (Name):           48px, 700 weight
H2 (Sections):       32px, 600 weight
H3 (Project titles): 24px, 600 weight
Body:                16px, 400 weight
Small:               14px, 400 weight
```

### **Spacing System**
```
Section padding (vertical):     120px
Between projects:               100px
Card internal padding:          40px
Element spacing (margins):      16px, 24px, 32px
```

### **Max Content Width**
```
1200px - centered on all screen sizes
Padding left/right: 32px (mobile: 24px)
```

---

## **1. Sticky Navigation**

**Structure:**
```
┌────────────────────────────────────────────────────┐
│  Your Name              Projects  GitHub  Contact  │
└────────────────────────────────────────────────────┘
```

**Specs:**
- Height: 64px
- Background: `rgba(255, 255, 255, 0.8)` with `backdrop-filter: blur(10px)`
- Border bottom: `1px solid #e5e7eb`
- Content: Max-width 1200px, centered
- Position: Sticky, top: 0, z-index: 100

**Left side:**
- Your name in JetBrains Mono, 18px, color: #1f2937
- Click → smooth scroll to top

**Right side:**
- Links: Inter, 16px, color: #6b7280
- Spacing between: 32px
- Hover: color changes to #2563eb, transition 0.2s
- Click → smooth scroll to section (or external link for GitHub)

---

## **2. Hero Section**

**Layout:** Centered alignment

```
        [Subtle grid pattern background - very faint]

                    Your Name
                Software Engineer

        Specializing in systems analysis, tooling 
        automation, and solving complex technical problems

        I build tools to make hard problems visible.


              [View Projects ↓]    [GitHub →]
```

**Specs:**
- Vertical padding: 180px top, 120px bottom
- Background: White with subtle grid overlay (opacity: 0.03-0.05)
- All text centered

**Name:**
- JetBrains Mono, 48px, 700 weight, #0f172a
- Letter spacing: -0.02em

**"Software Engineer":**
- JetBrains Mono, 20px, 400 weight, #2563eb
- Margin top: 8px

**Specialization line:**
- Inter, 18px, 400 weight, #6b7280
- Margin top: 24px
- Max-width: 600px, centered

**Tagline:**
- Inter, 16px, 400 weight, #1f2937
- Margin top: 16px

**Buttons:**
- Margin top: 48px
- Two buttons side by side, 16px gap

Button style:
```
Border: 2px solid #2563eb
Padding: 12px 32px
Border-radius: 6px
Background: transparent
Color: #2563eb
Font: Inter, 16px, 500 weight

Hover:
  Background: #2563eb
  Color: white
  Transition: all 0.2s ease
```

---

## **3. Featured Projects Section**

**Section Header:**
```
                  Featured Projects
        ─────────────────────────────────
```

**Specs:**
- Padding top: 120px
- H2 centered, JetBrains Mono, 32px
- Horizontal line: 200px wide, 1px, #e5e7eb, centered below title, 16px margin

---

**Project Card Layout (Alternating):**

### **Odd projects (1, 3): Image LEFT, Text RIGHT**

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│  ┌─────────────────┐   Project Title                │
│  │                 │   [Tech] [Tags] [Here]         │
│  │   Screenshot    │                                │
│  │   600px wide    │   The Problem:                 │
│  │                 │   Text text text...            │
│  │                 │                                │
│  └─────────────────┘   Solution:                    │
│                        Text text text...            │
│                                                      │
│                        Key Features:                │
│                        • Feature 1                  │
│                        • Feature 2                  │
│                        • Feature 3                  │
│                                                      │
│                        [View on GitHub →]           │
│                                                      │
└──────────────────────────────────────────────────────┘
```

### **Even projects (2): Text LEFT, Image RIGHT**

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│   Project Title                ┌─────────────────┐  │
│   [Tech] [Tags] [Here]         │                 │  │
│                                │   Screenshot    │  │
│   The Problem:                 │   600px wide    │  │
│   Text text text...            │                 │  │
│                                │                 │  │
│   Solution:                    └─────────────────┘  │
│   Text text text...                                │
│                                                      │
│   Key Features:                                     │
│   • Feature 1                                       │
│   • Feature 2                                       │
│   • Feature 3                                       │
│                                                      │
│   [View on GitHub →]                                │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Specs:**

**Container:**
- Flat, no border, no shadow, no background
- Flexbox: row, align-items: center
- Gap: 60px
- Margin bottom: 100px

**Screenshot:**
- Width: 600px (fixed)
- Border: 1px solid #e5e7eb
- Border-radius: 8px
- Object-fit: cover
- Aspect ratio: 16:10 or 4:3 (your choice, keep consistent)

**Text content side:**
- Flex: 1 (takes remaining space)

**Project Title:**
- JetBrains Mono, 24px, 600 weight, #1f2937
- Margin bottom: 12px

**Tech tags:**
- Display: inline-flex, gap: 8px
- Each tag:
  ```
  Border: 1px solid #2563eb
  Color: #2563eb
  Padding: 4px 12px
  Border-radius: 4px
  Font: Inter, 13px, 500 weight
  ```
- Margin bottom: 24px

**Problem/Solution/Features sections:**
- Label (The Problem:, etc.): Inter, 14px, 600 weight, #2563eb, uppercase, letter-spacing: 0.05em
- Content: Inter, 16px, 400 weight, #1f2937, line-height: 1.6
- Margin between sections: 20px

**Features list:**
- Bullet points: Custom (use "•" or "—")
- Each item: 16px, line-height: 1.6
- Left padding: 20px

**GitHub link:**
- Margin top: 24px
- Inter, 16px, 500 weight, #2563eb
- Underline on hover
- Arrow symbol: → (unicode)

---

## **4. Other Projects Section**

**Section Header:**
```
                  Other Projects
        ─────────────────────────────────
```

**Specs:**
- Padding top: 120px
- Background: #f9fafb (subtle to differentiate from featured)
- Padding bottom: 120px

---

**Grid Layout:**

```
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│ Project 1   │  │ Project 2   │  │ Project 3   │
│             │  │             │  │             │
│ Description │  │ Description │  │ Description │
│             │  │             │  │             │
│ [Tags]      │  │ [Tags]      │  │ [Tags]      │
│             │  │             │  │             │
│ [GitHub →]  │  │ [GitHub →]  │  │ [GitHub →]  │
└─────────────┘  └─────────────┘  └─────────────┘
```

**Grid specs:**
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column
- Gap: 32px

**Card specs:**
- Background: white
- Flat (no border, no shadow)
- Padding: 32px
- Border-radius: 8px

**Project title:**
- JetBrains Mono, 18px, 600 weight, #1f2937
- Margin bottom: 16px

**Description:**
- Inter, 15px, 400 weight, #6b7280
- Line-height: 1.6
- Max 3 lines, then ellipsis if needed
- Margin bottom: 20px

**Tech tags:**
- Same style as featured projects, but smaller
- Font: 12px
- Margin bottom: 20px

**GitHub link:**
- Same style as featured projects
- Font: 14px

---

## **5. Skills Section** (Optional)

**Section Header:**
```
                  Technical Skills
        ─────────────────────────────────
```

**Layout:** Simple pill grid, centered

```
[Python] [C/C++] [React] [PyQt] [MATLAB]
[Real-time Systems] [Concurrent Programming]
[System Architecture] [Performance Optimization]
[Data Analysis] [Automation] [LLM Integration]
```

**Pill specs:**
```
Border: 1px solid #e5e7eb
Background: white
Color: #1f2937
Padding: 10px 20px
Border-radius: 20px
Font: Inter, 14px, 500 weight
Margin: 8px (space between pills)
```

Display: flex, flex-wrap, justify-content: center, max-width: 800px

---

## **6. Footer/Contact**

**Layout:** Centered

```
        [GitHub icon]    [LinkedIn icon]    [Email icon]
           Link 1             Link 2            Link 3


              Built with React • Updated Oct 2025
```

**Specs:**
- Padding: 80px top, 60px bottom
- Background: white
- Border top: 1px solid #e5e7eb

**Icons/Links:**
- Size: 24px icons (or text links if no icons)
- Color: #6b7280
- Hover: #2563eb
- Spacing: 32px between
- Display: flex, justify-content: center

**Bottom text:**
- Inter, 14px, 400 weight, #9ca3af
- Margin top: 24px
- Centered

---

## **Interactions & Transitions**

**All links:**
```
transition: color 0.2s ease
```

**Buttons:**
```
transition: all 0.2s ease
```

**No animations on:**
- Page load
- Scroll (no fade-ins, slide-ins, etc.)
- Section appearances

**Smooth scroll:**
```
html {
  scroll-behavior: smooth;
}
```

---

## **Responsive Breakpoints**

**Mobile (< 768px):**
- Hero: font sizes scale down 20%
- Featured projects: Stack vertically (image on top, text below)
- Screenshot: width 100%
- Other projects: 1 column
- Spacing: reduce by 30%
- Nav: hamburger menu OR horizontal scroll for links

**Tablet (768px - 1024px):**
- Featured projects: smaller gap (40px)
- Screenshot: 500px
- Other projects: 2 columns

**Desktop (> 1024px):**
- As specified above

---

## **Performance Requirements**

- First Contentful Paint: < 1s
- No loading spinners
- No skeleton screens
- Images: lazy load below fold, but no visual indicator
- Total page weight: < 6MB

---

