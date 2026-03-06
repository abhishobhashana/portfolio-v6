export type MailItem = {
  id: number;
  tab: "primary" | "all" | "vip" | "flagged";
  title: string;
  content: string;
};

export const mailData: MailItem[] = [
  { id: 1, tab: "primary", title: "Welcome!", content: "Hello there!" },
  { id: 2, tab: "primary", title: "Meeting", content: "Team sync at 3 PM" },
  { id: 3, tab: "all", title: "Newsletter", content: "Latest updates..." },
  { id: 4, tab: "vip", title: "VIP Offer", content: "Special deal!" },
  { id: 5, tab: "flagged", title: "Important", content: "Check this message" },
];