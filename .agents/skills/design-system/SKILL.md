---
name: design-system
description: A protocol for creating and managing Obsidian-style content.
colors:
  surface: '#121318'
  surface-dim: '#121318'
  surface-bright: '#38393f'
  surface-container-lowest: '#0d0e13'
  surface-container-low: '#1a1b21'
  surface-container: '#1e1f25'
  surface-container-high: '#292a2f'
  surface-container-highest: '#34343a'
  on-surface: '#e3e1e9'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e3e1e9'
  inverse-on-surface: '#2f3036'
  outline: '#849495'
  outline-variant: '#3a494b'
  surface-tint: '#00dce6'
  primary: '#e0fdff'
  on-primary: '#00373a'
  primary-container: '#00f2fe'
  on-primary-container: '#006a70'
  inverse-primary: '#00696f'
  secondary: '#c0c1ff'
  on-secondary: '#1000a9'
  secondary-container: '#3131c0'
  on-secondary-container: '#b0b2ff'
  tertiary: '#f1f8ff'
  on-tertiary: '#00354a'
  tertiary-container: '#b2e1ff'
  on-tertiary-container: '#00678c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6ff6ff'
  primary-fixed-dim: '#00dce6'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f53'
  secondary-fixed: '#e1e0ff'
  secondary-fixed-dim: '#c0c1ff'
  on-secondary-fixed: '#07006c'
  on-secondary-fixed-variant: '#2f2ebe'
  tertiary-fixed: '#c4e7ff'
  tertiary-fixed-dim: '#7bd0ff'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c69'
  background: '#121318'
  on-background: '#e3e1e9'
  surface-variant: '#34343a'
typography:
  display-hero:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.04em
  display-hero-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 42px
    letterSpacing: -0.03em
  headline-xl:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.03em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  code-inline:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  code-block:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  label-mono-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.06em
  label-mono-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  margin: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies a **Cyber-Minimalist** aesthetic tailored for high-performance software engineering, systems architecture, and technical craft. It merges the austere, deliberate discipline of Unix tools with the sleek, luminous ambiance of a high-end IDE and tactical telemetry dashboard.

### Brand Personality & Philosophy
- **Precision & Intent:** Every pixel, delimiter, and line of code is purposeful. Zero extraneous visual noise; layout and visual cues reflect structured logical architecture.
- **Atmospheric Depth:** Deep obsidian voids juxtaposed with delicate neon photonics evoke late-night deep work sessions, low-latency computing, and modern developer infrastructure.
- **Target Audience:** Engineering leaders, technical recruiters, developers, and open-source contributors who prioritize technical rigor, modular design, and razor-sharp execution over generic marketing fluff.

### Visual Signature
- Low-albedo backdrops (#090A0F to #161B22) serving as the substrate.
- Micro-delimiters and structural hairpins with subtle neon cyan and violet luminescence.
- Dual-type synergy combining high-legibility geometric sans with ultra-crisp monospaced code structures.
- Restrained glassmorphic surfaces with high background blur and sub-pixel edge definition.

## Colors

The palette establishes an ultra-dark visual baseline accented by concentrated bursts of spectral energy. 

### Palette Architecture
- **Base Surfaces:**
  - `Canvas / Void`: `#090A0F` (True dark space background)
  - `Surface Base`: `#0D1117` (Terminal viewports, structural sections)
  - `Surface Layer 1`: `#161B22` (Card backplates, interactive containers)
  - `Surface Layer 2`: `#21262D` (Hover fills, nested blocks, elevated tabs)
- **Primary Energy (Photon Cyan):**
  - `#00F2FE` (Primary active states, interactive focal points, live cursor pulses)
  - `#38BDF8` (Muted cyan for inline links, telemetry badges, hover glows)
- **Secondary Energy (Hyper Violet):**
  - `#6366F1` (Secondary anchors, git branching lines, logic gates, structural tags)
  - `#818CF8` (Soft violet highlight, selection fills, secondary gradients)
- **Text & Contrast Hierarchy:**
  - `Text Primary`: `#F0F6FC` (High-contrast code & headings)
  - `Text Secondary`: `#8B949E` (Technical metadata, subtext, comments)
  - `Text Muted`: `#484F58` (Line numbers, inactive borders, syntax tokens)
- **Semantic Accents:**
  - `Success`: `#238636` / `#3FB950` (Passing builds, active status nodes)
  - `Warning`: `#D29922` (Deprecations, alerts)
  - `Danger`: `#F85149` (Breaking changes, errors)

### Gradient & Glow Physics
Gradients are used sparingly as micro-accents along 1px borders or subtle conic blurs behind featured hero cards (`linear-gradient(135deg, rgba(0, 242, 254, 0.15) 0%, rgba(99, 102, 241, 0.15) 100%)`). Never flood large surfaces with solid bright colors.

## Typography

The typographic hierarchy implements a functional dual-engine: **Inter** handles narrative clarity, structured technical resumes, and macro headlines, while **JetBrains Mono** provides developer credibility for system logs, command line prompts, metadata parameters, and tech tags.

### Typographic Rules
- **Headlines:** Use tight negative letter tracking (`-0.02em` to `-0.04em`) to establish high structural tension and a crisp, modern screen presence.
- **Monospace Usage:** JetBrains Mono is strictly applied to system labels, terminal environments, numeric telemetry, version indicators (e.g., `v2.4.1`), and metadata badges. Never set continuous long-form paragraphs in monospace.
- **Case Conventions:** Monospace metadata badges and interactive prompts should favor lowercase or uppercase with tracked spacing (`label-mono-sm`), emulating CLI syntax.

## Layout & Spacing

The layout is anchored around a 12-column dynamic responsive grid with a strict 4px/8px rhythmic baseline.

### Breakpoints & Responsive Behavior
- **Desktop (1280px+):** Max container width `1200px` centered. 12-column grid, `1.5rem` (`24px`) gutters, `2rem` (`32px`) margins. Sidebar navigation and telemetry panes dock horizontally.
- **Tablet (768px - 1279px):** 8-column grid, `1.25rem` (`20px`) gutters, `1.5rem` (`24px`) margins. Multi-column project showcases collapse into 2-column modules.
- **Mobile (< 768px):** 4-column fluid layout, `1rem` (`16px`) gutters, `1rem` (`16px`) margins. All split views stack vertically with full-width terminal and card viewports.

### Architectural Rhythm
- Component interior padding follows `space-xs` through `space-lg`.
- Spacing between disparate architectural blocks (e.g., Hero to Project Ledger) relies on consistent vertical stepping (`space-xl` scaled up to `5rem` through composable multiplier stacks).

## Elevation & Depth

Visual depth is achieved through **low-contrast light containment, surface tiering, and luminous edges**, deliberately eschewing heavy muddy drop-shadows.

### Layer Stacking & Materials
1. **Layer 0 (Canvas Void):** `#090A0F` — Absolute base backdrop.
2. **Layer 1 (Card & Module Shells):** Glassmorphic fill `rgba(13, 17, 23, 0.75)` with `backdrop-filter: blur(16px)`. Border is a crisp 1px stroke `rgba(240, 246, 252, 0.08)`.
3. **Layer 2 (Interactive Elements & Drawers):** `rgba(22, 27, 34, 0.85)` with `backdrop-filter: blur(20px)`.

### Luminous Borders & Glow Physics
- **Ambient Focus Glow:** Applied on hovered project cards or active terminal viewports: `box-shadow: 0 0 25px -5px rgba(0, 242, 254, 0.12), 0 0 10px -2px rgba(99, 102, 241, 0.10)`.
- **Active Edge Highlight:** Highlighted surfaces replace the neutral border with an energetic gradient edge: `border: 1px solid transparent; background-clip: padding-box, border-box; background-image: linear-gradient(#0D1117, #0D1117), linear-gradient(135deg, rgba(0, 242, 254, 0.6), rgba(99, 102, 241, 0.3))`.
- **Inner Rim Light:** Subtle top edge highlighting on elevated modules via `inset 0 1px 0 0 rgba(255, 255, 255, 0.06)`.

## Shapes

The design system uses **Soft (Level 1)** corner geometry (`0.25rem` / `4px` baseline) to maintain an authentic, industrial software aesthetic.

### Corner Radii Guidelines
- **Micro UI & Badges:** `4px` (`rounded-sm`). Gives tech stack tags and inline code tokens a sharp, deliberate finish.
- **Buttons, Form Controls & Input Fields:** `6px` (`rounded-md`). Functional and sturdy without straying into consumer-app softness.
- **Glassmorphic Cards & Terminal Shells:** `8px` (`rounded-lg`). Ensures cards appear structured, clean, and mechanically precise.
- **Avatars & Status Indicators:** Full circles (`rounded-full`) exclusively for system status pings (e.g., pulsing online dot) and profile thumbnails.

## Components

### Buttons
- **Primary Cyber Button:** High-contrast cyan fill (`#00F2FE`) with dark slate typography (`#090A0F`), font weight `600`, radius `6px`. On hover: subtle neon flare `box-shadow: 0 0 16px rgba(0, 242, 254, 0.4)`.
- **Secondary Ghost Button:** Translucent base (`rgba(22, 27, 34, 0.6)`), 1px border (`rgba(240, 246, 252, 0.1)`), typography (`#F0F6FC`). On hover: border switches to `#00F2FE` with a faint cyan text glow.
- **Command Palette Action:** Monospaced icon prefix, dark base, trailing keyboard shortcut pill (e.g., `⌘K`).

### Tech Badges & Chips
- **Implementation:** Compact tags set in `JetBrains Mono` (`label-mono-sm`).
- **Surface:** `rgba(22, 27, 34, 0.8)` with a 1px border in `rgba(56, 189, 248, 0.2)`.
- **Accents:** Leading micro-dot colored by language/tool ecosystem (e.g., TypeScript cyan `#38BDF8`, Rust red-orange `#F97316`, Python yellow-green).

### Interactive Terminal Component
- **Header:** Darker title bar (`#161B22`) containing mock window controls (three muted 10px dots: `#30363D`), current directory (`~/portfolio/architecture`), and branch indicator (`git:(main)`).
- **Body:** Monospace font (`code-block`), line numbering in `#484F58`, syntax-highlighted command input, and interactive typing prompt with a blinking cyan cursor (`#00F2FE`, 1s infinite blink cycle).

### Cards (Project Ledger & Architecture Breakdown)
- **Structure:** Translucent backdrop blur container with 1px border (`rgba(240, 246, 252, 0.08)`).
- **Hover Transition:** Border lightens to `rgba(0, 242, 254, 0.4)`, Card translates upward by `2px`, accompanied by ambient violet-cyan backlight glow.
- **Header:** System metric badges, project status dot, title, and quick link icon triggers.

### Form Inputs & Terminal Command Fields
- **Base:** Dark obsidian background (`#0D1117`), 1px structural border (`#30363D`), text in `#F0F6FC`.
- **Focus State:** 1px border colored `#00F2FE`, with an exterior focus ring: `0 0 0 2px rgba(0, 242, 254, 0.15)`. No default browser outlines.
- **Prefix:** Embedded terminal prompt symbol (`❯ ` or `$ `) in `#00F2FE`.

### Lists & Activity Logs
- Clean tabular rows divided by subtle 1px dividers (`rgba(240, 246, 252, 0.05)`).
- Timestamp and commit hash set in `JetBrains Mono` text-secondary, title in Inter `body-md` text-primary.