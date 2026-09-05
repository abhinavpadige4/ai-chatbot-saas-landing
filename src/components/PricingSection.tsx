```tsx
import PricingCard from "./PricingCard";

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/mo",
    description: "Perfect for small teams getting started with AI support.",
    features: [
      "Up to 500 chats/month",
      "Basic analytics dashboard",
      "Email support",
      "5 language support",
      "Standard AI model",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$79",
    period: "/mo",
    description: "For growing teams that need advanced capabilities.",
    features: [
      "Up to 2,000 chats/month",
      "Advanced analytics & reports",
      "Priority support (4hr SLA)",
      "Custom branding",
      "50+ language support",
      "Advanced AI model",
      "Webhook integrations",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organizations.",
    features: [
      "Unlimited chats",
      "Dedicated account manager",
      "Custom SLA",
      "On-premise deployment option",
      "SSO & SAML authentication",
      "Custom AI model training",
      "Advanced security & compliance",
      "24/7 phone support",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-purple-400 border border-purple-500/20 bg-purple-500/10 mb-4">
            Pricing
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Simple, transparent{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">pricing</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Start free. Scale as you grow. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <PricingCard
              key={i}
              name={plan.name}
              price={plan.price}
              period={plan.period}
              description={plan.description}
              features={plan.features}
              cta={plan.cta}
              highlighted={plan.highlighted}
              delay={i * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
