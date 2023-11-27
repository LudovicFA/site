export interface ExperienceType {
  entreprise: string;
  logo?: {
    src: string;
    color: string;
  };
  client?: string;
  statut: string;
  date: {
    start: string;
    end: string;
  };
  description: string;
  realisations: string[];
  environnements: string[];
}
