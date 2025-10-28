export interface SocialLink {
    id: string;
    name: string;
    url: string;
    icon: string;
  }
  
  export const socialLinks: SocialLink[] = [
    {
      id: "github",
      name: "GitHub",
      url: "https://github.com/MohammedMbarki",
      icon: "github"
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mohamed-m-barki/",
      icon: "linkedin"
    },
    {
      id: "email",
      name: "Email",
      url: "mailto:mbarkimohamed000@gmail.com",
      icon: "mail"
    },
    {
      id: "phone",
      name: "Phone",
      url: "tel:+212717059394",
      icon: "phone"
    }
  ];