import useGw2Client from "~/features/core/composables/useGw2Client";

export const useSkillsStore = defineStore("skills", () => {
  const { Gw2Client } = useGw2Client();

  const skills = ref<any[]>([]);

  const getSkills = async () => {
    const res = await fetch("https://api.guildwars2.com/v2/skills");
    const data = await res.json();

    skills.value = data;
  };

  return {
    skills,
    getSkills,
  };
});
