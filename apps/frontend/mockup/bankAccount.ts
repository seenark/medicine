export type TBankName = "Kasikorn" | "SCB" | "Promptpay";
export type TBankAccount = {
  accName: string;
  branchName: string;
  accNumber: string;
  bankName: TBankName;
  bankLogoUrl: string;
};

export const bankAccounts: TBankAccount[] = [
  {
    accNumber: "123-1-1234-1",
    branchName: "Pichit",
    accName: "John",
    bankName: "Kasikorn",
    bankLogoUrl: "/assets/payments/KBank.png",
  },
  {
    accNumber: "456-7-8901-2",
    bankName: "SCB",
    accName: "Vick",
    branchName: "Chantaburi",
    bankLogoUrl: "/assets/payments/SCBBank.png",
  },
  {
    accNumber: "0954328891",
    bankName: "Promptpay",
    accName: "Wick",
    branchName: "Sukhumvit53",
    bankLogoUrl: "/assets/payments/PromptPay2.png",
  },
];
