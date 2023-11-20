export default interface MeisterDetail {
  meister: {
    scoreHtmlContent: string;
    pointHtmlContent: string;
    score: number;
    positivePoint: number;
    negativePoint: number;
    lastUpdate: string;
    loginError: boolean;
    basicJobSkills: number;
    professionalTech: number;
    workEthic: number;
    humanities: number;
    foreignScore: number;
  };
  avg: {
    score: number;
    basicJobSkills: number;
    professionalTech: number;
    workEthic: number;
    humanities: number;
    foreignScore: number;
    positivePoint: number;
    negativePoint: number;
  };
  max: {
    score: number;
    basicJobSkills: number;
    professionalTech: number;
    workEthic: number;
    humanities: number;
    foreignScore: number;
    positivePoint: number;
    negativePoint: number;
  };
}
