#!/usr/bin/env bash

# Local skill registry
declare -A SKILLS=(
  [taste-skill]="gemini_skills/taste-skill/SKILL.md"
  [taste-skill-v1]="gemini_skills/taste-skill-v1/SKILL.md"
  [gpt-taste]="gemini_skills/gpt-tasteskill/SKILL.md"
  [image-to-code-skill]="gemini_skills/image-to-code-skill/SKILL.md"
  [imagegen-frontend-web]="gemini_skills/imagegen-frontend-web/SKILL.md"
  [imagegen-frontend-mobile]="gemini_skills/imagegen-frontend-mobile/SKILL.md"
  [brandkit]="gemini_skills/brandkit/SKILL.md"
  [redesign-skill]="gemini_skills/redesign-skill/SKILL.md"
  [soft-skill]="gemini_skills/soft-skill/SKILL.md"
  [output-skill]="gemini_skills/output-skill/SKILL.md"
  [minimalist-skill]="gemini_skills/minimalist-skill/SKILL.md"
  [brutalist-skill]="gemini_skills/brutalist-skill/SKILL.md"
  [stitch-skill]="gemini_skills/stitch-skill/SKILL.md"
  # Claude aliases
  [claude-taste-skill]="claude_skills/taste-skill/SKILL.md"
  [claude-taste-skill-v1]="claude_skills/taste-skill-v1/SKILL.md"
  [claude-gpt-taste]="claude_skills/gpt-tasteskill/SKILL.md"
  [claude-image-to-code-skill]="claude_skills/image-to-code-skill/SKILL.md"
  [claude-imagegen-frontend-web]="claude_skills/imagegen-frontend-web/SKILL.md"
  [claude-imagegen-frontend-mobile]="claude_skills/imagegen-frontend-mobile/SKILL.md"
  [claude-brandkit]="claude_skills/brandkit/SKILL.md"
  [claude-redesign-skill]="claude_skills/redesign-skill/SKILL.md"
  [claude-soft-skill]="claude_skills/soft-skill/SKILL.md"
  [claude-output-skill]="claude_skills/output-skill/SKILL.md"
  [claude-minimalist-skill]="claude_skills/minimalist-skill/SKILL.md"
  [claude-brutalist-skill]="claude_skills/brutalist-skill/SKILL.md"
  [claude-stitch-skill]="claude_skills/stitch-skill/SKILL.md"
)

if [[ $# -eq 0 ]]; then
  echo "Usage: source ./skill.sh <skill-name>"
  echo "Available skills: ${!SKILLS[@]}"
else
  echo "${SKILLS[$1]}"
fi
