import { Skill } from "../../types/Skill";

export default function groupSkillsByType(
  skills: Skill[]
): Record<string, Skill[]> {
  return skills.reduce(
    (groupedSkills: Record<string, Skill[]>, skill: Skill) => {
      const { type } = skill;
      if (!groupedSkills[type]) {
        groupedSkills[type] = [];
      }
      groupedSkills[type].push(skill);
      return groupedSkills;
    },
    {}
  );
}
