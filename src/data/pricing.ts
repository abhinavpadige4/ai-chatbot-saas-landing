export const pricingPlans = [
  {
    id: 1,
    name: "Starter",
    price: "$29",
    period: "/mo",
    features: [
      "Up to 500 chats/mo",
      "Basic analytics",
      "Email support",
      "Standard branding"
    ],
    recommended: false,
    bgColor: "bg-purple-900/20",
    borderColor: "border-purple-500/30"
  },
  {
    id: 2,
    name: "Pro",
    price: "$79",
    period: "/mo",
    features: [
      "Up to 2,000 chats/mo",
      "Advanced analytics",
      "Priority support",
      "Custom branding",
      "API access"
    ],
    recommended: true,
    bgColor: "bg-blue-900/20",
    borderColor: "border-blue-500/30"
  },
  {
    id: 3,
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: [
      "Unlimited chats",
      "Dedicated account manager",
      "SLA guaranteed",
      "On-premise option",
      "Custom integrations"
    ],
    recommended: false,
    bgColor: "bg-gradient-to-r from-purple-900/20 to-blue-900/20",
    borderColor: "border-purple-500/30 border-blue-500/30"
  }
];